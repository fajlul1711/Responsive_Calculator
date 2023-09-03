const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialChar = ["%", "*", "/", "-", "+", "="]
let output = ""
let click = new Audio("clicksound.mp3")

//define function to calculate baswed on button clicked.
const calculate= (btnValue)=>{
    if(btnValue === "=" && output !== ""){
        //If output has '%', replace with '/100' before evaluating.
        output= eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output=""
    }else if(btnValue === "DEL"){
        //If Del button is clicked, removed the last character from the output
        output = output.toString().slice(0, -1)
    }else{
        //If output is empty and button is special character then return
        if(output === "" && specialChar.includes(btnValue)) return;
        output += btnValue
    }
    display.value=output;


    // console.log(btnValue);
}


//Add event listener to buttons , call calculater() on click.
buttons.forEach((button) => {
    //Button click listener calls calculate() with dataset value as argument
    button.addEventListener("click", (e)=> {
        click.play()
        calculate(e.target.dataset.value)})
});