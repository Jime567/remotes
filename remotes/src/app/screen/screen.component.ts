import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [HttpClientModule, MatIconModule],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss',
  animations: [
    trigger('iconSizeChange', [
      transition(':increment', [
        style({ transform: 'scale(1)' }),
        animate('200ms ease-out', style({ transform: 'scale(0.8)' })),
      ]),
    ]),
  ]
})
export class ScreenComponent {
  iconState : number = 0;
  icon1State : number = 0;
  icon2State : number = 0;

  constructor(private httpClient: HttpClient) {}

  onClickIcon() {
    // Increment the click count to trigger the animation
    this.iconState++;
  }
  onClickIcon1() {
    // Increment the click count to trigger the animation
    this.icon1State++;
  }
  onClickIcon2() {
    // Increment the click count to trigger the animation
    this.icon2State++;
  }

  screenUp(): void {
    const url = 'http://192.168.86.33:81/screenUp';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  screenDown(): void {
    const url = 'http://192.168.86.33:81/screenDown';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  screenStop(): void {
    const url = 'http://192.168.86.33:81/screenStop';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
