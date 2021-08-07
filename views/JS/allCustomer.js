let customer = {
    account_no: "12021002",
    name: "Abhay",
    email: "abhay@gmail.com",
    balance: "20000"
}

let allCustomers = [customer]

//localStorage.setItem("12021002", JSON.stringify(customer))

for(let i = 12021001; i < 12021003; i++)
{
let customers = JSON.parse(localStorage.getItem(i));
console.log(customers.name)
console.log(customers.account_no)
console.log(customers.email)
console.log(customers.balance)
}