import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCourseDto {
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
