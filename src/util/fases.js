const historias = [
    {
        nivel: 1,
        fases:[
            {
                id: 1,
                situacao: `Você viu uma pessoa derrubando R$ 10 na rua...`,
                opcoes: [{
                    id: 1,
                    resposta: `Pego para mim`,
                    amizade: 1,
                    energia: -5,
                    dinheiro: 10
                }, {
                    id: 2,
                    resposta: `Aviso para a pessoa`,
                    amizade: 10,
                    energia: 10,
                    dinheiro: 0
                }, {
                    id: 3,
                    resposta: `Ignoro`,
                    amizade: 1,
                    energia: 0,
                    dinheiro: 0
                }]
            },
            {
                id: 2,
                situacao: `Seu responsável pediu ajuda com os afazeres domésticos...`,
                opcoes: [{
                    id:1,
                    resposta: `Ajudo`,
                    amizade: 20,
                    energia: 20,
                    dinheiro: 20
                }, {
                    id:2,
                    resposta: `Recuso pois tenho lição de casa`,
                    amizade: 5,
                    energia: 5,
                    dinheiro: 0
                }, {
                    id: 3,
                    resposta: `Ignoro e saio para brincar`,
                    amizade: -10,
                    energia: -10,
                    dinheiro: 0
                }]
            },
            {
                id: 3,
                situacao: `Seus amigos te chamaram para ir ao cinema...`,
                opcoes: [{
                    id: 1,
                    resposta: `Vou com eles`,
                    amizade: 5,
                    energia: 10,
                    dinheiro: -30
                }, {
                    id: 2,
                    resposta: `Recuso `,
                    amizade: 5,
                    energia: 10,
                    dinheiro: 0
                }]
            }
        ]
    },
    {
        nivel: 2,
        fases: [
            {
                id: 1,
                situacao: `Seu ônibus quebrou à alguns quilômetros de sua casa...`,
                opcoes: [{
                    id: 1,
                    resposta: `Volto para casa a pé`,
                    amizade: 10,
                    energia: 10,
                    dinheiro: 0
                }, {
                    id: 2,
                    resposta: `Volto para casa de carro de aplicativo`,
                    amizade: 10,
                    energia: 10,
                    dinheiro: -20
                }, {
                    id: 3,
                    resposta: `Volto para casa de ônibus`,
                    amizade: 10,
                    energia: 10,
                    dinheiro: -5
                }]
            },
            {
                id: 2,
                situacao: `Não teve almoço na sua escola por conta de problemas de logística...`,
                opcoes: [{
                    id:1,
                    resposta: `Como num restaurante de fast food`,
                    amizade: 5,
                    energia: -10,
                    dinheiro: -30
                }, {
                    id: 2,
                    resposta: `Como num restaurante de prato feito`,
                    amizade: 5,
                    energia: 5,
                    dinheiro: -20
                }, {
                    id:3,
                    resposta: `Aguento e como apenas quando chego em casa`,
                    amizade: 5,
                    energia: -15,
                    dinheiro: 0
                }]
            },
            {
                id: 3,
                situacao: `Seu amigo está fazendo aniversário...`,
                opcoes: [{
                    id:1,
                    resposta: `Compro um presente para ele`,
                    amizade: 20,
                    energia: 20,
                    dinheiro: -50
                }, {
                    id:2,
                    resposta: `Dou os parabéns porém não compro presente`,
                    amizade: 10,
                    energia: 10,
                    dinheiro: 0
                }, {
                    id:3,
                    resposta: `Finjo que esqueci da data `,
                    amizade: -10,
                    energia: -10,
                    dinheiro: 0
                }]
            }
        ]
    },
    {
        nivel: 3,
        fases:[
            {
                id: 1,
                situacao: `Seu responsável está fazendo aniversário...`,
                opcoes: [{
                    id:1,
                    resposta: `Compro um presente para ele`,
                    amizade: 30,
                    energia: 20,
                    dinheiro: -50
                }, {
                    id:2,
                    resposta: `Dou os parabéns porém não compro presente`,
                    amizade: 10,
                    energia: 10,
                    dinheiro: 0
                }, {
                    id:3,
                    resposta: `Finjo que esqueci da data `,
                    amizade: -20,
                    energia: -30,
                    dinheiro: 0
                }]
            },
            {
                id: 2,
                situacao: `Está muito quente e tem uma loja de sorvetes próximo à você...`,
                opcoes: [{
                    id:1,
                    resposta: `Volto para casa e mastigo uma pedra de gelo`,
                    amizade: 10,
                    energia: 5,
                    dinheiro: 0
                }, {
                    id:2,
                    resposta: `Compro um picolé barato`,
                    amizade: 10,
                    energia: 5,
                    dinheiro: -5
                }, {
                    id:3,
                    resposta: `Compro um sorvete caro`,
                    amizade: 10,
                    energia: 5,
                    dinheiro: -20
                }]
            },
            {
                id: 3,
                situacao: `Seu fone de ouvido quebrou...`,
                opcoes: [{
                    id:1,
                    resposta: `Compro um fone novo caro`,
                    amizade: 10,
                    energia: 0,
                    dinheiro: -70
                }, {
                    id:2,
                    resposta: `Compro um fone novo barato`,
                    amizade: 10,
                    energia: 0,
                    dinheiro: -10
                }, {
                    id:3,
                    resposta: `Não compro um fone novo`,
                    amizade: 10,
                    energia: 0,
                    dinheiro: 0
                }]
            },
            {
                id: 4,
                situacao: `Você encontrou o tênis que queria com 20% de desconto...`,
                opcoes: [{
                    id:1,
                    resposta: `Compro sem pestanejar`,
                    amizade: 15,
                    energia: 10,
                    dinheiro: -80
                }, {
                    id:2,
                    resposta: `Calculo se não irá faltar dinheiro para o resto do mês e compro`,
                    amizade: 20,
                    energia: 20,
                    dinheiro: -80
                }, {
                    id:3,
                    resposta: `Não compro  `,
                    amizade: 10,
                    energia: 10,
                    dinheiro: 0
                }]
            },
        ]
    }
];


export {historias};