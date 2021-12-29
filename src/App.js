import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const githubState = useGithub();

  return (
        <Layout>
          {githubState.hasUser ? <>
            {githubState.loading ? (
                <p>Loadign</p>
               ) : (
                  <>
                    <Profile/>
                    <Repositories/>
                  </>
               )}
          
          </> : <div>
                Nenhum usuário pesquisado
            </div>}
          
              
        </Layout>
  );
};

export default App;
