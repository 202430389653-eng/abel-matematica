
const assuntos = {
  geometria: {
    nome: "Geometria",
    emoji: "📐",
    descricao: "Estude formas, medidas, áreas, perímetros e volumes.",
    explicacao: "A geometria estuda as formas e suas medidas. Na geometria plana, trabalhamos com figuras como quadrados, retângulos e triângulos. Na espacial, estudamos sólidos como cubos, prismas e cilindros.",
    formulas: [
      "Quadrado: área = lado × lado",
      "Retângulo: área = base × altura",
      "Triângulo: área = (base × altura) ÷ 2",
      "Cubo: volume = aresta³"
    ],
    exemplo: [
      "Um retângulo possui base de 8 cm e altura de 3 cm.",
      "Use a fórmula: área = base × altura.",
      "Substitua: área = 8 × 3 = 24 cm².",
      "Resposta: a área é 24 cm²."
    ],
    flashcards: [
      ["Como calcular a área de um retângulo?", "Multiplique a base pela altura."],
      ["Qual é a fórmula da área do triângulo?", "(Base × altura) ÷ 2."],
      ["Qual é a unidade comum de área?", Unidade => "Unidades quadradas, como cm² e m²."]
    ]
  },
  porcentagem: {
    nome: "Porcentagem",
    emoji: "💯",
    descricao: "Calcule descontos, aumentos e partes de um valor.",
    explicacao: "Porcentagem representa uma quantidade em cada 100. Para calcular uma porcentagem de um valor, transforme o percentual em decimal e multiplique pelo valor inicial.",
    formulas: [
      "p% de V = (p ÷ 100) × V",
      "Valor com desconto = valor inicial − desconto",
      "Valor com aumento = valor inicial + aumento"
    ],
    exemplo: [
      "Calcule 20% de R$ 150.",
      "Transforme 20% em decimal: 20 ÷ 100 = 0,20.",
      "Multiplique: 0,20 × 150 = 30.",
      "Resposta: 20% de R$ 150 são R$ 30."
    ],
    flashcards: [
      ["Como transformar 25% em decimal?", "Divida 25 por 100: 0,25."],
      ["Quanto é 10% de 200?", "20."],
      ["Quanto é 50% de um valor?", "A metade desse valor."]
    ]
  },
  equacoes: {
    nome: "Equações do 2º grau",
    emoji: "🧮",
    descricao: "Resolva equações usando o discriminante e Bhaskara.",
    explicacao: "Uma equação do segundo grau tem a forma ax² + bx + c = 0, com a diferente de zero. Para encontrar suas raízes, calculamos o discriminante delta e depois usamos a fórmula de Bhaskara.",
    formulas: [
      "Forma geral: ax² + bx + c = 0",
      "Discriminante: Δ = b² − 4ac",
      "Bhaskara: x = (−b ± √Δ) ÷ 2a"
    ],
    exemplo: [
      "Resolva x² − 5x + 6 = 0.",
      "Identifique: a = 1, b = −5 e c = 6.",
      "Calcule Δ = (−5)² − 4 × 1 × 6 = 1.",
      "Use a fórmula: x = (5 ± 1) ÷ 2.",
      "Resposta: x = 3 ou x = 2."
    ],
    flashcards: [
      ["Qual é a fórmula do discriminante?", "Δ = b² − 4ac."],
      ["O que significa Δ = 0?", "A equação tem duas raízes reais iguais."],
      ["Qual é a forma geral da equação do segundo grau?", "ax² + bx + c = 0, com a diferente de zero."]
    ]
  },
  funcoes: {
    nome: "Funções",
    emoji: "📈",
    descricao: "Entenda funções afins, gráficos e valores numéricos.",
    explicacao: "Uma função relaciona cada valor de entrada a um valor de saída. Na função afim, a expressão é f(x) = ax + b. Seu gráfico é uma reta.",
    formulas: [
      "Função afim: f(x) = ax + b",
      "Raiz da função afim: x = −b ÷ a, quando a ≠ 0",
      "Se a > 0, a função é crescente; se a < 0, é decrescente."
    ],
    exemplo: [
      "Considere f(x) = 2x + 1.",
      "Queremos encontrar f(3).",
      "Substitua x por 3: f(3) = 2 × 3 + 1.",
      "Resposta: f(3) = 7."
    ],
    flashcards: [
      ["Qual é a forma da função afim?", "f(x) = ax + b."],
      ["Quando uma função afim é crescente?", "Quando o coeficiente a é positivo."],
      ["O que é a raiz de uma função?", "É o valor de x para o qual f(x) = 0."]
    ]
  },
  razao: {
    nome: "Razão e proporção",
    emoji: "⚖️",
    descricao: "Compare grandezas e resolva regra de três.",
    explicacao: "Razão é uma comparação por divisão entre duas quantidades. Proporção é uma igualdade entre razões. A regra de três ajuda a encontrar um valor desconhecido quando existe uma relação proporcional.",
    formulas: [
      "Razão entre a e b: a ÷ b, com b ≠ 0",
      "Se a/b = c/x, então a × x = b × c",
      "Na proporcionalidade direta, as duas grandezas aumentam ou diminuem juntas."
    ],
    exemplo: [
      "Se 2 cadernos custam R$ 10, quanto custam 6 cadernos?",
      "Monte a proporção: 2/6 = 10/x.",
      "Multiplique em cruz: 2x = 60.",
      "Divida por 2: x = 30.",
      "Resposta: R$ 30."
    ],
    flashcards: [
      ["O que é uma razão?", "É uma comparação entre quantidades por meio de uma divisão."],
      ["O que fazemos na regra de três?", "Relacionamos os valores conhecidos para encontrar o desconhecido."],
      ["O que é uma proporção?", "É uma igualdade entre duas razões."]
    ]
  },
  juros: {
    nome: "Matemática financeira",
    emoji: "💰",
    descricao: "Aprenda juros simples, juros compostos e montante.",
    explicacao: "A matemática financeira ajuda a analisar empréstimos, investimentos, descontos e aumentos. Nos juros simples, os juros são calculados sobre o capital inicial. Nos compostos, são calculados sobre o saldo acumulado.",
    formulas: [
      "Juros simples: J = C × i × t",
      "Montante simples: M = C + J",
      "Montante composto: M = C × (1 + i)ᵗ"
    ],
    exemplo: [
      "Um capital de R$ 100 rende juros simples de 2% ao mês por 3 meses.",
      "Identifique: C = 100, i = 0,02 e t = 3.",
      "Calcule: J = 100 × 0,02 × 3 = 6.",
      "Resposta: os juros são R$ 6 e o montante é R$ 106."
    ],
    flashcards: [
      ["Qual é a fórmula dos juros simples?", "J = C × i × t."],
      ["O que é capital?", "É o valor inicial aplicado ou emprestado."],
      ["O que diferencia juros compostos?", "Os juros são incorporados ao saldo, e os próximos juros incidem sobre o valor acumulado."]
    ]
  },
  trigonometria: {
    nome: "Trigonometria",
    emoji: "📏",
    descricao: "Relacione ângulos e lados em triângulos retângulos.",
    explicacao: "A trigonometria estuda relações entre ângulos e lados. No triângulo retângulo, a hipotenusa fica oposta ao ângulo de 90°. Os outros dois lados são os catetos.",
    formulas: [
      "sen(θ) = cateto oposto ÷ hipotenusa",
      "cos(θ) = cateto adjacente ÷ hipotenusa",
      "tg(θ) = cateto oposto ÷ cateto adjacente"
    ],
    exemplo: [
      "Um triângulo retângulo tem hipotenusa 10 e cateto oposto a um ângulo de 30° igual a 5.",
      "Use sen(θ) = cateto oposto ÷ hipotenusa.",
      "sen(θ) = 5 ÷ 10 = 0,5.",
      "Resposta: o seno desse ângulo é 0,5."
    ],
    flashcards: [
      ["Como calcular o seno?", "Cateto oposto dividido pela hipotenusa."],
      ["Qual lado fica oposto ao ângulo de 90°?", "A hipotenusa."],
      ["Como calcular a tangente?", "Cateto oposto dividido pelo cateto adjacente."]
    ]
  },
  estatistica: {
    nome: "Estatística",
    emoji: "📊",
    descricao: "Interprete dados, média, moda, mediana e gráficos.",
    explicacao: "A estatística organiza e interpreta dados. A média é calculada pela soma dos valores dividida pela quantidade. A moda é o valor mais frequente. A mediana é o valor central dos dados ordenados.",
    formulas: [
      "Média aritmética = soma dos valores ÷ quantidade",
      "Moda = valor que aparece com maior frequência",
      "Mediana = valor central após ordenar os dados"
    ],
    exemplo: [
      "Considere os valores 2, 4 e 6.",
      "Some: 2 + 4 + 6 = 12.",
      "Divida pela quantidade de valores: 12 ÷ 3 = 4.",
      "Resposta: a média é 4."
    ],
    flashcards: [
      ["Como encontrar a média?", "Some todos os valores e divida pela quantidade."],
      ["O que é moda?", "O valor que mais se repete."],
      ["O que devemos fazer antes de encontrar a mediana?", "Colocar os dados em ordem."]
    ]
  },
  probabilidade: {
    nome: "Probabilidade",
    emoji: "🎲",
    descricao: "Calcule as chances de um evento acontecer.",
    explicacao: "Probabilidade mede a chance de um evento acontecer. Quando todos os resultados são igualmente possíveis, dividimos a quantidade de resultados favoráveis pela quantidade total de resultados possíveis.",
    formulas: [
      "P(A) = casos favoráveis ÷ casos possíveis",
      "A probabilidade fica entre 0 e 1, ou entre 0% e 100%."
    ],
    exemplo: [
      "Um dado comum tem seis faces. Qual é a probabilidade de sair 6?",
      "Existe um resultado favorável: sair 6.",
      "Existem seis resultados possíveis.",
      "Resposta: P = 1/6, aproximadamente 16,7%."
    ],
    flashcards: [
      ["Qual é a fórmula básica da probabilidade?", "Casos favoráveis divididos pelos casos possíveis, quando são igualmente prováveis."],
      ["Qual é a probabilidade de um evento impossível?", "0%."],
      ["Qual é a probabilidade de um evento certo?", "100%."]
    ]
  },
  progressoes: {
    nome: "Progressões (PA e PG)",
    emoji: "🔢",
    descricao: "Descubra padrões em sequências numéricas.",
    explicacao: "Uma progressão aritmética (PA) tem diferença constante entre termos consecutivos. Uma progressão geométrica (PG) tem razão constante, obtida pela divisão entre termos consecutivos.",
    formulas: [
      "PA: aₙ = a₁ + (n − 1)r",
      "PG: aₙ = a₁ × qⁿ⁻¹",
      "r é a razão da PA; q é a razão da PG."
    ],
    exemplo: [
      "Considere a PA: 3, 7, 11, 15...",
      "A diferença entre termos é 4, portanto r = 4.",
      "Para encontrar o quinto termo: a₅ = 3 + (5 − 1) × 4.",
      "Resposta: a₅ = 19."
    ],
    flashcards: [
      ["O que caracteriza uma PA?", "Uma diferença constante entre termos consecutivos."],
      ["O que caracteriza uma PG?", "Uma razão constante entre termos consecutivos."],
      ["Qual é a razão da PA 2, 5, 8, 11?", "3."]
    ]
  }
};

