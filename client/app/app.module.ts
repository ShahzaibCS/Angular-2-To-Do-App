//Loading modules.
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { MaterialModule } from '@angular/material';


//Core Component.
import {AppComponent} from './app.component';

//Menu
import {Menu} from './components/menu/menu';

@NgModule({
    imports:[AppComponent,MaterialModule,RouterModule],
    declarations:[AppComponent,Menu],
    bootstrap:[AppComponent]
})
export class AppModule{

}