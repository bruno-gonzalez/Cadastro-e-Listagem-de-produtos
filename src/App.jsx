import { useState } from 'react';
import Formulario from './components/Formulario/index.jsx';
import ProdutosCadastrados from './components/ProdutosCadastrados/index.jsx';
import Cabecalho from './components/Cabecalho/index.jsx';

function App() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [ordenador, setOrdenador] = useState([]);

  console.log(listaProdutos);
  return (
    <>
      <Cabecalho />
      <div className="container">
        <Formulario
          aoCadastrar={(produto) =>
            setListaProdutos([...listaProdutos, produto])
          }
        />
        <div className="container my-5">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
                <th scope="col">Disponível</th>
              </tr>
            </thead>
            <tbody>
              {listaProdutos.map((produto) => (
                <ProdutosCadastrados
                  disponivel={produto.produtoDisponivel}
                  nome={produto.nomeProduto}
                  valor={produto.valorProduto}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
