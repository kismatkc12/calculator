//Selectors
const allButtonsEventListener = document.querySelector(".calculator-keys");
const calculatorScreen =document.querySelector(".calculator-screen");
//Global variables
let keyNumber,tempStr = "",tempArr = [];


//Listening to all the buttons by attaching a event handler to parent container(Event bubbling concept)
allButtonsEventListener.addEventListener("click",(event)=>{
  let index= 0;
  
  if(event.target.value=="="){
    let expression = calculatorScreen.value;
    const numRegEx = /^[1-9]/;
    const operRegEx = /^[+\-*/]/;
    const regEx = /([+\-*/])/g;
   if(!numRegEx.test(expression)) {
     calculatorScreen.value = "Invalid";
     return
   }
    console.log(expression);

    tempArr = expression.split(regEx);

    for (let i = 0; i < tempArr.length; i++) {
       if(i=0){
         if(!(numRegEx.test(tempArr[i]) && 
             operRegEx.test(tempArr[i+1]))){
           calculatorScreen.value = "Invalid";
             }
       }
    }
    
    


    
    
    
    
    

    

    



    
    
    
    
    
    
    
    const total = eval(calculatorScreen.value)

    calculatorScreen.value = total;
    return;

    
  }
  

   //Displaying number to calculatir screen
  if(calculatorScreen.value){
    
  keyNumber = event.target.value;
  
   keyNumber = calculatorScreen.value + keyNumber ;
  calculatorScreen.value = keyNumber;
    
    
  
  
  
  
}else{
    
    keyNumber = event.target.value;
    calculatorScreen.value = keyNumber;
    
}


  
  
})








