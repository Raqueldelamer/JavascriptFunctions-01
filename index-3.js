console.log("hello world");

function Halloween() {
    return "This is Halloween, this is Halloween";
}
function Pumpkins() {
    return "Pumpkins scream in the dead of night";
}

function Trick() {
    return "Trick or treat 'til the neighbors gonna die of fright";
}


function refrain() {
    let words = "";
    words += `Oh! ${Halloween()}\n`;
    words += `${Pumpkins()}\n`;
    words += `${Trick()}\n`;
    words += `${Halloween()}, Halloween\n`;
    words += `${Pumpkins()}\n`;
    words += `${Trick()}\n`;
    return words;
}

function song() {
    console.log("This is Halloween, this is Halloween");
    console.log("Pumpkins scream in the dead of night.");
    console.log("This is Halloween, everybody make a scene.");
    console.log("Trick or treat 'til the neighbors gonna die of fright");
    console.log("It's our town, everybody scream");
    console.log("In this town of Halloween.");

    let r = refrain();
    console.log(r);
    console.log("I am the one hiding under your bed");
    console.log("Teeth ground sharp and eyes glowing red");
    console.log("I am the one hiding under your stairs");
    console.log("Fingers like snakes and spiders in my hair");
    console.log("Round that corner, man hiding in the trash can");
    console.log("Something's waiting now to pounce and how you'll scream");
    console.log("This is Halloween, red and black, slimy green");
    console.log("Aren't you scared? Well, that's just fine");
}

song();