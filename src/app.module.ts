import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ApiService } from './api.service'; // Ensure correct import

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(), // Loads environment variables
  ],
  controllers: [AppController],
  providers: [ApiService], // Ensure ApiService is included
})
export class AppModule {}
