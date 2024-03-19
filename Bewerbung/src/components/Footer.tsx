import React from "react";
import email from "../assets/emailnew.jpg";
import phone from "../assets/phonenew.jpg";
import insta from "../assets/insta.jpg";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="flex flex-col md:flex-row-reverse w-10/12 gap-20 justify-between mx-auto py-20">
          <div className="flex flex-col gap-5 items-center md:items-end md:text-right md:w-1/2">
            <h3 className="H3">Thomas Feyerl</h3>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites{" "}
              <br />
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start">
            <h3 className="H3">Contact</h3>
            <div className="flex gap-10 scroll-m-20" id="contact">
              <a className="iconhover" href="mailto:t.feyerl@gmail.com">
                <img src={email} alt="e-mail" />
              </a>
              <a className="iconhover" href="tel:+06604342292">
                <img src={phone} alt="phone-number" />
              </a>
              <a
                className="iconhover"
                href="https://instagram.com/_thomas_feyerl?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr "
              >
                <img src={insta} alt="instagramlink" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center py-10">
          © Copyright 2023. Made by
          <span className="font-semibold"> Thomas Feyerl</span>
        </p>
      </footer>
    </>
  );
};
