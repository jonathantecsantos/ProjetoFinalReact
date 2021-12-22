import React from "react"; 
import * as S from './styled';

const Profile = () => {
    return <S.Wrapper>
        <S.WrapperContext>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/22827810?v=4" alt="avatar" />
            <S.WrapperInfoUser>
                <div>
                    <h1>Jonathan Santos</h1>
                    <S.WrapperUserName>
                        <h5>Username: </h5>
                        <a 
                        href="https://github.com/jonathantecsantos" 
                        target="_blank" 
                        rel="noreferrer">
                            user
                        </a>
                    </S.WrapperUserName> 
                </div>
                
                <S.WrapperStatusCount>
                    <div>
                        <h5>Followers</h5>
                        <span>5 </span>
                    </div>
                    <div>
                        <h5>Starreds</h5>
                        <span>5</span>
                    </div>
                    <div>
                        <h5>Followins</h5>
                        <span>5</span>
                    </div>            
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.WrapperContext>
               
    </S.Wrapper>;
};

export default Profile;