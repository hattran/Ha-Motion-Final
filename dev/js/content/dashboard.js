import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.set("#air-progress-dial",{transformOrigin:"center",rotation:"270"});
gsap.set(".handles",{transformOrigin:"center"});

const dashboardTL = gsap.timeline();
const malfunctionTL = gsap.timeline();

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
                .from(".fade",{duration:0.5,alpha:0},"info-appear")
                .from(".draw",{duration:0.5,drawSVG:0},"info-appear")
                .from("#compass-inner-left",{duration:0.5,scaleY:0, transformOrigin:"bottom"},"info-appear")
                .from("#compass-inner-right",{duration:0.5,scaleY:0, transformOrigin:"top"},"info-appear")
                .from("#compass-inner-center",{duration:0.5,scaleY:0},"info-appear")
                .from("#air-progress-dial",{duration:.001,alpha:0})
                .fromTo("#air-progress-dial",{drawSVG:"0% 0%"},{duration:0.5,drawSVG:"0% 75%"})
                .fromTo("#air-progress-dial",{drawSVG:"0% 75%"},{duration:1,drawSVG:"0% 80%",yoyo:true,repeat:3},"dashboard")
                .fromTo("#air-handle",{rotation:"0"},{duration:1,rotation:"10",yoyo:true,repeat:3},"dashboard")
                .fromTo("#vertical-handle",{rotation:"0"},{duration:2,rotation:"90",ease:"back.out(1.7)"},"dashboard")
                .fromTo("#long-handle",{rotation:"0"},{duration:0.5,rotation:"-10",ease:"back.out(1.7)",yoyo:true,repeat:3},"dashboard")
                .fromTo("#big-handle",{rotation:"-19"},{duration:1,rotation:"-69",ease:"back.out(1.7)",yoyo:true,repeat:2},"dashboard")
                .fromTo("#zephyr-flat",{rotation:"0"},{duration:1,rotation:"2",yoyo:true,repeat:3},"dashboard")
                .to("#zephyr-flat",{rotation:"0"});

    return dashboardTL;
}

export function malfunction(){

    malfunctionTL.fromTo("#air-progress-dial",{duration:0.2,drawSVG:"0% 75%"},{duration:0.5,drawSVG:"0% 90%"})
            .fromTo("#air-progress-dial",{drawSVG:"0% 90%"},{duration:1,drawSVG:"0% 5%",yoyo:true,repeat:5},"malfunction")
            .fromTo("#air-handle",{rotation:"0"},{duration:1.5,rotation:"-250",yoyo:true,repeat:10},"malfunction")
            .fromTo("#vertical-handle",{rotation:"90"},{rotation:"270",yoyo:true,repeat:15},"malfunction")
            .fromTo("#long-handle",{rotation:"-10"},{duration:2,rotation:"-200",yoyo:true,repeat:5},"malfunction")
            .fromTo("#big-handle",{rotation:"-69"},{duration:1,rotation:"20",yoyo:true,repeat:5},"malfunction")
            .to(".dashboard-text",{duration:.2,alpha:0,yoyo:true,repeat:10,stagger:.05},"malfunction")
            .to("#zephyr-compass",{duration:.1,alpha:0,yoyo:true,repeat:70},"malfunction")
            .fromTo("#round-button-blue",{strokeWidth:0},{duration:.5,strokeWidth:7,yoyo:true,repeat:8},"-=15","button-animation")
            .fromTo("#return",{fill:"#FFF"},{duration:.5,ease:"none",fill:"#4AA8CC",yoyo:true,repeat:8},"-=15","button-animation")
            .to("#dashboard-display",{alpha:0},"-=10")
            .to("#dashboard-bg",{duration:1,scale:1,transformOrigin:"center",delay:"-10"})
            .to("#return",{duration:0.5,alpha:0,delay:-9},"text-change-2")
            .to("#dashboard",{duration:0.5,alpha:1,fill:"#FFF",delay:-9},"text-change-2")
            .fromTo("#error-dashboard",{alpha:0},{duration:.5,alpha:1,yoyo:true,repeat:18,delay:-8.5})
            .fromTo(".error",{alpha:0},{duration:.5,alpha:1,yoyo:true,repeat:10,delay:-8,stagger:.2})
            .to("#logo-corner",{duration:.05,fill:"none",yoyo:true,repeat:5,delay:-7})
            .to("#logo-corner",{duration:.05,fill:"none",yoyo:true,repeat:5,delay:-6})
            .to("#logo-corner",{duration:.05,fill:"none",yoyo:true,repeat:5,delay:-5})
            .to("#logo-corner",{duration:.05,fill:"none",yoyo:true,repeat:5,delay:-4})
            .to("#logo-corner",{duration:.05,fill:"none",yoyo:true,repeat:5,delay:-3})
            .to("#final-bg",{duration:1.5,scale:18, transformOrigin:"center",delay:-2});

    return malfunctionTL;
}