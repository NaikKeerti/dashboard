import React from 'react'

import styled from 'styled-components'
import { Link ,Outlet} from "react-router-dom";
import {BrandItemList} from '../constant'



const BrandWrapper = styled.div`
    width:100%;
    height: auto;
    padding: 20px;
    background-color: #f2f2f2;
`;

const BrandList = styled.ul`
padding: 20px 40px;
 display: flex;
 column-gap: 40px;
 list-style-type: none;
 color: #313131;
 justify-content: space-between;
 align-items: center;
 text-align: left;

`;

const ListItems = styled.li`
   padding: 10px;
   font-size: 20px;
   font-weight: 600;
`;
const SubWrapper = styled.ul`
  display: flex;
  align-self: start;
  list-style-type: none;
  flex-direction: column;
  row-gap: 10px;

`
const SubList = styled.li`
   padding: 10px;
   font-size: 16px;
   font-weight: 500;
   color: #404040;
   cursor: pointer;
   &&:hover{
    color: #8c8c8c;
    text-decoration: underline;

   }
`



const Brands = () => {
  return (
    <BrandWrapper>
        <BrandList>
           {
            BrandItemList?.map((items,i)=>{
                return(
                    <ListItems key={i}>{items.category}
                    {
                      items.submenu?.map((sub,i)=>{
                        return <SubWrapper>
                          <Link to={sub.path} style={{color:'#313131',textDecoration:'none'}}>
                          <SubList>{sub.name}</SubList>
                          </Link>
                         
                        </SubWrapper>

                      })
                    }
                    </ListItems>
                    
                )
            })
           }
        </BrandList>
        <Outlet/>

    </BrandWrapper>
  )
}

export default Brands;