import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { trigger, style, animate, transition } from '@angular/animations';
import { OnkyoComponent } from './onkyo/onkyo.component';
import { ProjectorComponent } from './projector/projector.component';
import { ScreenComponent } from './screen/screen.component';
import { HearthComponent } from './hearth/hearth.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import * as https from 'https';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MatIconModule, 
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    OnkyoComponent,
    ProjectorComponent,
    ScreenComponent,
    HearthComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  clickCount = 0;
  constructor(private httpClient: HttpClient) {}

  onClickIcon() {
    // Increment the click count to trigger the animation
    this.clickCount++;
  }

  title = 'remotes';

  fireplaceOnOff(): void {
    const url = 'http://192.168.86.46:81/fireplaceOn';
    // Make the GET request with headers
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

