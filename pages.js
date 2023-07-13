let backindex = 0;

function muviPages() {
  let pages_move_block = document.createElement("div");
  let block_inner = document.createElement("div");
  let block_link = document.createElement("a");
  let block_innerLink = document.createElement("div");
  let move_content_block = document.createElement("div");
  let move_search_inerblock = document.createElement("div");
  let _move_search = document.createElement("div");
  let move_not_found = document.createElement("div");
  let move_not_found_img = document.createElement("div");
  let ime_found = document.createElement("img");
  ime_found.src = "https://warez.easyplayer.io/img/icons/empty.svg";
  let not_found_story = document.createElement("p");
  not_found_story.innerHTML = "Not found";
  let move_keyboard_block = document.createElement("div");

  let move_keyboard_search = document.createElement("div");
  let move_content_inerSearch = document.createElement("div");
  let move_input = document.createElement("input");
  let move_input_icon = document.createElement("div");

  let move_title = document.createElement("div");
  let pop_title = document.createElement("div");
  pop_title.innerHTML = "Search";
  pop_title.classList.add("pop__title-search");
  move_title.classList.add("moves__block");

  move_keyboard_block.classList.add("move_keyboard_block");
  move_input_icon.classList.add("move_input_icon");
  move_input.classList.add("move_input");
  move_content_inerSearch.classList.add("move_content_inerSearch");
  move_keyboard_search.classList.add("move_keyboard_search");
  not_found_story.classList.add("not_found_story");
  ime_found.classList.add("ime_found");
  move_not_found_img.classList.add("move_not_found_img");
  move_not_found.classList.add("move_not_found");
  move_search_inerblock.classList.add("move_search_inerblock");
  _move_search.classList.add("_move_search");
  move_content_block.classList.add("move_content_block");
  block_innerLink.classList.add(
    "block__inner-Link",
    "setings__item-block",
    "backitem"
  );
  block_link.classList.add("block_link");
  block_inner.classList.add("block__inner");
  pages_move_block.classList.add("pages_move_block");


  move_title.append(pop_title);
  block_link.append(block_innerLink);
  block_inner.append(block_link);
  pages_move_block.append(block_inner);
  move_content_block.append(move_title);

  move_content_inerSearch.append(move_input);
  move_content_inerSearch.append(move_input_icon);
  move_keyboard_search.append(move_content_inerSearch);

  move_not_found_img.append(ime_found);
  move_not_found_img.append(not_found_story);
  move_not_found.append(move_not_found_img);
  move_search_inerblock.append(_move_search);
  move_search_inerblock.append(move_not_found);
  move_search_inerblock.append(move_keyboard_search);
  move_search_inerblock.append(move_keyboard_block);
  move_content_block.append(move_search_inerblock);
  pages_move_block.append(move_content_block);

  container.append(pages_move_block);

  block_innerLink.addEventListener("click", function () {
    // document.querySelector(".pages_move_block").remove();
    currentBlock = "back";
    seriesindex = 0;
    series_elements(seriesCategory, series);
    addRemSeries();
  });
  move_keyboard_block.append(login_elements(leterkeyboard, move_input));
}

function addrembackItem() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  document.querySelectorAll(".backitem")[backindex].classList.add("active");
}
