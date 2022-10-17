var character =
document.getElementById("character");
var block = document.getElementById("block");

function jump(){

    if(character.classList.add("animate") != "animate"){
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);

}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        //alert("u lose.");

    }
}, 10);

function spawn(){
    l1.classList.add("spawn");
    l1.style.display = 'block';
}
function spawn2(){
    l1.classList.add("spawn2");
    l1.style.display = 'block';
}
