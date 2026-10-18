const abas = document.querySelectorAll('.aba');
const imoveis = document.querySelectorAll('.imovel');

function filtrar(status) {
    imoveis.forEach(card => {
        card.hidden = card.dataset.status !== status;
    });

    abas.forEach(aba => {
        aba.classList.toggle('ativa', aba.dataset.filtro === status);
    });
}

abas.forEach(aba => {
    aba.addEventListener('click', () => filtrar(aba.dataset.filtro));
});

filtrar('lancamento');


// Dados dos imóveis (as chaves têm o mesmo nome dos ids do HTML)
const dados = {
  'aurora__jardins': {
    modalLocalizacao: 'Lançamento · Jardim das Acácias, São Paulo',
    modalTitulo: 'Residencial Aurora Jardins',
    data: 'Dezembro 2026',
    quarto: '4',
    metrosQuadrado: '280 m²',
    vagas: '3',
    sobreImovel: 'O Residencial Aurora Jardins redefine o conceito de morar bem. Com projeto arquitetônico assinado pelo escritório Braga & Cia, cada casa entrega acabamentos de alto padrão, jardim privativo e automação residencial completa. O condomínio conta com segurança 24h, clube completo e paisagismo exuberante.',
    quantidade: '48 unidades no condomínio',
    sobreBairro: 'Localizado no sofisticado Jardim das Acácias, o bairro combina tranquilidade residencial com acesso privilegiado a escolas de renome, shoppings e vias expressas. A infraestrutura completa inclui ciclovia, parques lineares e comércio de alto nível a poucos minutos.',
    fotos: [
      'https://images.unsplash.com/photo-1766603636700-e9d80473f40f?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop&auto=format'
    ]
  },

  'aurora__reserva': {
    modalLocalizacao: 'Lançamento · Alphaville, Barueri',
    modalTitulo: 'Condomínio Aurora Reserva',
    data: 'Junho 2027',
    quarto: '5',
    metrosQuadrado: '350 m²',
    vagas: '4',
    sobreImovel: 'Texto sobre o Condomínio Aurora Reserva.',
    quantidade: '32 unidades no condomínio',
    sobreBairro: 'Texto sobre Alphaville e região.',
    fotos: [
      'https://images.unsplash.com/photo-1745761320791-5ae142edee8c?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format'
    ]
  },

  'aurora__parque': {
    modalLocalizacao: 'Em andamento · Granja Viana, Cotia',
    modalTitulo: 'Aurora Parque Ville',
    data: 'Março 2028',
    quarto: '3',
    metrosQuadrado: '210 m²',
    vagas: '2',
    sobreImovel: 'Texto sobre o Aurora Parque Ville.',
    quantidade: '60 unidades no condomínio',
    sobreBairro: 'Texto sobre a Granja Viana e região.',
    fotos: [
      'https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop&auto=format'
    ]
  },

  'aurora__monte': {
    modalLocalizacao: 'Em andamento · Morumbi, São Paulo',
    modalTitulo: 'Aurora Monte Verde',
    data: 'Setembro 2027',
    quarto: '4',
    metrosQuadrado: '260 m²',
    vagas: '2',
    sobreImovel: 'Texto sobre o Aurora Monte Verde.',
    quantidade: '40 unidades no condomínio',
    sobreBairro: 'Texto sobre o Morumbi e região.',
    fotos: [
      'https://images.unsplash.com/photo-1760129745103-91c4022ed5fb?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&h=800&fit=crop&auto=format'
    ]
  },

  'aurora__bosque': {
    modalLocalizacao: 'Entregue · Tamboré, Santana de Parnaíba',
    modalTitulo: 'Aurora Bosque Imperial',
    data: 'Entregue em 2024',
    quarto: '4',
    metrosQuadrado: '300 m²',
    vagas: '3',
    sobreImovel: 'Texto sobre o Aurora Bosque Imperial.',
    quantidade: '56 unidades vendidas',
    sobreBairro: 'Texto sobre o Tamboré e região.',
    fotos: [
      'https://images.unsplash.com/photo-1756064173162-326c8e85215d?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format'
    ]
  },

  'aurora__vila': {
    modalLocalizacao: 'Entregue · Vila Madalena, São Paulo',
    modalTitulo: 'Aurora Vila Serena',
    data: 'Entregue em 2023',
    quarto: '3',
    metrosQuadrado: '195 m²',
    vagas: '2',
    sobreImovel: 'Texto sobre o Aurora Vila Serena.',
    quantidade: '24 unidades vendidas',
    sobreBairro: 'Texto sobre a Vila Madalena e região.',
    fotos: [
      'https://images.unsplash.com/photo-1784900864232-7de1c1525db0?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop&auto=format'
    ]
  }
};

const modal = document.getElementById('modal');
const imgPrincipal = document.getElementById('imgPrincipal');
const miniaturas = document.getElementById('miniaturas');

let fotos = [];
let indice = 0;

function mostrarFoto(i) {
  indice = (i + fotos.length) % fotos.length;   // loop infinito
  imgPrincipal.src = fotos[indice];
  miniaturas.querySelectorAll('img').forEach((m, n) => {
    m.classList.toggle('ativa', n === indice);
  });
}

function abrirModal(id) {
  const imovel = dados[id];
  if (!imovel) return;

  fotos = imovel.fotos;

  // preenche todos os campos cujo id é igual à chave do objeto
  Object.keys(imovel).forEach(chave => {
    if (chave === 'fotos') return;
    const el = document.getElementById(chave);
    if (el) el.textContent = imovel[chave];
  });

  miniaturas.innerHTML = '';
  fotos.forEach((src, n) => {
    const img = document.createElement('img');
    img.src = src;
    img.addEventListener('click', () => mostrarFoto(n));
    miniaturas.appendChild(img);
  });

  mostrarFoto(0);
  modal.hidden = false;
  document.body.classList.add('modal__aberto');
}

function fecharModal() {
  modal.hidden = true;
  document.body.classList.remove('modal__aberto');
}

// abrir
document.querySelectorAll('.saiba__mais').forEach(btn => {
  btn.addEventListener('click', () => abrirModal(btn.dataset.id));
});

// setas
document.querySelector('.galeria__seta__prev')
  .addEventListener('click', () => mostrarFoto(indice - 1));
document.querySelector('.galeria__seta__next')
  .addEventListener('click', () => mostrarFoto(indice + 1));

// fechar: botão X, clique no fundo escuro ou tecla Esc
document.querySelector('.modal__fechar').addEventListener('click', fecharModal);
modal.addEventListener('click', e => {
  if (e.target === modal) fecharModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fecharModal();
  if (!modal.hidden && e.key === 'ArrowLeft') mostrarFoto(indice - 1);
  if (!modal.hidden && e.key === 'ArrowRight') mostrarFoto(indice + 1);
});