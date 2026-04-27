# API BASE JS/TS

## Propósito

Este projeto tem a finalidade de servir como modelo, um tutorial feito por mim, para mim, sobre como construir uma API do zero.

---

## Prioridades

- **Planejamento**
  Mais importante do que escrever o código ou ver tudo funcionando é, antes disso, saber _O QUE_ pretendemos fazer. _QUAIS_ recursos queremos ter na nossa API, quantos tipos de acesso teremos? Admin? User? Precisamos de autenticação? Sessões?

- **Arquitetura escolhida**
  É importante também saber que tipo de arquitetura pretendemos utilizar. Atualmente eu uso Node.js e estou aprendendo Typescript, que me dá boas opções de arquitetura e organização, como o uso de interfaces, adapters, entities, etc. Com o Node.js, até o momento, costumo manter o simples com routes, services e controllers. Após decidir a arquitetura a ser utilizada, é interessante deixar a estrutura de pastas já pronta, pelo menos as mais óbvias.

Por exemplo:

```
RAÍZ DO PROJETO
├ src
│ ├ app.js
│ ├ controllers
│ ├ routes
│ └ services
└ public
```

- **Implementações**
  Como este é um projeto de estudo, pretendo implantar aqui todas as boas práticas que tenho aprendido e que vou aprender pelo caminho, como testes, bancos de dados, adaptadores, interfaces e etc. Então acho de bom tom listar aqui, e ir adicionando pontos a serem considerados tanto na escrita como nas futuras refatorações e novos projetos.

Métodos e implementações
: - SOLID;
: - Testes;
: - Bancos de dados;
: - **Typescript:** Interfaces, adaptadores, TypeORM.

- **Commits e progresso**
  É preciso _sabedoria_ e _responsabilidade_ para fazer os commits nos pontos certos do progresso, a fim de manter uma árvore _coerente_, e facilitar futuros _debugs_. É bom praticar isso e as branches, é muito importante para o _trabalho_.

---

## Adendos

No mais, lembre-se de manter o código bem equilibrado, entre concisão e componentização, mantendo sempre o mais legível e bem documentado possível. Os conceitos de SOLID vão ajudar bastante na estruturação limpa do código, use-os com sabedoria. Sempre ore antes de iniciar os estudos/ trabalhos, e também após acabar. Seja transparente e honesto, e que isso seja visto em tudo que fizer.

---

> _"Meu filho, preste atenção ao que digo. Ouça bem minhas palavras.
> Não as perca de vista. Mantenha-as no fundo do coração.
> Pois elas dão vida a quem as encontra, e saúde a todo o corpo.
> Acima de todas as coisas, guarde seu coração, pois ele dirige o rumo de sua vida.
> Evite toda conversa maldosa. Afaste-se das palavras perversas.
> Olhe sempre para frente. Mantenha os olhos no que está diante de você.
> Estabeleça um caminho reto para seus pés. Permaneça na estrada segura.
> Não se desvie para a direita nem para a esquerda. não permita que seus pés sigam o mal."_
>
> Provérbios 4:20-27
