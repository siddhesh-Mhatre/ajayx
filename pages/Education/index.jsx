import React from "react";
import Certificategallery from "../../components/Certificategallery";
import DegreeCard from "../../components/degreeCard";
import Certifacte from "../../components/SvgComponents/Certifacte";

const index = () => {
  return (
    <section className="container mx-auto">
      <div className="container  flex flex-wrap   mx-auto justify-center">
        <div className="text-center w-full lg:w-1/2 px-2 self-center">
          <h3 className="font-bold text-5xl text-center pb-4">Education</h3>
          <p className="text-4xl pb-4 font-semibold">
            Basic Qualification and Certifications
          </p>
          <p className="text-gray-500 text-xl pb-3 ">
            I actively participate in hackathons and other tech-related
            activities. Below are some of my major certifications.
          </p>
        </div>

        <div className=" lg:w-1/4 px-2">
          <Certifacte />
        </div>
      </div>

      <div className="py-28">
        <h3 className="font-bold text-5xl text-center pb-4">
          Degrees Received
        </h3>

        <DegreeCard />
      </div>
      <div className="">
        <h3 className="font-bold text-5xl text-center ">
        Certificate
        </h3> 
        <Certificategallery/>
      </div>
    </section>
  );
};

export default index;
