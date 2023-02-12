//step-1: add eventListener to the deposit
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2: get hte deposit amount from the deposit input field.
    // for input field use .value to get the value inside of the field.
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-3: get the current deposit total
    //for element other than input, text-area use innerText to get the text.
    const depositTotalElement =  document.getElementById('deposit-collection');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step-4: add numbers to the total deposit.
    const currentDipositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDipositTotal;

    // step-5: get balance current total 
    const balanceTotalElement = document.getElementById('balance-collection');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calcualte current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7 clear the depositfield

    depositField.value = '';


})