import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearthComponent } from './hearth.component';

describe('HearthComponent', () => {
  let component: HearthComponent;
  let fixture: ComponentFixture<HearthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HearthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HearthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
