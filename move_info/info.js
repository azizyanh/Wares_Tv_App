let moveplayindex = 0;

function moveblock(active_movie) {
  let move__parent = document.createElement("div");
  let block_inner = document.createElement("div");
  let block_link = document.createElement("a");
  let block_innerLink = document.createElement("div");

  block_innerLink.onclick = function () {
    if (block_innerLink) {
      currentBlock = "movies";
      series_elements(seriesCategory, series);
      movecolindex;
      moveindex;
      addremmovie();
    }
  };

  let block_info = document.createElement("div");
  let move_img_block = document.createElement("div");

  if (curentMovie === "movieCart") {
    move_img_block.style.backgroundImage = `url(${active_movie.info.movie_image})`;
  } else if (curentMovie === "seriesCart") {
    move_img_block.style.backgroundImage = `url(${active_movie.info.cover})`;
  }

  let whatch_move = document.createElement("div");
  let play_button = document.createElement("div");
  let play_move_row = document.createElement("div");

  play_move_row.addEventListener("click", function () {
    document.querySelector(".container").innerHTML = "";
    currentBlock = "videoblock"
    playerSettings(active_movie.movie_data.stream_id);
    playersettingsIndex = 1;
    videoplayeractive();

  });
  // playerSettings();

  let play_move_title = document.createElement("span");
  play_move_title.innerHTML = "Play";
  let play_continue = document.createElement("div");
  let play_continue_title = document.createElement("span");
  play_continue_title.innerHTML = "Continue";
  play_continue.style.display = "none";

  block_info.classList.add("block__info");
  move_img_block.classList.add("move_img_block");
  whatch_move.classList.add("whatch__move");
  play_button.classList.add("play__button");
  play_move_row.classList.add("play_move_row", "play");
  play_move_title.classList.add("play_move_title");
  play_continue.classList.add("play_continue", "play");
  play_continue_title.classList.add("play_continue_title");

  block_innerLink.classList.add(
    "block__inner-Link",
    "setings__item-block",
    "play"
  );
  block_link.classList.add("block_link");
  block_inner.classList.add("block__inner");
  move__parent.classList.add("move__parent");

  play_button.append(play_move_row);
  play_move_row.append(play_move_title);
  play_continue.append(play_continue_title);
  play_button.append(play_continue);
  whatch_move.append(play_button);
  block_info.append(move_img_block, whatch_move);
  block_info.append(moveInfo(active_movie));
  move__parent.append(block_inner);
  block_link.append(block_innerLink);
  block_inner.append(block_link);
  move__parent.append(block_info);
  container.append(move__parent);

  currentBlock = "moveinfo";
  moveplayindex = 1;
  addmoveinfo();
}

function moveInfo(item) {
  let move_info_block = document.createElement("div");
  let move_info_block_title = document.createElement("div");
  move_info_block_title.innerHTML = item.info.name;
  let move_info_story = document.createElement("div");
  move_info_story.innerHTML = item.info.plot;
  let move_actor = document.createElement("div");
  move_actor.innerHTML = item.info.cast;
  let move_geners = document.createElement("div");
  move_geners.innerHTML = item.info.genre;
  let move_info_reting = document.createElement("div");
  let move_star_reting = document.createElement("div");
  move_star_reting.innerHTML = item.info.rating;
  let move_reting_time = document.createElement("div");
  move_reting_time.innerHTML = item.info.duration;

  if (curentMovie === "seriesCart") {
    move_reting_time.innerHTML = item.info.episode_run_time + " ss";
  }

  move_info_block.classList.add("move_info_block");
  move_info_block_title.classList.add("move_info_block_title");
  move_info_story.classList.add("move_info_story");
  move_actor.classList.add("move_actor");
  move_geners.classList.add("move_geners", "move_actore");
  move_info_reting.classList.add("move_info_reting");
  move_star_reting.classList.add("move_parent_reting", "reting");
  move_reting_time.classList.add("move_parent_reting", "time");

  move_info_block.append(move_info_block_title);
  move_info_block.append(move_info_story);
  move_actor.append(move_geners);
  move_info_block.append(move_actor);
  move_info_reting.append(move_star_reting);
  move_info_reting.append(move_reting_time);
  move_info_block.append(move_info_reting);

  return move_info_block;
}

function addmoveinfo() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  document.querySelectorAll(".play")[moveplayindex].classList.add("active");
}
