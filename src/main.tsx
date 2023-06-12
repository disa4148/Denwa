import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import Button from "./shared/UI/button/Button";
import Input from "./shared/UI/input/Input";
import LogotypeAnimation from "./features/logotypeAnimation/LogotypeAnimation"  ;
import "src/app/index.scss";
import { Header } from "./widget/header/Header";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />

    <Button type='Ghost' text="Filled Light"/>
    <Button type='filledLight' text="Ghost"/>
    <Button type='filledDark' text="filledDark"/>
    <Button type='notAllowedDark' text="notAllowedDark"/>
    
    <Input type='text' placeholder="моча"/>
    <Input type='password' placeholder="гавно"/>
    <Header/>
    <LogotypeAnimation/>

  </React.StrictMode>
);
