import {gsap} from "gsap";
// import {GSDevTools} from "gsap/GSDevTools";

import {logoAnimation} from "./shield-logo.js"

const mainTL = gsap.timeline();
mainTL.add(logoAnimation());

//instantiate GSDevTools with default settings
// GSDevTools.create();