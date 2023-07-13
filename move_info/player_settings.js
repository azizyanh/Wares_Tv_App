let videoCurentTime = 0
let videoDuration = 0
let percent = 0;
let rewind_timeout
let playersettingsIndex = 0
let playerboxindex = 0

let playerblock = [
  {
    title: "Letter Box",
    isChcked: true,
    img: "../img/icons/checked.svg"
  },
  {
    title: "Full Screen",
    isChcked: false,
    img: "../img/icons/checked.svg"
  }
]


function playerSettings(id) {
  let video_block = document.createElement("div");
  video_block.classList.add("block__video");

  let player_settings = document.createElement("div");
  player_settings.classList.add("player_settings", "player_set")
  // player_settings.style.backgroundImage = `url(./img/player/settings.png)`
  // player_settings.style.transform = "translateX(-200%)";


  let video_loading = document.createElement("div");
  video_loading.classList.add("video_loading");


  player_settings.addEventListener("click", function () {
    let player_settings_pop = document.querySelector(".player_settings_popup");
    player_settings_pop.style.transform = "translateX(0)";
    currentBlock = "player_settings_row";
    playerboxindex = 0
    addremplayersettings();
    playersetingspopup()
  })



  video_block.addEventListener("mousemove", function () {
    let pl_video = document.querySelector(".videos_blok");
    let pl_settings = document.querySelector(".player_settings")
    pl_video.style.transform = "translateY(0)";
    pl_settings.style.transform = "translateX(0)";

    setTimeout(() => {
      pl_settings.style.transform = "translateX(-200%)";
      pl_video.style.transform = "translateY(100%)";
    }, 8000)
  })


  // setTimeout(() => {
  //   video_block.addEventListener("mouseleave", function() {
  //     player_settings.style.display = "none"
  //     let ply_video = document.querySelector(".videos_blok");
  //     ply_video.style.transform = "translateY(100%)";

  //   })  
  // }, 8000) 


  let video = document.createElement("video");
  video.src = `http://79.143.180.88:25461/movie/4/4/${id}.mp4`; // serie // 
  video.autoplay = false;
  video.loop = false;
  video.id = "video_player"
  video.classList.add("videoplay", "video");
  video.volume = 1;

  let pause = document.querySelector("div");
  pause.classList.add("pause")

  video.addEventListener("click", togglePlay);
  video_block.append(playersetingspopup());
  video_block.append(player_settings)
  video_block.append(pause);
  video_block.append(video);
  video_block.append(videoControls(video));
  container.append(video_block);

  let progress = document.getElementById("progress_line_id");


  video.addEventListener("timeupdate", function (el) {

    percent = this.currentTime / this.duration * 100

    progress.style.width = `${percent}%`;
  });


  video.addEventListener('loadstart', function (event) {
    video_block.append(video_loading);
    video_block.style.backgroundColor = "black"
  });


  video.addEventListener('canplay', function (event) {
    video_loading.remove();
    video_block.style.backgroundColor = ""
    pause.style.backgroundImage = "";
    this.play()
  });
}


function videoplayeractive() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active")
  }
  document.querySelectorAll(".player_set")[playersettingsIndex].classList.add("active")
}


