import { Type } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    ValidateNested,
} from 'class-validator';
import { StoreUserProfileDto } from './store-user-profile.dto';

export class StoreUserDto {
    @IsNotEmpty({ message: 'Insira o seu nome.' })
    firstName: string;

    @IsNotEmpty({ message: 'Insira o seu sobrenome' })
    lastName: string;

    @IsNotEmpty({ message: 'Insira o seu username' })
    username: string;

    @IsNotEmpty({ message: 'Insira seu o email' })
    @IsEmail({}, { message: 'Insira um email válido' })
    email: string;

    @IsNotEmpty({ message: 'Insira a senha' })
    password: string;

    @IsOptional()
    @Type(() => StoreUserProfileDto)
    @ValidateNested()
    userProfiles: StoreUserProfileDto;
}