// Cada questão possui assunto, nível, alternativas, resposta correta e explicação.
const bancoQuestoes = [
  {
    tema: "geometria", nivel: "facil",
    pergunta: "Um retângulo tem base de 6 cm e altura de 4 cm. Qual é sua área?",
    opcoes: ["10 cm²", "20 cm²", "24 cm²", "28 cm²"],
    correta: 2,
    explicacao: "A área do retângulo é base × altura: 6 × 4 = 24 cm²."
  },
  {
    tema: "geometria", nivel: "medio",
    pergunta: "Qual é o volume de um cubo com aresta de 3 cm?",
    opcoes: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
    correta: 2,
    explicacao: "O volume do cubo é aresta³: 3 × 3 × 3 = 27 cm³."
  },
  {
    tema: "geometria", nivel: "dificil",
    pergunta: "Um cilindro tem raio 2 cm e altura 5 cm. Qual é seu volume?",
    opcoes: ["10π cm³", "20π cm³", "25π cm³", "40π cm³"],
    correta: 1,
    explicacao: "V = πr²h = π × 2² × 5 = 20π cm³."
  },
  {
    tema: "porcentagem", nivel: "facil",
    pergunta: "Quanto é 10% de 200?",
    opcoes: ["10", "20", "30", "40"],
    correta: 1,
    explicacao: "10% = 0,10. Então 0,10 × 200 = 20."
  },
  {
    tema: "porcentagem", nivel: "medio",
    pergunta: "Um produto custa R$ 80 e recebe desconto de 25%. Qual é o preço final?",
    opcoes: ["R$ 20", "R$ 55", "R$ 60", "R$ 65"],
    correta: 2,
    explicacao: "25% de 80 é 20. Subtraindo o desconto: 80 − 20 = R$ 60."
  },
  {
    tema: "porcentagem", nivel: "dificil",
    pergunta: "Um preço de R$ 100 aumenta 20% e depois diminui 20%. Qual é o preço final?",
    opcoes: ["R$ 100", "R$ 96", "R$ 98", "R$ 80"],
    correta: 1,
    explicacao: "Após o aumento: 100 × 1,20 = 120. Depois: 120 × 0,80 = 96. Os percentuais incidem sobre valores diferentes."
  },
  {
    tema: "equacoes", nivel: "facil",
    pergunta: "Quais são as raízes de x² − 5x + 6 = 0?",
    opcoes: ["1 e 6", "2 e 3", "−2 e −3", "0 e 6"],
    correta: 1,
    explicacao: "A equação pode ser fatorada em (x − 2)(x − 3) = 0. Portanto, x = 2 ou x = 3."
  },
  {
    tema: "equacoes", nivel: "medio",
    pergunta: "Qual é o valor de Δ em 2x² + 3x − 2 = 0?",
    opcoes: ["1", "9", "25", "−7"],
    correta: 2,
    explicacao: "Δ = b² − 4ac = 3² − 4 × 2 × (−2) = 9 + 16 = 25."
  },
  {
    tema: "equacoes", nivel: "dificil",
    pergunta: "Qual é a soma das raízes de 3x² − 7x + 2 = 0?",
    opcoes: ["−7/3", "2/3", "7/3", "−2/3"],
    correta: 2,
    explicacao: "A soma das raízes é −b/a. Logo, −(−7)/3 = 7/3."
  },
  {
    tema: "funcoes", nivel: "facil",
    pergunta: "Se f(x) = 2x + 1, quanto vale f(3)?",
    opcoes: ["5", "6", "7", "8"],
    correta: 2,
    explicacao: "Substitua x por 3: f(3) = 2 × 3 + 1 = 7."
  },
  {
    tema: "funcoes", nivel: "medio",
    pergunta: "Qual é a raiz da função f(x) = 3x − 12?",
    opcoes: ["−4", "3", "4", "12"],
    correta: 2,
    explicacao: "A raiz ocorre quando f(x) = 0. Então 3x − 12 = 0 e x = 4."
  },
  {
    tema: "funcoes", nivel: "dificil",
    pergunta: "Qual é a raiz da função f(x) = −2x + 10?",
    opcoes: ["−5", "2", "5", "10"],
    correta: 2,
    explicacao: "Faça −2x + 10 = 0. Assim, −2x = −10 e x = 5."
  },
  {
    tema: "razao", nivel: "facil",
    pergunta: "Se 2 cadernos custam R$ 10, quanto custam 4 cadernos pelo mesmo preço unitário?",
    opcoes: ["R$ 15", "R$ 20", "R$ 25", "R$ 40"],
    correta: 1,
    explicacao: "Cada caderno custa R$ 5. Quatro cadernos custam 4 × 5 = R$ 20."
  },
  {
    tema: "razao", nivel: "medio",
    pergunta: "Três torneiras iguais enchem um tanque em 6 horas. No mesmo ritmo, quanto tempo 6 torneiras levam?",
    opcoes: ["2 horas", "3 horas", "6 horas", "12 horas"],
    correta: 1,
    explicacao: "É uma relação inversamente proporcional: dobrando o número de torneiras, o tempo cai pela metade, para 3 horas."
  },
  {
    tema: "razao", nivel: "dificil",
    pergunta: "Uma receita para 4 pessoas usa 300 g de farinha. Quantos gramas serão necessários para 10 pessoas, mantendo a proporção?",
    opcoes: ["600 g", "650 g", "700 g", "750 g"],
    correta: 3,
    explicacao: "300 ÷ 4 = 75 g por pessoa. Para 10 pessoas: 75 × 10 = 750 g."
  },
  {
    tema: "juros", nivel: "facil",
    pergunta: "Qual é o juro simples de R$ 100 a 2% ao mês durante 3 meses?",
    opcoes: ["R$ 2", "R$ 3", "R$ 6", "R$ 12"],
    correta: 2,
    explicacao: "J = C × i × t = 100 × 0,02 × 3 = R$ 6."
  },
  {
    tema: "juros", nivel: "medio",
    pergunta: "Qual é o montante de R$ 200 a juros simples de 5% ao mês durante 2 meses?",
    opcoes: ["R$ 210", "R$ 220", "R$ 225", "R$ 240"],
    correta: 1,
    explicacao: "J = 200 × 0,05 × 2 = R$ 20. Montante = 200 + 20 = R$ 220."
  },
  {
    tema: "juros", nivel: "dificil",
    pergunta: "Qual é o montante de R$ 100 aplicados a juros compostos de 10% ao período por 2 períodos?",
    opcoes: ["R$ 110", "R$ 120", "R$ 121", "R$ 130"],
    correta: 2,
    explicacao: "M = 100 × (1 + 0,10)² = 100 × 1,21 = R$ 121."
  },
  {
    tema: "trigonometria", nivel: "facil",
    pergunta: "Em um triângulo retângulo, qual lado fica oposto ao ângulo de 90°?",
    opcoes: ["Cateto oposto", "Cateto adjacente", "Hipotenusa", "Mediana"],
    correta: 2,
    explicacao: "A hipotenusa é o lado oposto ao ângulo reto e é o maior lado do triângulo retângulo."
  },
  {
    tema: "trigonometria", nivel: "medio",
    pergunta: "Se o cateto oposto mede 3 e a hipotenusa mede 5, qual é o seno do ângulo?",
    opcoes: ["3/5", "5/3", "2/5", "3/2"],
    correta: 0,
    explicacao: "Seno = cateto oposto ÷ hipotenusa = 3/5 = 0,6."
  },
  {
    tema: "trigonometria", nivel: "dificil",
    pergunta: "Em um triângulo retângulo, um ângulo agudo mede 30°. Qual é o seno desse ângulo?",
    opcoes: ["0", "1/2", "√2/2", "1"],
    correta: 1,
    explicacao: "O seno de 30° é 1/2."
  },
  {
    tema: "estatistica", nivel: "facil",
    pergunta: "Qual é a média dos valores 2, 4 e 6?",
    opcoes: ["3", "4", "5", "6"],
    correta: 1,
    explicacao: "Média = (2 + 4 + 6) ÷ 3 = 12 ÷ 3 = 4."
  },
  {
    tema: "estatistica", nivel: "medio",
    pergunta: "Qual é a mediana de 2, 5, 7, 9 e 12?",
    opcoes: ["5", "7", "9", "12"],
    correta: 1,
    explicacao: "Os valores já estão ordenados. O valor central é 7."
  },
  {
    tema: "estatistica", nivel: "dificil",
    pergunta: "A média de 4 números é 8. A soma de três deles é 21. Qual é o quarto número?",
    opcoes: ["8", "9", "10", "11"],
    correta: 3,
    explicacao: "A soma total é 4 × 8 = 32. O número que falta é 32 − 21 = 11."
  },
  {
    tema: "probabilidade", nivel: "facil",
    pergunta: "Qual é a probabilidade de sair 6 em um dado comum e justo?",
    opcoes: ["1/2", "1/3", "1/6", "1/12"],
    correta: 2,
    explicacao: "Existe um resultado favorável entre seis possíveis: 1/6."
  },
  {
    tema: "probabilidade", nivel: "medio",
    pergunta: "Em uma caixa há 3 bolas vermelhas e 2 azuis. Qual é a probabilidade de retirar uma bola vermelha em um sorteio?",
    opcoes: ["2/5", "3/5", "1/2", "3/2"],
    correta: 1,
    explicacao: "São 3 bolas vermelhas entre 5 bolas no total. A probabilidade é 3/5, ou 60%."
  },
  {
    tema: "probabilidade", nivel: "dificil",
    pergunta: "Ao lançar duas moedas justas, qual é a probabilidade de sair cara nas duas?",
    opcoes: ["1/2", "1/3", "1/4", "3/4"],
    correta: 2,
    explicacao: "Os resultados possíveis são cara-cara, cara-coroa, coroa-cara e coroa-coroa. Um dos quatro resultados tem duas caras: 1/4."
  },
  {
    tema: "progressoes", nivel: "facil",
    pergunta: "Qual é a razão da PA 2, 5, 8, 11?",
    opcoes: ["2", "3", "5", "8"],
    correta: 1,
    explicacao: "Subtraia termos consecutivos: 5 − 2 = 3. A razão é 3."
  },
  {
    tema: "progressoes", nivel: "medio",
    pergunta: "Qual é o quinto termo da PA 3, 7, 11, 15, ...?",
    opcoes: ["17", "18", "19", "20"],
    correta: 2,
    explicacao: "A razão é 4. O quinto termo é 15 + 4 = 19."
  },
  {
    tema: "progressoes", nivel: "dificil",
    pergunta: "Em uma PG com primeiro termo 3 e razão 2, qual é o quarto termo?",
    opcoes: ["12", "18", "24", "48"],
    correta: 2,
    explicacao: "A sequência é 3, 6, 12, 24. O quarto termo é 24."
  }
];

