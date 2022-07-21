import { IsIn, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class StoreUserProfileDto {
    @IsOptional()
    @MaxLength(255)
    @IsUrl()
    photoUrl?: string;

    @IsOptional()
    @MaxLength(255)
    bio?: string;

    @IsOptional()
    @IsIn(['0', '1'])
    privacy?: string;
}
