function BuscarCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, '');

    if (cnpj.length !== 14) {
        alert('CNPJ inválido. Digite 14 números.');
        return;
    }


    const apiUrl = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

   

    

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Erro na requisição da API');
            return response.json();
        })
        .then(data => {

            console.log(data);
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = ''; // limpa o que havia antes

            const div = document.createElement('div');// cria elemneto div
            div.classList.add('cnpj-info');

            const campos = [
                { label: "Nome Fantasia", valor: data.nome_fantasia },
                { label: "Razão Social", valor: data.razao_social },
                { label: "CNPJ", valor: data.cnpj },
                { label: "Abertura", valor: data.data_inicio_atividade },
                { label: "Situação", valor: data.situacao_cadastral },
                { label: "CNAE Principal", valor: data.cnae_fiscal_descricao },
                { label: "Endereço", valor: `${data.logradouro}, ${data.numero} - ${data.bairro}` },
                { label: "Cidade", valor: `${data.municipio} / ${data.uf}` },
                { label: "CEP", valor: data.cep },
                { label: "Telefone", valor: data.ddd_telefone_1 },
                { label: "Email", valor: data.email }
            ];

           


            // Cria elementos para cada informação
            campos.forEach(c => {
                if (c.valor) {
                    const p = document.createElement('p');
                    p.innerHTML = `<strong>${c.label}:</strong> ${c.valor}`;
                    div.appendChild(p);
                }
            });

            // Adiciona tudo ao resultado
            resultado.appendChild(div);

        })
        .catch(err => {
            console.error(err);
            document.getElementById('resultado').innerHTML = `<p style="color:red;">Erro ao buscar o CNPJ.</p>`;
        });

}