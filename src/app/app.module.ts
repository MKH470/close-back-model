import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ExampleComponent } from './example/example.component';
import { AnderepaginaComponent } from './anderepagina/anderepagina.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { SucondComponent } from './sucond/sucond.component';

const routes: Route[] = [
  {path: '', component: AnderepaginaComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'sucond', component: SucondComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
]

@NgModule({
  declarations: [AppComponent, ExampleComponent, AnderepaginaComponent, ModalExampleComponent,SucondComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule.forRoot(routes), FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
