import React from 'react';
import * as S from './styled';

function Layout({children}){
    return(

         <S.wrapperLayout>
                <header>header</header>
                {children}
         </S.wrapperLayout>  
    )
}

export default Layout;