// API TO SUBMIT EMERGENCY ALERT


const ALERT = document.getElementById("e-alert");



const submitAlert = ()=>{
    const eAlert = prompt("LNP 911! What's the emergency?");
    alert(eAlert);
    console.log(eAlert);
}





export  {submitAlert,ALERT};

