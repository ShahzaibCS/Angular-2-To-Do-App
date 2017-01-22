import {Component} from '@angular/core';
import {Http} from '@angular/http';

//Path
import {paths} from './../../config';

@Component({
    selector:'show',
    templateUrl:paths.component_path+'show/show.html'
})
export class Show{

    allTodos:Array<any>
    http:Http;

    constructor(http:Http){
        this.http = http;
    }

    showTodos(){

      this.http.get('localhost:3002/todos/show').subscribe((allTodos)=>{
          this.allTodos = Array(allTodos);   
          console.log(`All todos: ${allTodos}`);
      })

    }
    
}