import React, { useState } from "react";

import "./Register.css";

import { grau } from "./Register.types";

const Register = ({ backAction }) => {
  const [user, setUser] = useState();
  const [telefone, setTelefone] = useState();
  const [setor, setSetor] = useState();
  const [prioridade, setPrioridade] = useState();
  const [problema, setProblema] = useState();

  const handleConfirm = () => {
    let actualHistory = JSON.parse(localStorage.getItem("history"));

    const lastIndexNumber =
      actualHistory && actualHistory?.length > 0
        ? Number(actualHistory[0].numero) + 1
        : "1";

    const animalInfo = {
      numero: lastIndexNumber,
      usuario: user,
      telefone: telefone,
      setor: setor,
      prioridade: prioridade,
      problema: problema,
    };

    if (!actualHistory) {
      actualHistory = [];
    }

    actualHistory.unshift(animalInfo);

    localStorage.setItem("history", JSON.stringify(actualHistory));

    backAction();
  };

  return (
    <section id="id-body">
      <div className="container">
        <div className="card-native mt-5">
          <div className="mb-4 mt-4 text-center primary-title">
            <span>
              <b>Registrar chamado</b>
            </span>
          </div>
          <div class="form-group">
            <label for="User">Usuário</label>
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="User"
                aria-describedby="User"
                placeholder="Ana"
                onChange={(evt) => setUser(evt.target.value)}
                value={user}
              />
            </div>

            <label for="Telefone">Telefone</label>
            <div class="input-group mb-3">
              <input
                className="form-control"
                id="Telefone"
                aria-describedby="Telefone"
                placeholder="999999999"
                maxLength={9}
                onChange={(evt) => setTelefone(evt.target.value)}
                value={telefone}
              />
            </div>

            <label for="Setor">Setor</label>
            <div class="input-group mb-3">
              <input
                className="form-control"
                id="Setor"
                aria-describedby="Setor"
                placeholder="Compras"
                onChange={(evt) => setSetor(evt.target.value)}
                value={setor}
              />
            </div>

            <label for="Prioridade">Prioridade</label>
            <select
              className="form-select mb-3"
              aria-label="Prioridade"
              onChange={(evt) => setPrioridade(evt.target.value)}
              value={prioridade}
            >
              <option selected disabled>
                Prioridade
              </option>
              {grau.map((grau) => (
                <option value={grau}>{grau}</option>
              ))}
            </select>

            <label for="Problema">Problema</label>
            <div class="input-group mb-3">
              <textarea
                className="form-control"
                id="Problema"
                aria-describedby="Problema"
                placeholder="Descrição do problema"
                onChange={(evt) => setProblema(evt.target.value)}
                value={problema}
                rows="6"
              />
            </div>

            <div className="container-right mt-4 mb-2">
              <button
                type="button"
                class="btn button-full w-100"
                onClick={() => handleConfirm()}
                disabled={
                  !(user && telefone && setor && problema && prioridade)
                }
              >
                Confirmar
              </button>
            </div>
            <button
              type="button"
              class="btn button-outlined w-100 mb-2"
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

export default Register;
