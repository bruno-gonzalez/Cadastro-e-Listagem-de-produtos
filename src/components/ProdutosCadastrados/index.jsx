const ProdutosCadastrados = ({ nome, valor, disponivel }) => {
  return (
    <tr>
      <td> {nome}</td>
      <td> R${valor} </td>
      <td> {disponivel ? 'Sim' : 'Não'}</td>
    </tr>
  );
};

export default ProdutosCadastrados;
