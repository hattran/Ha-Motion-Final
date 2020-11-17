import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#shield-logo",{fill:"none"});

const logoTL = gsap.timeline();

export function logoAnimation(){

    logoTL.from("#bird",{duration:2, drawSVG:"100%"});

    return logoTL;
}