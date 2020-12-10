import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";
import {logoAnimation} from "./shield-logo.js";
import {mainscreenAnimation} from "./content/main-screen.js";
import {dashboardAnimation} from "./content/dashboard.js";
import {dashboardMalfunction} from "./content/dashboard.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
.add(mainscreenAnimation())
.add(dashboardAnimation())
.add(dashboardMalfunction());

// instantiate GSDevTools with default settings
GSDevTools.create();