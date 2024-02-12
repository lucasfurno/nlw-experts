// perguntas e respostas do quiz
const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "var",
        "v"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dessas opções é um método de array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "insert()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas opções é usada para comentar uma única linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "<!-- -->"
      ],
      correta: 0
    },
    {
      pergunta: "Como você chama uma função chamada 'minhaFuncao'?",
      respostas: [
        "call minhaFuncao()",
        "invoke minhaFuncao()",
        "minhaFuncao()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual dessas opções é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Object",
        "Array",
        "String"
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos é usado para transformar uma string em minúsculas em JavaScript?",
      respostas: [
        "toUpperCase()",
        "toLowerCase()",
        "toLower()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses operadores é usado para atribuição em JavaScript?",
      respostas: [
        "++",
        "=",
        "=="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função de 'console.log()' em JavaScript?",
      respostas: [
        "Exibir um alerta na página",
        "Registrar uma mensagem no console do navegador",
        "Alterar o título da página"
      ],
      correta: 1
    }
  ];
  
  // define variável com o conteúdo do div id=quiz
  const quiz = document.querySelector('#quiz')
  // define variável com a estrutura template criada no HTML
  const template = document.querySelector('template')
  //
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    // define variável clonando o conteúdo da variável template
    const quizItem = template.content.cloneNode(true)
    // altera o conteúdo da classe h3 pelo valor da pergunta
    quizItem.querySelector('h3').textContent = item.pergunta
    
    // estrutura de repetição para capturar as respostas
    for (let resposta of item.respostas) {
      // define variável clonando o conteúdo da estrutura dl dentro da classe dt
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // altera o valor da classe span pela resposta
      dt.querySelector('span').textContent = resposta
      // 
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      // 
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      // 
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      // adiciona o valor da variável dt a classe dl da variável quizItem
      quizItem.querySelector('dl').appendChild(dt)
    }
    // remove "Resposta A" do conteúdo da variável quizItem
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta e as respostas na tela
    quiz.appendChild(quizItem)
  }