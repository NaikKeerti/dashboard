import React from 'react'
import styled  from 'styled-components';
import {NavItemList} from '../constant';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';



const NavBarWrapper = styled.div`
  width: 100%;
  padding: 5px;
`;

const NavList = styled.ul`
width:90%;
margin: 0 auto;
 display: flex;
 justify-content:space-between ;
 list-style-type: none;
 color: #313131;
 font-weight: 600;

`;
const ListItems = styled.li`
   padding: 10px;
   font-size: 22px;
   cursor: pointer;
   text-transform: lowercase;
   &&:hover{
    color: gray;
   }

`;


 const Navbar = () => {
  return (
   <NavBarWrapper>
    <NavList>
    {NavItemList?.map((item) => (
          <ListItems key={item.id}>
            <NavLink to={item.url} style={{color:'#313131',textDecoration:'none'}}>
              {item.name}&nbsp;<FontAwesomeIcon icon={faAngleDown} style={{fontSize:'18px',color:'#313131'}}/>
            </NavLink>
          </ListItems>
        ))}
    </NavList>

   </NavBarWrapper>
  )
}
export default Navbar;
