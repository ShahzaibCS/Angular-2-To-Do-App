import {Component} from '@angular/core';

//paths
import {paths} from './../../config';

//Model
import {Todo} from './../../model/todo';

@Component({
    selector:'add',
    templateUrl:paths.component_path+'add/add.html'
})
export class Add{

    id:number;
    name:string;
    status:boolean;

    addTodo(id:HTMLInputElement,name:HTMLInputElement,status:HTMLButtonElement){
        console.log("To do ID:"+" "+id.value);
        console.log("To do Name:"+" "+name.value);
        console.log("To do Status:"+" "+status.value);

        var todoObj = {id:id.value,name:name.value,status:status.value};
        console.log(`To do : ${todoObj}`);

        localStorage.setItem(id.value,JSON.stringify(todoObj));
    }
}