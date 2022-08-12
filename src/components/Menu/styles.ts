import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Cabecalho = styled.header`
  display: flex;
  height:5rem;
  background-color:${colors.primary};
  nav {
    width: 100%;
    display: flex;
    display: flex;
    align-items: center;
    div{
      display:flex;
      width:50%;
      justify-content: flex-end;
      h1{
        color:${colors.primary};
      }
      a {
          text-decoration: none;
          font-size: 1.2em;
          color: #fff;
        }
      ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
      }
    }
  }
    }
    
`