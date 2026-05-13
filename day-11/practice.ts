/*
enum role{
    user="USER",
    editor="EDITOR",
    guest="GUEST"
}
const PermissionMap:Record<role,boolean>={//record function is used to store the values as object like key, value pairs
    [role.user]:true,
    [role.editor]:true,
    [role.guest]:false
};
console.log(PermissionMap);

const per:Record<role,boolean>={
    [role.user]:true,//for strict typescript it will show the error because we are missing the remaining keys. execute like"tsc"
}
console.log(per);

//-->> here [role.user] : true is nothing but we are converting the values of the role.user as key and assigning the key with the value of boolean
*/


//3***************************************************************************
/*
type TaskStatus = 'Open' | 'InProgress' | 'Closed'| 'Archived';
function handelTask(status:TaskStatus){
    switch(status){
        case 'Open':
            console.log("it is open");
            break;
        case 'InProgress':
            console.log("it is in progress");
            break;
        case 'Closed':
            console.log("it is closed");
            break;
        default:
            let value:never=status;//never type is nothing but it is saying that no value is assigning to the variable value if assigns it throw a value
            console.log(value);
    }
}
handelTask('Open');

//->> here we were added 'Archived' but we are not assigned in the switch case so when you pass the 'Archived' value it will show you an error.
*/



//4***************************************************************************************8
/*
type FolderNode={
    name:string,
    files?:string[],//optional
    subFolders?:FolderNode[]//optional
};

const recu:FolderNode={
    name:"hari",
    files:["ppt","msdoc"],
    subFolders:[{
        name:"vani",
        files:["ppt1","msdoc1"]
    },{name:"priya",files:["ppt2"]}]
};
console.log(JSON.stringify(recu,null,2));//here we are converting the data into string and we are pushing the parameters null because to not do any changes and then we us '2' to give the two spaces that is readable
//->> to print the subarray we have to use JSON.stringify
*/


//5*********************************************************************************
/*
5. Template Literal Types for CSS
Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.
*/

/*
type MarginValue= `${number}px` | `${number}rem` | `${number}vh`;
const value:MarginValue=`10px`;// or 10+"px"
console.log(value);
*/


//7**********************************************************************************************
/*
Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
Use Extract to create MouseEvents (only click and dbclick).
Use Exclude to create NonFormEvents (everything except submit and reset).
*/
/*
type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';
type MouseEvents=Extract<AllEvents, 'click' | 'dbclick'>;//Extract is going to extract the two values in the AllEvents type
type NonFormEvents=Exclude<AllEvents, 'submit'|'reset'>;//Exclude is going to remove the assigned values and have the remaining
*/



//9***********************************************************************************************
/*
9. Index Signatures for Dynamic Metadata
Scenario: You are receiving a "Metadata" object from a server where the keys are dynamic strings, but the values must be either a string, number, or boolean.
Task: Create an interface UserMetadata that has a required createdAt: Date but allows any other dynamic string keys as long as their values match the union type mentioned.
*/
/*
interface UserMetaData{
    createdAt:Date;
    [key:string]: string|number|boolean|Date;//by using this we can access no.of datatypes that we mensioned here. this is called index signature.
}
const data:UserMataData={
    createdAt:new Date,
    name:"henry",
    age :30
};
console.log(data);
*/


