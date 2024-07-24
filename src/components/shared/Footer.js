import React from 'react'
import   styled  from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter,faFacebook,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  width :100%;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items:center ;
  padding: 60px;
  row-gap: 50px;

`;

const Logo = styled.img`
  width: 180px;
  margin-right: 20px; 
`;

const SocialLinks = styled.div`
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:35px;
    background-color: lightgray;
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


const  ListWrapper = styled.ul`
    list-style-type: none;
    font-size: 16px;
    padding: 20px 0;
    font-weight: 500;


`

const List = styled.li`

padding: 5px;
      cursor: pointer;
      &&:hover{
        text-decoration: underline;
      }
`

const Text = styled.div`
padding-top: 15px;
 font-size: 18px;
 text-align: left;
 font-weight: 500;
 line-height: 30px;

`
const Footer = () => {
  return (
    <>
    <FooterWrapper>
      <div style={{width:'400px'}}>
      <Logo src="https://meolaa.com/images/app_images/brand-logo.png" />
      <Text>
      Meolaa is a one stop shop for the best D2C Brands in India.
      We have collected the best and most reliable sellers all under one roof.
      </Text>

      </div>
      <div style={{fontWeight:600,fontSize:'18px',width:'250px'}} >

        MEOLAA
        <ListWrapper>
          <List>About</List>
          <List>Contact Us</List>
          <List>Blog</List>
          <List>Join as a Brand</List>
        </ListWrapper>
      </div>
      <div style={{fontWeight:600,fontSize:'18px',width:'250px'}} >
        QUICK LINKS
        <ListWrapper>
          <List>Orders & Shipping</List>
          <List>Returns & Refunds</List>
          <List>FAQs</List>
          <List>Privacy Policy</List>
          <List>Terms & Condition</List>
        </ListWrapper>
      </div>
           
            </FooterWrapper>
            <SocialLinks>
           <Icons><FontAwesomeIcon icon={faFacebook}/></Icons>
           <Icons><FontAwesomeIcon icon={faInstagram}/></Icons>
           <Icons><FontAwesomeIcon icon={faTwitter}/></Icons>
           <Icons><FontAwesomeIcon icon={faLinkedin}/></Icons>
           <Icons><FontAwesomeIcon icon={faYoutube}/></Icons>
           </SocialLinks>
               <CopyRights> copyrights@2024 </CopyRights>
               </>


  )
}

export default Footer;