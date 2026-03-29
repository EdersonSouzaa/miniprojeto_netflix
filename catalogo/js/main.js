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

    // Lógica do Dropdown de Perfis
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

        // Se o usuário for Pedro, mude o conteúdo da primeira categoria
        if (nomePerfil === 'Pedro') {
            displayCategories[0] = {
                ...displayCategories[0],
                title: "Favoritos de Pedro",
                items: [
                    {
                        img: "https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest?cb=20150528205254&path-prefix=pt-br",
                        top10: true,
                        badge: "98% Relevante",
                        badgeColor: "green",
                        youtube: "https://www.youtube.com/watch?v=HhesaQXLuRY"
                    },
                    {
                        img: "https://img.odcdn.com.br/wp-content/uploads/2022/06/better-call-saul-cardiaco.jpg",
                        badge: "Nova Temporada",
                        badgeColor: "red",
                        youtube: "https://www.youtube.com/watch?v=HN4oydykJFc"
                    },
                    {
                        img: "https://m.media-amazon.com/images/S/pv-target-images/ecdf2af8e5f5aeb23d673037dd057d775449da4c8793be1442b9f339efd21425._SX1080_FMjpg_.jpg",
                        top10: true,
                        youtube: "https://www.youtube.com/watch?v=oVzVdvGIC7U"
                    },
                    {
                        img: "https://cineset.com.br/wp-content/uploads/2021/03/Critica-Lupin-Omar-Sy.jpg",
                        badge: "Lançamento",
                        badgeColor: "red",
                        youtube: "https://www.youtube.com/watch?v=ga0iTWXCGa0"
                    }
                ]
            };
            displayCategories[1] = {
                ...displayCategories[1],
                title: "Séries",
                items: [
                    {
                        img: "https://ntvb.tmsimg.com/assets/p14264042_b_h8_aj.jpg?w=960&h=540",
                        top10: true,
                        badge: "95% Relevante",
                        badgeColor: "green",
                        youtube: "https://www.youtube.com/watch?v=5hAXVqrljbs"
                    },
                    {
                        img: "https://revistakoreain.com.br/wp-content/uploads/2021/09/squid-game-imagem-destacada.jpg",
                        badge: "Série Mais Vista",
                        badgeColor: "red",
                        youtube: "https://www.youtube.com/watch?v=oqxAJKy0ii4"
                    },
                    {
                        img: "https://colunastortas.files.wordpress.com/2013/04/thementalistpd.jpg",
                        badge: "Clássico",
                        badgeColor: "white",
                        youtube: "https://www.youtube.com/watch?v=ZdJdb3_fapY"
                    },
                    {
                        img: "https://www.nextpit.com/img/nextpit_Black_Mirror_7.jpg",
                        top10: true,
                        youtube: "https://www.youtube.com/watch?v=v3Z1GG4iIDU"
                    }
                ]
            };
            displayCategories[2] = {
                ...displayCategories[2],
                title: "Para maratonar",
                items: [
                    {
                        img: "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/9be56e05-467b-11ee-aa6e-9587410378a2/one-piece.jpg",
                        top10: true,
                        badge: "99% Relevante",
                        badgeColor: "green",
                        youtube: "https://www.youtube.com/watch?v=YC8SLpnxsL4"
                    },
                    {
                        img: "https://ntvb.tmsimg.com/assets/p18828973_b_h10_aa.jpg?w=1280&h=720",
                        badge: "Nova Temporada",
                        badgeColor: "red",
                        youtube: "https://www.youtube.com/watch?v=49_44FFKZ1M"
                    },
                    {
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5s9NDd9Yhl6ALdwgYBLbPXwQwGmVqLXh-3Q&s",
                        badge: "Série Policial",
                        badgeColor: "white",
                        youtube: "https://www.youtube.com/watch?v=ZUzi0BIMMrc"
                    },
                    {
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9wFQvrzrielHYnvrkxEfvqiajATKA-EIHg&s",
                        top10: true,
                        youtube: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
                    }
                ]
            };
        }

        displayCategories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
