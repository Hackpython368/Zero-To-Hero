function btnclick(a){
    if (a=='Custom') {
        let number = parseInt(prompt("Enter the percentage :"))
        if (number=='NaN') {
            alert("Enter a number please:")
        }else{
            let amount = parseInt(document.getElementById('bill').value)
            let ans = eval(amount*(number/100));
            console.log(ans);
            console.log(typeof(ans));
            console.log(amount);
            amount = eval(amount + ans);
            console.log(amount);
            
            let people = document.getElementById('people').value;
            let finalAmountperperson = eval(amount/people).toFixed(2);
            
            document.getElementById('amount-screen').innerHTML = "₹" + finalAmountperperson;
            document.getElementById('total-screen').innerHTML = "₹" + amount;
    }

    }else{
        let amount = parseInt(document.getElementById('bill').value)
        let ans = eval(amount*(a/100));
        console.log(ans);
        console.log(typeof(ans));
        console.log(amount);
        amount = eval(amount + ans);
        console.log(amount);
        
        let people = document.getElementById('people').value;
        let finalAmountperperson = eval(amount/people).toFixed(2);
        
        document.getElementById('amount-screen').innerHTML = "₹" + finalAmountperperson;
        document.getElementById('total-screen').innerHTML = "₹" + amount;
    }
}