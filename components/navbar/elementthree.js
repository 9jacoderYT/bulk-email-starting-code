import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SmsIcon from "@mui/icons-material/Sms";
import InstagramIcon from "@mui/icons-material/Instagram";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import FavoriteIcon from "@mui/icons-material/Favorite";

import MenuIcon from "@mui/icons-material/Menu";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Elementthree() {
  return (
    <>
      <div className="dropdown dropdown-bottom cursor-pointer md:hidden my-auto">
        <label tabIndex={0} className=" m-1">
          <MenuIcon className="my-auto ml-1 mt-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow bg-base-100 space-y-3 rounded-box w-52"
        >
          <div className="items-start bg-white p-2 mx-2 h-[100%]">
            <SidebarMenuItem link="" text="Home" Icon={HomeIcon} active />

            <SidebarMenuItem
              link="donate"
              text="Donate"
              Icon={FavoriteIcon}
              active
            />

            <SidebarMenuItem
              link="/#useage"
              text="Tutorial"
              Icon={CastForEducationIcon}
            />
            <SidebarMenuItem
              link="bulkemail"
              text="Bulk Email"
              Icon={ContactMailIcon}
            />
            <SidebarMenuItem link="bulksms" text="Bulk SMS" Icon={SmsIcon} />

            <SidebarMenuItem
              link="IGfollowers"
              text="IG Followers"
              Icon={InstagramIcon}
            />
          </div>
        </ul>
      </div>
    </>
  );
}
