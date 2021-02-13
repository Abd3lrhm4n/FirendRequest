import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestingApp';

  constructor(private ref: ChangeDetectorRef) {



  }
  complexObject: any= {
    firstName: "Mohamed",
    middleName:"Beshri",
    lastName: "Amer",
    products: [
      { id: 1, name: "pc", price: 5000 },
      { id: 2, name: "AnyThing", price: 6000 },
      { id: 3, name: "Hello World", price: 7000 },
    ],
    friends: [
      { id: 1, name: "Sayed Hawas" },
      { id: 2, name: "Abd- elharman" },
      { id: 3, name: "Yousef" },
      { id: 4, name: "Elhussien" },
      {id:4,name:"Osama"},
      { id: 5, name: "Ahmed" },
      { id: 6, name: "Mina" },
      { id: 7, name: "Abanob" },
      { id: 6, name: "Shahendia" },
      { id: 7, name: "Nardeen" },
      { id: 8, name: "Andaleeb" },

    ]

  };

  CheckAfterChange(event) {
    console.log(event);
    alert("Changed");
  }



}
