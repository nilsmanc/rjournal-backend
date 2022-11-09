import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommentEntity } from './comment/entities/comment.entity';
import { PostEntity } from './post/entities/post.entity';
import { UserEntity } from './user/entities/user.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';
import { DATABASE_URL, PASSWORD } from 'variables';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: DATABASE_URL,
      type: 'postgres',
      host: 'containers-us-west-101.railway.app',
      port: 5856,
      username: 'hgqmttcurhqexj',
      password: PASSWORD,
      database: 'railway',
      entities: [UserEntity, PostEntity, CommentEntity],
      synchronize: false,
      ssl: true,
      tls: {
        rejectUnauthorized: false,
      },
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
