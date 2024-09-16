

const ninNumber = document.getElementById("nin")
const maxLength = 11;


function ninCheck(){
    let ninError = "NIN must not be less than 11 digit";
    if(ninNumber.value.length < maxLength){
        document.getElementById("nin_check").innerHTML = ninError;
        document.getElementById("nin_check").style.color = "red";
    } 
    return;
}


nin.addEventListener('input', function(e){
    nin.value = nin.value.replace(/\D/g, '')
    if(nin.value.length >= maxLength){
        nin.setAttribute('disabled', true);
        document.getElementById("nin_check").innerHTML = "✔✔✔";
        document.getElementById("nin_check").style.color = "green";
        alert("You have reach the Maximum number of character")
    }
})
