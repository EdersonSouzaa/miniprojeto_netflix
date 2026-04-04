import { createCard } from './Card.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // HEADER
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    // BOTÕES
    const prevBtn = document.createElement('button');
    prevBtn.className = 'slider-btn prev';
    prevBtn.innerHTML = '&#10094;';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'slider-btn next';
    nextBtn.innerHTML = '&#10095;';

    // ROW
    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    // 🔥 SCROLL INTELIGENTE (baseado no tamanho real do card)
    const getScrollAmount = () => {
        const firstCard = row.querySelector('*');
        return firstCard ? firstCard.clientWidth + 10 : 300;
    };

    nextBtn.addEventListener('click', () => {
        row.scrollBy({
            left: getScrollAmount() * 2,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        row.scrollBy({
            left: -getScrollAmount() * 2,
            behavior: 'smooth'
        });
    });

    // 🔥 INDICADORES DINÂMICOS
    const totalPages = Math.ceil(category.items.length / 4);
    let currentIndex = 0;

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.className = 'indicator-dot';
        if (i === 0) dot.classList.add('active');
        indicators.appendChild(dot);
    }

    const updateIndicators = () => {
        const scrollLeft = row.scrollLeft;
        const maxScroll = row.scrollWidth - row.clientWidth;
        const index = Math.round((scrollLeft / maxScroll) * (totalPages - 1));

        const dots = indicators.querySelectorAll('.indicator-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    };

    row.addEventListener('scroll', updateIndicators);

    // APPEND FINAL
    section.appendChild(prevBtn);
    section.appendChild(row);
    section.appendChild(nextBtn);

    return section;
}