import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CoursesModule } from './modules/courses/courses.module';
import { CurriculaModule } from './modules/curricula/curricula.module';
import { AssignmentsModule } from './modules/assignments/assignments.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { User } from './database/entities/user.entity';
import { Course } from './database/entities/course.entity';
import { Curriculum } from './database/entities/curriculum.entity';
import { Enrollment } from './database/entities/enrollment.entity';
import { Assignment } from './database/entities/assignment.entity';
import { Submission } from './database/entities/submission.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST') || 'localhost',
        port: parseInt(configService.get<string>('DATABASE_PORT') || '5432'),
        username: configService.get<string>('DATABASE_USER') || 'lms_user',
        password: configService.get<string>('DATABASE_PASSWORD') || 'lms_password',
        database: configService.get<string>('DATABASE_NAME') || 'lms_db',
        entities: [User, Course, Curriculum, Enrollment, Assignment, Submission],
        synchronize: configService.get<string>('NODE_ENV') === 'development',
        logging: configService.get<string>('NODE_ENV') === 'development',
      }),
    }),
    AuthModule,
    UsersModule,
    CoursesModule,
    CurriculaModule,
    AssignmentsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
