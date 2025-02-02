import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  mostActiveOptions: any[] = [];

  constructor(private stocksService: StocksService) {}

  ngOnInit(): void {
    this.fetchMostActiveOptions();
  }

  fetchMostActiveOptions(): void {
    this.stocksService.getMostActiveOptions().subscribe(
      (data) => {
        this.mostActiveOptions = data?.data?.quotes || []; // Use safe navigation
      },
      (error) => {
        console.error('Error fetching options:', error);
      }
    );
  }  
}
