function el(tagname, classname, _id) {
    let block = document.createElement(tagname);
    block.className = classname;

    if (classname) {
        block.className = classname;
    }

    if (_id) {
        block.id = _id;
    }

    return block;
}

el();
let a = el("input", "class_test", "some_id");


function removeClass(className) {

    let items

    let _className = "active";

    if (className) {
        _className = className;
    }

    for (let i = 0; i < items.length; i++) {
        items.classList.remove(_className);
    }

    items = document.getElementsByClassName(_className);
}



// function searchMovessssssss(query) {
//   //fetch(`https://api.themoviedb.org/3/search/movie?query=&include_adult=false&language=en-US&page=11, options)

//   let api = "1de91fa7f1ec328764bdcaf9a7c3ec8c";
//   let baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}&include_adult=false&language=en-US&page=1`;
//   return fetch(baseURL)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// }
// searchMovessssssss("thom");
// searchMovessssssss("chack");


var words = {
    "live tv": {
        "en": "Live TV",
        "pt-br": "TV ao vivo",
        "es": "TV en vivo",
    },
    "movies": {
        "en": "Movies",
        "pt-br": "Filmes",
        "es": "Películas",
    },
    "series": {
        "en": "Series",
        "pt-br": "Séries",
        "es": "Series",
    },
    "settings": {
        "en": "Settings",
        "pt-br": "Configurações",
        "es": "Ajustes",
    },
    "use xtream code epg": {
        "en": "Use Xtream Code EPG",
        "pt-br": "Usar EPG do Xtream Code",
        "es": "Usar EPG de Xtream Code",
    },
    "use tmdb api": {
        "en": "Use TMDB API",
        "pt-br": "Usar TMDB API",
        "es": "Usar TMDB API",
    },
    "app version": {
        "en": "App Version",
        "pt-br": "Versão do App",
        "es": "Versión de la aplicación",
    },
    "ok": {
        "en": "OK",
        "pt-br": "OK",
        "es": "OK",
    },
    "cancel": {
        "en": "Cancel",
        "pt-br": "Cancelar",
        "es": "Cancelar",
    },
    "program not found": {
        "en": "Program not found",
        "pt-br": "Programa não encontrado",
        "es": "Programa no encontrado",
    },
    "category": {
        "en": "Category",
        "pt-br": "Categoria",
        "es": "Categoría",
    },
    "favorites": {
        "en": "Favorites",
        "pt-br": "Favoritos",
        "es": "Favoritos",
    },
    "sort": {
        "en": "Sort",
        "pt-br": "Ordenar",
        "es": "Ordenar",
    },
    "menu": {
        "en": "Menu",
        "pt-br": "Menu",
        "es": "Menú",
    },
    "all": {
        "en": "All",
        "pt-br": "Todos",
        "es": "Todos",
    },
    "search": {
        "en": "Search",
        "pt-br": "Pesquisar",
        "es": "Buscar",
    },
    "play": {
        "en": "Play",
        "pt-br": "Reproduzir",
        "es": "Reproducir",
    },
    "resolutions": {
        "en": "Resolutions",
        "pt-br": "Resoluções"
    },
    "audio": {
        "en": "Audio",
        "pt-br": "Áudio",
        "es": "Audio",
    },
    "subtitle": {
        "en": "Subtitle",
        "pt-br": "Legenda",
        "es": "Subtítulo",
    },
    "display mode": {
        "en": "Display Mode",
        "pt-br": "Modo de exibição",
        "es": "Modo de visualización",
    },
    "not found": {
        "en": "Not found",
        "pt-br": "Não encontrado",
        "es": "No encontrado",
    },
    "cast": {
        "en": "Cast",
        "pt-br": "Elenco",
        "es": "Elenco",
    },
    "genres": {
        "en": "Genres",
        "pt-br": "Gêneros",
        "es": "Géneros",
    },
    "season": {
        "en": "Season",
        "pt-br": "Temporada",
        "es": "Temporada",
    },
    "change language": {
        "en": "Change Language",
        "pt-br": "Mudar idioma",
        "es": "Cambiar idioma",
    },
    "languages": {
        "en": "Languages",
        "pt-br": "Idiomas",
        "es": "Idiomas",
    },
    "watched movies": {
        "en": "Watched Movies",
        "pt-br": "Filmes assistidos",
        "es": "Películas vistas",
    },
    "watched series": {
        "en": "Watched Series",
        "pt-br": "Séries assistidas",
        "es": "Series vistas",
    },
    "others": {
        "en": "Others",
        "pt-br": "Outros",
        "es": "Otros",
    },
    "continue": {
        "en": "Continue",
        "pt-br": "Continuar",
        "es": "Continuar",
    },
    "please check with your provider": {
        "en": "Please check with your provider",
        "pt-br": "Por favor, verifique com seu provedor",
        "es": "Por favor, verifique con su proveedor",
    },
    "no movies available": {
        "en": "No movies available",
        "pt-br": "Nenhum filme disponível",
        "es": "No hay películas disponibles",
    },
    "no series available": {
        "en": "No series available",
        "pt-br": "Nenhuma série disponível",
        "es": "No hay series disponibles",
    },
    "favorites is empty": {
        "en": "Favorites is empty",
        "pt-br": "Favoritos está vazio",
        "es": "Favoritos está vacío",
    },
    "recently added": {
        "en": "Recently Added",
        "pt-br": "Adicionados recentemente",
        "es": "Agregado recientemente",
    },
    "remove subtitle background": {
        "en": "Remove subtitle background",
        "pt-br": "Remover fundo da legenda",
        "es": "Eliminar fondo de subtítulo",
    },
    "change parental code": {
        "en": "Change Parental Code",
        "pt-br": "Mudar senha adulto+18",
        "es": "Cambiar código parental",
    },
    "log out": {
        "en": "Log out",
        "pt-br": "Sair",
        "es": "Cerrar sesión",
    },
    "lock categories": {
        "en": "Lock Categories",
        "pt-br": "Bloquear categorias",
        "es": "Bloquear categorías",
    },
    "loading content": {
        "en": "Loading content",
        "pt-br": "Carregando conteúdo",
        "es": "Cargando contenido",
    },
    "enter pin": {
        "en": "Enter pin",
        "pt-br": "Digite o pin",
        "es": "Introduzca el pin",
    },
    "wrong pin": {
        "en": "Wrong pin",
        "pt-br": "Pin incorreto",
        "es": "Pin incorrecto",
    },
    "enter old pin": {
        "en": "Enter old pin",
        "pt-br": "Digite o pin antigo",
        "es": "Introduzca el pin antiguo",
    },
    "enter new pin": {
        "en": "Enter new pin",
        "pt-br": "Digite o novo pin",
        "es": "Introduzca el nuevo pin",
    },
    "confirm new pin": {
        "en": "Confirm new pin",
        "pt-br": "Confirme o novo pin",
        "es": "Confirme el nuevo pin",
    },
    "pin code saved": {
        "en": "Pin code saved",
        "pt-br": "Pin salvo",
        "es": "Pin guardado",
    },
    "pin not mutch": {
        "en": "Pin not mutch",
        "pt-br": "Pin não confere",
        "es": "Pin no coincide",
    },
    "change timezone": {
        "en": "Change Timezone",
        "pt-br": "Mudar fuso horário",
        "es": "Cambiar zona horaria",
    },
    "select timezone": {
        "en": "Select Timezone",
        "pt-br": "Selecione o fuso horário",
        "es": "Seleccione la zona horaria",
    },
}

