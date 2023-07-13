let seriesindex = 0;
let seriescolindex = 0;
let seriesrowindex = 0;
let moveindex = 0;
let movecolindex = 0;
let moveTransform = 0;
let curentMovie = "";
let transforms = 0;
let searchAllMovies;
let searchdataMovies = "";

let searchmovicolind = 0;

let _searchrowindexMove = 0;

let searchMove_transform = 0;

function series_elements(seriesCategory, series) {
  searchAllMovies = series;
  container.innerHTML = "";

  let series_block = document.createElement("div");
  let series_back_block = document.createElement("div");
  let category_block = document.createElement("div");
  let category_parent = document.createElement("div");
  let back_button = document.createElement("div");
  let search_series = document.createElement("div");

  series_block.classList.add("series__block");
  series_back_block.classList.add("seris__back", "rowindex");
  category_block.classList.add("category_block");

  back_button.classList.add(
    "block__inner-Link",
    "setings__item-block",
    "back",
    "key_elem",
    "active-key"
  );
  search_series.innerHTML = "Search";
  search_series.classList.add("search__series", "back", "key_elem");

  container.append(series_block);
  series_block.append(series_back_block, category_block);

  series_back_block.append(back_button, search_series);
  category_block.append(category_parent);

  category_parent.classList.add("category_parent");

  seriesCategory.forEach(function (item) {
    let category_inner_parent = document.createElement("div");
    let category_title = document.createElement("div");
    category_title.innerHTML = item.category_name;

    category_inner_parent.classList.add(
      "category_inner_parent",
      "setings__item-block",
      "series__row"
    );

    category_title.classList.add("category_title");
    let category_movi_elem = document.createElement("div");
    let category_movi_title = document.createElement("div");
    category_movi_title.innerHTML = item.category_name;
    let move_item = document.createElement("div");

    category_parent.classList.add("category_parent");

    move_item.classList.add("move_item");
    category_movi_title.classList.add("category_movi_title");
    category_movi_elem.classList.add("category_movi_elem");

    if (item.array) {
      item.array.forEach((movie) => {
        move_item.append(render_cart(movie));
      });

      category_parent.append(category_inner_parent);
      category_inner_parent.append(category_title);
      category_movi_elem.append(category_movi_title);
      category_movi_elem.append(move_item);
      category_block.append(category_movi_elem);
    }
  });

  let menuIteams = document.querySelectorAll(".category_inner_parent");

  let seriesblock = document.querySelector(".series__block");

  let moviesrows = document.querySelectorAll(".move_item");

  for (let i = 0; i < menuIteams.length; i++) {
    menuIteams[i].onclick = function () {
      currentBlock = "movies";
      moveTransform = i * -50;
      movecolindex = i;
      moveindex = 0;
      addremmovie();
      seriesblock.style.transform = `translateY(${(i + 0) * -50}rem)`;
    };
  }

  search_series.addEventListener("click", function () {
    seriesindex = 0;
    muviPages();
    addRemSeries();
    rowIndex = 0;
    currentBlock = "keyboard";
    addRemLogin();
  });

  back_button.addEventListener("click", function () {
    document.querySelector(".container").innerHTML = "";
    menuindex;
    menu();
    addrem__menu();
  });
}

function render_cart(item) {
  let move_iner_item = document.createElement("div");
  let movie_img_block = document.createElement("div");
  let movie_title_block = document.createElement("div");
  let move_title = document.createElement("div");
  move_title.innerHTML = item.name;
  move_iner_item.classList.add(
    "move_iner_item",
    "key_elem",
    "movie",
    "search_move_active"
  );

  move_iner_item.style._searchrowindexMove = "translateX(0)";

  move_iner_item.addEventListener("click", function () {
    let popupsss = document.querySelectorAll(".move__parent");
    document.querySelector(".container").innerHTML = "";
    // movecolindex = 0;
    // moveindex = 0;
    // addremmovie();
  });

  movie_img_block.classList.add("movie_img_block");
  movie_img_block.style.backgroundImage = `url(${item.cover ? item.cover : item.stream_icon
    })`;
  movie_title_block.classList.add("movie_title_block");
  move_title.classList.add("move_title");

  if (curentMovie === "movieCart") {
    move_iner_item.setAttribute("data-id", item.stream_id);
  } else if (curentMovie === "seriesCart") {
    move_iner_item.setAttribute("data-id", item.series_id);
  }

  if (currentBlock === "getsearchmovie") {
    move_iner_item.classList.add("moveess_itemsss");
  }

  move_iner_item.onclick = select_movie;

  movie_title_block.append(move_title);
  move_iner_item.append(movie_img_block, movie_title_block);

  return move_iner_item;
}

