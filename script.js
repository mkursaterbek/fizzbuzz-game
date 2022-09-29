let monitor = document.querySelector("#monitor")
let counter = 0;

let timer = setTimeout(asd, 1000)


function asd (stop) {

    for (let i = 0; i<20 ; i++){
        counter++
        monitor.innerHTML=counter
        return counter=stop 
}
}
asd(50)