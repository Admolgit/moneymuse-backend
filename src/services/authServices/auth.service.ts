import { HttpException, Injectable, Post } from '@nestjs/common';
import { AuthDTO } from './dto/authDTO';
import { PrismaService } from 'src/prisma.service';
import { MailerService } from '../mailerServices/mailer.service';

Injectable();
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly mailerService: MailerService,) {}
  
  async registerUser(body: AuthDTO) {
    try {
      const registereUser = await this.prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          firstName: body?.firstName,
          lastName: body?.lastName,
          middleName: body?.middleName,
          gender: body?.gender,
        },
      });

      // Send email notification
      await this.mailerService.sendEmail(
        body.email,
        'Welcome to MoneyMuse!',
        `Hi ${body.firstName},\n\nThank you for registering at MoneyMuse!`,
        `<p>Hi ${body.firstName},</p><p>Thank you for registering at <strong>MoneyMuse</strong>!</p>`,
      );

      return registereUser;
      
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
