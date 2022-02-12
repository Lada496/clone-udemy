import React from "react";
import styled from "styled-components";
import LanguageIcon from '@mui/icons-material/Language';

// font-weight/line-height/font-size/color should be in body tag
const Footer = styled.div`
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
` 
const FooterSection = styled.section`
  padding: 2.4rem 3.2rem 0 3.2rem;
  background-color: #1c1d1f;
  color: #fff;
` 
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
` 
const FooterList = styled.ul`
  margin: 0 1.6rem 0 0;
  padding-left: 0;
  list-style: none;
` 
const FooterLink = styled.li`
  color: #fff;
  font-size: 1.4rem;
  text-decoration: none;
  padding: 0.4rem 0;

  &:hover {
  cursor: pointer;
  text-decoration: underline;
  }
` 

// btn size?
const LanguageSelectorBtn = styled.div`
  border: 1px solid #fff;
  color: #fff;
  justify-content: flex-start;
  padding: 0 1.2rem;
  width: 10rem;
  background-color: transparent;
  height: 4rem;
  position: relative;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
` 
const LanguageSpan = styled.span`
  margin-left: 0.4rem;
`
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6.4rem 0 3.2rem 0;
  color: #fff;
` 
const LogoLink = styled.a`
  display: block;
  cursor: pointer;
  width: 91px;
  height: 34px;
` 
const LogoImg = styled.img`
  width: 100%;
  height: auto;
` 
const Copyright = styled.div`
  padding: 0;
  font-size: 1.2rem;
` 

const FooterContainer = () => {
  return (
    <Footer>
      <FooterSection>
        <FooterTop>
          <FooterList>
            <li><FooterLink href="#">Udemy Business</FooterLink></li>
            <li><FooterLink href="#">Teach on Udemy</FooterLink></li>
            <li><FooterLink href="#">Get the app</FooterLink></li>
            <li><FooterLink href="#">About us</FooterLink></li>
            <li><FooterLink href="#">Contact us</FooterLink></li>
          </FooterList>
          <FooterList>
            <li><FooterLink href="#">Careers</FooterLink></li>
            <li><FooterLink href="#">Blog</FooterLink></li>
            <li><FooterLink href="#">Help and Support</FooterLink></li>
            <li><FooterLink href="#">Affiliate</FooterLink></li>
            <li><FooterLink href="#">Investors</FooterLink></li>
          </FooterList>
          <FooterList>
            <li><FooterLink href="#">Terms</FooterLink></li>
            <li><FooterLink href="#">Privacy policy</FooterLink></li>
            <li><FooterLink href="#">Cookie settings</FooterLink></li>
            <li><FooterLink href="#">Sitemap</FooterLink></li>
            <li><FooterLink href="#">Accessibility statement</FooterLink></li>
          </FooterList>
          <div>
            <LanguageSelectorBtn>
              <LanguageIcon />
              <LanguageSpan>English</LanguageSpan>
            </LanguageSelectorBtn>
          </div>
        </FooterTop>
        <FooterBottom>
          <div><LogoLink href="#"><LogoImg src="/images/footer/logo-udemy-inverted.svg"/></LogoLink></div>
          <Copyright>&copy; 2022 Udemy, Inc.</Copyright>
        </FooterBottom>
      </FooterSection>
    </Footer>
  );
};

export default FooterContainer;
