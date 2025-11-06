# 🔍 Consulta de CNPJ — BrasilAPI

Um projeto simples e funcional desenvolvido em **HTML, CSS e JavaScript puro**, que permite consultar informações de empresas brasileiras a partir do **CNPJ**, utilizando a [BrasilAPI](https://brasilapi.com.br/).

## 🚀 Demonstração

O usuário insere um **CNPJ** no campo de busca e, ao clicar em **Consultar**, o sistema exibe dados como:
- Nome Fantasia  
- Razão Social  
- Data de Abertura  
- Situação Cadastral  
- CNAE Principal  
- Endereço completo  
- Cidade e UF  
- CEP  
- Telefone e E-mail  

Tudo isso de forma rápida e estilizada, com uma interface moderna e responsiva.

---

## 🧩 Estrutura do Projeto

```
📁 ConsultaCNPJ
├── index.html     # Página principal com o campo de consulta
├── style.css      # Estilos visuais da interface
└── form.js        # Lógica de busca e exibição dos dados
```

---

## 🧠 Como Funciona

1. O usuário digita o **CNPJ** no campo de texto.  
2. A função `BuscarCNPJ()` (no arquivo `form.js`) é acionada ao clicar em **Consultar**.  
3. O JavaScript:
   - Remove caracteres não numéricos do CNPJ.
   - Faz uma requisição `fetch` para a **BrasilAPI**:  
     ```
     https://brasilapi.com.br/api/cnpj/v1/{CNPJ}
     ```
   - Exibe as informações retornadas na tela.
4. Caso o CNPJ seja inválido ou ocorra erro na requisição, uma mensagem de erro é exibida.

---

## 💻 Tecnologias Utilizadas

- **HTML5** — Estrutura do site  
- **CSS3** — Design moderno e responsivo  
- **JavaScript** — Consumo da API e manipulação do DOM  
- **[BrasilAPI](https://brasilapi.com.br/)** — Fonte de dados do CNPJ  

---

## 🧾 Exemplo de Uso

**Entrada:**  
```
CNPJ: 19131243000197
```

**Saída esperada:**
```
Nome Fantasia: EMPRESA X LTDA
Razão Social: EMPRESA X COMÉRCIO DE ALIMENTOS LTDA
CNPJ: 19.131.243/0001-97
Abertura: 10/03/2010
Situação: ATIVA
Endereço: Rua Exemplo, 123 - Centro
Cidade: São Paulo / SP
CEP: 01000-000
Telefone: (11) 1234-5678
Email: contato@empresa.com.br
```

---

## 🌐 Acesse o site online:

O projeto está disponível publicamente através do GitHub Pages. Você pode testá-lo diretamente neste link:
👉 https://erickrochanascimento.github.io/API-CNPJ/


---

## 🧑‍💻 Autor

**Erick Rocha Nascimento**  
📘 Desenvolvido como projeto prático de estudo de **APIs e JavaScript**.  
🔗 [LinkedIn](https://www.linkedin.com/in/erickrochanascimento) | [GitHub](https://github.com/ErickRochaNascimento)

---

## 🪪 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.  
Os dados são públicos e provenientes da [BrasilAPI](https://brasilapi.com.br/).
