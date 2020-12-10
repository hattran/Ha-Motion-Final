import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);


gsap.set("#logo-corner",{transformOrigin:"center",fill:"none"});
gsap.set("#hydra-logo",{transformOrigin:"center",scale:"3",x:450,y:280});

const logoTL = gsap.timeline();
const twistTL = gsap.timeline();

export function logoAnimation(){

    logoTL.from("#bird",{duration:2,drawSVG:"50% 50%"},"logo-start")
        .from("#tail",{duration:2,drawSVG:"60% 60%"},"logo-start")
        .from(".stripes",{duration:2,drawSVG:"0%"},"logo-start")
        .from("#border",{duration:2,drawSVG:"50% 50%"},"logo-start")
        .to("#logo-corner",{duration:2,fill:"#FFF",delay:"-1"})
        .from("#logo-corner",{duration:1,scale:"3",x:450,y:280});

    return logoTL;
}

export function logoTwist(){

    twistTL.to("#logo-corner",{duration:1,scale:"3",x:450,y:280})
            .to("#final-bg",{duration:1.5,fill:"#860000"},"twist")
            .to("#bird",{duration:1.5, morphSVG:"#skull",x:12,y:15},"twist")
            .to("#top-left",{duration:1.5, morphSVG:"#top-left-tentacle",x:12,y:15},"twist")
            .to("#top-right",{duration:1.5, morphSVG:"#top-right-tentacle",x:12,y:15},"twist")
            .to("#mid-left",{duration:1.5, morphSVG:"#mid-left-tentacle",x:12,y:15},"twist")
            .to("#mid-right",{duration:1.5, morphSVG:"#mid-right-tentacle",x:12,y:15},"twist")
            .to("#bot-left",{duration:1.5, morphSVG:"#bot-left-tentacle",x:12,y:15},"twist")
            .to("#bot-right",{duration:1.5, morphSVG:"#bot-right-tentacle",x:12,y:15},"twist")
            .to("#tail",{duration:1.5, morphSVG:"#skull",x:12,y:15},"twist")
            .to("#border",{duration:1.5, morphSVG:"#hydra-border"},"twist");

    return twistTL;
}