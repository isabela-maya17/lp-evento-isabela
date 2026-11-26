export const evento = {
  nome: "Festival Sabores da Alta Paulista",
  nomeCurto: "Festival Sabores",
  slogan: "Três dias para provar o melhor da cozinha da região.",
  data: "4 a 6 de junho de 2027",
  horario: "das 11h às 22h",
  local: "Recinto de Exposições — Osvaldo Cruz/SP",
  endereco: "Av. Max Wirth, s/n · Osvaldo Cruz/SP",
};

export const destaques = [
  {
    numero: "20",
    texto: "Barracas de restaurantes",
    detalhe: "Pratos típicos, doces caseiros e opções sem carne.",
  },
  {
    numero: "9",
    texto: "Aulas-show com degustação",
    detalhe: "Receitas feitas na hora por cozinheiros convidados.",
  },
  {
    numero: "3",
    texto: "Dias de festival",
    detalhe: "De sexta à noite até o fim da tarde de domingo.",
  },
];

export const programacao = [
  {
    id: 1,
    dia: "Sexta",
    hora: "Sex · 18h",
    horarioCurto: "18h",
    palco: "Palco Principal",
    atividade: "Abertura com música ao vivo",
    descricao: "Abertura das barracas e show de viola caipira.",
  },
  {
    id: 2,
    dia: "Sábado",
    hora: "Sáb · 11h",
    horarioCurto: "11h",
    palco: "Cozinha Show",
    atividade: "Aula-show: pamonha e curau de milho verde",
    descricao: "Preparo na palha com degustação aberta ao público.",
  },
  {
    id: 3,
    dia: "Sábado",
    hora: "Sáb · 15h",
    horarioCurto: "15h",
    palco: "Cozinha Show",
    atividade: "Aula-show: doces de leite e de abóbora",
    descricao: "Ponto de tacho e receitas de fazenda.",
  },
  {
    id: 4,
    dia: "Sábado",
    hora: "Sáb · 19h",
    horarioCurto: "19h",
    palco: "Arena Central",
    atividade: "Competição de pratos com ingredientes locais",
    descricao: "Disputa entre cozinheiros com receitas de amendoim e mandioca.",
  },
  {
    id: 5,
    dia: "Domingo",
    hora: "Dom · 12h",
    horarioCurto: "12h",
    palco: "Praça de Alimentação",
    atividade: "Almoço caipira coletivo",
    descricao: "Frango com quiabo, costela no fogo de chão e arroz carreteiro.",
  },
  {
    id: 6,
    dia: "Domingo",
    hora: "Dom · 17h",
    horarioCurto: "17h",
    palco: "Palco Principal",
    atividade: "Premiação e encerramento",
    descricao: "Entrega do prêmio ao melhor prato e roda de música.",
  },
];

export const atracoes = [
  {
    id: 1,
    nome: "Dona Cida",
    especialidade: "Cozinha caipira",
    pratoAssinatura: "Frango com quiabo",
    origem: "Adamantina/SP",
    descricao: "Cozinheira há 40 anos, famosa pelo frango com quiabo no tacho de ferro.",
    imagemKey: "caipira",
  },
  {
    id: 2,
    nome: "Chef Marcos Lima",
    especialidade: "Churrasco",
    pratoAssinatura: "Costela no fogo de chão",
    origem: "Presidente Prudente/SP",
    descricao: "Especialista em cortes e assados lentos no fogo de chão.",
    imagemKey: "churrasco",
  },
  {
    id: 3,
    nome: "Júlia Tanaka",
    especialidade: "Confeitaria",
    pratoAssinatura: "Doces nipo-caipiras",
    origem: "Osvaldo Cruz/SP",
    descricao: "Doces que misturam receitas japonesas e ingredientes da roça.",
    imagemKey: "confeitaria",
  },
  {
    id: 4,
    nome: "Sítio Boa Vista",
    especialidade: "Produtor rural",
    pratoAssinatura: "Queijos e compotas",
    origem: "Rinópolis/SP",
    descricao: "Queijos curados e doces artesanais feitos pela família.",
    imagemKey: "produtor",
  },
];

export const ingressosInfo = [
  {
    id: "inteira",
    nome: "Inteira",
    preco: 40,
    precoFormatado: "R$ 40,00",
    beneficio: "Entrada para os três dias do festival.",
  },
  {
    id: "meia",
    nome: "Meia-entrada",
    preco: 20,
    precoFormatado: "R$ 20,00",
    beneficio: "Estudantes, idosos (60+), professores e PCD.",
  },
  {
    id: "solidario",
    nome: "Social (1kg de alimento)",
    preco: 25,
    precoFormatado: "R$ 25,00",
    beneficio: "Com entrega de 1kg de alimento não perecível na portaria.",
  },
  {
    id: "vip",
    nome: "VIP",
    preco: 85,
    precoFormatado: "R$ 85,00",
    beneficio: "Assento nas aulas-show e 4 porções de degustação.",
  },
];

export const lotesGrafico = [
  { rotulo: "1º Lote", valor: 120, capacidade: 150, cor: "#dc2626" },
  { rotulo: "2º Lote", valor: 80, capacidade: 150, cor: "#16a34a" },
  { rotulo: "VIP", valor: 45, capacidade: 60, cor: "#1c1917" },
];

export const faqs = [
  {
    q: "Aceita cartão e Pix?",
    a: "Sim, todas as barracas aceitam cartão de débito, crédito e Pix.",
  },
  {
    q: "Tem opção vegetariana?",
    a: "Sim, pelo menos cinco barracas têm pratos sem carne.",
  },
  {
    q: "Posso levar meu cachorro?",
    a: "Pode, desde que esteja na coleira.",
  },
  {
    q: "Crianças pagam entrada?",
    a: "Crianças de até 10 anos acompanhadas de um responsável entram de graça.",
  },
  {
    q: "Tem estacionamento no local?",
    a: "Sim, o Recinto de Exposições conta com estacionamento e acesso adaptado.",
  },
];
