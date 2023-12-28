import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-onkyo',
  standalone: true,
  imports: [HttpClientModule, MatIconModule],
  templateUrl: './onkyo.component.html',
  styleUrl: './onkyo.component.scss',
  animations: [
    trigger('iconSizeChange', [
      transition(':increment', [
        style({ transform: 'scale(1)' }),
        animate('200ms ease-out', style({ transform: 'scale(0.8)' })),
      ]),
    ]),
  ]
})
export class OnkyoComponent {
  iconState : number = 0;
  icon1State : number = 0;
  icon2State : number = 0;
  icon3State : number = 0;
  icon4State : number = 0;
  icon5State : number = 0;
  icon6State : number = 0;
  icon7State : number = 0;
  icon8State : number = 0;
  icon9State : number = 0;
  icon10State : number = 0;
  icon11State : number = 0;
  icon12State : number = 0;

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
  onClickIcon7() {
    this.icon7State++;
  }
  onClickIcon8() {
    this.icon8State++;
  }
  onClickIcon9() {
    this.icon9State++;
  }
  onClickIcon10() {
    this.icon10State++;
  }
  onClickIcon11() {
    this.icon11State++;
  }
  onClickIcon12() {
    this.icon12State++;
  }


  onkyoOnOff(): void {
    const url = 'http://192.168.86.33:81/onkyoOn';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoSTRMBOX(): void {
    const url = 'http://192.168.86.33:81/onkyoSTRMBOX';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoDVD(): void {
    const url = 'http://192.168.86.33:81/onkyoDVD';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoUp(): void {
    const url = 'http://192.168.86.33:81/onkyoUp';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoPC(): void {
    const url = 'http://192.168.86.33:81/onkyoPC';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoBluetooth(): void {
    const url = 'http://192.168.86.33:81/onkyoBlue';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoDown(): void {
    const url = 'http://192.168.86.33:81/onkyoDown';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoAux(): void {
    const url = 'http://192.168.86.33:81/onkyoAux';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoCBL(): void {
    const url = 'http://192.168.86.33:81/onkyoCBL';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoGame(): void {
    const url = 'http://192.168.86.33:81/onkyoGame';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoNet(): void {
    const url = 'http://192.168.86.33:81/onkyoNet';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoCD(): void {
    const url = 'http://192.168.86.33:81/onkyoGame';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoQuick(): void {
    const url = 'http://192.168.86.33:81/onkyoQuick';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoUpArrow(): void {
    const url = 'http://192.168.86.33:81/onkyoUpArrow';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoInfo(): void {
    const url = 'http://192.168.86.33:81/onkyoInfo';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoLeft(): void {
    const url = 'http://192.168.86.33:81/onkyoLeft';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoEnter(): void {
    const url = 'http://192.168.86.33:81/onkyoEnter';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  
  onkyoRight(): void {
    const url = 'http://192.168.86.33:81/onkyoRight';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoSettings(): void {
    const url = 'http://192.168.86.33:81/onkyoSettings';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  
  onkyoDownArrow(): void {
    const url = 'http://192.168.86.33:81/onkyoDownArrow';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  
  onkyoBack(): void {
    const url = 'http://192.168.86.33:81/onkyoBack';
    this.httpClient.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onkyoMute(): void {
    const url = 'http://192.168.86.33:81/onkyoMute';
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



