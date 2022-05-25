// const myObj = {}

// const myObj = new Object()

// var myFunc = new Function("return arguments[0] + arguments[1]")

// console.log(myFunc(12, 14))


// const users = []

// const users = new Array()
// users.push(12)
// users.push(23)
// console.log(users)

const account = {
    firstName:"John",
    lastName:"Doe",
    age:20,
    isAdmin:false,
    getFullName(){
        return this.firstName+ " " + this.lastName
    }
}

// console.log(account.getFullName())

// const keysOfAccount = Object.keys(account)
// console.log(keysOfAccount)

// const valuesOfAccount = Object.values(account)
// console.log(valuesOfAccount)

// account.firstName = "Alisa"

Object.defineProperty(account, "firstName", {
    writable:false,
    configurable:false,
    enumerable:false,
    value:"Alisa"
})

// delete account.firstName 

// const keysOfAccount = Object.keys(account)
// for(let i=0; i <keysOfAccount.length; i++){
//     console.log(keysOfAccount[i])
// }

// console.log(account.firstName)


// for(key in account){
//     console.log(key)
// }



// arr.forEach((val, index) => {
    //     console.log(val, index)
    // })
    
    // for(value of arr){
        //     console.log(value)
        // }
        
const arr = [12, 14,8, 15, 1 , 9, 14, 0]

// for(let i=0; i < arr.length; i++){
//     if(i == 0)continue;
//     console.log(arr[i])
//     // for(let j=0; j < 3;j++){
//     //     if(i === 4 && j==0){
//     //         break;
//     //     }
//     //     console.log("Test message:", j)
//     // }
// }

// const balance = 35000;

// switch(balance){
//     case 20000:
//     case 30000:
//     case 10000:
//         console.log("Daftar olaman");
//         break;
//     case 4000:
//         console.log("ruchka olaman");
//         break;
//     case 7000:
//         console.log("Avtobusda ketaman");
//         break;
//     default:
//         console.log("Uhlayman")
// }
