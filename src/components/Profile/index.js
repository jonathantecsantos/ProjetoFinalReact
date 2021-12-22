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
                        <h3>Username:</h3>
                        <span>jonathantecsantos</span>
                    </S.WrapperUserName> 
                </div>
                
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5 </span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followins</h4>
                        <span>5</span>
                    </div>            
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.WrapperContext>
               
    </S.Wrapper>;
};

export default Profile;