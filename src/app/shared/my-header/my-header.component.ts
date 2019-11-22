import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable, range } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContextService } from 'src/app/services/context.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent {

  myForm: FormGroup;
  currentUser: User;

  // myFirstControl: FormControl = new FormControl('');
  // myFirstControlObservable: Observable<string> | null = null;
  // valore: string;

  // cambiaValore() {
  //   this.myFirstControl.setValue('pippo');
  // }

  submit() {
    console.log(this.myForm);
    alert(this.myForm.valid);
  }

  get name() {
    return this.myForm.get('name');
  }

  get surname() {
    return this.myForm.get('surname');
  }


  constructor(fb: FormBuilder, private context: ContextService) {

    this.myForm = fb.group(
      {
        name : ['', Validators.required],
        surname: ['', Validators.required]
      }
    );

    this.context.userLogged$.subscribe( u => {
      this.currentUser = u;
    });







    // this.myFirstControlObservable = this.myFirstControl.valueChanges;
    // this.myFirstControlObservable.pipe(debounceTime(1000)).subscribe( v => this.valore = v);


    //  const myObservable = of(1, 2, 3, 4, 5, 6 , 7, 8, 9, 10);
    //  const myObservable = new Observable(this.generatoreDiSequenze);
    // const myObservable = range(0, 10000);

    // const mySubscriber = {
    //   next: valoreEmesso =>  console.log('valore: ' + valoreEmesso),
    //   complete: () => console.log('flusso terminato'),
    //   error: (error) => console.log(error)
    // };

    // myObservable.pipe(filter( x => x % 2 === 0)).subscribe(mySubscriber);
  }

  //  private generatoreDiSequenze(observer: any): any {
  //   observer.next(1);
  //   observer.next('a');
  //   observer.next(3);
  //   observer.complete();
  //   return {unsubscribe(){}};
  //  }

 /* myKeyUp(payload: string){
     // const myInput = payload.target as HTMLInputElement;
    console.log(payload);
  } */


}
