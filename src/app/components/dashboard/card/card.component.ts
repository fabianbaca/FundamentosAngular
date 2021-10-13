import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input() nuevoTexto!: string;
  // @Output() nuevoTextoChange = new EventEmitter<string>();
 

  @Input() user: any;
  nombre:string;
  email:string;
  genero:string;
  id:number;

  constructor(private router: Router) {
    this.nombre="";
    this.email="";
    this.genero="";
    this.id=0;
  }

  ngOnInit(): void {
    this.nombre = this.user.name;
    this.email = this.user.email;
    this.genero = this.user.gender; 
    this.id= this.user.id;
  }

  verDetalle(): void {
    this.router.navigate(['dashboard/usuario/'], {queryParams: {id: this.id}})
  }

  // cambiarTextoPadre(value: string): void {
  //   this.nuevoTextoChange.emit(value);
  // }

}
