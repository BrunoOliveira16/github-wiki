import { useState } from 'react';
import gitHubLogo from '../assets/logo-github.png'
import Button from '../components/Button';
import Footer from '../components/Footer';
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
      } else if(isExist) {
        alert('Repositório já adicionado')
      } else {
        alert('Repositório não encontrado')
      }
    }
  }

  const handleRemoveRepo = (id) => {
    let repoToRemoved = repos.filter((element) => element.id !== id);
    setRepos(repoToRemoved)
  }

  return (
  <>
    <Container>
      <img src={gitHubLogo} width={90} height={90} alt="logo do GitHub" />
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
    <Footer />
  </>
  );
}

export default App;
