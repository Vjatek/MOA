//do kazdeho java scriptu index.js
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


function sayHello(){
if(document.getElementById("hello").innerText == "Hello World!"){
    document.getElementById("hello").innerText = "Ahoj světe!";
}
else{
    document.getElementById("hello").innerText = "Hello World!";
}
}
