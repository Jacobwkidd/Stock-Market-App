import { Controller, Get, Query } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('most-active-options')
  async getMostActiveOptions(@Query('tickers') tickers: string): Promise<any> {
    // Pass the tickers argument to the service
    return await this.stocksService.getMostActiveOptions(tickers);
  }
}
