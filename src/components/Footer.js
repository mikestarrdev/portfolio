import React from "react";

function Footer() {
  return (
    <footer>
      <div className="text-center p-12 bg-gray-200">
        <p>
          © 2022 Copyright
          <br />
          Mike Starr |{" "}
          <span className="underline underline-offset-1 font-semibold">
            <a href="mailto:imhs@protonmail.com">imhs@protonmail</a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
