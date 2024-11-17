import axios from 'axios';
import UserService from './UserService.js';
import NotificationService from './NotificationService.js';

// Мок модулів
jest.mock('axios');

describe('UserService', () => {
    let userService;
    let notificationService;

    beforeEach(() => {
        // Створюємо екземпляр NotificationService для реальних викликів
        notificationService = new NotificationService();
        userService = new UserService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return user data from cache if available', async () => {
        const userId = 1;
        const mockUserData = { id: userId, name: 'John Doe' };

        // Мокаємо кеш
        userService.cache[userId] = mockUserData;

        const result = await userService.getUserData(userId);

        expect(result).toEqual(mockUserData);
        expect(axios.get).not.toHaveBeenCalled(); // axios.get не повинен бути викликаний
    });

    test('should fetch user data from API and cache it if not available', async () => {
        const userId = 1;
        const mockUserData = { id: userId, name: 'John Doe' };

        // Мокаємо axios.get
        axios.get.mockResolvedValue({ data: mockUserData });

        const result = await userService.getUserData(userId);

        expect(result).toEqual(mockUserData);
        expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
        expect(userService.cache[userId]).toEqual(mockUserData); // Данні повинні бути кешовані
    });

    test('should send welcome message when user data is fetched', async () => {
        const userId = 1;
        const mockUserData = { id: userId, name: 'John Doe' };

        // Мокаємо axios.get
        axios.get.mockResolvedValue({ data: mockUserData });

        // Мокаємо console.log для перевірки, що метод буде викликаний
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

        // Викликаємо getUserData
        await userService.getUserData(userId);

        // Перевірка, чи був викликаний метод з правильними параметрами
        expect(logSpy).toHaveBeenCalledWith('Welcome message sent to John Doe (ID: 1)');

        logSpy.mockRestore();
    });

    test('should handle error if user data is not found', async () => {
        const userId = 999; // Неіснуючий користувач
        axios.get.mockRejectedValue(new Error('User not found'));

        // Мокаємо console.error для перевірки помилок
        const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        try {
            await userService.getUserData(userId);
        } catch (e) {
            // Перевіряємо, чи була викликана обробка помилки
            expect(errorSpy).toHaveBeenCalledWith('Error fetching user data:', expect.any(Error));
            expect(e.message).toBe('User not found'); // Перевірка повідомлення помилки
        }

        errorSpy.mockRestore();
    });

    test('should clear cache when clearCache is called', () => {
        userService.cache = { 1: { id: 1, name: 'John Doe' } };

        // Викликаємо clearCache
        userService.clearCache();

        expect(userService.cache).toEqual({});
    });
});

describe('NotificationService', () => {
    let notificationService;

    beforeEach(() => {
        notificationService = new NotificationService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should send a welcome message', async () => {
        const sendMessageSpy = jest.spyOn(notificationService, 'sendWelcomeMessage').mockResolvedValue('Welcome message sent to John Doe (ID: 1)');

        const result = await notificationService.sendWelcomeMessage(1, 'John Doe');

        expect(sendMessageSpy).toHaveBeenCalledWith(1, 'John Doe');
        expect(result).toBe('Welcome message sent to John Doe (ID: 1)');
    });

    test('should handle network error in sendWelcomeMessage', async () => {
        const sendMessageSpy = jest.spyOn(notificationService, 'sendWelcomeMessage').mockRejectedValue(new Error('Network Error'));

        try {
            await notificationService.sendWelcomeMessage(1, 'John Doe');
        } catch (e) {
            expect(sendMessageSpy).toHaveBeenCalledWith(1, 'John Doe');
            expect(e).toEqual(new Error('Network Error'));
        }
    });

    test('should send welcome message and return success message', async () => {
        const sendMessageSpy = jest.spyOn(notificationService, 'sendWelcomeMessage').mockResolvedValue('Welcome message sent to Jane Doe (ID: 2)');

        const result = await notificationService.sendWelcomeMessage(2, 'Jane Doe');

        expect(result).toBe('Welcome message sent to Jane Doe (ID: 2)');
        expect(sendMessageSpy).toHaveBeenCalledWith(2, 'Jane Doe');
    });

    test('should handle missing user in sendWelcomeMessage gracefully', async () => {
        const sendMessageSpy = jest.spyOn(notificationService, 'sendWelcomeMessage').mockRejectedValue(new Error('User not found'));

        try {
            await notificationService.sendWelcomeMessage(999, 'Unknown User');
        } catch (e) {
            expect(sendMessageSpy).toHaveBeenCalledWith(999, 'Unknown User');
            expect(e).toEqual(new Error('User not found'));
        }
    });
});
