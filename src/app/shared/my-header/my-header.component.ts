import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable, range } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent {

  constructor() {
  //  const myObservable = of(1, 2, 3, 4, 5, 6 , 7, 8, 9, 10);
  //  const myObservable = new Observable(this.generatoreDiSequenze);
    const myObservable = range(0, 10000);

    const mySubscriber = {
      next: valoreEmesso =>  console.log('valore: ' + valoreEmesso),
      complete: () => console.log('flusso terminato'),
      error: (error) => console.log(error)
    };

    myObservable.pipe(filter( x => x % 2 === 0)).subscribe(mySubscriber);
  }

   private generatoreDiSequenze(observer: any): any {
    observer.next(1);
    observer.next('a');
    observer.next(3);
    observer.complete();
    return {unsubscribe(){}};
   }



}
