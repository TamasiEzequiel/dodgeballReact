import { useEffect, useState } from "react";
import { BannerSlider } from "../Banner-slider/Banner-slider";

export const Slider = () => {

let [slides, setslides] = useState = (0)

    function showSlides() {
        var i;
        var slideIndex = 0;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 8000);
    }   
//  CORREGIR TODO ESTO

    useEffect(() => {
     
        showSlides();

    },[])

    return (
        <BannerSlider />
    )
}



