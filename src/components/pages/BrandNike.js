import React from 'react'

import styled  from 'styled-components'

const images = [
    {
        url:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30648388-71e0-4cd0-b2b3-72e5c458ec58/tatum-2-pf-basketball-shoes-8fp79D.png'
    },
    {
        url:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5b59e17-f478-498a-84ac-765ca94d5a49/air-jordan-1-low-shoes-6Q1tFM.png'
    },
    
]


const BrandWrapper = styled.div`
    width: 100%;
    padding: 50px 180px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
`;

const ShoeImg = styled.img`

`

const BrandNike = () => {
  return (
   <BrandWrapper>
   {
    images.map((shoe,i)=>{
        return <ShoeImg src={shoe.url} key={i}/>
    })
   }
   </BrandWrapper>
  )
}

export default BrandNike