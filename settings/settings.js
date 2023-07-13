let setindex = 0;
let pinindex = 0;
let keyboard_index = 0;
let currentPage = "";
let currentPin = "1111";
let changedPin = null;
let pinBlockindex = 0;

const settingsParams = [
  {
    icon: "../img/icons/format.svg",
    title: "Use Xtream Code EPG",
    isChcked: false,
    label: true,
    key: "Use Xtream Code EPG",
  },
  {
    icon: "../img/icons/tmdb.png",
    title: "USE TMDB API ",
    isChcked: false,
    label: true,
    key: "USE TMDB API ",
  },
  {
    icon: "../img/icons/subtitles.png",
    title: "Remove subtitle background",
    isChcked: false,
    label: true,
    key: "Remove subtitle background",
  },
  {
    icon: "../img/icons/globus.png",
    title: "Change Language",
    isChcked: false,
    key: "Change Language",
  },
  { icon: "../img/icons/time.png", title: "Change Timezone", isChcked: false },
  {
    icon: "../img/icons/parentalicon.png",
    title: "Change Parental Code",
    isChcked: false,
    key: "Change Parental Code"
  },
  {
    icon: "../img/icons/padlock.png",
    title: "Lock Categories",
    isChcked: false,
    key: "Lock Categories",
  },
  { icon: "../img/icons/logout.png", title: "Log out", isChcked: true },
];

const languageParams = [
  {
    img: "../img/icons/checked.svg",
    isChcked: true,
    title: "English",
    langImg: "https://warez.easyplayer.io/img/us.png",
  },
  {
    checked: "../img/icons/checked.svg",
    isChcked: false,
    title: "Portugues Brazil",
    img: "../img/icons/checked.svg",
    langImg: "https://warez.easyplayer.io/img/br.png",
  },
  {
    checked: "../img/icons/checked.svg",
    isChcked: false,
    title: "Spanish",
    img: "../img/icons/checked.svg",
    langImg: "https://warez.easyplayer.io/img/es.png",
  },
];

const timezoneParams = [
  { number: "-12", icon: "../img/icons/checked.svg", isChcked: true },
  { number: "-11", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-10", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-9", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-8", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-7", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-6", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-5", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-4", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-3", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-2", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-1", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "0", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "-1", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "2", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "3", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "4", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "5", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "6", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "7", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "8", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "9", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "10", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "11", icon: "../img/icons/checked.svg", isChcked: false },
  { number: "12", icon: "../img/icons/checked.svg", isChcked: false },
];

const passwordParams = [{ title: "Password" }];

const pinkeyboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const log_out = [{ title: "Log Out" }];

