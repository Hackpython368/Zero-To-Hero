const lstofcolor = [ '#ccffff', '#f7e6ff','#f6f6ee','#809fff','#99e6ff','#e6e6ff'];
            
document.getElementById('add').addEventListener('click',()=>{
    let rand = Math.ceil(Math.random() * 6)
    let Mhead = prompt("Enter the heading :")
    let Step1 = prompt("Enter the subheading: ")
    const boxstr = `<div class="box taskcard" style="background-color:${lstofcolor[rand]}">
                    <h3>${Mhead}</h3>
                    <p> - ${Step1}</p>
                    <p> - ${Step1}</p>
                    <p> - ${Step1}</p>
                </div>`
    document.getElementById('main-container').insertAdjacentHTML('afterbegin',boxstr);
    
})
setInterval(() => {
    
    try {
        
        const taskcard = document.getElementsByClassName('taskcard')
        
        
        for (const element of taskcard) {
            element.addEventListener('dblclick',()=>{
                element.style.backgroundColor = "green";
                element.style.opacity = 0.2;
            })
        }

        for (const element of taskcard) {
            element.addEventListener('contextmenu',()=>{
                element.remove()
            })
        }
    } catch (error) {
        
    }
}, 1000);