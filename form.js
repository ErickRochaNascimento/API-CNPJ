function BuscarCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, '');
    const apiUrl = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;


    console.log(`${data} erick`);
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Erro na requisição da API');
            return response.json();
        })
        .then(data => {
            const resultado = document.getElementById('resultado');

            const div = document.createElement('div');// cria elemneto div
            div.classList.add('cnpj');


            const name = document.createElement('h2'); // cria elemento nome
            name.textContent = data.name; // add o nome do personagem
            div.appendChild(name);
            resultado.appendChild(div);

        })

        console.log(data);
}
  

