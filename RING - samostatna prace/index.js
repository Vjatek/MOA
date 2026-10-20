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

//ulozime si tagy do konstant
//tohle je ten prepinac / checkbox
//dark choeckbox prepinani tmaveho a svetleho rezimu
const darkchck = document.getElementById("darkchck");

const evilchck = document.getElementById("evilchck");
//jeste se mi hodi obrazek
const TheOneRing = document.getElementById("TheOneRing");

//pridame posluchace udalosti - zmena
//pri zmene se spusti fukce zmenObrazek
evilchck.addEventListener("change", zmenObrazek);

darkchck.addEventListener("change", zmenRezim)

function zmenObrazek(event) {
    //kdyz to vleze sem, tak vime ze nastala zmena
    if(evilchck.checked) {
        //kdyz to spadne sem, muselo to byt z OFF->ON
        TheOneRing.src = "./TheOneRingDemon.png";
    } else {
        //kdyz to spadne sem, muselo to byt z ON->OFF
        TheOneRing.src = "./TheOneRing.png";
    }   
}
function zmenRezim(event) {
    if (darkchck.checked) {
        // Zapne tmavý režim přidáním třídy na body
        document.body.classList.add("dark");
    } else {
        // Vypne tmavý režim odebráním třídy
        document.body.classList.remove("dark");
    }
}