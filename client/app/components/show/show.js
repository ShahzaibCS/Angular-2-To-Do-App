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
//Path
var config_1 = require('./../../config');
var Show = (function () {
    function Show(http) {
        this.http = http;
        // this.makeRequest()
    }
    Show.prototype.ngOnInit = function () {
        // this.showTodos()
        this.makeRequest();
    };
    Show.prototype.showTodos = function () {
        var _this = this;
        console.log("All Todos");
        this.http.request('http://localhost:3002/todos/show').subscribe(function (res) {
            console.log("Response: " + res.json());
            _this.data = res.json();
            console.log(_this.data);
            //   this.allTodos = Array(allTodos);
            //   for(let i=0;i<allTodos.length;i++){
            //   }   
            //   console.log(`All todos: ${allTodos[0]}`);
        });
        console.log("All todos: " + this.allTodos);
    };
    Show.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        // this.http.request('http://jsonplaceholder.typicode.com/posts/1').subscribe((res: Response) => {
        this.http.request('http://localhost:3002/todos/show').subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
            console.log("Dummy data: " + _this.data);
        });
        // console.log(this.data);
    };
    Show = __decorate([
        core_1.Component({
            selector: 'show',
            templateUrl: config_1.paths.component_path + 'show/show.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Show);
    return Show;
}());
exports.Show = Show;
//# sourceMappingURL=show.js.map