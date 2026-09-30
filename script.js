/*
  script.js — Manda Burguer
  - Menu mobile
  - Cardápio a partir do catalogoProdutos (produtos.js), com filtro por categoria e busca
  - "Os mais pedidos" (itens com destaque: true)
*/
'use strict';

let catAtiva = 'todos';
let termo = '';

const $ = (s) => document.querySelector(s);
const normaliza = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const visual = (img) => (img.includes('/') ? `<img src="${img}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover">` : img);

// ─── Menu mobile ──────────────────────────────────────────────────────────────
function setMenu(aberto) {
  const toggle = $('#menu-toggle');
  toggle.setAttribute('aria-expanded', String(aberto));
  $('#mobile-nav').classList.toggle('open', aberto);
  $('#mobile-nav').setAttribute('aria-hidden', String(!aberto));
}

// ─── Cardápio ─────────────────────────────────────────────────────────────────
function cardProduto(p) {
  const selo = p.selo ? `<span class="selo">${p.selo}</span>` : '';
  return `
    <article class="card">
      ${selo}
      <div class="foto" aria-hidden="true">${visual(p.imagem)}</div>
      <h3>${p.nome}</h3>
      <p class="desc">${p.descricao}</p>
      <div class="rodape-card">
        <span class="preco">${p.preco}<small>/${p.unidade}</small></span>
      </div>
    </article>`;
}

function renderChips() {
  const chips = [['todos', '🔥 Tudo']].concat(
    Object.entries(catalogoProdutos).map(([c, v]) => [c, `${v.emoji} ${v.nome}`])
  );
  $('#chips').innerHTML = chips
    .map(([c, rot]) => `<button class="category-chip" data-cat="${c}" aria-pressed="${c === catAtiva}">${rot}</button>`)
    .join('');
}

function renderCardapio() {
  const t = normaliza(termo.trim());
  let html = '';
  Object.entries(catalogoProdutos).forEach(([c, cat]) => {
    if (catAtiva !== 'todos' && catAtiva !== c) return;
    const itens = cat.itens.filter((p) => !t || normaliza(`${p.nome} ${p.descricao} ${cat.nome}`).includes(t));
    if (!itens.length) return;
    html += `<h3 class="cat-titulo">${cat.emoji} ${cat.nome}<a class="cat-voltar" href="#cardapio" aria-label="Voltar ao início dos produtos" title="Voltar ao início dos produtos"><img src="img/seta.png" alt=""></a></h3><div class="grid">${itens.map(cardProduto).join('')}</div>`;
  });
  $('#lista-produtos').innerHTML =
    html || '<p class="vazio-busca">Nada com esse nome. Tente outra palavra, como "bacon" ou "batata".</p>';
}

function renderDestaques() {
  const html = Object.entries(catalogoProdutos)
    .flatMap(([, cat]) => cat.itens.filter((p) => p.destaque).map(cardProduto))
    .join('');
  $('#ofertas-grid').innerHTML = html;
}

// ─── Eventos ──────────────────────────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const categoria = e.target.closest('[data-cat]');
  if (categoria) { catAtiva = categoria.dataset.cat; renderChips(); renderCardapio(); }
  if (e.target.closest('#mobile-nav a')) setMenu(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.logo-slot').forEach((slot) => {
    const image = slot.querySelector('.logo-image');
    const atualizarLogo = () => slot.classList.toggle('has-logo', image.naturalWidth > 0);
    image.addEventListener('load', atualizarLogo);
    image.addEventListener('error', atualizarLogo);
    if (image.complete) atualizarLogo();
  });

  $('#menu-toggle').addEventListener('click', () =>
    setMenu($('#menu-toggle').getAttribute('aria-expanded') !== 'true'));

  const input = $('#busca-input');
  const limpar = $('#busca-limpar');
  input.addEventListener('input', () => {
    termo = input.value;
    limpar.hidden = !termo;
    renderCardapio();
  });
  limpar.addEventListener('click', () => {
    input.value = ''; termo = ''; limpar.hidden = true; renderCardapio(); input.focus();
  });

  if (typeof catalogoProdutos === 'undefined') {
    console.error('produtos.js não foi carregado. Deixe-o na mesma pasta do index.html.');
    return;
  }
  renderChips();
  renderCardapio();
  renderDestaques();
});