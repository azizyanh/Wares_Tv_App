

let series = [];
let seriesCategory = [];

let series_Data = [];
let category_Data = [];

document.querySelector(".container").innerHTML = "";
let menuindex = 0;

let url = `http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_series`;
let categoryurl = `http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_series_categories`;

let dataseries = `http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_vod_categories`;
let datamove = `http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_vod_streams`;


function req_get_categories(type) {
  let _url = "";

  if (type == "movie") {
    _url = dataseries;
  } else {
    _url = categoryurl;
  }

  fetch(_url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      seriesCategory = data;
      req_get_series(type);
    })
    .catch(function (Error) {
      return Error;
    });
}

function req_get_series(type) {
  let _url = "";

  if (type == "movie") {
    _url = datamove;
  } else {
    _url = url;
  }

  fetch(_url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      series = data;
      sort_all_data();
    })
    .catch(function (Error) { });
}

function sort_all_data() {
  for (let i = 0; i < series.length; i++) {
    for (let j = 0; j < seriesCategory.length; j++) {
      if (series[i].category_id == seriesCategory[j].category_id) {
        if (seriesCategory[j].array) {
          seriesCategory[j].array.push(series[i]);
        } else {
          document.querySelector(".container").innerHTML = "";
          menu();
          seriesCategory[j].array = [series[i]];
        }
      }
    }
  }
  currentBlock = "back";
  series_elements(seriesCategory, series);
  addRemSeries();
  changetext();
}

var __menu_list = [
  {
    name: "Menu Tv",
    icon: "gasjdhas.png",
    menu_code: "tv",
    func: function () { },
  },
  { name: "Movies", icon: "gasjdhas.png", menu_code: "movie" },
  { name: "Series", icon: "gasjdhas.png", menu_code: "series" },
  { name: "settings", icon: "gasjdhas.png", menu_code: "settings" },
];

function menu() {
  currentBlock = "menu";

  let menu_block = document.createElement("div");
  menu_block.classList.add("menu__block");

  let menu_tv = document.createElement("div");
  let menu_title = document.createElement("div");
  menu_tv.classList.add("menu__item", "tv");
  menu_title.classList.add("menu__title", "menu__title-row", "trs");
  menu_title.innerHTML = "Live TV";
  menu_title.setAttribute("key", "Live TV")


  menu_tv.addEventListener("click", function () {
    document.querySelector(".container").innerHTML = "";
    categoryTv()
    currentBlock = "categoryTV";
  })

  let movies = document.createElement("div");
  let movies_title = document.createElement("div");
  movies.classList.add("menu__item", "movies");
  movies_title.classList.add("movies__title", "menu__title-row", "trs");
  movies_title.innerHTML = "Movies";
  movies_title.setAttribute("key", "Movies")

  movies.addEventListener("click", function () {
    req_get_categories("movie");
    curentMovie = "movieCart";
  });

  let menu = document.createElement("div");
  let menu__title = document.createElement("div");
  menu.classList.add("menu__item", "series");
  menu__title.classList.add("series__title", "menu__title-row", "trs");
  menu__title.innerHTML = "Series";
  menu__title.setAttribute("key", "Series")

  menu.addEventListener("click", function () {
    req_get_categories("series");
    curentMovie = "seriesCart";
  });

  let setings = document.createElement("div");
  let setings_title = document.createElement("div");
  setings.classList.add("menu__item", "settings");
  setings_title.classList.add("seting__title", "menu__title-row", "trs");
  setings_title.innerHTML = "Settings";
  setings_title.setAttribute("key", "Settings")


  let images_menu = document.createElement("div");
  let images = document.createElement("images__menu");
  images_menu.classList.add("images__menu");






  images_menu.append(images);
  container.append(images_menu);

  menu_tv.append(menu_title);
  menu_block.append(menu_tv);
  movies.append(movies_title);
  menu_block.append(movies);
  menu.append(menu__title);
  menu_block.append(menu);
  setings.append(setings_title);
  menu_block.append(setings);
  container.append(menu_block);

  setings.addEventListener("click", function () {
    document.querySelector(".container").innerHTML = "";
    settingsRender(settingsParams);
    currentPage = "settings";
    setindex = 1;
    addRemSettings();
  });


  addrem__menu();


  let menu_item_block_ = document.querySelectorAll(".menu__item");
  for (let i = 0; i < menu_item_block_.length; i++) {
    menu_item_block_[i].addEventListener("mouseover", function (e) {
      e = e || window.event;
      e.preventDefault
      menu_item_block_[i].classList.add("btn_menu");
    }),
      menu_item_block_[i].addEventListener("mouseout", function (e) {
        e = e || window.event;
        e.preventDefault
        menu_item_block_[i].classList.remove("btn_menu");
      })
  }
}



menu();

function addrem__menu() {
  if (document.querySelector(".menu-active")) {
    document.querySelector(".menu-active").classList.remove("menu-active");
  }
  document
    .querySelectorAll(".menu__item")
  [menuindex].classList.add("menu-active");
}

function menuControls(event) {
  if (event.code === "ArrowRight") {
    if (menuindex < document.querySelectorAll(".menu__item").length - 1) {
      menuindex++;
      addrem__menu();
    }
  } else if (event.code === "ArrowLeft") {
    if (menuindex > 0) {
      menuindex--;
      addrem__menu();
    }
  } else if (event.code === "Enter") {
    document.querySelector(".menu-active").click();
  }
}

async function getMovieInfo(id) {
  return await fetch(
    `http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_vod_info&vod_id=${id}`
  );
  // .then(function (id) {
  //   return id.json();
  // })
  // .then(function (id) {
  //   console.log(id);
  // });
}

async function getMovie(id) {
  return await fetch(
    `http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_series_info&series_id=${id}`
  );
}
getMovie();

