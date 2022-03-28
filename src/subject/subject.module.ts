import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';
import { Submit } from './submit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtStorage } from 'src/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from 'src/auth/jwt.contants';
import { User } from 'src/login/login.entity';
@Module({
  controllers: [SubjectController],
  providers: [SubjectService],
  imports: [
    TypeOrmModule.forFeature([Subject, User, Submit]),
    PassportModule,
    JwtStorage,
    JwtModule.register({
      secret: jwtContants.secret,
    }),
  ],
})
export class SubjectModule {}
