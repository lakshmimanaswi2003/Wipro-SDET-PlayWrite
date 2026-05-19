"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
let value1 = "Hello";
let value2 = 100;
let value3 = true;
console.log(value1);
console.log(value2);
console.log(value3);
//# sourceMappingURL=practice.js.map