import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  //Questão 4
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  sobrenome: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  senha: string;
}
