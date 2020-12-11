# API - InfoMei

🔛 Esse projeto foi desenvolvido para conclusão do curso de back-end da {Reprograma} em parceria com a XP Inc., a sua ideia teve como base um problema real trazido por diversas pessoas para o meu dia a dia. Dessa forma, enxerguei nos relatos a possibilidade da criação de uma API que possa dar suporte as demandas relacionadas ao problema, e que possa gerar impacto social na vida da população que tem o sonho de empreender seja por oportunidade e/ou necessidade, e que decide começar pela categoria Microempreendedor Individual (MEI).

⌛ “Ser empreendedor em qualquer momento da vida é saber se movimentar em busca dos seus sonhos, carregando consigo a sua bagagem e a vontade de ir além. ” (Camila Bulcão) 
💁 

---

 ## Objetivo 🎯

 A API (InfoMei) por objetivo direcionar os futuros e/ou atuais microempreendedores individuais (MEIs) através de um ambiente confiável sobre os assuntos relacionados a essa categoria empresarial para que não tenham custos desnecessários e que transmitam os seus dados com segurança por meio do site oficial (através do links trazidos na API). 
 
 ---
## Tecnologias 
 <img src="https://img.shields.io/badge/-github-blue">
&nbsp;
<img src="https://img.shields.io/badge/-node.js-brightgreen">
&nbsp;
<img src= "https://img.shields.io/badge/-nodemon-red">
&nbsp;
<img src ="https://img.shields.io/badge/-express-yellow">
&nbsp;
<img src ="https://img.shields.io/badge/-mongoose-lightgrey">
&nbsp;
<img src ="https://img.shields.io/badge/-cors-yellowgreen">
&nbsp;
<img src ="https://img.shields.io/badge/-mongoDB%2FAtlas-orange">
&nbsp;
<img src ="https://img.shields.io/badge/-dotenv-yellow">
&nbsp;
<img src ="https://img.shields.io/badge/-heroku-red">
&nbsp;
<img src ="https://img.shields.io/badge/-postman-blue">
&nbsp;
<img src ="https://img.shields.io/badge/-bcrypt-green">

----
## Aprendizados 💻
Além do rico conteúdo abordado no Bootcamp, tais como: Versionamento de código, arquitetura MVC, CRUD, Mongodb, Deploy, e etc., o fato de ter que pensar em uma API que possa resolver um problema nos faz ver o quanto a tecnologia pode ter uma presença mais marcante e fazer a diferença na vida das pessoas, seja no seu dia a dia ou no ambiente de trabalho ou na busca por conhecimentos.  

---
## Instruções para utilização da API 📝

* Para utilizar a API na nuvem basta acessar o link: <https://infomei.herokuapp.com/> do heroku, o qual foi disponibilizado publicamente e para seu consumo poderá utilizar ferramentas como postman/insomnia, por exemplo.

* Para utilizar a API localmente:
  >Fazer o fork do repositório e depois dar um git clone (caminho do repositório)

  >Instalar as dependências 
    * npm install
    * npm install cors
    * npm install mongoose
    * npm install express
    * npm install nodemon
    * npm install bcrypt
    * npm install dotenv

  > Executar
   * npm start

> Observação: o arquivo .env deve ser alterado para receber as variáveis de ambiente para que o servidor funcione adequadamente. 

 ## Informações sobre Rotas   🚗
 |   Método   |  Caminho  |    Descrição    |
| :---         |     :---:      |          ---: |
| Get   | /    | Boas vindas   |
| --     | Rota      | Usuário     |
| Get   | /usuário (rota raiz)   | Obter todos os usuários   |
| Get  | /id/:id     | Obter apenas um usuário   |
|Post   | /cadUsuario   | Cadastrar usuário   |
| Put  | /atualizar/:id    | Atualizar os dados de um usuário especifico
| Patch  | /telefone/:id    | Atualizar apenas o telefone de um usuário especifico |
|Delete   | /id/:id   | Deletar usuário |
| --  | Rota  | Informações da categoria MEI   |
| Get   | /infoMei (rota raiz)   | Obter todas as informações sobre a categoria MEI |
| Post | /add    | Cadastrar informações sobre a categoria MEI |
|Put   | /atualizar/:id   | Atualizar informação cadastrada sobre a categoria MEI |
| Get  |/titulo/:titulo    | Obter a informação conforme seu título
|Delete   | /id/:id   | Deletar informação sobre a categoria MEI |

## Agradecimentos

O processo de transição de carreira traz diversos obstáculos ao longo do caminho, mas tudo se torna mais brando quando se tem uma rede de pessoas que nos acolhem, incentivam, e acreditam no nosso potencial, e o bootcamp da {Reprograma} em parceria com a XP Inc. me trouxe tudo isso, além de uma gama de conhecimentos. 

Agradeço imensamente a Ceci, Jô, Ju, e todas as professoras e monitoras que nos acompanharam durante esses meses, cada uma de vocês tevem um papel fundamental.  

Agradeço as mulheres maravilhosas da turma on6-xp, as quais o bootcamp me apresentou mesmo a distância, e pela rede de apoio linda que formamos durante esse jornada e que vamos levar para vida. Por cada aprendizado compartilhado, por cada dúvida esclarecida, por cada dica e ensinamento para vida pessoal e/ou profissional, aqui vai o meu sincero Muito Obrigada! ❤️

Agradeço a Deus por concluir mais essa etapa na minha vida e por toda sustentação que ele me deu. Agradeço a minha família por todo apoio e incentivo e em especial a minha amiga Mayara por toda paciência e esclarecimentos das dúvidas.


"Sem obstáculos... não há caminho." (Ringu Tulku) 