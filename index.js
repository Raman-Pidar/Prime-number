const log = console.log;

var obj = require("readline-sync")
var chalkobj = require("chalk")

var user = obj.question("what is your name ")
log("Welcome "+chalkobj.red(user));

// var quest = [{q:"What is your date of birth "},{q:"Enter your birth year"}]


function prime(date){
  var flag=0;
  for(i=2;i<=date/2;i++){
    if(date%i ===0){
      log("your date is not a prime no.");
      flag=1;
      break;
    }
  }
  if(flag===0){
    log("your date is a prime no.");
  }
}

var date = obj.question("What is your date of birth ");

prime(date);

