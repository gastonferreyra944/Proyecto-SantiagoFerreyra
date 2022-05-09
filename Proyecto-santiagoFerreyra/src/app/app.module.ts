import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './components/heder/heder.component';
import { SantiagoComponent } from './component/santiago/santiago.component';
import { APComponent } from './component/ap/ap.component';
import { LogoSantiagoComponent } from './component/logo-santiago/logo-santiago.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import { LogoProyectoComponent } from './component/logo-proyecto/logo-proyecto.component';
import { ProyectoSantiagoFerreyraComponent } from './component/logoSantiago/proyecto-santiago-ferreyra/proyecto-santiago-ferreyra.component';
import { LogogastonComponent } from './component/logogaston/logogaston.component';
import { LogoGastonComponent } from './components/logo-gaston/logo-gaston.component';
import { LogoSComponent } from './components/logo-s/logo-s.component';
import { SocialComponent } from './component/social/social.component';
import { SocialesComponent } from './components/sociales/sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    SantiagoComponent,
    APComponent,
    LogoSantiagoComponent,
    LogoAPComponent,
    LogoProyectoComponent,
    ProyectoSantiagoFerreyraComponent,
    LogogastonComponent,
    LogoGastonComponent,
    LogoSComponent,
    SocialComponent,
    SocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
