import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service'; // Corrected import

@Controller()
export class AppController {
  constructor(private readonly apiService: ApiService) {}

  @Get('data')
  async getData() {
    return this.apiService.fetchData();
  }

  @Get('topThree')
  async getTopThree() {
    return this.apiService.getTop3Tokens();
  }
}
