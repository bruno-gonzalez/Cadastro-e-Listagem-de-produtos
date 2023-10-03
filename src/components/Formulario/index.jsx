import { useEffect, useState } from 'react';

const Formulario = ({ aoCadastrar }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descProduto, setDescProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [produtoDisponivel, setProdutoDisponivel] = useState(false);

  const aoEnviarFormulario = (evento) => {
    event.preventDefault();
    console.log('form enviado', nomeProduto, valorProduto, produtoDisponivel);
    aoCadastrar({
      nomeProduto,
      valorProduto,
      produtoDisponivel,
    });
  };

  return (
    <form
      className={`d-flex flex-column container`}
      onSubmit={aoEnviarFormulario}
    >
      <label htmlFor="nomeProduto">
        Informe o Nome do produto:
        <input
          required
          type="text"
          placeholder="Nome do produto"
          id="nomeProduto"
          className={'m-3'}
          onChange={(evento) => {
            setNomeProduto(evento.target.value);
          }}
        />
      </label>
      <label htmlFor="descProduto">
        Informe a descrição do produto:
        <input
          type="text"
          placeholder="Descrição do produto"
          id="descProduto"
          className={'m-3'}
          onChange={(evento) => {
            setDescProduto(evento.target.value);
          }}
        />
      </label>

      <label htmlFor="valorProduto" className={''}>
        Valor do produto(R$):
        <input
          required
          type="number"
          placeholder="Valor do produto"
          id="valorProduto"
          className={'m-3'}
          onChange={(evento) => {
            setValorProduto(evento.target.value);
          }}
        />
      </label>

      <div className={'d-flex align-items-center gap-5 py-3'}>
        O produto está disponível ?
        <label htmlFor="sim">
          Sim{' '}
          <input
            type="radio"
            id="sim"
            value="sim"
            name="disponivel"
            onChange={() => setProdutoDisponivel(true)}
          />
        </label>
        <label htmlFor="nao">
          Não{' '}
          <input
            checked
            type="radio"
            id="nao"
            value="nao"
            name="disponivel"
            onChange={() => setProdutoDisponivel(false)}
          />
        </label>
      </div>

      <button className={'btn btn-outline-dark w-50'} type="submit">
        Cadastrar produto
      </button>
    </form>
  );
};
export default Formulario;
