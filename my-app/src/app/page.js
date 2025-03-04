"use client";
import { gsap } from "gsap";
import {useEffect, useRef} from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import text from "gsap/TextPlugin";

export default function Home() {
  const mainHeadingRef = useRef(null);
  const secondHeadingRef = useRef(null);

  gsap.registerPlugin(text);

 useEffect(() =>{
   const words = ["expenses","costly"];
      var timelines = gsap.timeline();


   if(mainHeadingRef.current){
   
      timelines.to(mainHeadingRef.current,{
          scale:3,
          autoAlpha:0,
          duration:5,
          ease:"expo.inOut",
          text:{
            value:"travel",
            delimiter:" "
          },
      })
      .to(mainHeadingRef.current,{
        duration:0,
        autoAlpha:1,
        text:{
          value:" ",
          delimiter:" "
        },
      })
      .to(mainHeadingRef.current,{
        scale:5,
        autoAlpha:0,
        duration:5,
        ease:"expo.inOut",
        text:{
          value:"expense",
          delimiter:" "
        }
      })
      .to(mainHeadingRef.current,{
        duration:0,
        autoAlpha:1,
        text:{
          value:" ",
          delimiter:" "
        },
      })
      .to(mainHeadingRef.current,{
        scale:7,
        autoAlpha:0,
        duration:5,
        ease:"expo.inOut",
        text:{
          value:"costly",
          delimiter:" "
        }
      })
    }
      // .to(mainHeadingRef.current,{autoAlpha:0},{scale:6, autoAlpha:1, duration:2,ease:"expoScale(25,1,power4.in)",text:{
      //        value:"expense",
      //        delimiter:" "
      //      },})
      // .to(mainHeadingRef.current,{autoAlpha:0})
      // .to(mainHeadingRef.current,{autoAlpha:0},{scale:4, autoAlpha:1, duration:2,ease:"expo.in",text:{
      //   value:"costly",
      //   delimiter:" "
      // },})
      // .to(mainHeadingRef.current,{autoAlpha:0})   }
      // for(let i=1; i < words.length;i++){
      //   gsap.to(mainHeadingRef.current, { text:words[i], scale:4, opacity:0, duration:3,ease:"expoScale(25,1,power4.in)"});
      // }
    },[]);
      //gsap.to(mainHeadingRef.current, { text:words[i], scale:4, opacity:0, duration:3,ease:"expoScale(25,1,power4.in)"});
      // if(mainHeadingRef.current){
      //   gsap.to(mainHeadingRef.current,{
      //   scale:4,
      //   opacity:0,
      //   duration:3,
      //   ease:"expoScale(25,1,power4.in)",
      // });}
      // timelines.fromTo(
      //   mainHeadingRef.currrent,{
      //     text:words[i - 1],opacity:0 },
      //     {text:"", opacity:1, ease:"none"}, 
      //     "<").to(mainHeadingRef.current, {text: words[i], duration:3.5, opacity:1});
      //   }
      //   else{
      //     timelines.fromTo(

      //     )
   

  // var timelines = gsap.timeline({repeat:-1});
  // if(mainHeadingRef.current){
  //   gsap.fromTo(mainHeadingRef.current,
  //     {transformOrigin:origin,scale:3},
  //       {
  //         scale:5,
  //         transformOrigin:origin,
  //         autoAlpha:0,
  //         duration:2,
  //         ease: "expoScale(25,1,power4.in)"
  //     })
  //   gsap.to(secondHeadingRef.current,{transformOrigin:origin,scale:0},
  //     {
  //     scale:5,
  //     delay:1,
  //     autoAlpha:0,
  //     duration:3,
  //     transformOrigin:origin,
  //     ease: "expoScale(25,1,power4.in)"
  //   })}}, []);
    //   scale:3,
    //   opacity:0,
    //   duration:2,
    //   text:{
    //     value:"expense",
    //     delimiter:" "
    //   },
    //   ease:"expoScale(25,1,power4.in)",
    // });
    // if(secondHeadingRef.current){
    //   gsap.to(secondHeadingRef.current,{
    //     scale:4,
    //     opacity:0,
    //     duration:3,
        
    //     ease:"expoScale(25,1,power4.in)",
    //   });
      
    // }
    // gsap.effects.swapText(mainHeadingRef.current,{text:"times"})
  
 

  return (
    <div className="min-h-screen w-screen overflow-x-hidden justify-items-center align-items-center bg-white p-3">
      <div className="justify-items-center align-items-center w-7xl h-170 border-1 bg-black rounded-3xl font-sans">
        <h1 ref={mainHeadingRef} className=" text-4xl m-70"></h1>  
    

      </div>
    </div>
    
  );

  

}


