var kv1 = { key: 1, value: "Steve" }; // OK
var kv2 = { key: 1, val: "Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
var kv3 = { key: 1, value: 100 }; // Compiler Error: 
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
var kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
function () { }
delete (key);
number;
void {
    console: console,
    : .log('Key deleted.')
};
var kvp = delete ; //Compiler Error
var numArr = [1, 2, 3];
numArr[0];
numArr[1];
var strArr = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
var empObj1 = {
    empCode: 1,
    empName: "Steve"
};
var empObj2 = {
    empCode: 1,
    empName: "Bill",
    empDept: "IT"
};
var personObj = { SSN: 110555444, name: 'James Bond' };
personObj.name = 'Steve Smith'; // OK
personObj.SSN = '333666888'; // Compiler Error
var empObj = {
    empCode: 1,
    name: "Bill",
    gender: "Male"
};
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee;
}());
var emp = new Employee(1, "Steve");
