import React from "react";
import UserImage from "../../assets/media.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import FacebookIcon from "../../assets/facebook.png";

function UserCard() {
  return (
    <div className="rounded-xl shadow-lg bg-white flex flex-col items-center">
      <div>
        <img src={UserImage} alt="User Image" />
      </div>
      <div className="w-3/5 flex flex-col items-center gap-2 pb-5">
        <h1 className="font-bold" >John doe</h1>
        <h1 className="text-gray-400">CEO</h1>
        <div className="w-full flex justify-between">
          <img src={InstagramIcon} alt="Instagram icon" />
          <img src={TwitterIcon} alt="Twitter Icon" />
          <img src={FacebookIcon} alt="Facebook Icon" />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
