"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {Component} from '@angular/core';
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//paths
var config_1 = require('./../../config');
var Add = (function () {
    function Add(http) {
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
    Add.prototype.addToDo = function (name) {
        console.log("Task Name: " + name.value);
        // console.log(`To-Do status: ${status.value}`);
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        var options = new http_1.RequestOptions(headers);
        var todo = { task_name: name.value }; //Request body
        console.log("New todo : " + todo);
        this.http.post('http://localhost:3002/todos/add', todo, options)
            .subscribe(function (bodyData) {
            console.log("Submited data");
            console.log(bodyData);
            return false;
        });
        return false; //Preventing page to reload    
    };
    // addToDo(name:HTMLInputElement){
    //     console.log(`Task Name: ${name.value}`);
    //     // console.log(`To-Do status: ${status.value}`);
    //     return false; //Preventing page to reload    
    // }
    Add.prototype.todoStatus = function () {
    };
    Add.prototype.sampleRequest = function () {
        this.http.get('').subscribe(function (val) {
            console.log("Sample request response : " + val);
        });
    };
    Add = __decorate([
        core_1.Component({
            selector: 'add',
            // providers:[MaterialModule],
            templateUrl: config_1.paths.component_path + 'add/add.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Add);
    return Add;
}());
exports.Add = Add;
//# sourceMappingURL=add.js.map