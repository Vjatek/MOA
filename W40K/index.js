if("serviceWorker" in navigator){
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

//ulozime si cele tagy do konstant
//tohle je ten prepinac / checkbox
const marineSwitch = document.getElementById("marineSwitch");
//jeste se mi hodi obrazek
const marineImg = document.getElementById("marineImg");

//pridame osluchace udalosti - zmena
//pri zmene se spusti funkce zmenObrazek
marineSwitch.addEventListener("change", zmenObrazek);

function zmenObrazek(event){
    //kdyz to vleze sem tak vime ze se stala zmena
    if(marineSwitch.checked){
        //kdyz to spadne sem, muselo to byt z OF->ON
        marineImg.src = "./Shooting.gif";
    }
    else{
        //kdyz to spadne sem muselo to byt z ON->OF
        marineImg.src = "./NotShooting.jpg";
    }
}