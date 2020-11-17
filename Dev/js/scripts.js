import {gsap} from "gsap";

import {loadingAnimation} from "./animate.js"

const mainTL = gsap.timeline();
mainTL.add(loadingAnimation());