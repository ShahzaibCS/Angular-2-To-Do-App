
// var mongoose = require('mongoose');
var dataModels = require('./dbInjector');
var exec = require('exec');
var dbModels = dataModels.dataModels;
var Con = dbModels.todos;

exports.add = function(req,res){

    var con = req.body;

    Con.findOne({task_name:con.task_name}).exec(function(err,todo){

        if(err){

            console.log({
                status:false,
                resCode:400,
                isError:true,
                message:"Internal error while fetching todo",
                error:err
            });
            // res.send({
            //     status:false,
            //     resCode:400,
            //     isError:true,
            //     message:"Internal error while fetching todo",
            //     // error:err
            // });

        }else if(todo){

            console.log({
                status:true,
                resCode:200,
                isError:false,
                message:"Todo found successfully",
                data:todo
            });

            // res.send({
            //     status:true,
            //     resCode:200,
            //     isError:false,
            //     message:"Todo found successfully",
            //     data:todo
            // });

            var temp_task_name = con.task_name;
            var checkforDigits = new RegExp("\\d");

            var checkFlag = checkforDigits.test(temp_task_name);
            if(checkFlag){
                console.log("Task Name has a digit");
            }else if(!checkFlag){
                console.log("Task Name does not have a digit");
            }


            // var todo = {
            //     task_name:con.task_name,
            //     createdAt:new Date()
            // }
            //
            // //Saving todo
            // var todo_document = new Con(todo);
            // todo_document.save(function(err,resp){
            //
            //     if(err){
            //
            //         console.log({
            //             status:false,
            //             resCode:400,
            //             isError:true,
            //             message:"Internal error while storing data",
            //             error:err
            //         });
            //         // res.send({
            //         //     status:false,
            //         //     resCode:400,
            //         //     isError:true,
            //         //     message:"Internal error while storing data",
            //         //     // error:err
            //         // })
            //
            //     }else if(resp){
            //
            //         console.log({
            //             status:true,
            //             resCode:200,
            //             isError:false,
            //             message:"Data saved successfully",
            //             data:resp
            //         });
            //         // res.send({
            //         //     status:true,
            //         //     resCode:200,
            //         //     isError:false,
            //         //     message:"Data saved successfully"
            //         //     // data:resp
            //         // });
            //
            //     }
            //
            // })

        }else{
            var todo = {
                task_name:con.task_name,
                createdAt:new Date()
            }

            //Saving todo
            var todo_document = new Con(todo);
            todo_document.save(function(err,resp){

                if(err){

                    console.log({
                        status:false,
                        resCode:400,
                        isError:true,
                        message:"Internal error while storing data",
                        error:err
                    });
                    // res.send({
                    //     status:false,
                    //     resCode:400,
                    //     isError:true,
                    //     message:"Internal error while storing data",
                    //     // error:err
                    // })

                }else if(resp){

                    console.log({
                        status:true,
                        resCode:200,
                        isError:false,
                        message:"Data saved successfully",
                        data:resp
                    });
                    // res.send({
                    //     status:true,
                    //     resCode:200,
                    //     isError:false,
                    //     message:"Data saved successfully"
                    //     // data:resp
                    // });

                }

            })
        }

    })

}

exports.todo = function(req,res){

}

exports.selectall = function(req,res){

    Con.find({},{__v:0}).exec(function(err,todos){

        if(err){

            console.log({
                status:false,
                resCode:400,
                isError:true,
                message:"Internal error while fetching all todos",
                error:err
            });
            // res.send({
            //     status:false,
            //     resCode:400,
            //     isError:true,
            //     message:"Internal error while fetching all todos",
            //     // error:err
            // });

        }else if(todos){

            console.log({
                status:true,
                resCode:200,
                isError:false,
                message:"Data loaded successfully",
                data:todos
            });

            // res.send({
            //     status:true,
            //     resCode:200,
            //     isError:false,
            //     message:"Data loaded successfully",
            //     data:todos
            // })
            // res.redirect('/add')

        }

    })

}
