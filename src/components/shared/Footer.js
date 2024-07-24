import React from 'react'
import   styled  from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter,faFacebook,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  width :100%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items:center ;
  padding: 120px 60px;
  flex-direction:column;
  row-gap: 50px;

`;

const Logo = styled.img`
  width: 180px;
  margin-right: 20px; 
`;

const SocialLinks = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap:35px;

        
`

const Icons = styled.span`
        font-size: 30px;
        color: #313131;
        &&:hover{
            color: gray;
        }               
`
const CopyRights = styled.div`
  background-color: #313131;
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  letter-spacing: 2px;
`



const Footer = () => {
  return (
    <>
    <FooterWrapper>
           <Logo src="https://meolaa.com/images/app_images/brand-logo.png" />
           <SocialLinks>
           <Icons><FontAwesomeIcon icon={faFacebook}/></Icons>
           <Icons><FontAwesomeIcon icon={faInstagram}/></Icons>
           <Icons><FontAwesomeIcon icon={faTwitter}/></Icons>
           <Icons><FontAwesomeIcon icon={faLinkedin}/></Icons>
           <Icons><FontAwesomeIcon icon={faYoutube}/></Icons>
           <Icons><FontAwesomeIcon icon={faLinkedin}/></Icons>
           <Icons><FontAwesomeIcon icon={faInstagram}/></Icons>
           </SocialLinks>
    </FooterWrapper>
               <CopyRights> copyrights@2024 </CopyRights>
               </>


  )
}

export default Footer;