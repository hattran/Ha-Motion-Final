import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";
import {logoAnimation} from "./shield-logo.js";
import {mainscreenAnimation} from "./content/main-screen.js";
import {dashboardAnimation} from "./content/dashboard.js";
import {dashboardMalfunction} from "./content/dashboard.js";
import {mainscreenMalfunction} from "./content/main-screen.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
.add(mainscreenAnimation())
.add(dashboardAnimation())
.add(dashboardMalfunction())
.add(mainscreenMalfunction());

// instantiate GSDevTools with default settings
GSDevTools.create();