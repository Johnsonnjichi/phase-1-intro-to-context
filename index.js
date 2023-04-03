// Your code here

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}
function createEmployeeRecords(arr) {
  //or

  /*let newArr=[]
    for(const items of arr){
        newArr.push(items)
    }
    return newArr
    */
  let newArr = arr.map((array) => {
    return createEmployeeRecord(array);
  });
  return newArr;
}
function findEmployeeByFirstName(collection, firstNameString) {
  let newCollection = collection.find((arrayo) => {
    return arrayo.firstName === firstNameString;
  });
  return newCollection;
}
function createTimeInEvent(dateStamp) {
  let newDateStamp = dateStamp.split(" ");

  let objecto = {
    type: "TimeIn",
    hour: parseInt(newDateStamp[1]),
    date: newDateStamp[0],
  };
  this.timeInEvents.push(objecto);
  return this;
}
//console.log(createTimeInEvent("2023-03-29 1728"))
function createTimeOutEvent(dateStamp) {
  let newDateStamp = dateStamp.split(" ");
  let objectito = {
    type: "TimeOut",
    hour: parseInt(newDateStamp[1]),
    date: newDateStamp[0],
  };
  this.timeOutEvents.push(objectito);

  return this;
}
function hoursWorkedOnDate(date) {
  let timeInObj = this.timeInEvents.find((obj) => obj.date === date).hour;
  let timeOutObj = this.timeOutEvents.find((objo) => objo.date === date).hour;

  return (timeOutObj - timeInObj) / 100;
}
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  //return hours()*this.payPerHour;
}
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, record) => {
    return totalPayroll + allWagesFor.call(record);
  }, 0);
}











// const allWagesFor=function(){
//     const eligibleDates = this.timeInEvents.map(function (e){
//         return e.date
//     })

//     const payable =eligibleDates.reduce(function(memo, d){
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this),0)

//     return payable
// }
// function createEmployeeRecord(arr) {
//     return{
//         firstName:arr[0],
//         familyName:arr[1],
//         title:arr[2],
//         PayPerHour:arr[3],
//         timeInEvent:[],
//         timeOutEvent:[]
//     }
    
// }
// function createEmployeeRecords(arr) {
//     let arrobj=[]
//     for(let record of arr){
//         arrobj.push(createEmployeeRecord(record))
//     }
//     return arrobj
    
// }
// function createTimeInEvent(time) {
//     let newtime=time.split('')
//     let obj={type:"Timein", hour:parseInt(newtime[1]), date:newtime[0]}
//     this.timeInEvents.push(obj)
//     return this
    
// }
// function createTimeOutEvent() {
//     let newtime=time.split('')
//     let obj={type:"TimeOut", hour:parseInt(newtime[1]), date:newtime[0]}
//     this.timeOutEvents.push(obj)
//     return this
// }
// function hoursWorkedOnDate(date) {
//     let timeinobj=this.timeInEvents.find(dateobj=>dateobj.date===date).hour
//     let timeoutobj=this.timeOutEvents.find(dateobj=>dateobj.date===date).hour

//     return (timeoutobj-timeinobj)/100
    
// }
// function wagesEarnedOnDate(date) {
//     // let hours = hoursWorkedOnDate.bind(this, date)
//     // return hours*this.payPerHour
//     return hoursWorkedOnDate.call(this, date)*this.PayPerHour
    
// }
// function findEmployeeByFirstName(arr, str){
//     let found = arr.find(rcds=>rcds.firstName===str)
//     return found
// }
// // function calculatePayroll(arr){
// //     let wagebill= allWagesFor.call(this,...arr).reduce((a,v)=>a+=v)
// //     return wagebill
// // }