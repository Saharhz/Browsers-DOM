document.body.style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").innerHTML = "Sahar";
document.getElementById("fav-food").innerHTML = "Pesto Pasta";
document.getElementById("hometown").innerHTML = "Shiraz";


addClass();
    function addClass() {
         const information = document.querySelectorAll("li");
           information.forEach(function (i) {
              i.classList.add('item');
        })
}