if("serviceWorker" in navigator) {
    window.addEventListener("load", ()=> {
        navigator.serviceWorker.register("sw.js")
        .then(registration => {
            console.log("SW registerd");
        })
        .catch(error => {
            console.log("SW registration failed: ", error);
        });
    });
}

function hra() {
    //hracova volba
    //nalezneme vybrany checkbox a stahneme z nej value
    const hrac = document.querySelector("input[name='hrac']:checked").value;
    //kontrolni vypis
    console.log("hrac zvolil" + hrac);
    //volba pocitace - nahodna
    const volby = ["Kamen", "Nuzky", "Papir"];
    //nahodny index
    const index = Math.floor(Math.random() *volby.length);
    //kontrolni vypis
    console.log("pocitac zvolil: " + volby[index]);
    //vypis volby pocitace
    document.getElementById("cpu_label").innerText = volby[index];

let vysledek;    
//vyhodnoceni hry
//nejdrive switch podle pocitace
switch(volby[index]) {   
    case "Kamen":
        //nyni switch podle hrace
        switch(hrac) {   
            case "Kamen":
                vysledek = "Remiza";
                break;
            case "Nuzky":
                vysledek = "Prohra";
                break;
            case "Papir":
                vysledek = "Vyhra";
                break;
        }
        break;
    case "Nuzky":
        //nyni switch podle hrace
        switch(hrac) {   
            case "Kamen":
                vysledek = "Vyhra";
                break;
            case "Nuzky":
                vysledek = "Remiza";
                break;
            case "Papir":
                vysledek = "Prohra";
                break;
        }
        break;
    case "Papir":
        //nyni switch podle hrace
        switch(hrac) {   
            case "Kamen":
                vysledek = "Prohra";
                break;
            case "Nuzky":
                vysledek = "Vyhra";
                break;
            case "Papir":
                vysledek = "Remiza";
                break;
        }
        break;
}

//vypis vysledku
document.getElementById("result_label").innerText = vysledek;
}