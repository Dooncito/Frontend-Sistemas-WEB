import { Component } from '@angular/core';
import { AdsComponent } from './ads/ads.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