const CHAVE_PROGRESSO = "abelMatematicaProgressoV1";

function carregarProgresso() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_PROGRESSO));
    if (dados && Array.isArray(dados.historico)) return dados;
  } catch (erro) {
    console.warn("Não foi possível carregar o progresso salvo.", erro);
  }
  return { historico: [] };
}

let progresso = carregarProgresso();
let temaSelecionado = Object.keys(assuntos)[0];
let questoesDaSessao = [];
let indiceQuestao = 0;
let respondida = false;
let flashcardIndice = 0;

const niveis = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil"
};

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
}

function salvarProgresso() {
  try {
    localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(progresso));
  } catch (erro) {
    console.warn("Não foi possível salvar o progresso.", erro);
  }
}

function navegar(pagina) {
  const paginasValidas = ["inicio", "conteudos", "exercicios", "desenvolvimento"];
  if (!paginasValidas.includes(pagina)) return;

  document.querySelectorAll(".page").forEach(secao => {
    secao.classList.toggle("active", secao.id === `page-${pagina}`);
  });

  document.querySelectorAll("[data-page]").forEach(botao => {
    botao.classList.toggle("active", botao.dataset.page === pagina);
  });

  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");

  if (pagina === "desenvolvimento") renderizarProgresso();
  if (pagina === "inicio") renderizarInicio();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach(botao => {
  botao.addEventListener("click", () => navegar(botao.dataset.page));
});

document.querySelectorAll("[data-go]").forEach(botao => {
  botao.addEventListener("click", () => navegar(botao.dataset.go));
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const menu = document.getElementById("mainNav");
  const aberto = menu.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(aberto));
});