function settingsRender(options) {
  currentBlock = "settings";
  let settings = document.createElement("div");
  settings.classList.add("settings__block");

  let block_inner = document.createElement("div");
  block_inner.classList.add("block__inner");
  let block_link = document.createElement("a");
  block_link.classList.add("block_link");
  let block_innerLink = document.createElement("div");
  block_innerLink.classList.add("block__inner-Link", "setings__item-block");

  block_innerLink.addEventListener("click", function () {
    if (options == settingsParams) {
      document.querySelector(".container").innerHTML = "";
      menu();
    } else if (options == languageParams) {
      document.querySelector(".container").innerHTML = "";
      settingsRender(settingsParams);
      setindex = 1;
      addRemSettings();
    } else if (options == timezoneParams) {
      document.querySelector(".container").innerHTML = "";
      settingsRender(settingsParams);
      setindex = 1;
      addRemSettings();
    }
  });

  let block_inner_setings = document.createElement("div");
  block_inner_setings.classList.add("block__inner-setings");
  let setings_title = document.createElement("div");
  setings_title.classList.add("setings__title");
  let pop_title = document.createElement("div");
  pop_title.classList.add("pop__title", "trs");
  pop_title.setAttribute("key", "Languages");



  if (options === settingsParams) {
    pop_title.innerHTML = "Settings";
  } else if (options === languageParams) {
    pop_title.innerHTML = "Languages";
  } else if (options === timezoneParams) {
    pop_title.innerHTML = "Select Timezone";
  }

  let setings_content_parent = document.createElement("div");
  setings_content_parent.classList.add("setings_content_parent");
  let setings_content = document.createElement("div");
  setings_content.classList.add("setings__content-block");

  options.forEach((item) => {
    let setings__item = document.createElement("div");
    let xtream_item = document.createElement("div");
    let xtream_item_title = document.createElement("div");
    let xtrem_checkbox = document.createElement("label");
    let xtrem_inp = document.createElement("input");
    let span_xtrem = document.createElement("span");
    let checkbox_round = document.createElement("div");
    let lang_img = document.createElement("img");
    let set_timezone = document.createElement("div");

    setings__item.classList.add("setings__item-block");
    xtream_item.classList.add("xtream_item");
    xtream_item_title.classList.add("xtream__item-title");


    xtrem_checkbox.classList.add("checkbox__item");
    xtrem_inp.classList.add("checkbox");
    checkbox_round.classList.add("round__chackbox");
    checkbox_round.style.transform = "translateX(0)";
    span_xtrem.classList.add("round", "slider");
    lang_img.classList.add("lanImg");
    set_timezone.classList.add("set__timezone");

    xtream_item.style.backgroundImage = `url(${item.icon})`;
    xtream_item_title.innerHTML = item.title;
    xtream_item_title.innerHTML = item.title;

    // xtream_item_title.setAttribute("key", item.key);


    xtrem_inp.type = "checkbox";
    if (item.label) {
      span_xtrem.append(checkbox_round);
      xtrem_checkbox.append(span_xtrem);
      xtrem_checkbox.append(xtrem_inp);
      setings__item.append(xtrem_checkbox);
    } else if (item.number) {
      xtream_item_title.classList.add("timezone__itemsss");
      xtream_item_title.textContent = item.number;
      xtream_item.style.backgroundImage = item.isChcked ? `url(${item.icon})` : "";
      setings__item.onclick = () => {
        options.forEach((option, index) => {
          const icon = document.getElementsByClassName("xtream_item")[index];
          option.isChcked = false;
          icon.style.backgroundImage = "";
        });
        item.isChcked = true;
        xtream_item.style.backgroundImage = `url(${item.icon})`;
        addRemSettings();
      };
    } else if (item.img) {
      xtream_item_title.classList.add("language__itemsss");
      xtream_item_title.textContent = item.title;
      xtream_item.style.backgroundImage = item.isChcked ? `url(${item.img})` : "";

      setings__item.onclick = () => {
        options.forEach((option, index) => {
          const img = document.getElementsByClassName("xtream_item")[index];

          if (option.isChcked == true) {
            img.style.backgroundImage = "";
          }

          option.isChcked = false;
        });

        let lan = "en"

        if (item.title == "Portugues Brazil") {
          lan = "pt-br"
        } else if (item.title == "Spanish") {
          lan = "es"
        }

        localStorage.setItem("language", lan)
        translate();

        item.isChcked = true;
        xtream_item.style.backgroundImage = `url(${item.img})`;
        addRemSettings();
      };

    }


    setings__item.addEventListener("click", function (e) {
      if (item.title == "Change Language") {
        document.querySelector(".container").innerHTML = "";
        settingsRender(languageParams);
        currentPage = "language";
        setindex = 1;
        addRemSettings();
      } else if (item.title == "Change Timezone") {
        document.querySelector(".container").innerHTML = "";
        settingsRender(timezoneParams);
        currentPage = "timezone";
        setindex = 1;
        addRemSettings();
      } else if (item.title == "Change Parental Code") {
        document.querySelector(".container").innerHTML = "";
        currentBlock = "passwordBlock";
        currentPage = "password";
        pinindex = 0;
        Password(pinkeyboard);
        addpasblock();
      } else if (item.title == "Lock Categories") {
        document.querySelector(".container").innerHTML = "";
        currentBlock = "Lock Categories";
        currentPage = "password";
        pinBlockindex = 0;
        renderPasword(pinkeyboard);
        pinblockActive();
        currentPage = "password";
      } else if (item.title == "Log out") {
        exit();
        addremPopup();
        currentBlock = "popup";
      } else {
        if (checkbox_round.style.transform == "translateX(0px)") {
          checkbox_round.style.transform = "translateX(18px)";
          checkbox_round.style.backgroundColor = "#2e844e";
        } else {
          checkbox_round.style.transform = "translateX(0)";
          checkbox_round.style.backgroundColor = "grey";
        }
      }
    });

    setings__item.append(xtream_item_title);
    setings__item.append(xtream_item);
    setings_content.append(setings__item);
    if (item.langImg) {
      setings__item.append(lang_img);
      lang_img.src = item.langImg;
    }
  });

  block_link.append(block_innerLink);
  block_inner.append(block_link);
  settings.append(block_inner);

  setings_title.append(pop_title);
  block_inner_setings.append(setings_title);
  block_inner_setings.append(setings_content_parent);
  setings_content_parent.append(setings_content);

  settings.append(block_inner);
  settings.append(block_inner_setings);
  container.append(settings);
}

