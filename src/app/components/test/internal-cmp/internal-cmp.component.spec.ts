import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCmpComponent } from './internal-cmp.component';

describe('InternalCmpComponent', () => {
  let component: InternalCmpComponent;
  let fixture: ComponentFixture<InternalCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
