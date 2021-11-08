import React from "react";
import Background from "../images/background.jpeg";
import ProfileImage from "../images/profle.jpg";
import SocialIcon from "./SocialIcon";
import Icons from "../constants/icons";

function Home() {
  return (
    <>
      <div className="absolute w-full min-h-screen">
        <div
          className="
        absolute
        z-0
        top-0
        w-full
        h-1/2
        bg-cover bg-bottom
        pt-20
        px-12
        text-white text-center
      "
          style={{
            backgroundImage: `url(${Background})`,
          }}
        ></div>
      </div>
      <div className="relative z-10 flex min-h-screen h-auto justify-center items-center">
        <div className="relative max-w-4xl">
          <div
            className="
            absolute
            z-10
            inset-0
            bg-gradient-to-r
            from-cyan-400
            to-emerald-400
            shadow-lg
            transform
            -skew-y-6
            sm:skew-y-0 sm:-rotate-6 sm:rounded-lg
          "
          ></div>
          <div
            className="
            relative
            z-20
            bg-white
            md:flex
            justify-between
            p-12
            shadow-lg
            rounded-lg
            w-full
            max-w-4xl
            transition
            duration-500
            ease-in-out
            transform
            hover:-translate-y-1 hover:scale-110
          "
          >
            <div className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10">
              <div>
                <h2 className="text-lg">Hello, I am</h2>
                <h1 className="pt-1 text-5xl font-bold text-gray-800">
                  Balachandraiah Gajwala
                </h1>
              </div>
              <p className="text-xl leading-relaxed">
                Working as a full stack web developer at <b>CISCO</b>
              </p>
              <div className="inline-flex text-xl text-gray-600 space-x-5">
                {Icons.map((name) => (
                  <SocialIcon
                    key={name.url}
                    url={name.url}
                    classId={name.classId}
                    iconName={name.iconName}
                  />
                ))}
              </div>
            </div>
            <img
              src={ProfileImage}
              alt=""
              className="
              flex-shrink-0
              w-80
              rounded-full
              border-6 border-white
              shadow-md
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
            "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
