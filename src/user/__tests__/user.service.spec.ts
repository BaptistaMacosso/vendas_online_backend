import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserEntity } from '../dtos/interface/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userEntityMock } from '../__mocks__/user.mock';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { createUserDtoMock } from '../__mocks__/create-user.mock';
import * as bcrypt from 'bcrypt';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, {
        provide: getRepositoryToken(UserEntity),
        useValue: {
          save: jest.fn().mockResolvedValue(userEntityMock),
          findOne: jest.fn().mockResolvedValue(userEntityMock),
        }
      }],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(getRepositoryToken(UserEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should return user in findUserByEmail', async () => {
    const user = await service.findUserByEmail(userEntityMock.email);
    expect(user).toEqual(userEntityMock);
  });

  it('should throw NotFoundException when User does not exist', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

     await expect(
        service.findUserByEmail(userEntityMock.email),
      ).rejects.toThrow(NotFoundException);
  });

  it('should throw BadRequestException when email already exists', async() => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(userEntityMock);

    await expect(
      service.createUser(createUserDtoMock),
    ).rejects.toThrow(BadRequestException);

    expect(userRepository.save).not.toHaveBeenCalled();
  });

  it('should throw BadRequestException when phone number already exists', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(userEntityMock);

    await expect(
      service.createUser(createUserDtoMock),
    ).rejects.toThrow(BadRequestException);

    expect(userRepository.save).not.toHaveBeenCalled();
  });

  it('should hash the password before creating the user', async () => {

  jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(null).mockResolvedValueOnce(null);

  jest.spyOn(userRepository, 'save').mockImplementation(async (user) => user as UserEntity);

  const result = await service.createUser(createUserDtoMock);

  expect(result.password).not.toBe(createUserDtoMock.password);

  const passwordIsValid = await bcrypt.compare(
    createUserDtoMock.password,
    result.password,
  );

  expect(passwordIsValid).toBe(true); 
  });

   it('should create a new user successfully', async () => {
    
    jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(null) // email
                                         .mockResolvedValueOnce(null); // phone

    jest.spyOn(userRepository, 'save')
      .mockResolvedValue({
        ...createUserDtoMock,
        password: 'hashed-password',
      } as UserEntity);

    const result = await service.createUser(createUserDtoMock);

    expect(result).toBeDefined();

    expect(userRepository.findOne).toHaveBeenCalledTimes(2);

    expect(userRepository.findOne).toHaveBeenNthCalledWith(1, {
      where: {
        email: createUserDtoMock.email,
      },
    });

    expect(userRepository.findOne).toHaveBeenNthCalledWith(2, {
      where: {
        phone: createUserDtoMock.phone,
      },
    });

    expect(userRepository.save).toHaveBeenCalledTimes(1);

    expect(result.password).not.toBe(createUserDtoMock.password);
  });

});
