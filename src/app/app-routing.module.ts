import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListadoUsuariosComponent } from './components/dashboard/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNofoundComponent } from './components/page-nofound/page-nofound.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: ListadoUsuariosComponent },
    { path: 'usuario', component: UsuarioComponent }
  ]},
  // { path: 'dashboard', component: DashboardComponent, children: [
  //   { path: '', component: ListadoUsuariosComponent },
  //   { path: 'usuario/:id', component: UsuarioComponent }
  // ]},
  { path: '**', component: PageNofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
