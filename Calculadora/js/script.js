const buttons = document.querySelectorAll("#buttons-container button")

const lastOperationText = document.querySelectorAll("last-operation");
const current
document.querySelectorAll()

class Calculator{
  constructor(lastOparation, currentOperation){
    this.lastOparation = lastOparation;
    this.currentOperation = currentOperation;
    this.currentSymbol= "";
  }
}

const calculator = new Calculator();

buttons.forEach((btn)=>{
  btn.addEventListener("click", (event) =>{
    const value = event.target.innerText;
    
    if(value >= 0 || value === "."){
      console.log(value)
      calculator.addDigit()
    }else{
      
    }
  })
})