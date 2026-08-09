import { CreateUserDto } from "../dtos/createUser.dto";
import { UserType } from "../enums/user-type.enum";

export const createUserDtoMock: CreateUserDto = {
    name: "John Doe",
    phone: "1234567890",
    email: "john.doe@example.com",
    password: "password123",
    typeUser: UserType.User
};