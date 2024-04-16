import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'testuser',
      password: 'testuser123',
      database: 'nestjs_db',
      synchronize: true,
      entities: [User],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
