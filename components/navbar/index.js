"use client";
import Link from "next/link";
import Elementthree from "./elementthree";
import ShoppingCart from "./shoppingcart";

export default function Navbar() {
  return (
    <>
      <div className="bg-blue-500 h-3 mb-1 "></div>

      <div className="bg-white align-middle">
        <div className="max-w-4xl bg-yellow- mx-auto flex">
          <span className="flex space-x-2">
            <Elementthree />
            <img
              src="https://avatars.githubusercontent.com/u/117041814?v=4"
              className="h-[50px] cursor-pointer"
              alt="logo"
            />
            <span className="my-auto">Mojomails by 9jacoder</span>
          </span>
          <div className="space-x-5  max-w-4xl mx-auto mb-10 m-5 hidden md:flex">
            <div className="navbar_components">
              <Link href="/">Home</Link>
            </div>
            <div className="navbar_components">
              <Link href="/donate">Donate</Link>
            </div>

            <div className="navbar_components">
              <Link href="/#useage">Useage</Link>
            </div>
            <div className="navbar_components">
              <Link href="/bulkemail">Bulk Email</Link>
            </div>
            <div className="navbar_components">
              <Link href="/bulksms">Bulk SMS</Link>
            </div>
            {/* <div className="navbar_components">Instagram Followers</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
