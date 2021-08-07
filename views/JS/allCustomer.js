const tableRow = document.getElementById("table-row")

//let allCustomers = [];

function getCustomer() {
    tableRow.innerHTML = "";
    for (let i = 0; i < custData.length; i++) {
        let customer = JSON.parse(localStorage.getItem(custData[i].account_no));
        renderData(customer);
    }

}

function setCustomer() {
    // let customer = {
    //     account_no: "12021001",
    //     name: "Abhay",
    //     email: "abhay@gmail.com",
    //     balance: "20000"
    // }
    // localStorage.setItem("12021001", JSON.stringify(customer));
    // allCustomers = customer;
    for (let i = 0; i < custData.length; i++) {
    let customer = {
        account_no: custData[i].account_no,
        name: custData[i].name,
        email: custData[i].email,
        balance: custData[i].balance
    }
    localStorage.setItem(custData[i].account_no, JSON.stringify(customer));
}
}

function renderData(customer){
    let listCustomers = `
        <tr>
            <td>${customer.account_no}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.balance}</td>
            <td><button class="btn btn-info" id="${customer.account_no}">Details</Button></td>        
        </tr>    
        `;
    tableRow.insertAdjacentHTML( 'beforeend', listCustomers );
    // tableRow.appendChild(listCustomers);
    // tableRow.innerHTML = listCustomers;
}

function btnDetails(){
    for (let i = 0; i < custData.length; i++) {
    let btnDetail = document.getElementById(`${custData[i].account_no}`);
    btnDetail.onclick = function() {
        console.log(custData[i].account_no);
    };
    }
}


function loader(){
    setCustomer();
    getCustomer();
    btnDetails();
}

window.onload = loader;

