import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";
import {mainscreenAnimation} from "./content/main-screen.js";
import {logoAnimation} from "./shield-logo.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
.add(mainscreenAnimation());

// instantiate GSDevTools with default settings
GSDevTools.create();