import { IsIn, IsOptional, IsUrl, IsUUID, MaxLength } from 'class-validator';

export class UpdateUserProfileDto {
    @IsUUID()
    id: string;

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
