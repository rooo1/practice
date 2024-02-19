const tt = document.querySelector(".clock");

setInterval(function(){
    tt.innerHTML = new Date().toLocaleTimeString()
},1000)
