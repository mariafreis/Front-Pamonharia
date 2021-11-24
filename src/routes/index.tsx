import React from "react";
import { Switch, Route } from "react-router-dom";
import { Estoque } from "../pages/Estoque";
import { Financas } from "../pages/Financas";
import { Inicio } from "../pages/Inicio";
import { Login } from "../pages/Login";
import { Pessoas } from "../pages/Pessoas";
import { Rastreamento } from "../pages/Rastreamento";
import { Usuarios } from "../pages/Usuarios";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Login} path="/" exact />
      <Route component={Inicio} path="/inicio" />
      <Route component={Estoque} path="/estoque" />
      <Route component={Financas} path="/financas" />
      <Route component={Pessoas} path="/pessoas" />
      <Route component={Usuarios} path="/usuarios" />
      <Route component={Rastreamento} path="/rastreamento" />
    </Switch>
  );
};
