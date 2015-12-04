//logs in and creates a new todo list
var Parse = require('parse/node');
Parse.initialize("1qGy00XAzAmDwKEbnIOSSGJAuUuAzcOlH1QOYheZ", "hQsas59JACHXvcopG3XY3XHFBcjMv2VGjnNlfiIW");
var todolist = Parse.Object.extend("todolist");
var homeworklist = new todolist();
homeworklist.set("task1", "Work on my 280 project");
homeworklist.set("task2", "Work on EECS 216 Lab");
homeworklist.set("task3", "Study for Math 425 Exam")
homeworklist.save(null, {
	success: function(homeworkList){
		console.log('New object created with objectId: ' + homeworklist.id);
	},
	error: function(homeworkList, error){
		console.log('Failed to create new object, with error code: ' + error.message);
	}
});
console.log(homeworklist);
