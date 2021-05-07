import logo from './logo.svg';
import './App.css';
import Card from "./card.js";
function App() {
  const itens = [
    {titulo:"joao", desc:"sou um arquiteto", classf:4},
    {titulo:"rafael", desc:"eu sei voar", classf:2},
    {titulo:"gabriel", desc:"sou o gabigol", classf:5},
    {titulo:"ananias", desc:"sou meio arquiteto", classf:4},
    {titulo:"jeova", desc:"sou dois arquitetos", classf:3}];
  return (
      <div>

      {itens.map((item) => (<Card titulo={item.titulo} descricao={item.desc} classificacao={item.classf}/>))}

      </div>
  );
}

export default App;