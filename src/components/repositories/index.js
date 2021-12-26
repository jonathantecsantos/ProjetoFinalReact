import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from "./styled";

const Repositories = () => {
    
        return <S.WrapperTabs
            selectedTabClassName = "is-selected"
            selectedTabPanelClassName ="is-selected">

                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <RepositoryItem 
                        name="App UEPB" 
                        linkToRepo="https://github.com/jonathantecsantos/Alunos-UEPB-TopicosEspeciaisEmBancoDeDados"
                        fullName="jonathantecsantos/Alunos-UEPB-TopicosEspeciaisEmBancoDeDados"></RepositoryItem>
                </S.WrapperTabPanel>
                <S.WrapperTabPanel>
                <RepositoryItem 
                        name="AngularFirebase" 
                        linkToRepo="https://github.com/jonathantecsantos/AngularFirebase"
                        fullName="jonathantecsantos/AngularFirebase"></RepositoryItem>
                </S.WrapperTabPanel>
        </S.WrapperTabs>
          
};

export default Repositories;