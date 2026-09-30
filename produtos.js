/*
  produtos.js — cardápio da Manda Burguer
  Só guarda os dados. O script.js desenha tudo na página.

  Para adicionar um item: copie um bloco { ... } dentro de "itens" e troque os textos.
  Campos: nome, preco ("R$ 0,00"), unidade, imagem (emoji ou caminho "img/x.jpg"),
          descricao, destaque (true = aparece em "Os mais pedidos"), selo (texto do adesivo).
  Os preços abaixo são de exemplo: troque pelos valores reais.
*/

const catalogoProdutos = {

  burgers: {
    nome: "Hamburguer Artesanal",
    emoji: "🍔",
    itens: [
      { nome: "Romeu e Julieta", preco: "R$ 25,00", unidade: "un", imagem: "img/romeu-e-julieta.jpg",
        descricao: "Blend 160g, queijo prato, alface, tomate e maionese da casa.", destaque: false, selo: "" },
      { nome: "Manda Chicken (frango desfiado)", preco: "R$ 17,00", unidade: "un", imagem: "img/manda-chicken.jpg",
        descricao: "Frango desfiado no pão macio, preparado na chapa.", destaque: false, selo: "" },
      { nome: "Manda Cheddar", preco: "R$ 22,00", unidade: "un", imagem: "img/manda-cheddar.jpg",
        descricao: "Blend 160g com muito cheddar cremoso e picles.", destaque: false, selo: "" },
      { nome: "Manda Duplo", preco: "R$ 22,00", unidade: "un", imagem: "img/manda-duplo.jpg",
        descricao: "Dois hambúrgueres em uma só combinação.", destaque: true, selo: "Pega fogo" },
      { nome: "Manda Calabresa", preco: "R$ 18,00", unidade: "un", imagem: "img/manda-calabresa.jpg",
        descricao: "Hambúrguer com calabresa.", destaque: false, selo: "" },
      { nome: "Manda Bacon", preco: "R$ 18,00", unidade: "un", imagem: "img/manda-bacon.jpg",
        descricao: "Blend 160g, bacon crocante, cheddar e cebola caramelizada.", destaque: true, selo: "Mais pedido" },
      { nome: "Manda Burguer", preco: "R$ 14,00", unidade: "un", imagem: "img/manda-burguer.jpg",
        descricao: "Blend de carne, pão macio e molho da casa.", destaque: false, selo: "" },
      { nome: "Manda Eggs", preco: "R$ 17,00", unidade: "un", imagem: "img/manda-eggs.jpg",
        descricao: "Hambúrguer com ovo.", destaque: true, selo: "Mais pedido" },
      { nome: "Manda Tudo", preco: "R$ 30,00", unidade: "un", imagem: "img/manda-tudo.jpg",
        descricao: "Hambúrguer completo da casa.", destaque: false, selo: "" }
    ]
  },

  porcoes: {
    nome: "Entradas",
    emoji: "🍟",
    itens: [
      { nome: "Onion rings (cebola empanada)", preco: "R$ 18,00", unidade: "porção", imagem: "img/onion-rings.jpg",
        descricao: "Cebola empanada.", destaque: false, selo: "" },
      { nome: "Batta Frita P", preco: "R$ 12,00", unidade: "porção", imagem: "img/batata-frita-p.jpg",
        descricao: "Batata frita tamanho P.", destaque: false, selo: "" },
      { nome: "Batata Frita M", preco: "R$ 22,00", unidade: "porção", imagem: "img/batata-frita-m.jpg",
        descricao: "Batata frita tamanho M.", destaque: false, selo: "" },
      { nome: "Batata Frita G", preco: "R$ 30,00", unidade: "porção", imagem: "img/batata-frita-g.jpg",
        descricao: "Batata frita tamanho G.", destaque: false, selo: "" }
    ]
  },

  pizzaDobrada: {
    nome: "Pizza dobrada",
    emoji: "🍕",
    itens: [
      { nome: "Pizza dobrada de frango com requeijão cremoso", preco: "R$ 16,00", unidade: "un", imagem: "img/pizza-dobrada-frango-requeijao.jpg",
        descricao: "Pizza dobrada de frango com requeijão cremoso.", destaque: false, selo: "" },
      { nome: "Pizza dobrada de frango", preco: "R$ 14,00", unidade: "un", imagem: "img/pizza-dobrada-frango.jpg",
        descricao: "Pizza dobrada de frango.", destaque: false, selo: "" },
      { nome: "Pizza dobrada de calabresa", preco: "R$ 14,00", unidade: "un", imagem: "img/pizza-dobrada-calabresa.jpg",
        descricao: "Pizza dobrada de calabresa.", destaque: false, selo: "" },
      { nome: "Pizza dobrada de queijo", preco: "R$ 14,00", unidade: "un", imagem: "img/pizza-dobrada-queijo.jpg",
        descricao: "Pizza dobrada de queijo.", destaque: false, selo: "" }
    ]
  },

  macarronadas: {
    nome: "Macarronadas",
    emoji: "🍝",
    itens: [
      { nome: "MACARRONADA BOLONHESA (M)", preco: "R$ 35,00", unidade: "prato", imagem: "img/macarronada-bolonhesa-m.jpg",
        descricao: "Macarronada à bolonhesa, tamanho M.", destaque: false, selo: "" },
      { nome: "MACARRONADA DA CASA (P)", preco: "R$ 25,00", unidade: "prato", imagem: "img/macarronada-da-casa-p.jpg",
        descricao: "Macarronada da casa, tamanho P.", destaque: false, selo: "" },
      { nome: "MACARRONADA BOLONHESA (P)", preco: "R$ 20,00", unidade: "prato", imagem: "img/macarronada-bolonhesa-p.jpg",
        descricao: "Macarronada à bolonhesa, tamanho P.", destaque: false, selo: "" },
      { nome: "MACARRONADA DA CASA (M)", preco: "R$ 42,00", unidade: "prato", imagem: "img/macarronada-da-casa-m.jpg",
        descricao: "Macarronada da casa, tamanho M.", destaque: false, selo: "" }
    ]
  },

};