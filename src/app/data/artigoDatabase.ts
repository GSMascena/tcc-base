import { artigo } from "./artigo";


export const artigoDatabase : artigo[] = [
    {
        artigoId: 1,
        artigoImg: "../../assets/games.jpg" ,
        artigoTitulo:"A importancia da acessibilidade nos games.",
        artigoDescricao: "A acessibilidade nos games vem para trazer a inclusão para todos que almejam se divertir sem perder a comodidade, para tornar mais acessiveis os jogos com.....",
        artigoElements:    [
            {
                elementoTipo : 'h2',
                elementoConteudo: 'A importância da acessibilidade nos games.'
            },
            {
                elementoTipo: 'img',
                elementoConteudo: '../../assets/games.jpg'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'A acessibilidade nos games vem para trazer a inclusão para todos que almejam se divertir sem perder a comodidade, para tornar mais acessiveis os jogos com o uso de softwares de assistencia de mira, audio legendas, etc. As pessoas com deficiencias fisicas, aditivas, visual e tambem intelectual desejam ter o mesmo acesso como todo mundo, é necessario que as empresas de jogos atendam todas exigencias dos seus consumidores e estabelação um padrão para a construção dos jogos se tornarem mais acessiveis.'
            },
        ]
    },
    {
        artigoId: 2,
        artigoImg: "../../assets/Bertie the brain.jpg" ,
        artigoTitulo:"Primeiro jogo a ter acessibilidade.",
        artigoDescricao: "É dificil pensar qual foi o primeiro jogo, pois há mais de 45 mil titulos de todos os tipos de jogos e plataformas, mas, quem poderia imaginar que o primeiro....",
        artigoElements:    [
            {
                elementoTipo : 'h2',
                elementoConteudo: 'Primeiro jogo a ter acessibilidade.'
            },
            {
                elementoTipo: 'img',
                elementoConteudo: '../../assets/Bertie the brain.jpg'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'É dificil pensar qual foi o primeiro jogo, pois há mais de 45 mil titulos de todos os tipos de jogos e plataformas, mas, quem poderia imaginar que o primeiro ter acessibilidade foi o classico &quot;jogo da velha&quot; constituido por um computador chamado Bertie The Brain. Pode parecer algo simples mas é algo que revolucionou no fator de inclusividade, o que torna esse jogo inclusivo é o jogador ter acesso a diferentes niveis de dificuldade, com o uso desse recurso tornava as partidas mais abertas a diversos públicos.'
            },
        ]
        
    },
    

]