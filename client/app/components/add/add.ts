import {Component} from '@angular/core';
import { MaterialModule } from '@angular/material';
import {Http,RequestOptions,Headers} from '@angular/http';

//paths
import {paths} from './../../config';

//Model
import {Todo} from './../../model/todo';

@Component({
    selector:'add',
    // providers:[MaterialModule],
    templateUrl:paths.component_path+'add/add.html'
})
export class Add{

    id:number;
    name:string;
    status:boolean;
    http:Http;  //Http Object

    constructor(http:Http){
        this.http = http;

        //Sample Request.
        // this.sampleRequest();
    }

    // addTodo(id:HTMLInputElement,name:HTMLInputElement,status:HTMLButtonElement){
    //     console.log("To do ID:"+" "+id.value);
    //     console.log("To do Name:"+" "+name.value);
    //     console.log("To do Status:"+" "+status.value);

    //     var todoObj = {id:id.value,name:name.value,status:status.value};
    //     console.log(`To do : ${todoObj}`);

    //     localStorage.setItem(id.value,JSON.stringify(todoObj));
    // }

    addToDo(name:HTMLInputElement,status:HTMLInputElement){
        var headers = new Headers();
        headers.append('content-type','application/json');
        var options = new RequestOptions(headers);

        var todo = {task_name:name.value}  //Request body

        this.http.post('localhost:3002/todos/add',todo,options)
            .subscribe((bodyData)=>{
                console.log("Submited data");
                console.log(bodyData);
            })
    }

    sampleRequest(){
        this.http.get('').subscribe((val)=>{
            console.log(`Sample request response : ${val}`);
        })
    }
}