const historias = [{
        situacao: `Você viu uma pessoa derrubando R$ 10 na rua...`,
        opcoes: [{
            resposta: `Pego para mim`,
            amizade: 1,
            energia: -5,
            dinheiro: 10
        }, {
            resposta: `Aviso para a pessoa`,
            amizade: 10,
            energia: 10,
            dinheiro: 0
        }, {
            resposta: `Ignoro`,
            amizade: 1,
            energia: 0,
            dinheiro: 0
        }]
    },
    {
        situacao: `Seu responsável pediu ajuda com os afazeres domésticos...`,
        opcoes: [{
            resposta: `Ajudo`,
            amizade: 20,
            energia: 20,
            dinheiro: 20
        }, {
            resposta: `Recuso pois tenho lição de casa`,
            amizade: 5,
            energia: 5,
            dinheiro: 0
        }, {
            resposta: `Ignoro e saio para brincar`,
            amizade: -10,
            energia: -10,
            dinheiro: 0
        }]
    },
    {
        situacao: `Seus amigos te chamaram para ir ao cinema...`,
        opcoes: [{
            resposta: `Vou com eles`,
            amizade: 5,
            energia: 10,
            dinheiro: -30
        }, {
            resposta: `Recuso `,
            amizade: 5,
            energia: 10,
            dinheiro: 0
        }]
    },
    {
        situacao: `Seu ônibus quebrou à alguns quilômetros de sua casa...`,
        opcoes: [{
            resposta: `Volto para casa a pé`,
            amizade: 10,
            energia: 10,
            dinheiro: 0
        }, {
            resposta: `Volto para casa de carro de aplicativo`,
            amizade: 10,
            energia: 10,
            dinheiro: -20
        }, {
            resposta: `Volto para casa de ônibus`,
            amizade: 10,
            energia: 10,
            dinheiro: -5
        }]
    },
    {
        situacao: `Não teve almoço na sua escola por conta de problemas de logística...`,
        opcoes: [{
            resposta: `Como num restaurante de fast food`,
            amizade: 5,
            energia: -10,
            dinheiro: -30
        }, {
            resposta: `Como num restaurante de prato feito`,
            amizade: 5,
            energia: 5,
            dinheiro: -20
        }, {
            resposta: `Aguento e como apenas quando chego em casa`,
            amizade: 5,
            energia: -15,
            dinheiro: 0
        }]
    },
    {
        situacao: `Seu amigo está fazendo aniversário...`,
        opcoes: [{
            resposta: `Compro um presente para ele`,
            amizade: 20,
            energia: 20,
            dinheiro: -50
        }, {
            resposta: `Dou os parabéns porém não compro presente`,
            amizade: 10,
            energia: 10,
            dinheiro: 0
        }, {
            resposta: `Finjo que esqueci da data `,
            amizade: -10,
            energia: -10,
            dinheiro: 0
        }]
    },
    {
        situacao: `Seu responsável está fazendo aniversário...`,
        opcoes: [{
            resposta: `Compro um presente para ele`,
            amizade: 30,
            energia: 20,
            dinheiro: -50
        }, {
            resposta: `Dou os parabéns porém não compro presente`,
            amizade: 10,
            energia: 10,
            dinheiro: 0
        }, {
            resposta: `Finjo que esqueci da data `,
            amizade: -20,
            energia: -30,
            dinheiro: 0
        }]
    },
    {
        situacao: `Está muito quente e tem uma loja de sorvetes próximo à você...`,
        opcoes: [{
            resposta: `Volto para casa e mastigo uma pedra de gelo`,
            amizade: 10,
            energia: 5,
            dinheiro: 0
        }, {
            resposta: `Compro um picolé barato`,
            amizade: 10,
            energia: 5,
            dinheiro: -5
        }, {
            resposta: `Compro um sorvete caro`,
            amizade: 10,
            energia: 5,
            dinheiro: -20
        }]
    },
    {
        situacao: `Seu fone de ouvido quebrou...`,
        opcoes: [{
            resposta: `Compro um fone novo caro`,
            amizade: 10,
            energia: 0,
            dinheiro: -70
        }, {
            resposta: `Compro um fone novo barato`,
            amizade: 10,
            energia: 0,
            dinheiro: -10
        }, {
            resposta: `Não compro um fone novo`,
            amizade: 10,
            energia: 0,
            dinheiro: 0
        }]
    },
    {
        situacao: `Você encontrou o tênis que queria com 20% de desconto...`,
        opcoes: [{
            resposta: `Compro sem pestanejar`,
            amizade: 15,
            energia: 10,
            dinheiro: -80
        }, {
            resposta: `Calculo se não irá faltar dinheiro para o resto do mês e compro`,
            amizade: 20,
            energia: 20,
            dinheiro: -80
        }, {
            resposta: `Não compro  `,
            amizade: 10,
            energia: 10,
            dinheiro: 0
        }]
    },
    {
        situacao: `O ventilador do seu quarto quebrou...`,
        opcoes: [{
            resposta: `Aguento ficar sem o ventilador`,
            amizade: 10,
            energia: 5,
            dinheiro: 0
        }, {
            resposta: `Compro um ventilador barato`,
            amizade: 15,
            energia: 10,
            dinheiro: -60
        }, {
            resposta: `Compro um ventilador caro`,
            amizade: 15,
            energia: 5,
            dinheiro: -100
        }]
    },
    {
        situacao: `Seu celular está com pouco espaço de memória...`,
        opcoes: [{
            resposta: `Apago alguns arquivos e aplicativos para segurar as pontas com esse celular`,
            amizade: 20,
            energia: 20,
            dinheiro: 0
        }, {
            resposta: `Compro um celular barato`,
            amizade: 20,
            energia: 20,
            dinheiro: -300
        }, {
            resposta: `Compro um celular caro `,
            amizade: 20,
            energia: 20,
            dinheiro: -900
        }]
    },
    {
        situacao: `Você tem um passei na escola cujo prazo de entrega do valor para a participação (R$50) é até hoje...`,
        opcoes: [{
            resposta: `Aceito a derrota e não vou ao passeio`,
            amizade: 5,
            energia: -10,
            dinheiro: 0
        }, {
            resposta: `Pago o passeio com meu dinheiro`,
            amizade: 10,
            energia: 10,
            dinheiro: -50
        }, {
            resposta: `Encho o saco dos meus responsáveis até conseguir o dinheiro do passeio`,
            amizade: 5,
            energia: -30,
            dinheiro: 0
        }]
    }
];


export {historias};