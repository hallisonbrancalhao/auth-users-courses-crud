import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(nome: string, senha: string): Promise<any> {
    const user = await this.userService.findUser(nome);
    const validPassword: boolean = await bcrypt.compare(senha, user.senha);

    if (!validPassword) throw new UnauthorizedException();

    const payload = { sub: user._id, nome: user.nome };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
