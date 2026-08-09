import { UserEntity } from "../dtos/interface/user.entity";
import { UserType } from "../enums/user-type.enum";

export const userEntityMock: UserEntity = {
    userId: 1,
    name: "John Doe",
    phone: "1234567890",
    email: "john.doe@example.com",
    password: "hashedpassword",
    typeUser: UserType.User,
    enderecos: [],
    created_at: new Date(),
    updated_at: new Date(),
}