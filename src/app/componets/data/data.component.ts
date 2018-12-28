import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('Arnol',Validators.required),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('o', Validators.required)
    });
   }

  ngOnInit() {
  }

  guardarCambio(){
    console.log(this.forma.value);
     
  }
}
