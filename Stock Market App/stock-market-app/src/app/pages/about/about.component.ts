import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  missionCards = [
    { title: 'Invest in Your Future', description: 'We empower you to grow your money with smart stock market investments.' },
    { title: 'Financial Freedom', description: 'Achieve long-term wealth through strategic investing in stocks and ETFs.' },
    { title: 'Market Insights', description: 'Get real-time stock data and trends to make informed investment decisions.' },
    { title: 'Education First', description: 'We provide learning resources to help beginners start investing with confidence.' },
    { title: 'Risk Management', description: 'Learn how to manage risks and maximize returns in the stock market.' },
    { title: 'Passive Income', description: 'Build a portfolio that generates steady income over time.' },
    { title: 'Smart Strategies', description: 'Use data-driven strategies to make the best trading choices.' },
    { title: 'Diversification', description: 'Spread your investments across different sectors for stability.' },
    { title: 'StockPulse Tools', description: 'Access advanced tools to track and analyze your investments.' },
    { title: 'Community Support', description: 'Join a network of investors who share insights and strategies.' }
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000000000,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      600: { items: 2, margin: 30 },
      1000: { items: 3, margin: 40 },
      1400: { items: 3, margin: 50 } // More space on large screens
    }
  };
}