function renderizarCartaoAssunto(chave) {
  const assunto = assuntos[chave];
  return `
    <article class="topic-card">
      <span class="topic-emoji">${assunto.emoji}</span>
      <h3>${escapar(assunto.nome)}</h3>
      <p>${escapar(assunto.descricao)}</p>
      <button class="btn btn-blue" data-study="${chave}">Estudar assunto</button>
    </article>`;
}

function renderizarInicio() {
  const historico = progresso.historico;
  const total = historico.length;
  const certos = historico.filter(item => item.correta).length;
  const aproveitamento = total ? Math.round(certos / total * 100) : 0;

  document.getElementById("homeTopics").textContent = Object.keys(assuntos).length;
  document.getElementById("homeAnswered").textContent = total;
  document.getElementById("homeAccuracy").textContent = `${aproveitamento}%`;

  document.getElementById("homeTopicGrid").innerHTML =
    Object.keys(assuntos).slice(0, 4).map(renderizarCartaoAssunto).join("");

  document.querySelectorAll("[data-study]").forEach(botao => {
    botao.addEventListener("click", () => abrirAssunto(botao.dataset.study));
  });
}

function renderizarListaAssuntos() {
  document.getElementById("topicList").innerHTML =
    Object.entries(assuntos).map(([chave, assunto]) => `
      <button class="topic-select ${chave === temaSelecionado ? "active" : ""}"
              data-topic="${chave}">
        ${assunto.emoji} ${escapar(assunto.nome)}
      </button>`).join("");

  document.querySelectorAll("[data-topic]").forEach(botao => {
    botao.addEventListener("click", () => abrirAssunto(botao.dataset.topic));
  });
}

