import styled from "styled-components";

export const ItemContainer = styled.div `
    width: 80%;

    h3 {
        font-size: 2rem;
        color: #fafafa;
    }

    p {
        font-size: 1rem;
        color: #fafafa60;
        margin-bottom: 1.25rem;
    }

    .container-link {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .remove, .repo {
        padding: 3px 6px;
        color: #fafafa;

        border: none;
        border-radius: .3rem; 
        cursor: pointer;
    }
    .remove:hover {
        filter: contrast(2);
    }

    .remove {
        background: #8B0000;
    }

    .repo {
        text-decoration: none;
        background: #000080;
    }

    hr {
        color: #fafafa60;
        margin: 1.25rem 0;
    }
`