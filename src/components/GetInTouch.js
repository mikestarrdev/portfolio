import React from "react";

function GetInTouch() {
  return (
    <div className="text-center p-4 bg-[#86BBD8]">
      <div className="flex flex-col bg-white p-4 w-2/3 m-auto border border-[#5D90B1]">
        <h4 className="font-bold text-center m-auto">Follow me:</h4>
        <p className="flex flex-row m-2 border-2 border-black">
          <a href="https://github.com/personnamedmike" target="_">
            GitHub
          </a>
          {" | "}
          <a href="https://linkedin/in/mike-starr" target="_">
            LinkedIn
          </a>
          {" | "}
          <a href="https://twitter.com/starr_dev" target="_">
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
}

export default GetInTouch;
