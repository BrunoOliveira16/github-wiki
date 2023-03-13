import { useState } from 'react';
import gitHubLogo from '../assets/logo-github.png'
import Button from '../components/Button';
import Input from '../components/Inputs';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    const repoToRemoved = repos.filter(element => element.id === id);
    
    for(let i of repoToRemoved) {
      let index = repos.indexOf(i);
      repos.splice(index)
    }
  }

  return (
    <Container>
      <img src={gitHubLogo} width={72} height={72} alt="logo do GitHub" />
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
