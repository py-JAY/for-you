const noButton = document.querySelector(".no")

noButton.addEventListener("mouseover",mouseHover)

function mouseHover(){
    const i = Math.floor(Math.random()*1000)+1;
    const j = Math.floor(Math.random()*1000)+1;

    noButton.style.left=i+"px";
    noButton.style.right=j+"px";
    noButton.style.top=j+"px";
    noButton.style.bottom=i+"px";
}