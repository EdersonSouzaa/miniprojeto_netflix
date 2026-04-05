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

        /* =========================
           👨 PEDRO (AÇÃO / CRIME)
        ========================= */
        if (nomePerfil === 'Pedro') {
            displayCategories[0] = {
                ...displayCategories[0],
                title: "Favoritos de Pedro",
                items: [
                    { title: "Breaking Bad", year: "2008", img: "https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest?cb=20150528205254&path-prefix=pt-br", youtube: "https://www.youtube.com/watch?v=HhesaQXLuRY" },
                    { title: "Better Call Saul", year: "2015", img: "https://img.odcdn.com.br/wp-content/uploads/2022/06/better-call-saul-cardiaco.jpg", youtube: "https://www.youtube.com/watch?v=HN4oydykJFc" },
                    { title: "Peaky Blinders", year: "2013", img: "https://m.media-amazon.com/images/S/pv-target-images/ecdf2af8e5f5aeb23d673037dd057d775449da4c8793be1442b9f339efd21425._SX1080_FMjpg_.jpg", youtube: "https://www.youtube.com/watch?v=oVzVdvGIC7U" },
                    { title: "Lupin", year: "2021", img: "https://cineset.com.br/wp-content/uploads/2021/03/Critica-Lupin-Omar-Sy.jpg", youtube: "https://www.youtube.com/watch?v=ga0iTWXCGa0" },
                    { title: "Brooklyn Nine-Nine", year: "2013", img: "https://s2-techtudo.glbimg.com/-3IlUzJ_hhA9SrA4gFZr_3-z4Sk=/0x0:1200x800/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/y/q/AFPWAvSJ2FzJBDMwu2Cw/50.png", youtube: "https://www.youtube.com/watch?v=q6G_RMGk3vs" }
                ]
            };

            displayCategories[1] = {
                ...displayCategories[1],
                title: "Séries",
                items: [
                    { title: "Ozark", year: "2017", img: "https://ntvb.tmsimg.com/assets/p14264042_b_h8_aj.jpg?w=960&h=540", youtube: "https://www.youtube.com/watch?v=5hAXVqrljbs" },
                    { title: "Squid Game", year: "2021", img: "https://revistakoreain.com.br/wp-content/uploads/2021/09/squid-game-imagem-destacada.jpg", youtube: "https://www.youtube.com/watch?v=oqxAJKy0ii4" },
                    { title: "The Mentalist", year: "2008", img: "https://colunastortas.files.wordpress.com/2013/04/thementalistpd.jpg", youtube: "https://www.youtube.com/watch?v=ZdJdb3_fapY" },
                    { title: "Black Mirror", year: "2011", img: "https://www.nextpit.com/img/nextpit_Black_Mirror_7.jpg", youtube: "https://www.youtube.com/watch?v=v3Z1GG4iIDU" },
                    { title: "The Office", year: "2005", img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9/f_auto/q_auto/g_auto/shape/cover/sport/af3de09696dac9ba86256ee341e35aa5808d3b2e493440b0a97172ca3c31a368.jpg", youtube: "https://www.youtube.com/watch?v=q6G_RMGk3vs" }
                ]
            };

            displayCategories[2] = {
                ...displayCategories[2],
                title: "Para maratonar",
                items: [
                    { title: "One Piece", year: "2023", img: "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/9be56e05-467b-11ee-aa6e-9587410378a2/one-piece.jpg", youtube: "https://www.youtube.com/watch?v=YC8SLpnxsL4" },
                    { title: "Alice in Borderland", year: "2020", img: "https://ntvb.tmsimg.com/assets/p18828973_b_h10_aa.jpg?w=1280&h=720", youtube: "https://www.youtube.com/watch?v=49_44FFKZ1M" },
                    { title: "Narcos", year: "2015", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5s9NDd9Yhl6ALdwgYBLbPXwQwGmVqLXh-3Q&s", youtube: "https://www.youtube.com/watch?v=ZUzi0BIMMrc" },
                    { title: "Stranger Things", year: "2016", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9wFQvrzrielHYnvrkxEfvqiajATKA-EIHg&s", youtube: "https://www.youtube.com/watch?v=b9EkMc79ZSU" },
                    { title: "Suits", year: "2011", img: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABTC6cuVrvm3R9DU6ETa6m59m1xWUDLnDeU_vceG4KePuFVJuHmbU_YlqTEF1uDnSSFSiW1aR5hP7XAdAVZ547bJpdU0l7KLD8oar.webp?r=4ca", youtube: "https://www.youtube.com/watch?v=85z53bAebsI" }
                ]
            };
        }

        /* =========================
           👩 ANA (ROMANCE / LEVE)
        ========================= */
        if (nomePerfil === 'Ana') {
            displayCategories[0] = {
                ...displayCategories[0],
                title: "Favoritos da Ana",
                items: [
                    { title: "Emily in Paris", year: "2020", img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABXgwtPRC8Ae7-96LMR_C_r8Z6_FmacqTLn9WYd7rD_N-IAC9wxJA_QKz2_GK5GfDYmK6pHeKUgBdau6BZnHHGwXpGkoyEG8ddqbX_HsbmjcEWy_ztlvecFdlP73ntm_zJh5pSA.webp?r=ffa", youtube: "https://www.youtube.com/watch?v=lptctjAT-Mk" },
                    { title: "Bridgerton", year: "2020", img: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQeL9HWc5Dqhc4toExfa2ezq9UBiMm8Z9zCZliL0_gIFZl431fleljRJ4_ptq2ZFIKtDzMLBqrOu5c_MPnIAC4-LRQ3qNX24bhlaNqWtSCA5PL2hO6PYNCBLibvVC2wpkAWC2m-qy3Jt_p5fddG120M4J.jpg?r=616", youtube: "https://www.youtube.com/watch?v=gpv7ayf_tyE" },
                    { title: "You", year: "2018", img: "https://i.ytimg.com/vi/PkU46uppFI0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-_69_0SXoNukrcQnQYriBRUE2sg", youtube: "https://www.youtube.com/watch?v=ga1m0wjzscU" },
                    { title: "Friends", year: "1994", img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Friends_season_one_cast.jpg", youtube: "https://www.youtube.com/watch?v=8wThS5WCzs4" },
                    { title: "Se a vida te der tangerinas", year: "2025", img: "https://conectageek.com.br/wp-content/uploads/2025/04/Se-a-Vida-Te-Der-Tangerinas-Foto-Reproducao-Netflix.jpg", youtube: "https://www.youtube.com/watch?v=xU5SYHGxcwI" }
                ]
            };

            
            displayCategories[1] = {
                ...displayCategories[1],
                title: "Séries",
                items: [
                    { title: "Good Doctor", year: "2020", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6gJBxQyx2WE_yEqD46FswE30LbfAuxgjEA&s", youtube: "https://www.youtube.com/watch?v=lnY9FWUTY84" },
                    { title: "Gambito da Rainha", year: "2020", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj16-aUoE9mzFUwcKokHZYOtypZAN_4UISow&s", youtube: "https://www.youtube.com/watch?v=KoD1DaIlUng" },
                    { title: "Pousando no Amor", year: "2019", img: "https://recreio.com.br/wp-content/uploads/2025/07/Pousando-no-Amor_capa-1.jpg", youtube: "https://www.youtube.com/watch?v=WGZQEbB2-Wc" },
                    { title: "Sorriso real", year: "2023", img: "https://recreio.com.br/wp-content/uploads/2024/11/lee-junho-sorriso-real-capa.jpg", youtube: "https://www.youtube.com/watch?v=s8oD2wVC-Ss" },
                    { title: "Outlander", year: "2024", img: "https://rollingstone.com.br/wp-content/uploads/outlander_div_netflix.jpg", youtube: "https://www.youtube.com/watch?v=Czts8B_2ttU" }
                ]
            };

            displayCategories[2] = {
                ...displayCategories[2],
                title: "Para maratonar",
                items: [
                    { title: "13 Seaons why", year: "2019", img: "https://m.media-amazon.com/images/S/pv-target-images/2bf749312b0a68aed4a95975b35f30ac6858e8606601218d14d94394c6dd6157.jpg", youtube: "https://www.youtube.com/watch?v=UdzM6rOC3oA" },
                    { title: "Extracurricular", year: "2020", img: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUU8uzPEMZh5sKmKgWx5ZiZQVpMsaoxiC1Z9dsM5EizBj4oyt4r-3qNszpTI9XhBPkzyWnplmIscsKpeAPD2KGeETH6JL7nwJkKi.jpg?r=8bf", youtube: "https://www.youtube.com/watch?v=AV29rEuiYdo" },
                    { title: "Rebelde", year: "2004", img: "https://cinebuzz.com.br/wp-content/uploads/rebelde_reboot_da_netflix_com_giovanna_grigio_e_cancelado.jpg", youtube: "https://www.youtube.com/watch?v=aDfdIhqsAV4" },
                    { title: "Gossip Girl", year: "2012", img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABRmdypkCCaBSLiFJ5-VqlFwvS874OsjW9f87HED5_eIRxoI3Xx-2_iPYqaKfxFivvbLe91p_ZrKl7Pkw-JPCrhKcs3NrY4w98Fmp.webp?r=8e5", youtube: "https://www.youtube.com/watch?v=eCg1RN-dyQk" },
                    { title: "Wandinha", year: "2022", img: "https://i.ytimg.com/vi/4vi6ZWe_3Yc/maxresdefault.jpg", youtube: "https://www.youtube.com/watch?v=855QySYhW1s" }
                ]
            };
        }

        /* =========================
           👩‍🦰 LAURA (SUSPENSE)
        ========================= */
        if (nomePerfil === 'Laura') {
            displayCategories[0] = {
                ...displayCategories[0],
                title: "Favoritos da Laura",
                items: [
                    { title: "Dark", year: "2017", img: "https://kikacastro.com.br/wp-content/uploads/2020/08/dark.jpg", youtube: "https://www.youtube.com/watch?v=9RNHKKYJvg8" },
                    { title: "Mindhunter", year: "2017", img: "https://images.jota.info/wp-content/uploads/2017/10/mindhunter2.jpg", youtube: "https://www.youtube.com/watch?v=J4LWdJHJxbs" },
                    { title: "Emergência Radioativa", year: "2026", img: "https://s2-oglobo.glbimg.com/uF-I8pHIsowMQo93_Xzh_Qtp65w=/0x0:1600x900/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2026/X/O/DBPwoBSvKtKqi78srX1w/emergencia-radioativa.jpg", youtube: "https://www.youtube.com/watch?v=s0wVghg4vS4" },
                    { title: "La casa de Papel", year: "2021", img: "https://s2.glbimg.com/bybsqIjj2DRAzl_K9o2Oh9-5JAU=/640x424/top/i.glbimg.com/og/ig/infoglobo/f/original/2021/08/27/02112359593116.jpg", youtube: "https://www.youtube.com/watch?v=iS5xXr-GOnM" },
                    { title: "The Choosen", year: "2025", img: "https://aventurasnahistoria.com.br/wp-content/uploads/2025/03/thechosen.jpg", youtube: "https://www.youtube.com/watch?v=K1-FoFj8Jbo" }
                ]
            };

             displayCategories[1] = {
                ...displayCategories[1],
                title: "Séries",
                items: [
                    { title: "Manifest", year: "2018", img: "https://ovicio.com.br/wp-content/uploads/2022/11/20221105-ovicio-manifest-capa-1024x576.jpg", youtube: "https://www.youtube.com/watch?v=yDGQYLVcsvc" },
                    { title: "Outer Banks", year: "2024", img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABUjY142YFFXJ5Cx2tjwm8mFRAioV2eHQWPmqmj-8lOl3jPXdkOrqXQvW89go54_KCuets20CH1M22N3AyXpfD37jJta1dHzp2S8IA4pcQVucYIHfOpLw1wHgq20d-F8PW3mRyg.webp?r=a7b", youtube: "https://www.youtube.com/watch?v=pipb8KRUo9g" },
                    { title: "A arte de Sarah", year: "2026", img: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRUOpzCksMrUhZ9yXEK4xKPgulzuBkzsR-048WVs03qbgbTU7tny96sqIufHUZ9XTairrqsk_la-WzadpvzU4wabxe2o7Tbmr-hIqUqg73yzssMgUDh6jfMMtg.jpg?r=0d5", youtube: "https://www.youtube.com/watch?v=fZg6w9ulLYw" },
                    { title: "My Name", year: "2021", img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYCIUz2aiZazSb0liZvQgCrpoZoaPFrDrbA6fLeZd7YhXFuFv4OsmRshZFemY2VN3oYYjicAI9DDIcnqX5oZpaDtasH3cKTLHuoc.jpg?r=5eb", youtube: "https://www.youtube.com/watch?v=miw-wW6ka14" },
                    { title: "Cidade de Deus", year: "2002", img: "https://rollingstone.com.br/wp-content/uploads/2024/08/onde-assistir-a-cidade-de-deus-a-luta-nao-para-serie-derivada-do-longa-de-sucesso-de-2002.jpg", youtube: "https://www.youtube.com/watch?v=fZJUKixyeXM" }
                ]
            };

            displayCategories[2] = {
                ...displayCategories[2],
                title: "Para maratonar",
                items: [
                    { title: "O dono do jogo", year: "2025", img: "https://caras.com.br/wp-content/uploads/2025/10/Serie-Os-Donos-do-Jogo-Netflix.jpg", youtube: "https://www.youtube.com/watch?v=n7NIyrpreig" },
                    { title: "The Umbrella Academy", year: "2024", img: "https://ntvb.tmsimg.com/assets/p16091714_b_h8_ah.jpg?w=960&h=540", youtube: "https://www.youtube.com/watch?v=YpCYkgUyf54" },
                    { title: "Maze Runner", year: "2014", img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/0Qzqdxw-HG1AiOKLWWPsFOUDA2E/AAAABVsGxoVTN3VnXdl7RX0dChDDt4tO6yeXyuqjgeKvuofW2DS-IIFDXrONs8Qe5Y0Mvrydv8BzWzy0jFbmmCQsSAQUk9Uqn685vvdN.webp?r=4d6", youtube: "https://www.youtube.com/watch?v=ljsBRvD_fj8" },
                    { title: "Dept. Q", year: "2025", img: "https://i.ytimg.com/vi/CzWdbi8h008/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzstnmv-9SVVv9rjq9DtdK6eEp3Q", youtube: "https://www.youtube.com/watch?v=72hK6FUmm8o" },
                    { title: "Inventando Anna", year: "2022", img: "https://www.infomoney.com.br/wp-content/uploads/2022/02/Inventando-Anna-Reproducao.jpg?fit=1920%2C1080&quality=50&strip=all", youtube: "https://www.youtube.com/watch?v=5Y_t1jJEMV0" }
                ]
            };
        }

        displayCategories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});