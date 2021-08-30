interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}

// usar ?? para definir um valor padrão caso não venha nada do props
// props.repository?.'algo'  => o ? serve como um validador..se for nulo, ele ignora e vai pra segunda opção.
