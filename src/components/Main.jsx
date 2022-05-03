import React, { useState } from "react";
import Register from "./Register";
import History from "./History";

import "./Register.css";
import "./Main.css";

const Main = () => {
  const [page, setPage] = useState(1);

  const backPage = () => {
    setPage(1);
  };

  const MenuComponent = () => (
    <section id="id-body">
      <div className="container">
        <div className="card-native mt-5">
          <section className="section-menu mt-5">
            <h1 className="section-title primary-title">Bem vindo!</h1>
            <h2 className="section-subtitle primary-title">
              Organize seus tickets
            </h2>
            <button
              type="button"
              class="btn button-full w-100 mb-4 mt-5"
              onClick={() => setPage(2)}
            >
              Cadastrar Ticket
            </button>
            <button
              type="button"
              class="btn button-full w-100 mb-5"
              onClick={() => setPage(3)}
            >
              Listar Ticket
            </button>
          </section>
        </div>
      </div>
    </section>
  );

  return (
    <section className="main-section">
      {page === 1 ? <MenuComponent /> : null}
      {page === 2 ? <Register backAction={() => backPage()} /> : null}
      {page === 3 ? <History backAction={() => backPage()} /> : null}
    </section>
  );
};

export default Main;
