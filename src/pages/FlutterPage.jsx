import React from "react";
import Navbar from "../components/Navbar";

const FlutterPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className=" w-full h-[500px] rounded-md"
          src="https://gdsc-djsce.netlify.app/static/media/Flutter.a659fdb8919161df7056.png"
          alt=""
        />
        <div className=" bg-gray-50 shadow-lg w-[1390px] rounded-lg ml-[75px] absolute -mt-20 h-[220px] text-3xl text-blue-950 font-semibold ">
          <p className=" border-b-8 border-blue-700 py-5 px-4">
            Getting Started With Flutter - Flutter Festival GDSC DJSCE
          </p>
          <p className=" text-lg font-light text-gray-600 px-4 py-4">
            Now that Flutter festival is here, How does one get started with
            Flutter? Funny you ask because we have just the right thing for you.
            ✨ GDSC DJSCE, in collaboration with GDSC VIT Mumbai, GDSC VJTI,
            GDSC UMIT, and GDSCMIET presents, Shrihriday Bhagwat, a self-taught
            Flutter developer and the Founder and CEO of Codeaamy coming in to
            help you in getting started with Flutter
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlutterPage;
