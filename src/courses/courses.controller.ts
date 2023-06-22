import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-courses.dto';
import { CoursesService } from './courses.service';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { InvalidCourseException } from './exceptions/invalid-course.exception';

@UseGuards(AuthGuard)
@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    // Questão 5
    if (createCourseDto.nome === 'PHP') throw new InvalidCourseException();
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll() {
    try {
      return this.courseService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum curso encontrado.',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.courseService.findOne(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Curso não encontrado`,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    if (
      updateCourseDto.nome.includes('PHP') ||
      updateCourseDto.nome.includes('php')
    )
      throw new InvalidCourseException();
    return this.courseService.update(id, updateCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      return this.courseService.delete(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Não foi possível excluir o curso.',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
