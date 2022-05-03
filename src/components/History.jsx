import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";

import "./History.css";

const History = ({ backAction }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleRemove = (index) => {
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);
  };

  return (
    <section id="id-body">
      <div className="container">
        <div className="card-native mt-5">
          <div className="mb-4 mt-4 text-center primary-title">
            <span>
              <b>Lista de chamados</b>
            </span>
          </div>
          <div>
            <div className="content-scroll">
              {history?.map((ticket, index) => (
                <Accordion title={`${ticket.usuario} #${ticket.numero}`}>
                  <span>
                    <strong>Usuário: </strong> {ticket.usuario}
                  </span>
                  <br />
                  <span>
                    <strong>Telefone: </strong> {ticket.telefone}
                  </span>
                  <br />
                  <span>
                    <strong>Setor: </strong> {ticket.setor}
                  </span>
                  <br />
                  <span>
                    <strong>Prioridade: </strong> {ticket.prioridade}
                  </span>
                  <br />
                  <span>
                    <strong>Problema: </strong> {ticket.problema}
                  </span>
                  <br />
                  <span
                    className="text-danger outlined"
                    onClick={() => handleRemove(index)}
                  >
                    Remover
                  </span>
                </Accordion>
              ))}
            </div>

            <button
              className="btn button-full w-100 mt-4"
              onClick={() => backAction()}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
