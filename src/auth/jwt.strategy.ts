import { PassportStrategy } from '@nestjs/passport';
import { StrategyOptions, Strategy, ExtractJwt } from 'passport-jwt';
import { User } from '../login/login.entity';
import { jwtContants } from './jwt.contants';

export class JwtStorage extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 获取请求header token值
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      secretOrKey: jwtContants.secret,
    } as StrategyOptions);
  }

  async validate(payload: any): Promise<User> {
    //payload：jwt-passport认证jwt通过后解码的结果
    return payload;
  }
}
