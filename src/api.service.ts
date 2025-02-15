import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiService {
  constructor(private readonly configService: ConfigService) {}

  async fetchData(): Promise<any> {
    const apiUrl = this.configService.get<string>('API_URL') || '';
    const response = await axios.get(apiUrl); // Direct axios GET request
    return response.data;
  }

  async getTop3Tokens(): Promise<any[]> {
    try {
      const apiUrl = this.configService.get<string>('API_URL') || '';
      const response = await axios.get(apiUrl);
      const data = response.data;
  
      if (!Array.isArray(data)) {
        throw new Error('Invalid API response format');
      }
  
      // Sort by absolute volume change (largest movement first)
      const sortedTokens = data.sort((a, b) => 
        Math.abs(b.volume_change_24h) - Math.abs(a.volume_change_24h)
      );
  
      // Get the top 3 tokens
      return sortedTokens.slice(0, 3).map(token => ({
        mydaughter:"Ayesha and Aleena",
        name: token.token_name,
        price: token.price,
        volumeChange: token.volume_change_24h,
        timestamp: token.timestamp
      }));
    } catch (error) {
      console.error('Error fetching top tokens:', error.message);
      throw new Error('Failed to fetch top 3 tokens');
    }
  }
  
}
