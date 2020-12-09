import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashboardTL = gsap.timeline();

export function dashboardAnimation(){

    dashboardTL.to("#dashboard-bg",{duration:1.5,scale:15, transformOrigin:"center"})
                .to("#dashboard",{duration:0.5,alpha:0},"text-change")
                .from("#return",{duration:0.5,alpha:0},"text-change")
                .from("#dashboard-panel",{duration:2,drawSVG:"0"},"-=0.5")
                .from("#vertical-lines",{duration:0.5,scaleY:0},"grid-appear")
                .from("#horizontal-lines",{duration:0.5,scaleX:0},"grid-appear")
                .from(".octagons",{duration:0.5,drawSVG:"0"},"frames-appear")
                .from(".ovals",{duration:0.5,drawSVG:"0"},"frames-appear")
                .from(".dials",{duration:0.5,strokeWidth:0},"info-appear")
                .from(".centers",{duration:0.5,scale:0,transformOrigin:"center"},"info-appear")
                .from(".numbers",{duration:0.5,alpha:0},"info-appear")
                .from(".dashboard-text",{duration:0.5,scaleY:0},"info-appear")
                .from(".handles",{duration:0.5,alpha:0},"info-appear");

    return dashboardTL;
}