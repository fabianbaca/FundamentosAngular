import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  paginaActual: number;
  totalPaginas: number;
  cargando: boolean;
  listaUsuarios: any;

  constructor(private usuarioServices: UsuarioService) {
    this.cargando = true;
    this.paginaActual = 1;
    this.totalPaginas = 1;
    this.obtenerUsuarios();
  }

  ngOnInit(): void {
  }

  paginaAnterior(): void {
    this.paginaActual--;
    this.obtenerUsuarios();
  }

  paginaSiguiente(): void{
    this.paginaActual++;
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void{
    this.usuarioServices.getUsuarios(this.paginaActual).subscribe((data) => {
      this.cargando = false;
      this.listaUsuarios = data.data;
      this.paginaActual= data.meta.pagination.page;
      this.totalPaginas= data.meta.pagination.pages;
    })
  }

}
