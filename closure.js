//here bank function returns a function
// const bank = owner => {
//     balance = 0;
//     return amount => {
//         balance += amount;
//         return balance;
//     }
// }
//In this, the example we create a function and in this function we returns another function.In future,we will work on this amount function. but balance is not defined in the amount function.we need to access balance variable from this inner function.

//when we declare a variable without declare var,let,const;this variable is a global variable even this variable lies in a function scope.so here balance is a global variable and we can access this variable from the outside of the function.but in this situation,we need a special variable which lives until the page alive,can be accessed from outside and can't overwrite from outside.global variable lives until the page alive;can be accessed from  outside; but it will be overwrite from outside.that's the problem.Local variable lives when the function is invoked and until the function dismissed;can't be accessed from outside;and can't be overwrite from outside.so it has also restriction to work in that situation.
//so,in this situation,js creates a closure scope.closure scope made the global variable to local variable(private) and gives us access the outer function's scope from an inner function.Now we can access this balance variable from the inner function and will work on it.this variable lives until the page alive and the most important things is we cannot overwrite this variable from outside.so now we will work on amount function any time and can access balance variable and the result will be stored in the clouse scope.we use it over and over again when we need.



//here bank function returns a object
const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const MofijBank = bank('Mofij');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(300));
console.log(MofijBank.deposit(200));
console.log(MofijBank.withdraw(100));
console.log(MofijBank.withdraw(100));
console.log(MofijBank.withdraw(200));