// let changLanges = localStorage.setItem("language", "en");  
// var LNG = localStorage.getItem("language") || "en";

function wordGet(key) {
    let language = localStorage.getItem("language") || "en";
    if (key) key = key.toLowerCase();

    if (words[key] && words[key][language]) {

        return words[key][language];

    } else {

        console.log(key, "not found translation");
        return null;
    }

}

function translate() {
    // LNG = localStorage.getItem("language") || "en";
    // localStorage.setItem("language", language);

    var items = document.getElementsByClassName("trs");

    for (var i = 0; i < items.length; i++) {

        var item = items[i];
        var word = wordGet(item.getAttribute("key"));

        item.innerHTML = word;
        // if (item.tagName.toLowerCase() == "input") {
        //   item.placeholder = word;
        // } else {

        // }

    }
}

translate();

// const request = `https://jsonplaceholder.typicode.com/users`;

// function sendrequest() {

// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();

// 		xhr.responseType = "json";

// 		xhr.open("Get", request);

// 		xhr.onload = (() => {
// 			if (xhr.status >= 400) {
// 				reject.error(xhr.response)
// 			} else {
// 				resolve(xhr.response)
// 			}
// 		})

// 		xhr.onerror = (() => {
// 			reject(xhr.response)
// 		})

// 		xhr.send();
// 	})
// }

// sendrequest("get", request)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))
