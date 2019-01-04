import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormArray} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})       
export class DataComponent implements OnInit {

  countries: any;

  pa= {
    codigo:'MX',
    pais:'Mexico'
    
}

  paises= [{
    codigo:'MX',
    pais:'Mexico'
    
},
{
  codigo:'CRI',
  pais:'Costa Rica'
  
},
{
codigo:'EN',
pais:'Inglaterra'

}
];

  formas:FormGroup;
  usuario :Object ={
    nombrecompleto:{
      nombre: "arnol",
      apellido:"herrera"
    },
    email:"fernando.herrera85@gmail.com",
    pasatiempos: ['Correr'],
  countries:'CRI',
   password1: '',   
   password2: '',
   username : ''
  }

  constructor() {
    this.formas = new FormGroup({
      'nombrecompleto': new FormGroup(
        {
              'nombre': new FormControl('',[Validators.required,
                                    Validators.minLength(3)
                                   ]),
              'apellido': new FormControl('', [Validators.required,
                                              this.noPeralta
                                  ])

        }
      ),
      'email': new FormControl('', [Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                   ]),
       'pasatiempos': new FormArray([
            new FormControl('Correr',Validators.required)
           /* new FormControl('Dormir',Validators.required),
            new FormControl('Comer',Validators.required)*/                
       ]),                     
       'countries': new FormControl('CRI', [Validators.required]),       
       'password1' : new FormControl('',Validators.required),
       'password2' : new FormControl(),
       'username' :new FormControl('',Validators.required,this.existeusuario)
    });
    
      this.formas.setValue(this.usuario);
     // this.formas.controls['countries'].setValue(this.pa);
     this.formas.controls['password2'].setValidators([Validators.required,this.noigual.bind(this)]);

     this.formas.valueChanges.subscribe( data => {
         console.log(data);
     });
     this.formas.controls['username'].valueChanges.subscribe( data => {
      console.log(data);
  })

      console.log(this.formas);
   }

  ngOnInit() {
  }

  agregarPasatiempo(){
    console.log('agregarPasatiempo');
    (<FormArray>this.formas.controls['pasatiempos']).push(
      new FormControl('Dormir',Validators.required)
    );
  }

  noPeralta(control: FormControl): {[s:string]:boolean}{
    if (control.value === "Peralta"){
      return {
        noPeralta:true
      }
    }
    return null;
  }

  noigual(control: FormControl): {[s:string]:boolean}{
    if (control.value !== this.formas.controls['password1'].value){
      return {
        nogual:true
      }
    }
    return null;
  }

  existeusuario (control: FormControl):Promise<any> | Observable<any>{

    let promesa  = new Promise(
        (resolve,reject) => {

              setTimeout(() => {
                  if (control.value === 'strider'){
                    resolve({  existe:true })
                  }else{
                    resolve( null )
                  }
              }, 3000);

        }
    );
    
       return promesa;
  }
  
  guardarCambio(){
    console.log(this.formas);
    /*this.formas.reset({
      nombrecompleto:{
        nombre: "",
        apellido:""
      },
      email:""
    });
     */
  }
}
