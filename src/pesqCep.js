const preencherFormulario = (endereco) => {
    document.getElementById('formGridCity').value = endereco.localidade
    document.getElementById('formGridState').value = endereco.uf
    document.getElementById('formGridAddress1').value = endereco.logradouro
  }
  
  
  
  const pesquisarCep = async () => {
    try {
  
      const cep = document.getElementById('formGridZip').value;
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const dados = await fetch(url);
      const endereco = await dados.json();
      preencherFormulario(endereco);
  
    } catch (error) {
  
      alert("Ocorreu um erro inesperado, tente novamente");
  
    }
  
  }
  
  document.getElementById('formGridZip').addEventListener('focusout', pesquisarCep);
