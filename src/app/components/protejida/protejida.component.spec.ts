import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtejidaComponent } from './protejida.component';

describe('ProtejidaComponent', () => {
  let component: ProtejidaComponent;
  let fixture: ComponentFixture<ProtejidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtejidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtejidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
