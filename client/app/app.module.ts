//Loading modules.
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { MaterialModule } from '@angular/material';
import {MaterializeDirective} from 'angular2-materialize';
import {HttpModule} from '@angular/http';


//Core Component.
import {AppComponent} from './app.component';

//Menu
import {Menu} from './components/menu/menu';
import {Add} from './components/add/add';
import {Show} from './components/show/show';

//Routes
import {routes} from './app.route'

@NgModule({
    imports:[BrowserModule,RouterModule.forRoot(routes),HttpModule],
    declarations:[AppComponent,Menu,Add,Show],
    bootstrap:[AppComponent]
})
export class AppModule{

}