# Rick-End-Morty_Final-Exercise

Trabalho final do Módulo 6 - Técnicas de Programação I - NoseJS.


### 📋 Pré-requisitos

* NodeJs 16.10 ou superior
* Axios 
* Postman

### 🔧 Instalação
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

1. Acessar o link e clonar o repositório. [Github](https://github.com/carlosalbertoestrela/Rick-End-Morty_Final-Exercise)
2. Instale o Axios: 
    - No terminal executar o comando:
```
npm axios install
```   
3. No Terminal, digitar o comando: 
```
node index.js
```
5. Use o link (http://localhost/personagens) para começar a acessar a API.

Opcional:

Caso use o [Postman] para testar as requisições você pode seguir os seguintes passos:

1. No Postman, clique em import, na opção "por link" e adicione este endereço.  [Postman](https://www.getpostman.com/collections/02609d1a2642370350dc)

2. Agora dentro do Postman é possível realizar as requisições.
Em caso de erro, verificar se os pré-requisitos foram atendidos.

## 🚀 Começando

Essa é uma API que realiza o consume da *The Rick and Morty API* realizando consultas personalizadas a mesma.

### EntryPoints

#### Personagens:

    * "/personagem-download" => Realiza o download das informações de um personagem passado usando o filtro "?name={nome do personagem}". O download fica disponível na pasta ``` tmp ``` no projeto.

    * "/personagens" => Lista todos os personagens, pode ser paginado usando o filtro "?page={número da pagina}"

    * "/personagem-id" => Retorna um personagem filtrado por ID usando o filtro "?id={id do personagem}"

    * "/personagem-nome" => Retorna as informações de um personagem passado usando o filtro "?name={nome do personagem}"

    * "/personagens-status" => Retorna os personagems por seu status usando o filtro "?status={Alive ou Dead}"

    * "/personagens-especie" => Retorna os personagems filtrados pela especie usando o filtro "?species={especie desejada}"

    * "/personagens-origem" => Retorna os personagems filtrados pela origem usando o filtro "?origin={origem desejada}"

    * "/personagens-genero" => Retorna os personagems filtrados pelo genero usando o filtro "?gender={Male ou Female}"


#### Locais:
    * "/locais" => Lista todos os locais, pode ser paginado usando o filtro "?page={número da pagina}" 
    
    * "/locais-tipo" => Lista todos os locais filtrados por tipo usado o filtro  "?type={tipo desejado}" 
    
    * "/locais-dimensao" => Lista todos os locais filtrados por dimensão usado o filtro  "?dimension={dimenssão desejada}", 
    
    * "/locais-nome" => Lista todos os locais filtrados por nome usando o filtro "?name={nome do local}"

#### Episódios:
    * "/episodios" => Lista todos os episódios, pode ser paginado usando o filtro "?page={número da pagina}"

    * "/episodios-nome" => Lista um ou mais episódios filtrado por nome usando o filtro "?name={nome do episódio}"

    * "/episodios-tag" => Lista um ou mais episódios filtrado por tag (ex: S02E05) usando o filtro "?tag={tag do episódio}"



## ⚙️ Executando os testes no Postman

1. Na barra lateral esquerda, selecione uma das requisições pré-configuradas;
2. Selecione um dos itens da lista e clique em "Send";
3. Para uma melhor visualização, trocar a exibição do resultado de "Text" para "Json";

## 🛠️ Construído com

* JavaScript Vanilla
* NodeJs

## 📌 Versão

1.8.2 2022

## ✒️ Autores

* **Carlos Alberto Estrela** - [Github](https://github.com/carlosalbertoestrela)
* **Marcio Fernandes** - [Github](https://github.com/marciofsj)
* **Wyller Faria** - [Github](https://github.com/Wyller21)

## 📄 Licença

Pública. Qualquer um na internet pode vizualizar este repositório.

## 🎁 Agradecimentos

Nossos agradecimentos ao Professor Esdras Aguilar por todo conhecimento compartilhado e pelas as excelentes dicas profissionais.

Um abraço especial para toda a turma 836 da LetsCode.