import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const allProfiles = [
        { nome: 'Ana', imagem: '../assets/perfil_um.jpg' },
        { nome: 'Pedro', imagem: '../assets/perfil_dois.jpg' },
        { nome: 'Laura', imagem: '../assets/perfil_tres.jpg' }
    ];

    const currentName = nomePerfil || "Usuário";
    const otherProfilesContainer = document.getElementById('other-profiles');
    
    if (otherProfilesContainer) {
        const others = allProfiles.filter(p => p.nome !== currentName);
        others.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${p.imagem}" alt="${p.nome}">
                <span class="profile-name">${p.nome}</span>
            `;
            li.addEventListener('click', () => {
                localStorage.setItem('perfilAtivoNome', p.nome);
                localStorage.setItem('perfilAtivoImagem', p.imagem);
                window.location.reload();
            });
            otherProfilesContainer.appendChild(li);
        });
    }

    const container = document.getElementById('main-content');

    if (container) {
        let displayCategories = [...categories];

        if (nomePerfil === 'Pedro') {
            displayCategories[0] = {
                ...displayCategories[0],
                title: "Favoritos de Pedro",
                items: [
                    { title: "Breaking Bad", year: "2008", img: "https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest?cb=20150528205254&path-prefix=pt-br", youtube: "https://www.youtube.com/watch?v=HhesaQXLuRY" },
                    { title: "Better Call Saul", year: "2015", img: "https://img.odcdn.com.br/wp-content/uploads/2022/06/better-call-saul-cardiaco.jpg", youtube: "https://www.youtube.com/watch?v=HN4oydykJFc" },
                    { title: "Peaky Blinders", year: "2013", img: "https://m.media-amazon.com/images/S/pv-target-images/ecdf2af8e5f5aeb23d673037dd057d775449da4c8793be1442b9f339efd21425._SX1080_FMjpg_.jpg", youtube: "https://www.youtube.com/watch?v=oVzVdvGIC7U" },
                    { title: "Lupin", year: "2021", img: "https://cineset.com.br/wp-content/uploads/2021/03/Critica-Lupin-Omar-Sy.jpg", youtube: "https://www.youtube.com/watch?v=ga0iTWXCGa0" }
                ]
            };

            displayCategories[1] = {
                ...displayCategories[1],
                title: "Séries",
                items: [
                    { title: "Ozark", year: "2017", img: "https://ntvb.tmsimg.com/assets/p14264042_b_h8_aj.jpg?w=960&h=540", youtube: "https://www.youtube.com/watch?v=5hAXVqrljbs" },
                    { title: "Squid Game", year: "2021", img: "https://revistakoreain.com.br/wp-content/uploads/2021/09/squid-game-imagem-destacada.jpg", youtube: "https://www.youtube.com/watch?v=oqxAJKy0ii4" },
                    { title: "The Mentalist", year: "2008", img: "https://colunastortas.files.wordpress.com/2013/04/thementalistpd.jpg", youtube: "https://www.youtube.com/watch?v=ZdJdb3_fapY" },
                    { title: "Black Mirror", year: "2020", img: "https://www.nextpit.com/img/nextpit_Black_Mirror_7.jpg", youtube: "https://www.youtube.com/watch?v=v3Z1GG4iIDU" }
                ]
            };

            displayCategories[2] = {
                ...displayCategories[2],
                title: "Para maratonar",
                items: [
                    { title: "One Piece", year: "2023", img: "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/9be56e05-467b-11ee-aa6e-9587410378a2/one-piece.jpg", youtube: "https://www.youtube.com/watch?v=YC8SLpnxsL4" },
                    { title: "Alice in Bordeland", year: "2022", img: "https://ntvb.tmsimg.com/assets/p18828973_b_h10_aa.jpg?w=1280&h=720", youtube: "https://www.youtube.com/watch?v=49_44FFKZ1M" },
                    { title: "Magnatas do Crime", year: "2015", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5s9NDd9Yhl6ALdwgYBLbPXwQwGmVqLXh-3Q&s", youtube: "https://www.youtube.com/watch?v=ZUzi0BIMMrc" },
                    { title: "Stranger Things", year: "2019", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9wFQvrzrielHYnvrkxEfvqiajATKA-EIHg&s", youtube: "https://www.youtube.com/watch?v=b9EkMc79ZSU" }
                ]
            };
        }

        displayCategories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});