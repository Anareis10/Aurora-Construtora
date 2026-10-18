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