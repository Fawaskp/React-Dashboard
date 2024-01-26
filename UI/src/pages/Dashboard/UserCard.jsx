import React from "react";
import UserImage from "../../assets/media.png";
import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import FacebookIcon from "../../assets/facebook.png";

function UserCard() {
  return (
    <div className="min-w-[14rem] rounded-xl shadow-lg dark:bg-gray-800 bg-white flex flex-col items-center mt-6 md:mt-0 mb-4  sm:mb-0 mx-5">
      <div>
        <img className="w-full" src={UserImage} alt="User Image" />
      </div>
      <div className="w-4/6 flex flex-col items-center gap-2 pb-5">
        <h1 className="dark:text-white font-extrabold mt-2" >John doe</h1>
        <h1 className="text-gray-400 text-sm font-semibold">CEO</h1>
        <div className="w-95pt flex justify-between">
          <img className="w-6" src={FacebookIcon} alt="Facebook Icon" />
          <img className="w-6" src={InstagramIcon} alt="Instagram icon" />
          <img className="w-6" src={TwitterIcon} alt="Twitter Icon" />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
