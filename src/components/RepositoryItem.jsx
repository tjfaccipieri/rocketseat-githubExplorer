export function RepositoryItem(props) {
  return (
    <li className="listinha">
      <strong>{props.repository?.name ?? 'nome padrão'}</strong>
      <p>{props.repository?.description ?? 'descrição padrão'}</p>
      <a href={props.repository?.link} target="_blank">
        {props.repository?.link ?? 'Acessar repositório...'}
      </a>
    </li>
  );
}

// ?? usado para definir um valor padrão caso não venha nada do props
// props.repository?.'algo'  => o ? serve como um validador..se for nulo, ele ignora e vai pra segunda opção.
