import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MultiplyMiddleware } from './middleware/multiply/multiply.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/nest'),
    UsersModule,
    CoursesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MultiplyMiddleware)
      .forRoutes({ path: 'courses', method: RequestMethod.POST });
  }
}
