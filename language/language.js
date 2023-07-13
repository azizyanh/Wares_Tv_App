// document.querySelector(".container").innerHTML = "";
const languageParams = [
  {
    icon: "us",
    title: "English",
  },
  {
    icon: "",
    title: "Portugues Brazil ",
  },
  {
    icon: "",
    title: "Spanish",
  },
];

function language() {
  currentBlock = "language";

  let languag = document.createElement("div");
  languag.classList.add("settings__block");

  let block_inner = document.createElement("div");
  block_inner.classList.add("block__inner");
  let block_link = document.createElement("a");
  block_link.classList.add("block_link");
  let block_innerLink = document.createElement("div");
  block_innerLink.classList.add("block__inner-Link", "setings__item-block");

  let block_inner_setings = document.createElement("div");
  block_inner_setings.classList.add("block__inner-setings");
  let setings_title = document.createElement("div");
  setings_title.classList.add("setings__title");
  let pop_title = document.createElement("div");
  pop_title.classList.add("pop__title-lung");
  pop_title.innerHTML = "Language";

  languageParams.forEach((item) => {
    let setings__item = document.createElement("div");
    setings__item.classList.add("setings__item-block");
    let xtream_item = document.createElement("div");
    xtream_item.classList.add("xtream_item");
    xtream_item.style.backgroundImage = `url(${item.icon})`;
    let xtream_item_title = document.createElement("div");
    xtream_item_title.classList.add("xtream__item-title");
    xtream_item_title.innerHTML = item.title;
    let xtrem_checkbox = document.createElement("label");
    xtrem_checkbox.classList.add("checkbox__item");
    let xtrem_inp = document.createElement("input");
    xtrem_inp.type = "checkbox";
    xtrem_inp.classList.add("checkbox");
    let span_xtrem = document.createElement("span");
    span_xtrem.classList.add("round", "slider");
    if (item.label) {
      xtrem_checkbox.append(span_xtrem);
      xtrem_checkbox.append(xtrem_inp);
      setings__item.append(xtrem_checkbox);
    }

    setings__item.append(xtream_item_title);
    setings__item.append(xtream_item);
    setings_content.append(setings__item);
  });

  block_link.append(block_innerLink);
  block_inner.append(block_link);

  setings_title.append(pop_title);
  block_inner_setings.append(setings_title);

  languag.append(block_inner_setings);
  languag.append(block_inner);
  container.append(languag);
}
// language();
