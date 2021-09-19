import { React } from 'react';
import Triangle from './Triangle';
import Header from './Header/Header'; 

import '../styles/mainPage.css'
import Footer from './Footer';

export const MainPage = () =>
{

    return(  
		 
        <div className='main'>
			<div className='title'>
				<Header/> 
			</div>
			<div className='tri'>
				<Triangle/>
			</div>
			<Footer/>
			
        </div>
    )

}

export default MainPage;
