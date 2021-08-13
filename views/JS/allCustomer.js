const tableRow = document.getElementById("table-row")

//let allCustomers = [];

function getCustomer() {
    tableRow.innerHTML = "";
    for (let i = 0; i < custData.length; i++) {
        let customer = JSON.parse(localStorage.getItem(custData[i].account_no));
        renderData(customer);
    }

}



function renderData(customer){
    let listCustomers = `
        <tr>
            <td>${customer.account_no}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.balance}</td>
            <td><button type="buttpn"  class="btn btn-info" id="${customer.account_no}" data-toggle="modal" data-target="#popupcustomerdetails">Details</Button></td>        
        </tr>    
        `;
    tableRow.insertAdjacentHTML( 'beforeend', listCustomers );


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
    getCustomer();
    btnDetails();
}

window.onload = loader;

