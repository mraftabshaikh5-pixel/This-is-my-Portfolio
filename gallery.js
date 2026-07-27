const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("closeBtn");

function openImage(src){
    popup.style.display="flex";
    popupImg.src=src;
}

closeBtn.onclick=function(){
    popup.style.display="none";
}

popup.onclick=function(e){
    if(e.target===popup){
        popup.style.display="none";
    }
}

document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
        popup.style.display="none";
    }
});