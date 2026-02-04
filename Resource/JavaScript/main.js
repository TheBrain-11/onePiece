let creatdivIn = document.querySelector("#container");
const navbar = document.querySelector(".navbar");
const colorjs = document.querySelectorAll(".colourjs")
let link
function create() {
    let imgURL = `Resource/image/nebula.jpg`;
    let text = `The Straw Hat Pirates are lured to Mushroom Island by the Foxy Pirates, who challenge them to a Davy Back Fight rematch. The Foxy Pirates have gotten stronger in the New World, and they now have Dojaku, an experienced shipwright, and Komei, a former Marine. In the first round, the Eating Contest, Luffy, Zoro, Sanji, Porche, and Hamburg gorge on a pile of mysterious`;
    let visit = 'https://onepiece.fandom.com/wiki/Adventure_of_Nebulandia';
    // creating div container... and adding attributes
    let Newcontainer = document.createElement("div");
    creatdivIn.appendChild(Newcontainer);
    Newcontainer.setAttribute("class", "movieslistno");
    // creating a links... and adding attributes
    let link = document.createElement("a");
    Newcontainer.appendChild(link);
    link.setAttribute("herf", `${visit}`);
    // creating image... and adding attributes
    let Newcontainerimg = document.createElement("img");
    link.appendChild(Newcontainerimg);
    Newcontainerimg.setAttribute("src", `${imgURL}`);
    // creating p container... and adding attributes
    let Newcontainerp = document.createElement("p");
    link.appendChild(Newcontainerp);
    Newcontainerp.setAttribute("class", "movieslistno");
    Newcontainerp.textContent = text;
}

// Siddhant's cretivity..........................................................................................................................

const navcolour = () => {
    navbar.style.background = "rgb(20, 20, 20)";      // function for setting other theme while scrolling
    colorjs.forEach((a) => {
        a.style.color = "white"
    });
}

const checklogin = () => {
    if (window.scrollY >= 84) {                 // on entering check positon
        navcolour()
    }
    else {
        navbar.style.background = "transparent";
        colorjs.forEach((a) => {
            a.style.color = "black"                 // defualt feature
        });
    }

}

window.addEventListener("scroll", () => {
    checklogin()                                   // work exicute
})

// ................................................................................................................................................... 