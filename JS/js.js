//FUNÇÃO DE INPUT DA BUSCA
function busca(){
    let captar = document.getElementById('entradabuscar').value;
    console.log(captar);    
}

//OPÇÕES DA SELECTBOX DE CIDADES
let cidades_array = [];
cidades_array[0] = "<option value="+"brasil"+">BRASIL</option>";
cidades_array[1] = "<option value="+"fortaleza"+">FORTALEZA</option>";
cidades_array[2] = "<option value="+"recife"+">RECIFE</option>";
cidades_array[3] = "<option value="+"salvador"+">SALVADOR</option>";
let cidades = document.getElementById("selectbox").innerHTML = cidades_array.join('');

//BANCO DE DADOS PROVISÓRIO
//0: link imagem    1: titulo   2: descricao    3: classificacao
let dados = [];

//CAIXAS DE RESULTADOS DA BUSCA
let caixas_array = [];
caixas_array[0] = "<a href="+""+"><div id="+"resultado"+"><div id="+"foto"+">imagem</div><div id="+"conteudodivcaixa"+"><div id="+"titulodivcaixa"+">Marcos e Juliane Arquitetos</div><div id="+"descricaodivcaixa"+">descricao</div></div><div id="+"classificacao"+">estrelas</div></div></a>";
caixas_array[1] = "<div id="+"resultado"+"><div id="+"foto"+">imagem</div><div id="+"conteudodivcaixa"+"><div id="+"titulodivcaixa"+">titulo</div><div id="+"descricaodivcaixa"+">descricao</div></div><div id="+"classificacao"+">estrelas</div></div>";
caixas_array[2] = "<div id="+"resultado"+"><div id="+"foto"+">imagem</div><div id="+"conteudodivcaixa"+"><div id="+"titulodivcaixa"+">titulo</div><div id="+"descricaodivcaixa"+">descricao</div></div><div id="+"classificacao"+">estrelas</div></div>";
caixas_array[3] = "<div id="+"resultado"+"><div id="+"foto"+">imagem</div><div id="+"conteudodivcaixa"+"><div id="+"titulodivcaixa"+">titulo</div><div id="+"descricaodivcaixa"+">descricao</div></div><div id="+"classificacao"+">estrelas</div></div>";
caixas_array[4] = "<div id="+"resultado"+"><div id="+"foto"+">imagem</div><div id="+"conteudodivcaixa"+"><div id="+"titulodivcaixa"+">titulo</div><div id="+"descricaodivcaixa"+">descricao</div></div><div id="+"classificacao"+">estrelas</div></div>";
caixas_array[5] = "<div id="+"resultado"+"><div id="+"foto"+">imagem</div><div id="+"conteudodivcaixa"+"><div id="+"titulodivcaixa"+">titulo</div><div id="+"descricaodivcaixa"+">descricao</div></div><div id="+"classificacao"+">estrelas</div></div>";

let divcaixa = document.getElementById("lista").innerHTML = caixas_array.join('');

