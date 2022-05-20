// Implementar solución aquí



document.querySelector(".btn").addEventListener("click", function () {
    let backColor = colorGenerator()
    document.querySelector("body").style.backgroundColor = backColor;
    document.querySelector("h1").textContent = backColor;
    //console.log(colorGenerator());
})


function colorGenerator() {
    let colorsHex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let randomHex = "#";
    for (i = 0; i <= 5; i++) {
        //randomHex += colorsHex[Math.floor(Math.random)*6];
        randomHex += colorsHex[String(Math.floor(Math.random()*(colorsHex.length-1)))];
        // Math.floor((Math.random))
    }
    return randomHex;
}