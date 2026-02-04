let MediaWeidth = window.innerWidth;
let logo = document.querySelector("#aboutLogo");
function Screen(){
    logo.style.display = "none";
}

if(MediaWeidth <= 600){
    Screen();
    console.log(MediaWeidth)
}