import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { getModelToken } from '@nestjs/mongoose';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService , {provide: getModelToken('user'),useValue: jest.fn()}],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
  });

  describe('addUser', () => {
    it('should add a new user and return the user object', async () => {
      const user = {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'testpassword',
        firstname: 'John',
        lastname: 'Doe',
        personalnummer: 12345,
        role: 'user',
      };

      jest.spyOn(bcrypt, 'hash').mockImplementation(() => Promise.resolve('hashedPassword'));
      jest.spyOn(usersService, 'insertUser').mockImplementation(() => Promise.resolve(user as any));

      const result = await usersController.addUser(
        user.password,
        user.username,
        user.email,
        user.firstname,
        user.lastname,
        user.personalnummer,
        user.role,
      );

      expect(result).toEqual(user);
      expect(bcrypt.hash).toHaveBeenCalledWith(user.password, 10);
      expect(usersService.insertUser).toHaveBeenCalledWith(
        user.username,
        user.email,
        'hashedPassword',
        user.firstname,
        user.lastname,
        user.personalnummer,
        user.role,
      );
    });
  });
});
