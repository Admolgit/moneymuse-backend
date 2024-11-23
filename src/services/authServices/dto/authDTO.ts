import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: 'user@example.com', description: 'The email of the user' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ example: 'securePassword123', description: 'The password for the user account' })
  password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  lastName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Smith', description: 'The middle name of the user' })
  middleName: string;

  @IsEnum(['MALE', 'FEMALE', 'OTHER'])
  @IsOptional()
  @ApiProperty({ example: 'male', description: 'The gender of the user' })
  gender: 'MALE' | 'FEMALE' | 'OTHER';
}