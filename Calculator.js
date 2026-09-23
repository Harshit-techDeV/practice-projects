let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        let value = button.innerText;
        if(value === "AC"){
            display.innerText = "0";
        }
        else if(value === "C"){
            display.innerText = display.innerText.slice(0,-1);
            if(display.innerText ===""){
                display.innerText ="0"
            }
        }
        else if(value === "="){
            try{
                display.innerText = eval(display.innerText);
            }catch{
                display.innerText ="Error"
            }
        }
        else{
            if(display.innerText === "0"){
                display.innerText = value;
            }else{
                display.innerText += value;
            }
        }
    });
});
