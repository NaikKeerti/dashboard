import React  from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Header  from '../components/shared/Header'
import Navbar from "./shared/Navbar";
import { GlobalStyle  } from '../GlobalStyles';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Men from './pages/Men';
import Women from './pages/Women';
import Footer from './shared/Footer';
import TickerWrapper from './shared/Ticker';
import BrandNike from './pages/BrandNike';

const UserDashboard =()=>{
    return(
        <BrowserRouter>
          <GlobalStyle/>
          <TickerWrapper/>
          <Header />
          <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path="/brands" element={<Brands />}>
                    <Route path="/brands/nike" element={<BrandNike />} />
                    <Route path="/brands/adidas" element={<BrandNike />} />
                </Route>
                <Route path='/men' element={<Men/>}/>
                <Route path='/women' element={<Women/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
       
    )

}

export default UserDashboard;
