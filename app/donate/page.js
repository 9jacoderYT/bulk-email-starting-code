import { Favorite } from "@mui/icons-material";
import React from "react";

export default function DonatePage() {
  return (
    <div>
      <div className="mb-4">
     
          <img
            alt="profil"
            src="https://avatars.githubusercontent.com/u/117041814?v=4"
            className="object-cover rounded-full h-40 w-40 "
          />
      
      </div>
      9jacoder spends a lot of time developing and making software that helps
      people.
      <br />
      Please consider donating to his account on binance
      <Favorite className="text-red-400" />
      <br />
      <img src="/binance.png" />
    </div>
  );
}
