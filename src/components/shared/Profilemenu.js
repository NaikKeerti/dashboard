import React from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faHeart,faBell,faCartPlus} from '@fortawesome/free-solid-svg-icons';

const ProfileMenuWrapper = styled.div`
    width:auto;

`;

const ProfileList = styled.ul`
 display: flex;
 column-gap: 40px;
 list-style-type: none;
 color: #313131;

`;

const ListItems = styled.li`
   padding: 10px;
   font-size: 25px;
   cursor: pointer;

   &&:hover{
    color: gray;

   }
`;


const ProfileMenuItems = [
    {
        name:'User Profile',
        icon:faUser
    },
    {
        name:'Home',
        icon:faHome
    },
    {
        name:'Wishlist',
        icon:faHeart
    },
    {
        name:'Notifications',
        icon:faBell
    },
    {
        name:'Cart',
        icon:faCartPlus
    },

]

const ProfileMenu = () => {
  return (
    <ProfileMenuWrapper>
        <ProfileList>
           {
            ProfileMenuItems?.map((items,i)=>{
                return(
                    <ListItems key={i}><FontAwesomeIcon icon={items.icon}/></ListItems>
                )
            })
           }
        </ProfileList>

    </ProfileMenuWrapper>
  )
}

export default ProfileMenu;