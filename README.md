## Teste front-end da empresa Fácil Consulta

Esse repositório contem minha solução para o teste front-end da empresa fácil consulta, bem como também um pouco dos meus pensamentos acerca do desafio proposto.

## Impecilhos, desafios e soluções.

À princípio, minha ideia era de implementar uma solução um tanto quanto ousada (para meu nível de conhecimentos) na validação dos inputs. Meu objetivo inicial era que os inputs fossem validados ao mesmo tempo em que o usuário ia digitando e, portanto, atualizando o status da mensagem de erro. Mas, não só isso, eu queria também que os inputs fossem sendo formatados ao mesmo tempo que o usuário digitava (isso é: Deixar a primeira letra do nome maiúscula, colocar pontos nos números do cpf, etc.) Demorei mais do que deveria nessa solução, e acabei me rendendo ao meu plano B: Formatar o input quando o mesmo perde o foco e, automaticamente, formatar. E isso eu consegui.

Utilizei o veux para administrar os estados dos dados do usuário, e não encontrei, no geral, muitas dificuldades. Utilizei, também, o Vue router para que a página tivesse um toque mais moderno.

Uma dificuldade inicial que tive foi lidar com o bootstrap (tech que eu utilize no máximo 1 vez), todavia, no segundo dia as coisas já ficaram melhores e eu percebi a importancia do boostrap, quando se trata de agilidade no desenvolvimento.

Minha maior dificuldade foi lidar com os inputs no geral. Minha familiaridade com VueJS era restrita apenas à criação de landing pages, e projetos relacionados. Curti bastante o desafio, pois me fez sair da zona de conforto e, inclusive, me indicou no que devo melhorar.

A qualidade do código não atingira 10% do que eu gostaria, pois, por conta da falta de xp/conhecimento com forms, não estruturei uma lógica sólida para o projeto, desde o princípio.

### Built With

Tecnologias utilizadas no projeto:

VueJS, Vuex, Vue Router, Bootstrap 5, CSS, HTML

## Project setup

```
git clone https://github.com/l3onardodev/teste-facilconsulta
```

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```
