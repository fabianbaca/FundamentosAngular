import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNofoundComponent } from './components/page-nofound/page-nofound.component';
import { ListadoUsuariosComponent } from './components/dashboard/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    InicioComponent,
    PageNofoundComponent,
    ListadoUsuariosComponent,
    UsuarioComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
