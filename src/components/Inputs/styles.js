import styled from "styled-components";

export const InputContainer = styled.div `
    width: 80%;
    height: 3rem;

    border: 1px solid #fafafa;
    border-radius: 1.25rem;

    input {
        width: 90%;
        height: 3rem;
        padding: 0 1rem;

        background: transparent;
        border: none;

        font-size: 1rem;
        color: #ffffff;
    }

    input:focus-visible {
        outline: none;
    }
`