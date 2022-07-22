import React from "react";
import githubLogo from "../img/tech-logos/github-icon.svg";
import openIcon from "../img/open-icon.png";
import cryptoPortal1 from "../img/crypto-portal-1.png";
import cryptoPortalChart from "../img/crypto-portal-chart.png";
import cryptoPortalForum from "../img/crypto-portal-forum.png";
import nftBuildUI from "../img/nft-buidl-ui.png";

function Projects() {
  return (
    <div className="bg-gradient-to-r from-[#5D90B1] to-[#86BBD8] p-2 lg:pb-10">
      <h2 className="text-2xl text-center m-2 pb-2">Projects</h2>
      {/* Projects div container */}
      <div className="flex flex-col md:flex-row lg:px-14 xl:px-32 justify-evenly text-center content-center">
        {/* start project 1 */}
        <div className="md:w-1/3 p-5 md:px-2 lg:px-5 m-0.5 border-4 border-[#2F4858] rounded-3xl md:rounded-l-3xl md:rounded-r-none bg-white overflow-y-auto h-96">
          <h3 className="text-xl font-bold">Crypto Portal</h3>
          <div className="flex-col flex justify-start ">
            <p className="flex flex-row align-center my-4 text-left">
              <a
                href="https://github.com/personnamedmike/Crypto-Portal"
                target="_"
              >
                <img src={githubLogo} alt="GitHub" target="_" width="27px" />
              </a>
              <a
                href="https://github.com/personnamedmike/Crypto-Portal"
                target="_"
              >
                <span className="mx-2 items-center">Source code</span>
              </a>
            </p>
          </div>
          <ul className="list-disc list-inside text-left">
            <li>
              Fullstack app utilizes CoinGecko API to display cryptocurrency
              prices, and a collection of forums
            </li>
            <li>
              Designed frontend using React, JavaScript, HTML5 and custom CSS
            </li>
            <li>
              Built API with Ruby on Rails, which serves up data stored on
              Postgresql database{" "}
            </li>
            <li>
              Utilized BCrypt to store password credentials and authenticate
              users when they login
            </li>
            <li>Manage database associations with Active Record</li>
            <li>
              Live cryptocurrency market cap and price data is pulled from
              CoinGecko API
            </li>
            <li>
              Users can create posts, leave comments and create forum Video
            </li>
          </ul>
          <p className="text-left font-bold text-xs md:text-sm underline text-center text-[#315771] border-2 border-gray-100 p-2 w-fit my-4 mx-auto">
            <a
              href="https://drive.google.com/file/d/1GFPKk4q6Fz2F1oRBtkMYcWsBTtJSyCFX/view"
              target="_"
              className="flex justify-center"
            >
              Click for video demo
              <img src={openIcon} width="15px" className="flex flex-row ml-2" />
            </a>
          </p>
          {/* image 1 */}
          <div className="mt-4 mb-2 border-2 border-gray-100">
            <img src={cryptoPortal1} alt="Crypto Portal screenshot" />
          </div>
          <p className="text-xs italic">Market cap data displayed onto UI</p>
          {/* Project #1, image 2 */}
          <div className="mt-4 mb-2 border-2 border-gray-100">
            <img
              src={cryptoPortalChart}
              alt="Crypto Portal chart feature screenshot"
            />
          </div>
          <p className="text-xs italic">
            Chart feature view of BTC. Time period can be adjusted
          </p>
          {/* Project #1, image 2 */}
          <div className="mt-4 mb-2 border-2 border-gray-100">
            <img
              src={cryptoPortalChart}
              alt="Crypto Portal chart feature screenshot"
            />
          </div>
          <p className="text-xs italic">
            Chart feature view of BTC. Time period can be adjusted
          </p>
          {/* Project #1,l image 3 */}
          <div className="mt-4 mb-2 border-2 border-gray-100">
            <img
              src={cryptoPortalForum}
              alt="Crypto Portal chart feature screenshot"
            />
          </div>
          <p className="text-xs italic">
            Users must be logged in to view and post to forum
          </p>
          <hr className="my-3" />
          <p className="flex flex-row align-center mt-4 justify-center">
            <a
              href="https://github.com/personnamedmike/Crypto-Portal"
              target="_"
            >
              <img src={githubLogo} alt="GitHub" target="_" width="27px" />
            </a>
            <a
              href="https://github.com/personnamedmike/Crypto-Portal"
              target="_"
            >
              <span className="mx-2 items-center">Source code</span>
            </a>
          </p>
        </div>
        {/* Start project #2 */}
        <div className="md:w-1/3 p-5 md:px-2 lg:px-5 m-0.5 border-4 border-[#2F4858] rounded-3xl md:rounded-none bg-white overflow-y-auto h-96">
          <h3 className="text-xl font-bold">NFT Buidl</h3>
          <p className="flex flex-row align-center my-4 text-left">
            <a href="https://github.com/personnamedmike/nft-buidl" target="_">
              <img src={githubLogo} alt="GitHub" target="_" width="27px" />
            </a>
            <a href="https://github.com/personnamedmike/nft-buidl" target="_">
              <span className="mx-2 items-center">Source code</span>
            </a>
          </p>
          <p className="text-left">
            This project was started at the ETH New York Hackathon. The goal was
            to allow users to upload a file and turn it into an NFT with less
          </p>
          <br />
          <p className="text-left">
            than 3 clicks. The uploaded file would be saved to IPFS via
            NFT.storage, then the user's NFT collection would be displayed onto
            the UI. Users would then be allowed to sell their NFT's on their
            favorite marketplace (OpenSea, Rarible, or wherever).
          </p>
          <p className="text-left">Completed:</p>
          <ul className="list-disc list-inside text-left mt-4">
            <li>Built UI with Next.js framework, React and JavaScript</li>
            <li>Configured Web3Modal and WalletConnect with Ethers.js</li>
          </ul>
          <p className="text-left">Still working on:</p>
          <ul className="list-disc list-inside text-left mt-4">
            <li>
              Integrate NFT.storage so users can permanently store images on
              IPFS
            </li>
            <li>Display users NFT collection on the app's UI</li>
            <li>Add functions to Solidity ERC721 smart contract</li>
            <li>Deploy to Ethereum mainnet</li>
            {/* Project #2, image 1 */}
            <div className="mt-4 mb-2 border-2 border-gray-100">
              <img src={nftBuildUI} alt="NFT Buidl UI" />
            </div>
            <p className="text-xs italic">Market cap data displayed onto UI</p>
            {/* Project #2, image 2 */}
            <div className="mt-4 mb-2 border-2 border-gray-100">
              <img src={null} alt="" />
            </div>
            <p className="text-xs italic">
              Chart feature view of BTC. Time period can be adjusted
            </p>
            {/* Project #2, image 3 */}
            <div className="mt-4 mb-2 border-2 border-gray-100">
              <img src={null} alt="" />
            </div>
            <p className="text-xs italic">
              Chart feature view of BTC. Time period can be adjusted
            </p>
          </ul>
          <hr className="my-3" />
          <p className="flex flex-row align-center mt-4 justify-center">
            <a href="https://github.com/personnamedmike/nft-buidl" target="_">
              <img src={githubLogo} alt="GitHub" target="_" width="27px" />
            </a>
            <a href="https://github.com/personnamedmike/nft-buidl" target="_">
              <span className="mx-2 items-center">Source code</span>
            </a>
          </p>
        </div>
        {/* start project 3 */}
        <div className="md:w-1/3 p-5 md:px-2 lg:px-5 m-0.5 border-4 border-[#2F4858] rounded-3xl md:rounded-l-none md:rounded-r-3xl bg-white overflow-y-auto h-96">
          <h3 className="text-xl font-bold">Personal Budget Tracker</h3>
          <p className="flex flex-row align-center my-4 text-left">
            <a
              href="https://github.com/personnamedmike/personal-budget-tracker"
              target="_"
            >
              <img src={githubLogo} alt="GitHub" target="_" width="27px" />
            </a>
            <a
              href="https://github.com/personnamedmike/personal-budget-tracker"
              target="_"
            >
              <span className="mx-2 items-center">Source code</span>
            </a>
          </p>
          <p className="text-left">
            Fullstack app where users can input and track their personal
            expenses
          </p>
          <ul className="list-disc list-inside text-left">
            <li>
              Lead team of 3 developers, designed the entire product, and
              delegated tasks to others
            </li>
            <li>
              Created backend with Ruby, Active Record, Sinatra and SQLite3
            </li>
            <li>Built frontend with React, JavaScript, HTML5 and CSS</li>
          </ul>
          {/* image 1 */}
          <div className="mt-4 mb-2 border-2 border-gray-100">
            <img src={cryptoPortal1} alt="Crypto Portal screenshot" />
          </div>
          <p className="text-xs italic">Market cap data displayed onto UI</p>
          {/* Project #3, image #2 */}
          <div className="mt-4 mb-2 border-2 border-gray-100">
            <img
              src={cryptoPortalChart}
              alt="Project #3, chart #feature screenshot"
            />
          </div>
          <p className="text-xs italic">
            Chart feature view of BTC. Time period can be adjusted
          </p>
          {/* Project #3, image #3 */}
          <div className="mt-4 mb-2 border-2 border-gray-100">
            <img
              src={cryptoPortalChart}
              alt="Crypto Portal chart feature screenshot"
            />
          </div>
          <p className="text-xs italic">
            Chart feature view of BTC. Time period can be adjusted
          </p>
          <hr className="my-3" />
          <p className="flex flex-row align-center mt-4 justify-center">
            <a
              href="https://github.com/personnamedmike/personal-budget-tracker"
              target="_"
            >
              <img src={githubLogo} alt="GitHub" target="_" width="27px" />
            </a>
            <a
              href="https://github.com/personnamedmike/personal-budget-tracker"
              target="_"
            >
              <span className="mx-2 items-center">Source code</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
