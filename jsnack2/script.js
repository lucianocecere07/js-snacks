let parolaUno = prompt("inserisci la prima parola");
let parolaDue = prompt("inserisci la seconda parola");

if(parolaUno.length > parolaDue.length){
    console.log("la parola più corta è: " + parolaDue);
    console.log("la parola più lunga è: " + parolaUno);
} else if(parolaUno.length < parolaDue.length){
    console.log("la parola più corta è: " + parolaUno);
    console.log("la parola più lunga è: " + parolaDue);
} else {
    console.log(parolaUno + " e " + parolaDue + " sono lunghe uguali");
}