function renderizarLicao(chave) {
  const assunto = assuntos[chave];

  const formulas = assunto.formulas.map(formula =>
    `<li>${escapar(formula)}</li>`).join("");

  const passos = assunto.exemplo.map((passo, indice) =>
    `<p class="step"><strong>${indice + 1}.</strong> ${escapar(passo)}</p>`).join("");

  document.getElementById("lessonContent").innerHTML = `
    <span class="eyebrow">CONTEÚDO DE MATEMÁTICA</span>
    <h2 class="lesson-title">${assunto.emoji} ${escapar(assunto.nome)}</h2>
    <p class="lesson-intro">${escapar(assunto.descricao)}</p>

    <section class="lesson-block">
      <h3>📖 Entenda o assunto</h3>
      <p>${escapar(assunto.explicacao)}</p>
    </section>

    <section class="lesson-block">
      <h3>🧠 Fórmulas importantes</h3>
      <ul>${formulas}</ul>
    </section>

    <section class="lesson-block">
      <h3>✍️ Exemplo resolvido passo a passo</h3>
      <div class="example-box">${passos}</div>
    </section>

    <section class="lesson-block">
      <h3>🃏 Flashcards para revisar</h3>
      <p>Leia a pergunta, tente responder mentalmente e depois revele a resposta.</p>
      <div id="flashcardContainer"></div>
    </section>

    <section class="lesson-block">
      <h3>🎯 Agora é sua vez</h3>
      <p>Teste o que aprendeu com questões deste assunto.</p>
      <button class="btn btn-blue" id="practiceThisTopic">Praticar ${escapar(assunto.nome)}</button>
    </section>`;

  flashcardIndice = 0;
  renderizarFlashcard(chave);

  document.getElementById("practiceThisTopic").addEventListener("click", () => {
    document.getElementById("exerciseTopic").value = chave;
    navegar("exercicios");
    iniciarExercicios();
  });
}

