function refrain() {
    let words = "";
    words += "This is Halloween, this is Halloween\n"
    words += "Pumpkins scream in the dead of night.\n"
    words += "This is Halloween, everybody make a scene.\n"
    words += "Trick or treat 'til the neighbors gonna die of fright\n"
    words += "It's our town, everybody scream\n"
    words += "In this town of Halloween.\n"
    return words;
}

    let r = refrain();
 
function song(){

    console.log("\n");
    console.log("I am the one hiding under your bed");
    console.log("Teeth ground sharp and eyes glowing red");
    console.log("I am the one hiding under your stairs");
    console.log("Fingers like snakes and spiders in my hair");
    console.log("Round that corner, man hiding in the trash can");
    console.log("Something's waiting now to pounce and how you'll scream");
    console.log("This is Halloween, red and black, slimy green");
    console.log("Aren't you scared? Well, that's just fine");
    console.log("\n");

    console.log(r);

}


function handleClick() {
    song();
  }

let button = document.getElementById("song");
// I prefer button.onclick = handleClick; but...
button.addEventListener("click", handleClick);