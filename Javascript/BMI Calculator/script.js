const form = document.querySelector("form")
form.addEventListener( "submit", function (e) {
    e.preventDefault()
    const height =document.querySelector("#height").value
    const weight=document.querySelector("#weight").value
    const result =document.querySelector(".result")
    const conclusion = document.querySelector(".conclusion")
    const bmi = (weight / ((height * height)/10000)).toFixed(2)

    result.innerHTML = `Your BMI is ${bmi}`
    if (bmi <  18.5){
        conclusion.innerHTML = "You are underweight" 
        conclusion.style.color = "Red"
    }else if (bmi >= 18.5 && bmi <=  24.9 ){
        conclusion.innerHTML = "You are normalwight"
        conclusion.style.color = "Green"
    }else{
        conclusion.innerHTML ="You are overweight"
        conclusion.style.color = "Red"
    }
})