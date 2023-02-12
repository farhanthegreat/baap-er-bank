// step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw amount from input field
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    //2.5 also make sure to convert the input into as num 
    //3. get previous withdraw total 
    // step-3
    const WithdrawTotalElement = document.getElementById('withdraw-collection');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //step-5: set the value to total withdraw amount 
    WithdrawTotalElement.innerText = currentWithdrawTotal;
// step - 6
    const balanceTotalElement = document.getElementById('balance-collection');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6.5 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // step-7 : clear the input field
    withdrawField.value = '';



})