import { Injectable } from '@nestjs/common';
import { Login } from './login.entity';

export interface PostsRo {
  list: Login[];
  count: number;
}

@Injectable()
export class LoginService {}
