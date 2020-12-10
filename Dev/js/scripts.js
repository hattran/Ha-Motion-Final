import {gsap} from "gsap";
// import {GSDevTools} from "gsap/GSDevTools";
import {logoAnimation} from "./shield-logo.js";
import {mainscreenAnimation} from "./content/main-screen.js";
import {dashboardAnimation} from "./content/dashboard.js";
import {malfunction} from "./content/dashboard.js";
import {logoTwist} from "./shield-logo.js";

// gsap.registerPlugin(GSDevTools);

var audio = document.getElementById("audio");

playMusic();

const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
.add(mainscreenAnimation())
.add(dashboardAnimation())
.add(malfunction())
.add(logoTwist());

function playMusic(){
    audio.play();
}

// instantiate GSDevTools with default settings
// GSDevTools.create();