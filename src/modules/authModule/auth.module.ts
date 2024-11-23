import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/authControllers/auth.controller';
import { AuthService } from 'src/services/authServices/auth.service';
import { MailerService } from 'src/services/mailerServices/mailer.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, MailerService],
})
export class AuthModule {}