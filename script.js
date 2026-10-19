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



const dados = {
  'aurora__jardins': {
    modalLocalizacao: 'LANÇAMENTO · JARDIM DAS ACÁCIAS, SÃO PAULO',
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
    modalLocalizacao: 'LANÇAMENTO · ALPHAVILLE, BARUERI',
    modalTitulo: 'Condomínio Aurora Reserva',
    data: 'Junho 2027',
    quarto: '5',
    metrosQuadrado: '350 m²',
    vagas: '4',
    sobreImovel: 'Aurora Reserva é um condomínio exclusivo com apenas 32 casas em lotes amplos de até 800m². Integração total entre áreas internas e externas, piscina privativa opcional, adega climatizada e espaço gourmet são alguns dos diferenciais desta joia imobiliária.',
    quantidade: '32 unidades no condomínio',
    sobreBairro: 'Alphaville é sinônimo de qualidade de vida e segurança. O bairro planejado oferece infraestrutura completa com escolas internacionais, centros empresariais, parques e shopping centers, tudo em um ambiente arborizado e controlado.',
    fotos: [
      'https://images.unsplash.com/photo-1745761320791-5ae142edee8c?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format',
    ]
  },

  'aurora__parque': {
    modalLocalizacao: 'Em andamento · Granja Viana, Cotia',
    modalTitulo: 'Aurora Parque Ville',
    data: 'Março 2028',
    quarto: '3',
    metrosQuadrado: '210 m²',
    vagas: '2',
    sobreImovel: 'Aurora Parque Ville tem obras em ritmo acelerado com previsão de entrega para abril de 2025. São 64 casas com conceito aberto, amplas varandas, cozinha gourmet americana e área de lazer completa com piscina, academia e quadra esportiva.',
    quantidade: '60 unidades no condomínio',
    sobreBairro: 'Granja Viana é um dos endereços mais procurados da Grande São Paulo. Rodeado por mata atlântica preservada, o bairro oferece uma qualidade de ar única e vida tranquila, a apenas 30 minutos do centro de São Paulo pela Raposo Tavares.',
    fotos: [
      'https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop&auto=format',
    ]
  },

  'aurora__monte': {
    modalLocalizacao: 'Em andamento · Morumbi, São Paulo',
    modalTitulo: 'Aurora Monte Verde',
    data: 'Setembro 2027',
    quarto: '4',
    metrosQuadrado: '260 m²',
    vagas: '2',
    sobreImovel: 'Inserido em uma das regiões mais valorizadas da capital, o Aurora Monte Verde traz arquitetura contemporânea em harmonia com o verde. Casas com pé-direito duplo, janelas do chão ao teto e sistema de captação solar tornam este projeto referência em sustentabilidade e conforto.',
    quantidade: '40 unidades no condomínio',
    sobreBairro: 'O Morumbi é um bairro nobre que combina vida urbana sofisticada com verde e tranquilidade. Próximo ao Parque Estadual das Fontes do Ipiranga, conta com excelente acesso viário, escolas de elite e forte valorização imobiliária histórica.',
    fotos: [
      'https://images.unsplash.com/photo-1760129745103-91c4022ed5fb?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop&auto=format',
    ]
  },

  'aurora__bosque': {
    modalLocalizacao: 'Entregue · Tamboré, Santana de Parnaíba',
    modalTitulo: 'Aurora Bosque Imperial',
    data: 'Entregue em 2023',
    quarto: '4',
    metrosQuadrado: '300 m²',
    vagas: '3',
    sobreImovel: 'Entregue em 2023 com 100% das unidades comercializadas antes do prazo, Aurora Bosque Imperial é um dos empreendimentos mais bem-sucedidos da Aurora Construtora. O condomínio tornou-se referência regional em qualidade de entrega, padrão construtivo e valorização imobiliária.',
    quantidade: '56 unidades vendidas',
    sobreBairro: 'Tamboré é um condomínio residencial planejado de altíssimo padrão em Santana de Parnaíba. Com infraestrutura completa, segurança reforçada e um dos índices de qualidade de vida mais altos do estado, é um dos endereços mais cobiçados da Grande São Paulo.',
    fotos: [
      'https://images.unsplash.com/photo-1756064173162-326c8e85215d?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1784412955063-a0d202cc60bd?w=1200&h=800&fit=crop&auto=format',
    ]
  },

  'aurora__vila': {
    modalLocalizacao: 'Entregue · Vila Madalena, São Paulo',
    modalTitulo: 'Aurora Vila Serena',
    data: 'Entregue em 2022',
    quarto: '3',
    metrosQuadrado: '195 m²',
    vagas: '2',
    sobreImovel: 'Aurora Vila Serena foi o primeiro projeto da construtora no segmento premium urbano. Com arquitetura que dialoga com a identidade cultural do bairro, as casas possuem terraço com churrasqueira, home office e integração ao comércio local.',
    quantidade: '28 unidades vendidas',
    sobreBairro: 'Vila Madalena é um dos bairros mais vibrantes e valorizados de São Paulo. Conhecida por sua cena cultural, gastronomia diversa e vida noturna animada, oferece uma experiência urbana única com o charme de bairro residencial.',
    fotos: [
      'https://images.unsplash.com/photo-1784900864232-7de1c1525db0?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=800&fit=crop&auto=format',
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