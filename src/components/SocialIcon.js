import React from "react";

function SocialIcon({ url, classId, iconName }) {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <ion-icon name={iconName} className={classId}></ion-icon>
      </a>
    </>
  );
}

export default SocialIcon;
