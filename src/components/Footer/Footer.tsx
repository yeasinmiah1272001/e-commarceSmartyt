import Image from "next/image"
import { SocialIcon } from "../SocialIcon"
import { payment } from "@/images"

const Footer = () => {
  return (
    <div className=" bg-darkText text-themeWhite mt-4">
        <footer className="footer bg-darkText text-lightTexts p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer justify-between border-base-300 border-t px-10 py-4">
 <SocialIcon/>
  <nav className=" justify-between">
    <div className=" gap-3">
        <h1 className="text-xl">Pay us with your trusted services</h1>
     <Image src={payment} alt="image" className="w-96 mt-2"/>
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer