import React from "react";
import Slider from "react-slick";
import MyCard from "./MyCard";
import "../css/card.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  swipeToSlide: true,

  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        swipeToSlide: true,

      }
    }
  ]


};



const ShowCard = () => {

  return (
    <>
      <div class="h">
        <h5 >Let's start learning, User</h5>
      </div>

      <div className="my-carousel">
        <Slider {...settings}>

          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />

        </Slider>
      </div>


    </>

  )

}

export default ShowCard;