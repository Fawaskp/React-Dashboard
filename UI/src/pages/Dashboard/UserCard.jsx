import React from "react";
import UserImage from "../../assets/media.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import FacebookIcon from "../../assets/facebook.png";

function UserCard() {
  return (
    <div className="min-w-[13rem] rounded-xl shadow-lg bg-white flex flex-col items-center mb-3 sm:mb-0 mx-5">
      <div>
        <img className="w-full" src={UserImage} alt="User Image" />
      </div>
      <div className="w-2/5 flex flex-col items-center gap-2 pb-5">
        <h1 className="font-bold" >John doe</h1>
        <h1 className="text-gray-400 text-sm font-semibold">CEO</h1>
        <div className="w-full flex justify-between">
          <img className="w-5" src={FacebookIcon} alt="Facebook Icon" />
          <img className="w-5" src={InstagramIcon} alt="Instagram icon" />
          <img className="w-5" src={TwitterIcon} alt="Twitter Icon" />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
