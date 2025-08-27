let addMoney = document.getElementById('addMoney')
addMoney.addEventListener('click', function(){
    let selected = document.getElementById('bankSelect').value
    let accountNumber = document.getElementById("accNumber").value
    let accNumber = parseInt(accountNumber) 
    let amountAdded = document.getElementById("amountAdded").value 
    let amount = parseInt(amountAdded)
   
    let pinNumber = document.getElementById("pinNum").value
     let pin = Number(pinNumber)
    // console.log(selected, accountNumber, amount, pinNumber)

    let mainBalanced = document.getElementById("mainTaka").innerText
   
if(pin !== 1234 && accNumber !== accNums ){
    alert('valid number')
}if(accNumber !== 123456789){
    alert("valid a number")
}else{
    let addedAmount = Number(mainBalanced) + amount
    document.getElementById("mainTaka").innerText = addedAmount
}



    

})



document.getElementById("add-money").addEventListener('click', function(){
    document.getElementById('cashout').style.display = 'none'
    document.getElementById('addMoney').style.display = 'block'
})
document.getElementById("cash-out").addEventListener('click', function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashout').style.display = 'block'
})

document.getElementById("cashout-btn").addEventListener("click", function(){

    let cashOutNumber = document.getElementById("cashout-account-number").value

    let CashOutAmount = document.getElementById("cashout-amount").value 
    let CashOutAmountParse = parseInt(CashOutAmount)

    let CashOutPin = document.getElementById("cash-out-pin").value 
     
    let taka = document.getElementById("mainTaka").innerText
    let cashOutTaka = parseInt(taka)
     
    let remainingBalanced =  cashOutTaka - CashOutAmountParse
    document.getElementById("mainTaka").innerText = remainingBalanced
     
    console.log(remainingBalanced)


})