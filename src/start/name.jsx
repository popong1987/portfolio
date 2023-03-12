import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import App from "../App";

const NameContainer = styled.h1`
position: absolute;
top: 50%;
left: 45%;
`

const Name = () => {
    const navigate = useNavigate()

    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container" onClick={() => navigate('/home')}>
          <div className="home"><h1 className="naam">LIESBETH <span className="keeptogheter">DE HAES</span></h1>
          <p className="subtitle">CRYPTOTRADER - BACKEND DEVELOPER</p>
          </div>
          
        </div>
    </div>
    )
}

export default Name;