import { CommentEntity } from './comment/entities/comment.entity';
import { PostEntity } from './post/entities/post.entity';
import { UserEntity } from './user/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-207-15-147.compute-1.amazonaws.com',
      port: 5432,
      username: 'hgqmttcurhqexj',
      password:
        '0a5bba9795553a7781e6c1b3e4498e8c87eb6aaecae9213f4a281c38b82f318f',
      database: 'dfa3skhnktbvgt',
      entities: [UserEntity, PostEntity, CommentEntity],
      synchronize: false,
      connectionString: process.env.DATABASE_URL,
    }),
    UserModule,
    PostModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
