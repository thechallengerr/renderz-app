import React from 'react'
import { FooterWrapper,Copyright,Contact } from './Footer.style'
export default function Footer() {
  return (
      <>
          <FooterWrapper>
              <Copyright>
                  <span>© 2023 <a hred=''>FIFARenderZ</a> All rights Reserved</span>
              </Copyright>
              <Contact>
                  <span><a href=''>Privacy Policy</a> | <a href=''>Contact Us</a></span>
              </Contact>
        </FooterWrapper>
      </>
  )
}
