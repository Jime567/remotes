import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-hearth',
  standalone: true,
  imports: [HttpClientModule, MatIconModule],
  templateUrl: './hearth.component.html',
  styleUrl: './hearth.component.scss',
  animations: [
    trigger('iconSizeChange', [
      transition(':increment', [
        style({ transform: 'scale(1)' }),
        animate('200ms ease-out', style({ transform: 'scale(0.8)' })),
      ]),
    ]),
  ]
})
export class HearthComponent {
  iconState : number = 0;
  icon1State : number = 0;
  icon2State : number = 0;
  icon3State : number = 0;
  icon4State : number = 0;
  icon5State : number = 0;
  icon6State : number = 0;

  constructor(private httpClient: HttpClient) {}

  onClickIcon() {
    // Increment the click count to trigger the animation
    this.iconState++;
  }
  onClickIcon1() {
    this.icon1State++;
  }
  onClickIcon2() {
    this.icon2State++;
  }
  onClickIcon3() {
    this.icon3State++;
  }
  onClickIcon4() {
    this.icon4State++;
  }
  onClickIcon5() {
    this.icon5State++;
  }
  onClickIcon6() {
    this.icon6State++;
  }

  fireplaceOn(): void {
    const url = 'http://192.168.86.46:81/fireplaceOn';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  fireplaceHeat(): void {
    const url = 'http://192.168.86.46:81/fireplaceHeat';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  fireplaceTimer(): void {
    const url = 'http://192.168.86.46:81/fireplaceTimer';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  fireplaceDimmer(): void {
    const url = 'http://192.168.86.46:81/fireplaceDimmer';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  fireplaceSpeed(): void {
    const url = 'http://192.168.86.46:81/fireplaceSpeed';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  fireplaceA(): void {
    const url = 'http://192.168.86.46:81/fireplaceA';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  fireplaceB(): void {
    const url = 'http://192.168.86.46:81/fireplaceB';
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
