<div align="center">
  <img src="public/diary.png" width="200" />
  <h2>Meu Diário</h2>
  
  <p align="center">
    Um CRUD de posts com título, conteúdo e cor do cartão!
    <br />
    <a href="https://personal-blog-sage-seven.vercel.app/">Acessar aplicação</a>
    ·
    <a href="https://github.com/antonvinicius/personal-blog/edit/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/antonvinicius/personal-blog/edit/issues">Pedir nova feature</a>
  </p>
</div>

## Sobre o projeto 📐

[![Meu Diario Screen Shot][product-gif]](https://personal-blog-sage-seven.vercel.app/)
[![Meu Diario Screen Shot][product-screenshot]](https://personal-blog-sage-seven.vercel.app/)

Este aplicativo web é um cadastro de Posts, para servir como um diário. Você pode livremente cadastrar qualquer post e escolher uma cor para o cartão desejado. A ideia é bem simples. Porém, desenvolvi para praticar meus conhecimentos em programação. A interface na minha opinião está bem moderna e minimalista, que era o objetivo deste app.

### Tecnologias utilizadas 🧪

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Next.js](https://nextjs.org/)
* [Prisma](https://www.prisma.io/)
* [MongoDB](https://www.mongodb.com/pt-br)

<!-- GETTING STARTED -->
## For Devs 👨‍💻

Estas são as instruções para rodar o projeto localmente em sua máquina.

### Requisitos

* yarn
* NodeJS

### Instalação

1. Tenha uma instância do MongoDB
2. Clone o repositório
   ```sh
   git clone https://github.com/antonvinicius/personal-blog.git
   ```
3. Instale as dependências
   ```sh
   yarn
   ```
4. Crie um arquivo `.env` na raiz do projeto e coloque o seguinte conteúdo dentro
   ```sh
   DATABASE_URL=mongodb+srv://<usuario>:<senha>@<host>/mydiary
   ```

<!-- MARKDOWN LINKS & IMAGES -->
[product-gif]: github/assets/app.gif
[product-screenshot]: github/assets/mockup.png
