import {gsap} from "gsap";

gsap.set("#center",{transformOrigin: "center"});
gsap.set("#orbital",{transformOrigin: "center"});
gsap.set(".planet",{transformOrigin: "center"});

const loadingTL = gsap.timeline();
loadingTL.from("#center",{duration:0.8,scale:0},"appear")
        .from("#ring",{duration:0.8,alpha:0,scale:.8,transformOrigin: "center"},"appear")
        .from("#percentage",{duration:0.8,alpha:0,scale:.8,transformOrigin: "center"},"orbitsAssembled")
        .from("#top-right",{duration:1,scale:0,ease: "back.out(2)"},"orbitsAssembled")
        .from("#top-left",{duration:1,scale:0,delay:.4,ease: "back.out(2)"},"orbitsAssembled")
        .from("#bottom-right",{duration:1,scale:0,delay:.3,ease: "back.out(2)"},"orbitsAssembled")
        .from("#tiny-left",{duration:1,scale:0,delay:.1,ease: "back.out(2)"},"orbitsAssembled")
        .from("#bottom-left",{duration:1,scale:0,delay:.2,ease: "back.out(2)"},"orbitsAssembled")
        .to("#center",{duration:1.5,scale:0.8},"loading")
        .to("#center",{duration:1.5,scale:1})
        .to("#center",{duration:1.5,scale:0.8})
        .to("#center",{duration:1.5,scale:1})
        .to("#center",{duration:1.5,scale:0.8})
        .to("#center",{duration:1.5,scale:1})
        .to("#center",{duration:1.5,scale:0.8})
        .to("#center",{duration:1.5,scale:1})
        .to("#center",{duration:1.5,scale:0.8})
        .to("#center",{duration:1.5,scale:1})
        .to("#orbital",{repeat:-1,duration:3,rotation:360},"loading");

export function loadingAnimation(){
    return loadingTL;
}