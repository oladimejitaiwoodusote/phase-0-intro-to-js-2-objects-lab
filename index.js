// Write your solution in this file!
const employee = {
    name: "Ola",
    streetAddress: "11507 St. Germain Wat" 
}

function updateEmployeeWithKeyAndValue(Object, key, value){
    const newObject = { ...Object};
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value){
    Object[key] = value;
    return Object;
}

function deleteFromEmployeeByKey(Object, key){
    const newObject = {...Object};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(Object,key){
    delete Object[key];
    return Object;
}