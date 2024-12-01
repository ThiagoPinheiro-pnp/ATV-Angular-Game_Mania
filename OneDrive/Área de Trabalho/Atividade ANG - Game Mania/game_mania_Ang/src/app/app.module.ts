import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { CarrocelComponent } from './components/carrocel/carrocel.component';
import { CantainerCadasrtroComponent } from './components/cantainer-cadasrtro/cantainer-cadasrtro.component';
import { ContainerCarrinhoComponent } from './components/container-carrinho/container-carrinho.component';
import { ContainerLoginComponent } from './components/container-login/container-login.component';
import { ContainerMarcasComponent } from './components/container-marcas/container-marcas.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ItensCarrocel1Component } from './components/itens-carrocel1/itens-carrocel1.component';
import { ItensCarrocel2Component } from './components/itens-carrocel2/itens-carrocel2.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    CarrocelComponent,
    CantainerCadasrtroComponent,
    ContainerCarrinhoComponent,
    ContainerLoginComponent,
    ContainerMarcasComponent,
    FooterComponent,
    GaleriaComponent,
    ItensCarrocel1Component,
    ItensCarrocel2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
