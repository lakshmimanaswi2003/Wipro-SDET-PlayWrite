// const user = {
//     id: 21,
//     name: "Aryan",
//     age: 25
// } as const;

// // user.name = "Arush"
// console.log(user);

/*
interface Task {
    readonly title: string;
    completed: boolean;
}

const myTask: Readonly<Task> = {
    title: "Do Homework",
    completed: true
}

const myTask1: Task = {
    title: "Do Homework",
    completed: true
}

// myTask.completed = false;

console.log(myTask);
console.log(myTask1);

const scores: ReadonlyArray<number> = [10, 20, 30];
console.log(scores[0]);
*/

//********************************************practice************************

interface task{
    readonly title:string;
    age:number;
}
const task1:task={
    title:"Home work",
    age:30
}
const task2:task ={
    title:"Home work",// here we can't able to change the title
    age :40//we can change the age becaues we didn't assign readonly to it
}

const task3: Readonly<task>={
    title :"Home work",
    age: 30
}
console.log(task1.title);
task1.title="new work"//task1.title="new work";// it gives an error because in the above we assign the readonly to the title
task1.age=50;
console.log(task1.age);
//task3.age=50; // this will give an error because the object itself is readonly

->>> here the task is the type for all the objects.