function videoControls(video) {
  let videos_blok_heder = document.createElement("div");

  let video_progres = document.createElement("div");

  let videocontrolsLeft = document.createElement("div");
  videocontrolsLeft.innerHTML = "00:00:00";

  video.addEventListener("timeupdate", function (el) {
    var sec_num = parseInt(this.currentTime, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    videocontrolsLeft.innerHTML = hours + ':' + minutes + ':' + seconds;
  })


  videocontrolsLeft.onclick = () => {
    let paus = document.querySelector(".pause");
    video_player.pause();

    clearTimeout(rewind_timeout);

    paus.style.display = "flax";
    rewind_timeout = setTimeout(() => {
      video_player.currentTime -= 10
      paus.style.display = "none"
      video_player.play()
    }, 1000);

  }

  let videocontrolsRigt = document.createElement("div");
  videocontrolsRigt.innerHTML = "00:00:00";

  video.addEventListener("timeupdate", function (el) {
    var sec_num = parseInt(this.duration);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    videocontrolsRigt.innerHTML = hours + ':' + minutes + ':' + seconds;
  })

  videocontrolsRigt.onclick = () => {
    let paus = document.querySelector(".pause")
    video_player.pause();

    clearTimeout(rewind_timeout)

    paus.style.display = "flex"
    rewind_timeout = setTimeout(() => {
      video_player.currentTime += 10
      paus.style.display = "none"
      video_player.play()
    }, 1000)
  };

  let progress_line = el('div', 'progress_line', 'progress_line_id')

  let progres_nextLine = document.createElement("div");
  progres_nextLine.classList.add("progres_nextLine", "player_set")

  progress_line.append(progres_nextLine)

  videos_blok_heder.classList.add("videos_blok")
  video_progres.classList.add("video_progres")
  videocontrolsLeft.classList.add("videocontrolsLeft", "buttons")
  videocontrolsRigt.classList.add("videocontrolsRigt", "buttons")

  video_progres.append(videocontrolsLeft, progress_line, videocontrolsRigt)
  videos_blok_heder.append(video_progres)

  return videos_blok_heder
}


function togglePlay() {
  let player = document.getElementById("video_player")
  let pause = document.querySelector(".pause")
  pause.style.backgroundImage = `url(./img/player/pause.png)`;
  pause.style.display = "none";

  if (player.paused) {
    player.play();
    pause.style.display = "none"
  }
  else {
    player.pause(pause);
    pause.style.display = "flex"
  }

  return player
}


function playersetingspopup() {
  let player_settings_popup = document.createElement("div");
  let player_settings_parent = document.createElement('div');
  let player_settings_display = document.createElement("div");
  let player_settings_title = document.createElement("div");
  player_settings_title.innerHTML = "Display Mode"


  player_settings_popup.classList.add("player_settings_popup");
  player_settings_parent.classList.add('player_settings_parent');
  player_settings_display.classList.add("player_settings_display")
  player_settings_title.classList.add("player_settings_title");


  player_settings_display.append(player_settings_title)
  player_settings_parent.append(player_settings_display)
  player_settings_popup.append(player_settings_parent);

  playerblock.forEach((item) => {
    let player_options = document.createElement("div")
    let player_item = document.createElement("div");
    let player_item_cheked = document.createElement("div")

    player_options.classList.add("player_options")
    player_item.classList.add("player_item")
    player_item.innerHTML = item.title
    player_item_cheked.classList.add("player_item_cheked")

    player_item.append(player_item_cheked);
    player_options.append(player_item);
    player_settings_display.append(player_options);

    if (item.isChcked === true) {
      player_item_cheked.classList.add("player_item_cheked")
      player_item_cheked.style.backgroundImage = item.isChcked ? `url(${item.img})` : "";
    }
    player_item.onclick = (() => {
      playerblock.forEach((option, index) => {
        const item_player_set = document.getElementsByClassName("player_item_cheked")[index];
        option.isChcked = false;
        item_player_set.style.backgroundImage = "";
      })
      item.isChcked = true;
      player_item_cheked.style.backgroundImage = `url(${item.img})`;
      addremplayersettings()
    })


    player_item.append(player_item_cheked);
  })

  return player_settings_popup;

}


function addremplayersettings() {
  if (document.querySelector(".actives")) {
    document.querySelector(".actives").classList.remove("actives");
  }
  document.querySelectorAll(".player_item")[playerboxindex].classList.add("actives");
}


function seekToTime(ts, video_element) {
  video_element.pause();
  video_element.currentTime = ts;
  var timer = setInterval(function () {
    if (video_element.paused && video_element.readyState == 4 || !video_element.paused) {
      video_element.play();
      clearInterval(timer);
    }
  }, 1000);
}