function addRemSeries() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  document.querySelectorAll(".key_elem")[seriesindex].classList.add("active");
}

function addremseriesrow() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  document.querySelectorAll(".series__row")[seriesrowindex].classList.add("active");
}

function addremmovie() {
  const activeItem = document.querySelector(".active");
  const searchedMovies = document.querySelectorAll(".move_item")[movecolindex];
  if (activeItem) {
    document.querySelector(".active").classList.remove("active");
  }
  if (searchedMovies) {
    document
      .querySelectorAll(".move_item")
    [movecolindex].querySelectorAll(".movie")
    [moveindex].classList.add("active");
  }
}

function Addrem_Search_Movies() {
  const actemrowItem = document.querySelector(".active");
  // let searchMov = document.querySelectorAll(".search__movie-row");

  if (actemrowItem) {
    document.querySelector(".active").classList.remove("active");
  }

  document
    .querySelector("._move_search")
    .querySelectorAll(".search_move_active")
  [_searchrowindexMove].classList.add("active");

  // if (searchMov) {
  //_move_search

  // document
  //   .querySelectorAll(".search__movie-row")
  //   [_searchcolindexMove].querySelectorAll(".search_move_active")
  //   [_searchrowindexMove].classList.add("active");
  // }
}

// function series_render(seriesCategory, series) {
//   document.querySelector(".container").innerHTML = "";
//   currentBlock = "back";
//   menuindex = 0;
//   series_elements(seriesCategory, series);
//   seriesindex = 0;
//   addRemSeries();
//   addrem__menu();
// }

function select_movie() {
  var movie_id = this.getAttribute("data-id");
  let movieInfoData = null;

  if (curentMovie === "movieCart") {
    getMovieInfo(movie_id)
      .then((res) => {
        res = res.json();
        return res;
      })
      .then((res) => {
        movieInfoData = res;
        moveblock(movieInfoData);
      })
      .catch((err) => { });
  } else if (curentMovie === "seriesCart") {
    getMovie(movie_id)
      .then((data) => {
        data = data.json();
        return data;
      })
      .then((data) => {
        movieInfoData = data;
        moveblock(movieInfoData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function getsearchMovies(searchinputValue) {
  if (!searchAllMovies) return;
  if (!searchinputValue) return searchrenderMovies([]);

  searchdataMovies = searchAllMovies.filter(function (el) {
    return el.name.toLowerCase().includes(searchinputValue.toLowerCase());
  });
  searchrenderMovies(searchdataMovies);
}


function searchrenderMovies(searchedMovies) {


  let notafound = document.querySelector(".move_not_found_img");
  let not_found__movies = document.querySelector(".move_not_found");

  let moviesSearchBlock = document.querySelector("._move_search");

  let searchMoviesblock = document.createElement("div");
  searchMoviesblock.classList.add("search__movie-row");

  if (searchedMovies.length > 0) {
    moviesSearchBlock.innerHTML = "";
    notafound.style.display = "none";

    for (let i = 0; i < searchedMovies.length; i++) {
      searchMoviesblock.append(render_cart(searchedMovies[i]));
    }
    moviesSearchBlock.append(searchMoviesblock);
  } else {
    notafound.style.display = "flex";
    moviesSearchBlock.innerHTML = "";
  }
  return moviesSearchBlock;
}
