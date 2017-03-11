// import {Component} from '@angular/core';
import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import {Http,Response} from '@angular/http';

//Path
import {paths} from './../../config';

@Component({
    selector:'show',
    templateUrl:paths.component_path+'show/show.html'
})
export class Show{

    allTodos:Array<any>
    http:Http;

    data:any;
    loading:Boolean;

    constructor(http:Http){
        this.http = http;

        // this.makeRequest()
    }
   
    ngOnInit(){
        // this.showTodos()
        this.makeRequest()
    }

    showTodos():void{
      console.log("All Todos");  

      this.http.request('http://localhost:3002/todos/show').subscribe((res:Response)=>{

          console.log(`Response: ${res.json()}`);
          this.data = res.json();
          console.log(this.data);

        //   this.allTodos = Array(allTodos);
        //   for(let i=0;i<allTodos.length;i++){

        //   }   
        //   console.log(`All todos: ${allTodos[0]}`);
      })

      console.log(`All todos: ${this.allTodos}`);

    }

    makeRequest(): void {
        this.loading = true;
        // this.http.request('http://jsonplaceholder.typicode.com/posts/1').subscribe((res: Response) => {
        this.http.request('http://localhost:3002/todos/show').subscribe((res:Response) => {    
                    this.data = res.json();
                    this.loading = false; 
                    console.log(`Dummy data: ${this.data}`)
        });
        // console.log(this.data);
    }
    
}