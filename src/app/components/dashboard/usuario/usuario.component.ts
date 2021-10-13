import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: string;
  nombre:string;
  email:string;
  genero:string;
  status:string;
  cargando: boolean;


  constructor(
    private aRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ){
    this.cargando = true;
    this.nombre = "";
    this.email = "";
    this.genero = "";
    this.status = "";
    this.id = "";
    aRoute.queryParams.pipe(filter((params:any) => params.id)).subscribe((params: any) => {
      this.id = params.id;
    })
    usuarioService.getUsuario(this.id).subscribe(usuario => {
      const { data } = usuario;
      this.nombre = data.name;
      this.email = data.email;
      this.genero = data.gender;
      this.status = data.status;
      this.cargando=false;
    })
  }

  ngOnInit(){}

  // id: string;
  // nombre:string;
  // email:string;
  // genero:string;
  // status:string;

  // constructor(
  //   private aRoute: ActivatedRoute,
  //   private usuarioService: UsuarioService
  // ) {
  //   this.nombre = "";
  //   this.email = "";
  //   this.genero = "";
  //   this.status = "";
  //   this.id = this.aRoute.snapshot.paramMap.get('id')!;
  //   usuarioService.getUsuario(this.id).subscribe(usuario => {
  //     const { data } = usuario;
  //     this.nombre = data.name;
  //     this.email = data.email;
  //     this.genero = data.gender;
  //     this.status = data.status;
  //   })
  // }

  // ngOnInit(): void {
  // }

}
