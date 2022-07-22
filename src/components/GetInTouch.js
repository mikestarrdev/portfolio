import React from "react";

function GetInTouch() {
  return (
    <div className="text-center p-4 bg-[#33658A]">
      <div className="flex flex-col bg-white p-4 w-full md:w-fit m-auto border border-[#2F4858]">
        <h4 className="font-bold text-center m-auto">Follow me:</h4>
        {/* socials */}
        <div className="flex flex-row justify-center my-2">
          <div className="flex flex-col border-2 m-2 p-4">
            <a href="https://github.com/personnamedmike" target="_">
              GitHub{" "}
            </a>
          </div>
          <div className="flex flex-col border-2 m-2 p-4">
            <a href="https://linkedin/in/mike-starr" target="_">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col border-2 m-2 p-4">
            <a href="https://twitter.com/starr_dev" target="_">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