function addRemSettings() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }

  const settingsItem = document.querySelectorAll(".setings__item-block")[
    setindex
  ];

  settingsItem && settingsItem.classList.add("active");
}

function Password(pinkeyboard) {
  let settings = document.createElement("div");
  settings.classList.add("settings__block");
  let pasblock = document.createElement("div");

  let block_inner = document.createElement("div");
  block_inner.classList.add("block__inner");
  let block_link = document.createElement("a");
  block_link.classList.add("block_link");
  let block_innerLink = document.createElement("div");
  block_innerLink.classList.add("block__inner-Link", "setings__item-block");

  block_innerLink.addEventListener("click", function () {
    if (currentPage == "password") {
      document.querySelector(".container").innerHTML = "";
      settingsRender(settingsParams);
      setindex = 1;
      addRemSettings();
    } else if (currentPage == "Log Out") {
    }
  });

  let pasword_inner = document.createElement("div");
  let pintitle = document.createElement("div");
  pintitle.innerHTML = "Enter old pin";
  let pasPin = document.createElement("div");
  let pininput = document.createElement("div");
  let pincode = document.createElement("div");
  let pinitem = document.createElement("div");
  let pincodeitem = document.createElement("div");
  let pin_error = document.createElement("div");
  let pin_success = document.createElement("div");

  pin_success.classList.add("pin__success");
  pin_error.classList.add("pin__error");
  pincodeitem.classList.add("pin__input");
  pinitem.classList.add("pin__input");
  pincode.classList.add("pin__input");
  pininput.classList.add("pin__input");
  pasPin.classList.add("pas__row-list");
  pintitle.classList.add("pin__title");
  pasword_inner.classList.add("pasword__parent");
  pasblock.classList.add("password__block");

  let pin_keyboard = document.createElement("div");
  pin_keyboard.classList.add("keyboard_number");

  pin_keyboard.style.display = "none";

  pasPin.append(pincodeitem);
  pasPin.append(pinitem);
  pasPin.append(pincode);
  pasPin.append(pininput);
  pasword_inner.append(pintitle, pasPin);
  pasword_inner.append(pin_error);
  pasword_inner.append(pin_success);

  block_link.append(block_innerLink);
  block_inner.append(block_link);
  pasblock.append(block_inner, pasword_inner, pin_keyboard);
  settings.append(block_inner);
  settings.append(pasblock);

  container.append(settings);

  document.querySelectorAll(".pin__input").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector(".keyboard_number").style.display = "block";
      currentBlock = "passwordKeyboard";
      keyboardNumberBlock();
    });
  });

  pinkeyboard.forEach((key) => {
    let keyboard_num = document.createElement("div");
    keyboard_num.classList.add("pin__keyboard");

    pin_keyboard.append(keyboard_num);
    keyboard_num.textContent = key;

    keyboard_num.addEventListener("click", function () {
      document.querySelector(".keyboard_number").style.display = "block";
      currentBlock = "passwordKeyboard";

      let myPin = "";

      let pinrigth = document.querySelectorAll(".pin__input");

      pinrigth[pinindex].textContent = keyboard_num.textContent;

      for (let i = 0; i < pinrigth.length; i++) {
        myPin += pinrigth[i].textContent;
      }
      if (pintitle.textContent === "Enter old pin") {
        if (myPin == currentPin) {
          pintitle.innerHTML = "Enter new pin";
          let pinrigth = document.querySelectorAll(".pin__input");
          if (pinindex === pinrigth.length - 1) {
          }
        }
        pin_error.innerHTML = "Wrong pin";
      } else if (pintitle.textContent === "Enter new pin") {
        let pinrigth = document.querySelectorAll(".pin__input");
        if (pinindex === pinrigth.length - 1) {
          changedPin = myPin;
          pintitle.innerHTML = "Confirm new pin";
        }
      } else if (pintitle.textContent === "Confirm new pin") {
        let pinrigth = document.querySelectorAll(".pin__input");
        if (pinindex === pinrigth.length - 1) {
          if (changedPin === myPin) {
            pintitle.innerHTML = "Confirm new pin";
            currentPin = changedPin;

            setTimeout(function () {
              document.querySelector(".container").innerHTML = "";
              settingsRender(settingsParams);
              addRemSettings();
              return;
            }, 500);
            pin_success.innerHTML = "Pin code saved";
          }
        }
      }

      if (pinindex < document.querySelectorAll(".pin__input").length - 1) {
        document.querySelectorAll(".pin__input")[
          pinindex
        ].style.backgroundImage = "url(../img/asterisk.png)";
        pinindex++;
        addpasblock();
        pin_error.innerHTML = "";
        pin_success.innerHTML = "";
      } else {
        pinindex = 0;
        addpasblock();
        let pininputblock = document.querySelectorAll(".pin__input");
        for (let i = 0; i < pininputblock.length; i++) {
          pininputblock[i].style.backgroundImage = "none";
        }
      }
    });
  });
}