function renderizarFlashcard(chave) {
  const cards = assuntos[chave].flashcards;
  const card = cards[flashcardIndice % cards.length];

  document.getElementById("flashcardContainer").innerHTML = `
    <div class="flashcard">
      <p class="muted">Cartão ${flashcardIndice + 1} de ${cards.length}</p>
      <p class="flash-question">${escapar(card[0])}</p>
      <div class="flash-answer" id="flashAnswer" hidden>
        <strong>Resposta:</strong> ${escapar(card[1])}
      </div>
      <div class="flashcard-actions">
        <button class="btn btn-blue" id="revealFlashcard">Revelar resposta</button>
        <button class="btn btn-outline" id="nextFlashcard">Próximo cartão →</button>
      </div>
    </div>`;

  document.getElementById("revealFlashcard").addEventListener("click", () => {
    const resposta = document.getElementById("flashAnswer");
    resposta.hidden = !resposta.hidden;
    document.getElementById("revealFlashcard").textContent =
      resposta.hidden ? "Revelar resposta" : "Ocultar resposta";
  });

  document.getElementById("nextFlashcard").addEventListener("click", () => {
    flashcardIndice = (flashcardIndice + 1) % cards.length;
    renderizarFlashcard(chave);
  });
}

function abrirAssunto(chave) {
  if (!assuntos[chave]) return;
  temaSelecionado = chave;
  renderizarListaAssuntos();
  renderizarLicao(chave);
  navegar("conteudos");
}

