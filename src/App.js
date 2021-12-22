import React from "react";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/22827810?v=4" alt="avatar" />
          <h1>Nome</h1>
          <h3>Username:</h3>
          <span>Jonathan</span>
        </div>
        <div>
          <h4>Followers</h4>
          <span>
            5
          </span>
          </div>
          <div>
          <h4>
            Starreds
          </h4>
          <span>
            5
          </span>
          </div>
          <div>
          <h4>
            Followins
          </h4>
          <span>
            5
          </span>
          </div>
        <div>
          Repositorio
        </div>
        <div>
          Starreds
        </div>
      </Layout>
    </main>
  );
}

export default App;
