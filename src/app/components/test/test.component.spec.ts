import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { take } from 'rxjs';
import { TestComponent } from './test.component';
import { InternalCmpComponent } from './internal-cmp/internal-cmp.component';
import { ExternalCmpModule } from "./external-cmp/external-cmp.module";

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        InternalCmpComponent,
      ],
      imports: [
        ExternalCmpModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Methods', () => {
    it('privateVoidMethod', () => {
      jest.spyOn(component, 'privateVoidMethod' as any);
      component['privateVoidMethod']();
      expect(component['privateVoidMethod']).toHaveBeenCalled();
    });

    it('publicVoidMethod', () => {
      jest.spyOn(component, 'publicVoidMethod');
      component.publicVoidMethod();
      expect(component.publicVoidMethod).toHaveBeenCalled();
    });

    it('methodStack', () => {
      jest.spyOn(component, 'privateVoidMethod' as never);
      jest.spyOn(component, 'publicVoidMethod');
      component.methodStack();
      expect(component['privateVoidMethod']).toHaveBeenCalledTimes(1);
      expect(component.publicVoidMethod).toHaveBeenCalledTimes(1);
    });

    it('methodIncludesArguments', () => {
      jest.spyOn(component, 'methodIncludesArguments');
      component.methodIncludesArguments(true);
      expect(component.methodIncludesArguments).toHaveBeenCalledWith(true);
    });

    it('methodReturnsValue', () => {
      component.valueForMethodReturnsValue = true;
      const result: boolean = component.methodReturnsValue();
      expect(result).toBe(true);
    });

    it('methodReturnsObservable', () => {
      const numbers: number[] = [3,1,2];
      component.valueForMethodReturnsObservable.next(numbers);
      component.methodReturnsObservable().pipe(
        take(1)
      ).subscribe((data: number[]) => {
        expect(numbers).toBe(data);
      });
    });
  })

  describe('DOM', () => {
    let container: HTMLElement;
    let debugElement: DebugElement;

    beforeEach(() => {
      debugElement = fixture.debugElement;
      container = fixture.nativeElement.querySelector('.container:first-child');

      // рендерим контент для элементов
      component.valueForMethodReturnsObservable.next([1,2,3]);
      fixture.detectChanges();
    });

    it('element contains value', () => {
      const defaultElementH3: HTMLElement = document.createElement('h3');
      const h3: HTMLElement = container.querySelector('h3') || defaultElementH3;
      expect(h3.textContent).toContain('Title');
    });

    it('list contains elements', () => {
      const defaultElementList = document.createElement('div');
      const list: HTMLElement = container.querySelector('.list') || defaultElementList;
      const hasChildren: boolean = list.children.length > 0;
      expect(hasChildren).toBeTruthy();
    });

    // it('', waitForAsync(() => {
    //   spyOn(component, 'onActiveElement');
    //   const defaultElement: HTMLElement = document.createElement('div');
    //
    //   // const x = fixture.debugElement.nativeElement.querySelector('list:first-child').click();
    //   const list: HTMLElement = container.querySelector('.list:first-child') || defaultElement;
    //   list.click();
    //   fixture.detectChanges();
    //   const activeElement: DebugElement | null = debugElement.query(By.css('active')) || null;
    //
    //   debugger
    //   fixture.whenStable().then(() => {
    //     // expect(component.onActiveElement).toHaveBeenCalled();
    //     expect(activeElement).toBeTruthy();
    //   })
    // }));
    //
    // it('', waitForAsync(() => {
    //   spyOn(component, 'testButtonClick');
    //   const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('.test-button');
    //   debugger;
    //   button.click();
    //   fixture.whenStable().then(() => {
    //     expect(component.testButtonClick).toHaveBeenCalled();
    //   })
    // }));

    // it('', () => {
    //   spyOn(component, 'testButtonClick');
    //   const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('.test-button');
    //   // const button = fixture.debugElement.query(By.css('test-button'));
    //   debugger;
    //   button.click();
    //
    //   fixture.detectChanges();
    //
    //   // expect(component.testButtonClick).toHaveBeenCalled();
    //   expect(component.testButtonClick).not.toHaveBeenCalled();
    //
    // });

  });
});
