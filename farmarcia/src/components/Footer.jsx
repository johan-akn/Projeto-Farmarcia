import React from 'react'
import './Footer.css'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";

function Footer() {
  return (
    <div>
        <div className='footer'>
         {/* <img src="/images/footer.png" alt="" /> */}
         <SlSocialTwitter className='img-footer' />
         <SlSocialFacebook className='img-footer' />
         <SlSocialLinkedin className='img-footer' />
         <SlSocialInstagram className='img-footer' />
        </div>
    </div>
  )
}

export default Footer
