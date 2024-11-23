import { HttpException, Injectable, Post } from '@nestjs/common';
import { AuthDTO } from './dto/authDTO';
import { PrismaService } from 'src/prisma.service';

Injectable();
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  
  async registerUser(body: AuthDTO) {
    try {
      return await this.prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          firstName: body?.firstName,
          lastName: body?.lastName,
          middleName: body?.middleName,
          gender: body?.gender,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
