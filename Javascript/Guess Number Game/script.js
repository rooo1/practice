const submit = document.querySelector("#btn")
const number = document.querySelector("#number")
const result =document.querySelector(".hilow")
const previous_attemps = document.querySelector(".preAtt")
const attempts = document.querySelector(".attempts")
const guess = parseInt(Math.random()*100+1);
let attempt=10;
let pa = []
submit.addEventListener("click",function(e){
    let val= number.value;
    if (validnumber(val)){
        result.innerHTML = "Please enter a valid number from 1 to 100"
    }else{
        if (attempt > 0){
            if (val<guess){
                result.innerHTML = "Go High"
                result.style.background = "red"
            }else if (val>guess){
                result.innerHTML = "Go Low"
                result.style.background = "red"

            }else{
                result.innerHTML = "Your guess is right"
                result.style.background = "Green"

            }
            pa.push(Number(val))
            previous_attemps.innerHTML = pa
            attempt--
            attempts.innerHTML = "Remaining attempts : " + `${attempt}` 
        }else{
        attempts.innerHTML = `Game Over <br> You have used all attempts<br>Correct guess was ${guess}`
        }
    }
})
function validnumber(number){
    if (isNaN(number) || number<1 || number > 100){
        return true
    }
}
