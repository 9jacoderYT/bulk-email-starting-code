import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="flex space-x-5  max-w-4xl mx-auto mb-10 m-5">
        <div className="navbar_components">
          <Link href="/">Home</Link>
        </div>
        <div className="navbar_components">Useage</div>
        <div className="navbar_components">
          <Link href="/bulkemail">Bulk Email</Link>
        </div>
        <div className="navbar_components">Bulk SMS</div>
        <div className="navbar_components">Instagram Followers</div>
      </div>
    </>
  );
}