function preencherSelecaoExercicios() {
  document.getElementById("exerciseTopic").innerHTML =
    Object.entries(assuntos).map(([chave, assunto]) =>
      `<option value="${chave}">${escapar(assunto.nome)}</option>`
    ).join("");
}

function iniciarExercicios() {
  const tema = document.getElementById("exerciseTopic").value;
  const nivel = document.getElementById("exerciseLevel").value;

  questoesDaSessao = bancoQuestoes.filter(q => q.tema === tema && q.nivel === nivel);

  indiceQuestao = 0;
  respondida = false;

  const resumo = document.getElementById("exerciseSummary");
  resumo.innerHTML = `
    <span>🎯</span>
    <div>
      <h3>${escapar(assuntos[tema].nome)} · ${niveis[nivel]}</h3>
      <p>${questoesDaSessao.length} questão(ões) disponível(is) neste nível. Leia com atenção e confira a explicação após responder.</p>
    </div>`;

  if (!questoesDaSessao.length) {
    document.getElementById("exerciseArea").innerHTML =
      "<p>Não há questões cadastradas para essa combinação.</p>";
    return;
  }

  renderizarQuestao();
}

function renderizarQuestao() {
  const area = document.getElementById("exerciseArea");
  const questao = questoesDaSessao[indiceQuestao];
  respondida = false;

  const opcoes = questao.opcoes.map((opcao, indice) => `
    <button class="answer-option" data-answer="${indice}">
      ${String.fromCharCode(65 + indice)}. ${escapar(opcao)}
    </button>`).join("");

  area.innerHTML = `
    <article class="exercise-card">
      <div class="question-meta">
        <span class="pill">${escapar(assuntos[questao.tema].nome)}</span>
        <span class="pill">${niveis[questao.nivel]}</span>
        <span>Questão ${indiceQuestao + 1} de ${questoesDaSessao.length}</span>
      </div>
      <p class="question-text">${escapar(questao.pergunta)}</p>
      <div class="answer-options">${opcoes}</div>
      <div class="answer-feedback" id="answerFeedback" hidden aria-live="polite"></div>
      <div class="question-footer">
        <span class="muted" id="questionStatus">Escolha uma alternativa.</span>
        <button class="btn btn-blue" id="nextQuestion" disabled>
          ${indiceQuestao === questoesDaSessao.length - 1 ? "Finalizar" : "Próxima questão →"}
        </button>
      </div>
    </article>`;

  area.querySelectorAll("[data-answer]").forEach(botao => {
    botao.addEventListener("click", () => responderQuestao(Number(botao.dataset.answer)));
  });

  document.getElementById("nextQuestion").addEventListener("click", avancarQuestao);
}

