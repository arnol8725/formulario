import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario :Object = {
    email: null,
    name: null,
    surname: null,
    pais: '',
    sexo:'Hombre'
  };

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

sexos= ["Hombre","Mujer"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log(forma);
    console.log(forma.value);
    console.log(this.usuario);

  }

}
