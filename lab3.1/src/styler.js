import styled, {css} from 'styled-components'

const buttonStyles = {
    fill: css`
        color:white;
        background: #0B58D1;
        width: 75px;
        height:100%;
        border-radius:50px;

        &:hover{
            background: #0E4EB5;
        }
    `,
    big: css`
        height:100%;
        margin-right: 22px;
        width: 137px;
        border-radius: 50px;

        &:hover{
            background: #F0F5F8;
        }
    `
  };

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F0F5F8;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`

export const Container = styled.div`
    background-color: #FFF;
    height: 54vh;
    width: 74vw;
    transform:translateY(-5%);
    border-radius: 30px;
    padding: 38px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

`

export const Right = styled.div`
    width: 48%;
    height: 75%;
    align-self: end
`

export const Input = styled.input`
    border: 1px solid #7E817F;
    border-radius: 5px; 
    width: 506px;
    height: 51px;
    margin-bottom: 8px;
    padding: 0px 18px;
    font-size: 17px;
    box-sizing: border-box;
`

export const Button = styled.button.attrs(props => ({
    type: props.type || 'default'
  }))`
    background: none;
    border: 0;
    color: #0B58D1;
    font-weight: bold;
    cursor: pointer;
    ${props => buttonStyles[props.type]}
`

export const Info = styled.div`
    margin-top: 40px;
    font-size: 15px;
`

export const ButtonContainer = styled.div`
    margin-top: 45px;
    height: 40px;
    display: flex;
    justify-content: flex-end;
`

export const Footer = styled.div`
    width:74vw;
    display:flex;
    justify-content: space-between;
    select{
        width: 200px;
        background:none;
        border:0px;
        padding: 5px;
        border-radius: 5px;
        &:hover{
            background: #E2E7EB;
        }
    }
`

export const Nav = styled.div`
    a{
        margin: 0 20px;
        text-decoration: none;
        color:black;
        font-size: 12px;
    }
`