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

}
