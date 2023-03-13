import React from "react";
import { ItemContainer } from "./styles";

const ItemRepo = ({repo, handleRemoveRepo}) => {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="container-link">
                <a href={repo.html_url} rel="noreferrer" target="_blank" className="repo">Ver Repositório</a>
                <button type="button" className="remove" onClick={handleRemove}>Remover</button>
            </div>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;