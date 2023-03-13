import styled from "styled-components";

export const ButtonContainer = styled.button `

    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 1.25rem;

    width: 80%;
    height: 3rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    font-weight: bold;
    transition: .8s;

    &:hover {
        cursor: pointer;
        background-color: #fafafa40;
        border: 1px solid #fafafa40;
        color: #fafafa;
    }
`