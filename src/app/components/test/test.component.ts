import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  valueForMethodReturnsValue = true;
  valueForMethodReturnsObservable: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  activeElement: number | null = null;

  get items$(): Observable<number[]> {
    return this.valueForMethodReturnsObservable.asObservable();
  }

  constructor() { }

  ngOnInit(): void {
    this.methodStack();
  }

  methodStack(): void {
    this.privateVoidMethod();
    this.publicVoidMethod();
  }

  private privateVoidMethod(): void {}

  publicVoidMethod(): void {}

  methodIncludesArguments(value: boolean): void {}

  methodReturnsValue(): boolean {
    return this.valueForMethodReturnsValue;
  }

  methodReturnsObservable(): Observable<number[]> {
    return this.valueForMethodReturnsObservable.asObservable();
  }

  onActiveElement(item: number) {
    this.activeElement = item;
  }

  testButtonClick(): void {}
}
