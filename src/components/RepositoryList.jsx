import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

// https://api.github.com/users/tjfaccipieri/repos

// não vai ser mais usado..tava estatico pra testar
// const repository = {
//   name: 'Nome legal',
//   description: 'Forms in react',
//   link: 'https://github.com/tjfaccipieri',
// };

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/tjfaccipieri/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  //se deixar o array no final vazio, o useEffect executa apenas uma vez... é um array de dependencia
  //se não passar o array no final do useEffect, ele entra em loop
  //se eu atualizar a variavel da dependencia do useEffect, ele entra em loop tbm

  console.log(repositories)
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {/* se fosse só olhar os repositorios e executar uma função, poderia rolar um forEach */}
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}
