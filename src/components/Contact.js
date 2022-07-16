import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col my-5 mx-auto align-center justify-center text-center">
      <h1 className="text-3xl m-auto">Contact me</h1>

      <h3 className="text-1xl m-auto my-2">
        Hire me, work with me, leave suggestions, comments, concerns, harsh
        criticism (no hard feelings)
      </h3>
      <div className="flex-col flex">
        <form>
          <label>
            Enter name:
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Contact;
