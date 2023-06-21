import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-courses.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  //Questão 4
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsString()
  @IsNotEmpty()
  duracao: string;
}
