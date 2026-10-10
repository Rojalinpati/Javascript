const accountId=144553
let accountEmail="rojalin@765.com"
var accountPassword="123456"
accountCity="New York"
let accountState;

//accountId=2 // not allowed because accountId is a constant
accountEmail="gt@ng.com"
accountPassword="12345678"
accountCity="Los Angeles"

console.log(accountId);

/*
prefer not to use var:
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail, accountPassword, accountCity, accountState])