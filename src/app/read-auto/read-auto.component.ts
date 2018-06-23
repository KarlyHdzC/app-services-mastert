import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BasicService } from '../services/basic.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-read-auto',
  templateUrl: './read-auto.component.html',
  styleUrls: ['./read-auto.component.css'],
  providers:[BasicService]
})
export class ReadAutoComponent implements OnInit {
  public titulo: String
  public auto:any
  public formAuto:FormGroup
  constructor(
    private basicService: BasicService,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.route.params.subscribe((params:Params)=>{
      this.titulo = params['id']
    })
    //Convertimos de String a objeto JSON e insertamos el arreglo en un Observable
    let autos = of(JSON.parse(localStorage.getItem('autos')));
    //Utilizamos la función map para obtener los elementos emitidos de nuestro observable
    autos.pipe(map(
      //Utilizamos el función find() para buscar un elemento dentro de nuestros elementos emitidos
      //a partir de un atributo
      (autos)=>autos.find(auto=>auto._id == this.titulo)))
    .subscribe(
      //Nos subscribimos y asignamos el objeto encontrado en nuestro atributo auto de la clase
      auto=>this.auto=auto);

    //Inicializamos nuestro formulario
    this.formAuto = formBuilder.group({
      marca:[this.auto.marca,
            Validators.compose(
            [ Validators.maxLength(40),
              Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'), 
              Validators.required])],
      modelo:[this.auto.modelo,
            Validators.compose(
            [ Validators.maxLength(40),
              Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'), 
              Validators.required])],
      anio:[this.auto.anio,
            Validators.compose(
            [ Validators.maxLength(4),
              Validators.pattern('[0-9]*'), 
              Validators.required])],
      version:[this.auto.version,
            Validators.compose(
            [ Validators.maxLength(10),
              Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*')])]
    })
    
    //Lo deshabilitamos
    this.formAuto.disable();
  }

  ngOnInit() {
  }

}