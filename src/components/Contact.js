import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col my-5 mx-auto align-center justify-center text-center p-3 bg-[#F6AE2D]">
      <h1 className="text-3xl m-auto">Contact:</h1>

      <h3 className="text-1xl m-auto my-2">
        Hire me, work with me, leave suggestions, comments, concerns, harsh
        criticism (no hard feelings)
      </h3>
      <div className="flex-col flex">
        <form className="bg-white m-auto p-3">
          <label>
            Enter name:{" "}
            <input
              className="bg-gray-100 r-md border-2 rounded m-2 align-left"
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
            />
          </label>
          <br />
          <label>
            Message
            <input
              className="bg-gray-100 r-md border-2 rounded m-2"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Contact;
