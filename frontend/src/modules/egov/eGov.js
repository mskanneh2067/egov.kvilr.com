// API TO GET NAMES OF ALL GOVERNMENT MACs


const MACs = document.getElementById("macs");



const getMACs = ()=>{
    const macs = prompt("Please enter the name of the Government Ministry, Agency or Commission");
    alert(macs);
    console.log(macs);
}





export  {getMACs,MACs};