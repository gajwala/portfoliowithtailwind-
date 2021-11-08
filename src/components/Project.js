import React from "react";

function Project({ description, iconName, iconClassName, projectName, url }) {
  return (
    <div className="relative">
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
              h-full
              rounded-md
              shadow-md
              px-10
              py-12
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1 hover:scale-110
            "
      >
        <ion-icon name={iconName} className={iconClassName}></ion-icon>
        <h2 className="pt-3 font-bold text-2xl">{projectName}</h2>
        <p className="pt-3">{description}</p>
        <a href={url} target="_blank" rel="noreferrer">
          {/* <ion-icon name={iconName} className={classId}></ion-icon> */}
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