function responderQuestao(indiceResposta) {
  if (respondida) return;
  respondida = true;

  const questao = questoesDaSessao[indiceQuestao];
  const correta = indiceResposta === questao.correta;

  document.querySelectorAll("[data-answer]").forEach(botao => {
    botao.disabled = true;
    const indice = Number(botao.dataset.answer);

    if (indice === questao.correta) botao.classList.add("correct");
    if (indice === indiceResposta && !correta) botao.classList.add("incorrect");
  });

  const feedback = document.getElementById("answerFeedback");
  feedback.hidden = false;
  feedback.className = `answer-feedback ${correta ? "correct" : "incorrect"}`;
  feedback.innerHTML = `<strong>${correta ? "✅ Resposta correta!" : "❌ Não foi dessa vez."}</strong><p>${escapar(questao.explicacao)}</p>`;

  document.getElementById("questionStatus").textContent =
    correta ? "Você acertou esta questão!" : "Revise a explicação e continue praticando.";

  progresso.historico.unshift({
    tema: questao.tema,
    nivel: questao.nivel,
    pergunta: questao.pergunta,
    correta,
    data: new Date().toISOString()
  });

  // Mantém os registros recentes para evitar que o histórico cresça sem limite.
  progresso.historico = progresso.historico.slice(0, 500);
  salvarProgresso();
  renderizarInicio();
  renderizarProgresso();

  document.getElementById("nextQuestion").disabled = false;
}

function avancarQuestao() {
  if (!respondida) return;

  if (indiceQuestao < questoesDaSessao.length - 1) {
    indiceQuestao++;
    renderizarQuestao();
  } else {
    document.getElementById("exerciseArea").innerHTML = `
      <div class="exercise-card">
        <h2>🎉 Você terminou esta sequência!</h2>
        <p>Continue estudando, revise os erros e tente outro nível de dificuldade.</p>
        <button class="btn btn-blue" id="againExercise">Tentar novamente</button>
        <button class="btn btn-outline" id="seeProgress">Ver meu desenvolvimento</button>
      </div>`;

    document.getElementById("againExercise").addEventListener("click", iniciarExercicios);
    document.getElementById("seeProgress").addEventListener("click", () => navegar("desenvolvimento"));
  }
}

function renderizarProgresso() {
  const historico = progresso.historico;
  const total = historico.length;
  const certos = historico.filter(item => item.correta).length;
  const percentual = total ? Math.round(certos / total * 100) : 0;

  document.getElementById("progressAnswered").textContent = total;
  document.getElementById("progressCorrect").textContent = certos;
  document.getElementById("progressAccuracy").textContent = `${percentual}%`;

  document.getElementById("topicProgress").innerHTML =
    Object.entries(assuntos).map(([chave, assunto]) => {
      const itens = historico.filter(item => item.tema === chave);
      const acertos = itens.filter(item => item.correta).length;
      const aproveitamento = itens.length ? Math.round(acertos / itens.length * 100) : 0;

      return `
        <div class="topic-progress-row">
          <div class="topic-progress-heading">
            <span>${assunto.emoji} ${escapar(assunto.nome)}</span>
            <span>${acertos}/${itens.length} acertos</span>
          </div>
          <div class="progress-track" role="progressbar"
               aria-label="Aproveitamento em ${escapar(assunto.nome)}"
               aria-valuemin="0" aria-valuemax="100" aria-valuenow="${aproveitamento}">
            <div class="progress-fill" style="width:${aproveitamento}%"></div>
          </div>
        </div>`;
    }).join("");

  const recentes = historico.slice(0, 10);

  document.getElementById("recentHistory").innerHTML = recentes.length
    ? `<div class="history-list">${recentes.map(item => `
        <div class="history-item">
          <div>
            <strong>${escapar(assuntos[item.tema]?.nome || item.tema)}</strong>
            <div class="muted">${escapar(item.pergunta)}</div>
            <small>${new Date(item.data).toLocaleString("pt-BR")}</small>
          </div>
          <span class="${item.correta ? "result-correct" : "result-incorrect"}">
            ${item.correta ? "Acertou" : "Errou"}
          </span>
        </div>`).join("")}</div>`
    : "<p class='muted'>Você ainda não respondeu a nenhuma questão. Vá à área de exercícios para começar!</p>";
}

document.getElementById("startExercise").addEventListener("click", iniciarExercicios);

document.getElementById("resetProgress").addEventListener("click", () => {
  const confirmar = window.confirm("Tem certeza de que deseja apagar todo o seu progresso salvo neste navegador?");
  if (!confirmar) return;

  progresso = { historico: [] };
  salvarProgresso();
  renderizarProgresso();
  renderizarInicio();
});

renderizarListaAssuntos();
renderizarLicao(temaSelecionado);
preencherSelecaoExercicios();
renderizarInicio();
renderizarProgresso();
