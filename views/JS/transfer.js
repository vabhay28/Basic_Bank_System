let custLists = document.getElementById("cs_lists");
let crLists = document.getElementById("cr_lists");
let sEmail = document.getElementById("s_email");
let rEmail = document.getElementById("r_email");
let transferAmount = document.getElementById("transfer_amount");
let submit = document.getElementById("submit");
let successMsg = document.getElementById("success-msg");
let failedMsg = document.getElementById("failed-msg");

document.querySelector('#cList_s_name').addEventListener('input', optionSelects);
document.querySelector('#cList_r_name').addEventListener('input', optionSelectr);

function getCustomerList() {
    //custLists.innerHTML = "";
    for (let i = 0; i < custData.length ; i++) {
        let customer = JSON.parse(localStorage.getItem(custData[i].account_no));
        renderDataList(customer);
        renderRDataList(customer);
    }

}

function renderDataList(customer) {
    let listCustomers = `<option value="${customer.account_no}"></option>`;
    custLists.insertAdjacentHTML('beforeend', listCustomers);
}

function renderRDataList(customer) {
    let listRCustomers = `<option value="${customer.account_no}"></option>`;
    crLists.insertAdjacentHTML('beforeend', listRCustomers);
}


function optionSelects(e){
    let input = e.target;
    val = input.value;
    list = input.getAttribute('list');
    options = document.getElementById(list).childNodes;
    for(let i = 0; i < options.length; i++) {
        autofillInfos(val);
        break;
    }
}

function optionSelectr(e){
    let input = e.target;
    val = input.value;
    list = input.getAttribute('list');
    options = document.getElementById(list).childNodes;
    for(let i = 0; i < options.length; i++) {
        autofillInfor(val);
        break;
    }
}

function autofillInfos(id){
    let idx = custData.findIndex(x => x.account_no == id);
    sEmail.value = custData[idx].email;
}

function autofillInfor(id){
    let idx = custData.findIndex(x => x.account_no == id);
    rEmail.value = custData[idx].email;
}

  // function for amount transfer
  submit.addEventListener("click", function amountTransferFunc() {

    let s = document.getElementById("cList_s_name").value;
    let r = document.getElementById("cList_r_name").value;
    let sender = JSON.parse(localStorage.getItem(s));
    let receiver = JSON.parse(localStorage.getItem(r));
    if( s == sender.account_no && r == receiver.account_no){
        if(sender.balance > transferAmount.value){
            let bal1 = parseInt(sender.balance) - parseInt(transferAmount.value);
            let customer_s = {
                account_no: sender.account_no,
                name: sender.name,
                email: sender.email,
                balance: bal1
            }

            localStorage.setItem(sender.account_no, JSON.stringify(customer_s));
            let bal2 = parseInt(receiver.balance) + parseInt(transferAmount.value);
            let customer_r = {
                account_no: receiver.account_no,
                name: receiver.name,
                email: receiver.email,
                balance: bal2
            }
            localStorage.setItem(receiver.account_no, JSON.stringify(customer_r));

            successMsg.innerHTML = `<div class="alert alert-success" role="alert" >
            Your transaction is Successful.
          </div>`

          
        }
        else{
            failedMsg.innerHTML = `<div class="alert alert-danger" role="alert" >
            Your transaction can not be executed.
          </div>
          `
          
        }
    }
    // localStorage.setItem(custData[i].account_no, JSON.stringify(customer));
    console.log(transferAmount.value)
})


function loaders() {
    getCustomerList();
}

window.onload = loaders();