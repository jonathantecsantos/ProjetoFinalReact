import React from 'react';
import * as S from './styled';
import Header from '../header';


function Layout({children}){

    
    return(

         <S.wrapperLayout>
                <Header/>
                {children}
         </S.wrapperLayout>  
    )
}

export default Layout;