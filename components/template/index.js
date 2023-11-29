import { PhotoAlbum } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React from "react";

export default function Template() {
  return (
    <div className="border shadow-lg p-5 rounded-lg">
      <Alert severity="info" variant="filled">
        Select a Template for your Email (3 Template Options) *more coming soon
      </Alert>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-4">
        <div className="border border-2 rounded-lg shadow-lg m-5 p-3">
          <div className=" text-center border-b mb-3 pt-2">Template 1</div>
          <span className="bg-blue-200 text-center p-1 rounded-md">
            Greeting
          </span>
          <p className="mt-2 bg-blue-200 rounded-md p-1">Title</p>
          <p className="mt-2 bg-blue-200 rounded-md py-5 px-1">Body</p>
          <br />
          <span className="mt-1 bg-blue-200 rounded-md p-1">Best Regards</span>
        </div>

      

      
      </div>
    </div>
  );
}
