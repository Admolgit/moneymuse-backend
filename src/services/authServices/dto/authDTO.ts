import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsBoolean,
  IsEnum,
} from 'class-validator';

export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  middleName?: string;

  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;

  @IsEnum(['MALE', 'FEMALE', 'OTHER'])
  @IsOptional()
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
}