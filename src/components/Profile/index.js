import React from "react"; 
import useGithub from "../../hooks/github-hooks";
import * as S from './styled';

const Profile = () => {

    const { githubState } = useGithub();

    return <S.Wrapper>
        <S.WrapperContext>
            <S.WrapperImage src={githubState.user.avatar} alt="avatar" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h5>Username: </h5>
                        <a 
                        href={githubState.user.html_Url}
                        target="_blank" 
                        rel="noreferrer">
                            {githubState.user.login}
                        </a>
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h5>Company: </h5>
                        <span>
                            {githubState.user.company}
                        </span>        
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h5>Location: </h5>
                        <span>
                            {githubState.user.location}
                        </span>        
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h5>Blog: </h5>          
                        <a href={githubState.user.blog} target="_blank" rel="noreferrer">
                            {githubState.user.blog}
                        </a>  
                    </S.WrapperUserName> 
                </div>
                
                <S.WrapperStatusCount>
                    <div>
                        <h5>Followers</h5>
                        <span>{githubState.user.followers} </span>
                    </div>
        
                    <div>
                        <h5>Followins</h5>
                        <span>{githubState.user.following}</span>
                    </div>

                    <div>
                        <h5>Gists</h5>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h5>Repos</h5>
                        <span>{githubState.user.public_repos}</span>
                    </div>       
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.WrapperContext>
               
    </S.Wrapper>
};

export default Profile;