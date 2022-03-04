import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCmpComponent } from './external-cmp.component';

describe('ExternalCmpComponent', () => {
  let component: ExternalCmpComponent;
  let fixture: ComponentFixture<ExternalCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
