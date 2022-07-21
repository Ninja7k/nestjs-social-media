import { Type } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    ValidateNested,
} from 'class-validator';
import { UpdateUserProfileDto } from './update-user-profile.dto';

export class PatchUserDto {
    @IsOptional()
    @IsNotEmpty({ message: 'Insira o seu nome.' })
    firstName: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Insira o seu sobrenome' })
    lastName: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Insira o seu username' })
    username: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Insira seu o email' })
    @IsEmail({}, { message: 'Insira um email válido' })
    email: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Insira a senha' })
    password: string;

    @IsOptional()
    @Type(() => UpdateUserProfileDto)
    @ValidateNested()
    userProfiles: UpdateUserProfileDto;
}
