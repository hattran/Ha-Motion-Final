import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#logo-corner",{transformOrigin:"center",fill:"none"});

const logoTL = gsap.timeline();

export function logoAnimation(){

    logoTL.from("#bird",{duration:3, drawSVG:"50% 50%"},"logo-start")
        .from("#tail",{duration:3, drawSVG:"60% 60%"},"logo-start")
        .from(".stripes",{duration:3, drawSVG:"0%"},"logo-start")
        .from("#border",{duration:3, drawSVG:"50% 50%"},"logo-start")
        .to("#logo-corner",{duration:2,fill:"#FFF", delay:"-1"})
        .from("#logo-corner",{duration:1,scale:"3", x:450, y:280});

    return logoTL;
}