function addpasblock() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }

  document.querySelectorAll(".pin__input")[pinindex].classList.add("active");
}

function keyboardNumberBlock() {
  if (document.querySelector(".pin_active")) {
    document.querySelector(".pin_active").classList.remove("pin_active");
  }
  document
    .querySelectorAll(".pin__keyboard")
  [keyboard_index].classList.add("pin_active");
}
// backload();

function backload() {
  if (document.querySelector(".back__active")) {
    document.querySelector(".back__active").classList.remove("back__active");
  }
  document
    .querySelector(".block_innerLink")
  [pinindex].classList.add("back__active");
}

function renderPasword() {
  let settings = document.createElement("div");
  settings.classList.add("settings__block");
  let pasblock = document.createElement("div");

  let block_inner = document.createElement("div");
  block_inner.classList.add("block__inner");
  let block_link = document.createElement("a");
  block_link.classList.add("block_link");
  let block_innerLink = document.createElement("div");
  block_innerLink.classList.add("block__inner-Link", "setings__item-block");

  block_innerLink.addEventListener("click", function () {
    if (currentPage == "password") {
      document.querySelector(".container").innerHTML = "";
      settingsRender(settingsParams);
      setindex = 1;
      addRemSettings();
    } else if (currentPage == "Log Out") {
      console.log("defsjkweal");
    }
  });

  let pasword_inner = document.createElement("div");
  let pintitle = document.createElement("div");
  pintitle.innerHTML = "Enter pin";
  let pasPin = document.createElement("div");
  let pininput = document.createElement("div");
  let pincode = document.createElement("div");
  let pinitem = document.createElement("div");
  let pincodeitem = document.createElement("div");
  let pin_error = document.createElement("div");
  let pin_success = document.createElement("div");

  pin_success.classList.add("pin__success");
  pin_error.classList.add("pin__error");
  pincodeitem.classList.add("pin__input");
  pinitem.classList.add("pin__input");
  pincode.classList.add("pin__input");
  pininput.classList.add("pin__input");
  pasPin.classList.add("pas__row-list");
  pintitle.classList.add("pin__title");
  pasword_inner.classList.add("pasword__parent");
  pasblock.classList.add("password__block");

  let pin_keyboard = document.createElement("div");
  pin_keyboard.classList.add("keyboard_number");

  pin_keyboard.style.display = "none";

  pasPin.append(pincodeitem);
  pasPin.append(pinitem);
  pasPin.append(pincode);
  pasPin.append(pininput);
  pasword_inner.append(pintitle, pasPin);
  pasword_inner.append(pin_error);
  pasword_inner.append(pin_success);

  block_link.append(block_innerLink);
  block_inner.append(block_link);
  pasblock.append(block_inner, pasword_inner, pin_keyboard);
  settings.append(block_inner);
  settings.append(pasblock);

  container.append(settings);

  document.querySelectorAll(".pin__input").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector(".keyboard_number").style.display = "block";
      currentBlock = "passwordKeyboard";
      keyboardNumberBlock();
    });
  });

  pinkeyboard.forEach((key) => {
    let keyboard_num = document.createElement("div");
    keyboard_num.classList.add("pin__keyboard");

    pin_keyboard.append(keyboard_num);
    keyboard_num.textContent = key;

    keyboard_num.addEventListener("click", function () {
      document.querySelector(".keyboard_number").style.display = "block";
      currentBlock = "passwordKeyboard";

      let myPin = "";

      let pinrigth = document.querySelectorAll(".pin__input");

      pinrigth[pinBlockindex].textContent = keyboard_num.textContent;

      for (let i = 0; i < pinrigth.length; i++) {
        myPin += pinrigth[i].textContent;
      }

      if (pintitle.textContent === "Enter pin") {
        let pinrigth = document.querySelectorAll(".pin__input");
        if (pinBlockindex === pinrigth.length - 1) {
          if (myPin === changedPin) {
            currentPin = changedPin;
          } else if (myPin !== changedPin) {
            pin_error.innerHTML = "Wrong pin";
            currentPin = changedPin;
          }
          document.querySelector(".container").innerHTML = "";
          settingsRender(settingsParams);
          setindex = 1;
          addRemSettings();
          return;
        }
      }

      if (pinBlockindex < document.querySelectorAll(".pin__input").length - 1) {
        document.querySelectorAll(".pin__input")[pinBlockindex].style.backgroundImage = "url(../img/asterisk.png)";
        pinBlockindex++;
        pinblockActive();
        pin_error.innerHTML = "";
        pin_success.innerHTML = "";
      } else {
        pinBlockindex = 0;
        pinblockActive();
        let pininputblock = document.querySelectorAll(".pin__input");
        for (let i = 0; i < pininputblock.length; i++) {
          pininputblock[i].style.backgroundImage = "none";
        }
      }
    });
  });
}

