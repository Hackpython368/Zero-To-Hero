let digitalstr = '';


setInterval(() => {
    let screen = document.getElementById('main-screen')
    screen.value = digitalstr;
}, 10);

function editdigitalstr(a){
    if (a=='d') {
        digitalstr = digitalstr.slice(0,(digitalstr.length-1))
    }else{
        digitalstr += a;
    }
}

document.getElementById('reset').addEventListener('click',()=>{
    digitalstr = ''
})

document.getElementById('calcu').addEventListener('click',()=>{
    try {
        digitalstr = eval(digitalstr);
    } catch (error) {
        digitalstr = "Error";
    }
})