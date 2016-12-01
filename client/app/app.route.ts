import {Routes} from '@angular/router';

//Import Components
import {Add} from './components/add/add';
import {Show} from './components/show/show'; 

export const routes:Routes = [
    {path:'add',component:Add},
    {path:'show',component:Show}
]