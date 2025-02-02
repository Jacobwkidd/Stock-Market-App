import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class StocksService {
  private readonly apiUrl: string;
  private readonly apiKey: string;
  private readonly apiHost: string;

  constructor(private readonly configService: ConfigService) {
    this.apiUrl = `${this.configService.get<string>('RAPIDAPI_BASE_URL')}/markets/stock/quotes`;
    this.apiKey = this.configService.get<string>('RAPIDAPI_KEY');
    this.apiHost = this.configService.get<string>('RAPIDAPI_HOST');
  }

  async getMostActiveOptions(tickers: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: {
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': this.apiHost,
        },
        params: {
          ticker: tickers, // Example: 'AAPL,MSFT'
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data from external API:', error.response?.data || error.message);
      throw new Error('Failed to fetch data from external API');
    }
  }
}
