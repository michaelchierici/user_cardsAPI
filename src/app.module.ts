import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      port: parseInt(process.env.MONGODB_PORT),
      host: process.env.MONGODB_HOST,
      url: process.env.MONGODB_URL,
      username: process.env.MONGODB_USERNAME,
      password: process.env.MONGODB_PASSWORD,
      database: process.env.MONGODB_DATABASE,
      entities: [User],
      useUnifiedTopology: false,
      useNewUrlParser: true,
      logging: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