function pinblockActive() {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }

  document
    .querySelectorAll(".pin__input")
  [pinBlockindex].classList.add("active");
}

// function popupCategories() {
//   let parentalPopup = document.createElement("div");
//   let block_inner = document.createElement("div");
//   let popupinnerblock = document.createElement("div");

//   popupinnerblock.classList.add("popup__inner-block");
//   block_inner.classList.add("block__inner");
//   parentalPopup.classList.add("parental__popup-block");

//   container.append(parentalPopup);
//   parentalPopup.append(block_inner);
//   parentalPopup.append(popupinnerblock);
//   console.log("aaaaaaaaa");
// }

function settingsControls(event) {
  if (event.code === "ArrowDown") {
    if (setindex > 4 && setindex < document.querySelectorAll(".setings__item-block").length - 5) {
      timetransform -= 9;
      document.querySelector(
        ".setings__content-block"
      ).style.transform = `translateY(${timetransform}rem)`;
      setindex++;
      addRemSettings();
    } else if (
      setindex <
      document.querySelectorAll(".setings__item-block").length - 1
    ) {
      setindex++;
      addRemSettings();
    }
  } else if (event.code === "ArrowUp") {
    if (
      setindex > 4 &&
      setindex < document.querySelectorAll(".setings__item-block").length - 5
    ) {
      timetransform += 9;
      document.querySelector(
        ".setings__content-block"
      ).style.transform = `translateY(${timetransform}rem)`;
      setindex--;
      addRemSettings();
    } else if (setindex > 0) {
      setindex--;
      addRemSettings();
    }
  } else if (event.code === "ArrowLeft") {
    if (setindex > 0) {
      setindex = 0;
      addRemSettings();
    }
  } else if (event.code === "ArrowRight") {
    if (setindex < 1) {
      setindex++;
      addRemSettings();
    }
  } else if (event.code === "Enter") {
    document.querySelector(".active").click();
  }
}
