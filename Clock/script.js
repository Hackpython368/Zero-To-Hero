setInterval(() => {
    const time = new Date()
    let second = document.getElementById('seconds')
    second.innerHTML = time.getSeconds()

    let minutes = document.getElementById('minutes')
    minutes.innerHTML = time.getMinutes()

    let hours = document.getElementById('hour')
    if (time.getHours()>12) {
        hours.innerHTML = (time.getHours() - 12);
    }else{
        hours.innerHTML = time.getHours()
    }
}, 1000);





