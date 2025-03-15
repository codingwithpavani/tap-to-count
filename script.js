let counter = document.getElementById("counter");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");

let count = 0;

function updateColor(){
    if(count<0){
        counter.style.color="red";
    }else if(count>0){
        counter.style.color="green";

    }else{
        counter.style.color="black";

    }
}
increment.addEventListener('click',function(){
    count++;
    counter.textContent = count;
    updateColor();
})


decrement.addEventListener('click',function(){
    count--;
    counter.textContent = count;
    updateColor();
})

reset.addEventListener('click',function(){
    count = 0;
    counter.textContent = count;
    updateColor();
})