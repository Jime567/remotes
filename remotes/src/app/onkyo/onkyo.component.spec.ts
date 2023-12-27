import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnkyoComponent } from './onkyo.component';

describe('OnkyoComponent', () => {
  let component: OnkyoComponent;
  let fixture: ComponentFixture<OnkyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnkyoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnkyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
