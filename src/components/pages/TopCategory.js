import React from 'react'
import styled  from 'styled-components'
import {CategoryList} from '../constant';



const Container = styled.div`
   width:100%;
   padding: 40 10px;
   display:  flex;
   flex-direction: column;
   row-gap: 20px;
   margin-top: 40px;
`
const CategoryWrapper = styled.div`
   width:100%;
   display:  flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
`

const Cards = styled.img`
    border: 1px solid transparent;
    border-radius: 25px;
    width: 400px;
    height: auto;


`;

const Title = styled.div`
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    color: #f7776a;
`;
const Line = styled.div`
    border-top: 0.5px solid lightgray;;
`;

const TopCategory = () => {
  return (
    <Container>
    <Title>TOP CATEGORIES</Title>
    <Line></Line>

    <CategoryWrapper>
        {
            CategoryList.map((list,i)=>{
                return <Cards src={list.url} key={i}/>
            })
        }

    </CategoryWrapper>
    <Line></Line>
    </Container>    
  )
}

export default TopCategory