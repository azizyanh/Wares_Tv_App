let input_i = 0;
let rowIndex = 0;
let colIndex = 0;
let popup_i = 0;
let timetransform = 0;
let currentBlock = "login";
let currentInput = null;
let leterkeyboard = [
	["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "/", "\\", "bspace"],
	["a", "s", "d", "f", "g", "h", "j", "k", "l", ".", ":", "Done"],
	["Shift", "z", "x", "c", "v", "b", "n", "m", ",", "?", "Clean", "Shift"],
	["123", "Space", "123"],
];
keyboard_number = [
	["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "|", "bspace"],
	["@", "#", "$", "_", "&", "-", "+", "(", ")", "/", "*", "Done"],
	["Shift", '"', "'", ":", ";", "!", ".", "<", ">", "=", "Clean", "Shift"],
	["Eng", "Space", "Eng"],
];

let x = document.querySelector(".app__version");
x.style.display = "none";

let keyboard_block = document.createElement("div");
keyboard_block.classList.add("keyboard__block");
let container = document.querySelector(".container");
container.appendChild(keyboard_block);
let search__btn = document.querySelector(".search__button");

function exit() {
	let exit_popup = document.createElement("div");
	exit_popup.classList.add("exit__in");

	let exit_inner_popup = document.createElement("div");
	exit_inner_popup.classList.add("exit__inner-pop");
	exit_inner_popup.innerHTML = "Are you sure, you want to exit ?";

	let exit_popup_buttins = document.createElement("div");
	exit_popup_buttins.classList.add("exit__row");

	let cancle_button = document.createElement("button");
	cancle_button.innerHTML = "Cancel";
	cancle_button.classList.add("cancel__buttons", "popup_btn");

	let exit__button = document.createElement("button");
	exit__button.innerHTML = "Exit";
	exit__button.classList.add("exit__button", "popup_btn");

	exit_popup_buttins.append(cancle_button);
	exit_popup_buttins.append(exit__button);
	exit_popup.append(exit_inner_popup);
	exit_popup.append(exit_popup_buttins);
	container.append(exit_popup);

	cancle_button.addEventListener("click", function () {
		exit_popup.remove();
		currentBlock = "settings";
	});

	exit__button.addEventListener("click", function () {
		if (currentBlock === "popup") {
			console.log("Login");
			// document.querySelector(".container").innerHTML = ""
			// currentBlock = "login";
			// currentInput = 0;
			// addrem()
			// exit_popup.remove();
		} else {
			// currentBlock = "login";
			// exit_popup.remove();
		}

	});
}

document.addEventListener("keydown", function (event) {
	if (currentBlock == "login") {
		if (event.code === "ArrowDown") {
			if (input_i < document.querySelectorAll(".search__inp").length - 1) {
				input_i++;
				addrem();
			}
		} else if (event.code === "ArrowUp") {
			if (input_i > 0) {
				input_i--;
				addrem();
			}
		} else if (event.code === "Backspace") {
			exit();
			currentBlock = "popup";
			addremPopup();
		}
		// else if (event.code === "Enter") {
		// 	currentBlock = "login";
		// 	document.querySelectorAll(".active").click();
		// }
	} else if (currentBlock == "keyboard") {
		let currentRow = document.querySelector(".active").parentNode;
		if (event.code === "ArrowRight") {
			rowIndex++;
			if (rowIndex > currentRow.querySelectorAll(".key").length - 1) {
				rowIndex = 0;
			}
			addRemLogin();
		} else if (event.code == "ArrowLeft") {
			rowIndex--;
			if (rowIndex < 0) {
				rowIndex = currentRow.querySelectorAll(".key").length - 1;
			}
			addRemLogin();
		} else if (event.code == "ArrowDown") {
			colIndex++;
			if (colIndex > 2) {
				if (rowIndex < 2) {
					rowIndex = 0;
				} else if (rowIndex === 11) {
					rowIndex = 2;
				} else {
					rowIndex = 1;
				}
			} else if (colIndex > 0) {
				if (rowIndex === 12) {
					rowIndex = 11;
				}
			}
			if (colIndex > document.querySelectorAll(".keyboard__row ").length - 1) {
				colIndex = 0;
			}
			addRemLogin();
		} else if (event.code == "ArrowUp") {
			let getsearchMove = document.querySelector(".search__movie-row");
			let getsearch_chanale = document.querySelector(".channel_inner_item_block")
			if (colIndex == 0) {
				if (getsearchMove) {
					currentBlock = "getsearchmovie";
					Addrem_Search_Movies();
				} else if (getsearch_chanale) {
					currentBlock = "search_tv";
					addactiveSearchChannel();
				}
				else {
					currentBlock = "backmovie";
					addrembackItem();
				}
			}
			if (colIndex > 0) {
				colIndex--;
				addRemLogin();
			}
		} else if (event.code === "Backspace") {

			document.querySelector(".keyboard__inner-block").style.display = "none";
			currentBlock = "login";

		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock == "popup") {
		if (event.code === "ArrowRight") {
			if (popup_i < document.querySelectorAll(".popup_btn").length - 1) {
				popup_i++;
				addremPopup();
			}
		} else if (event.code === "ArrowLeft") {
			if (popup_i > 0) {
				popup_i--;
				addremPopup();
			}
		} else if (event.code === "Enter") {
			document.querySelector(".active_popup").click();
		}
	} else if (currentBlock == "menu") {
		menuControls(event);
	} else if (currentBlock == "settings") {
		settingsControls(event);
	} else if (currentBlock == "passwordBlock") {
		if (event.code === "ArrowRight") {
			if (
				document
					.querySelector(".setings__item-block")
					.classList.contains("active")
			) {
				document
					.querySelector(".setings__item-block")
					.classList.remove("active");
				addpasblock();
			} else if (
				pinindex <
				document.querySelectorAll(".pin__input").length - 1
			) {
				pinindex++;
				addpasblock();
			}
		} else if (event.code === "ArrowLeft") {
			if (pinindex > 0) {
				pinindex--;
				addpasblock();
			} else {
				document.querySelector(".active").classList.remove("active");
				document.querySelector(".setings__item-block").classList.add("active");
			}
		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock == "passwordKeyboard") {
		if (event.code === "ArrowRight") {
			if (
				keyboard_index <
				document.querySelectorAll(".pin__keyboard").length - 1
			) {
				keyboard_index++;
				keyboardNumberBlock();
			} else {
				keyboard_index = 0;
				keyboardNumberBlock();
			}
		} else if (event.code === "ArrowLeft") {
			if (keyboard_index > 0) {
				keyboard_index--;
				keyboardNumberBlock();
			} else {
				keyboard_index = document.querySelectorAll(".pin__keyboard").length - 1;
				keyboardNumberBlock();
			}
			keyboard_index < document.querySelectorAll(".pin__keyboard").length - 1;
		} else if (event.code === "Enter") {
			document.querySelector(".pin_active").click();
		} else if (event.code === "Backspace") {
			document.querySelector(".keyboard_number").style.display = "none";
			currentBlock = "passwordBlock";
		} else if (event.code === "ArrowUp") {
			document.querySelector(".keyboard_number").style.display = "none";
			currentBlock = "passwordBlock";
		}
	} else if (currentBlock == "Lock Categories") {
		if (event.code === "ArrowRight") {
			if (
				document
					.querySelector(".setings__item-block")
					.classList.contains("active")
			) {
				document
					.querySelector(".setings__item-block")
					.classList.remove("active");
				pinblockActive();
			} else if (
				pinBlockindex <
				document.querySelectorAll(".pin__input").length - 1
			) {
				pinBlockindex++;
				pinblockActive();
			}
		} else if (event.code === "ArrowLeft") {
			if (pinBlockindex > 0) {
				pinBlockindex--;
				pinblockActive();
			} else {
				document.querySelector(".active").classList.remove("active");
				document.querySelector(".setings__item-block").classList.add("active");
			}
		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock == "back") {
		let curent = document.querySelector(".active").parentNode;
		if (event.code === "ArrowRight") {
			if (seriesindex < curent.querySelectorAll(".key_elem").length - 1) {
				seriesindex++;
				addRemSeries();
			}
		} else if (event.code === "ArrowLeft") {
			if (seriesindex > 0) {
				seriesindex--;
				addRemSeries();
			}
		} else if (event.code === "ArrowDown") {
			currentBlock = "categoryis";
			addremseriesrow();
		}
		// else if (event.code === "ArrowUp") {
		//   if (seriescolindex > 0) {
		//     seriescolindex--;
		//     if (seriescolindex < 2) {
		//       seriesindex = 0;
		//     }
		//     addRemSeries();
		//   }
		// }
		else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock === "categoryis") {
		if (event.code === "ArrowRight") {
			seriesrowindex++;
			if (
				seriesrowindex >
				document.querySelectorAll(".series__row").length - 1
			) {
				seriesrowindex = 0;
			}
			addremseriesrow();
		} else if (event.code === "ArrowLeft") {
			if (seriesrowindex > 0) {
				seriesrowindex--;
				addremseriesrow();
			}
		} else if (event.code === "ArrowUp") {
			currentBlock = "back";
			addRemSeries();
		} else if (event.code === "ArrowDown") {
			movecolindex = 0;
			currentBlock = "movies";
			addremmovie();
		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock === "movies") {
		if (event.code === "ArrowRight") {
			if (curentMovie === "movieCart") {
				if (movecolindex == 0) {
					if (moveindex < document.querySelectorAll(".movie").length - 5) {
						moveindex++;
						addremmovie();
					}
				} else if (movecolindex == 1) {
					if (moveindex < 1) {
						moveindex++;
						addremmovie();
					}
				} else if (movecolindex == 2) {
					if (moveindex < 0) {
						moveindex++;
						addremmovie();
					}
				}
			} else if (curentMovie === "seriesCart") {
				if (event.code === "ArrowRight") {
					if (moveindex < document.querySelectorAll(".movie").length - 1) {
						moveindex++;
						addremmovie();
					}
				}
			}
		} else if (event.code === "ArrowLeft") {
			if (moveindex > 0) {
				moveindex--;
				addremmovie();
			}
		} else if (event.code === "ArrowUp") {
			if (movecolindex > 0) {
				moveTransform += 50;
				document.querySelector(
					".series__block"
				).style.transform = `translateY(${moveTransform}rem)`;
				moveindex = 0;
				addremmovie();
			}
			if (movecolindex == 2) {
				movecolindex--;
				addremmovie();
				moveindex = 0;
			} else if (movecolindex == 1) {
				movecolindex--;
				addremmovie();
				currentBlock = "movies";
			} else if (movecolindex == 0) {
				movecolindex--;
				addremmovie();
				currentBlock = "categoryis";
				seriesrowindex = 0;
				addremseriesrow();
			}
		} else if (event.code === "ArrowDown") {
			if (curentMovie === "movieCart") {
				if (movecolindex < document.querySelectorAll(".move_item").length - 1) {
					moveTransform -= 50;
					document.querySelector(
						".series__block"
					).style.transform = `translateY(${moveTransform}rem)`;
					moveindex = 0;
					addremmovie();
				}

				if (movecolindex == 0) {
					moveindex = 0;
					if (moveindex < 2) {
						movecolindex++;
						moveindex = 0;
						addremmovie();
					}
				} else if (movecolindex == 1) {
					moveindex = 0;
					if (moveindex < 1) {
						movecolindex++;
						movecolindex = 2;
						addremmovie();
					}
				}
			}
		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock === "moveinfo") {
		if (event.code === "ArrowRight") {
			if (moveplayindex < document.querySelectorAll(".play").length - 2) {
				moveplayindex++;
				addmoveinfo();
			}
		} else if (event.code === "ArrowLeft") {
			if (moveplayindex > 0) {
				moveplayindex--;
				addmoveinfo();
			}
		} else if (event.code === "ArrowUp") {
			moveplayindex = 0;
			addmoveinfo();
		} else if (event.code === "ArrowDown") {
			moveplayindex = 1;
			addmoveinfo();
		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock === "searchMovie") {
		let moviesss = document.querySelector(".key_elem");
		moviesss.style.width = "10rem";
	} else if (currentBlock === "backmovie") {
		if (event.code === "ArrowDown") {
			let setsearchMove = document.querySelector(".search__movie-row");
			if (setsearchMove) {
				currentBlock = "getsearchmovie";
				Addrem_Search_Movies();
			} else {
				currentBlock = "keyboard";
				addRemLogin();
			}
		} else if (event.key === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock === "getsearchmovie") {
		if (event.code === "ArrowRight") {
			if (
				_searchrowindexMove > 1 &&
				_searchrowindexMove < searchAllMovies.length - 4
			) {
				searchMove_transform -= 33;
				document.querySelector(
					".search__movie-row"
				).style.transform = `translateX(${searchMove_transform}rem)`;
				_searchrowindexMove++;
				Addrem_Search_Movies();
			} else if (_searchrowindexMove < searchAllMovies.length - 2) {
				_searchrowindexMove++;
				Addrem_Search_Movies();
			}
		} else if (event.code === "ArrowLeft") {

			if (
				_searchrowindexMove > 2 &&
				_searchrowindexMove < searchAllMovies.length - 3
			) {
				searchMove_transform += 33;
				document.querySelector(
					".search__movie-row"
				).style.transform = `translateX(${searchMove_transform}rem)`;
				_searchrowindexMove--;
				Addrem_Search_Movies();
			} else if (_searchrowindexMove > 0) {
				_searchrowindexMove--;
				Addrem_Search_Movies();
			}
		} else if (event.code === "ArrowDown") {
			currentBlock = "keyboard";
			addRemLogin();
		} else if (event.code === "ArrowUp") {
			currentBlock = "backmovie";
			backindex = 0;
			addrembackItem();
		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock === "videoblock") {
		let progres_line_item = document.querySelector(".progres_nextLine");
		let pausvideon = document.querySelector(".pause")
		let video_timeout
		let disappear_timeout

		let videoheaderBlock = document.querySelector(".block__video");


		// let moveplayersettings = document.querySelector("img");

		// moveplayersettings.innerHTML = "src(./img/player/settingsActive.png})";


		if (event.key === "Enter") {
			togglePlay()
		} else if (event.code === "ArrowRight") {


			let vidoe_move_block = document.querySelector(".videos_blok");
			let video__players__setings = document.querySelector(".player_settings")
			vidoe_move_block.style.transform = "translateY(0)";
			video__players__setings.style.transform = "translateX(0)";

			clearTimeout(disappear_timeout);

			disappear_timeout = setTimeout(() => {
				video__players__setings.style.transform = "translateX(-200%)";
				vidoe_move_block.style.transform = "translateY(100%)";
			}, 2000)


			video_player.pause();

			clearTimeout(video_timeout)

			pausvideon.style.display = "flex"
			video_timeout = setTimeout(() => {
				seekToTime(video_player.currentTime + 10, video_player)
				pausvideon.style.display = "none"
			}, 2000)



		} else if (event.code === "ArrowLeft") {
			video_player.pause();

			clearTimeout(video_timeout)

			pausvideon.style.display = "flex"
			video_timeout = setTimeout(() => {
				seekToTime(video_player.currentTime - 10, video_player)
				pausvideon.style.display = "none"

			}, 2000)
		}
		else if (event.code === "ArrowUp") {
			progres_line_item.style.display = "none"
			playersettingsIndex = 0
			videoplayeractive();

		} else if (event.code === "ArrowDown") {
			progres_line_item.style.display = "flex"
			playersettingsIndex = 1;
			videoplayeractive();

		} else if (event.code === "Backspace") {
			document.querySelector(".container").innerHTML = "";
			// currentBlock = "moveinfo";
			// moveblock();
			// moveplayindex = 1;
			// addmoveinfo();
			// moveInfo();
		}
	} else if (currentBlock === "player_settings_row") {
		let player_item_set = document.querySelectorAll(".player_item")
		let block_settings_popup = document.querySelector(".player_settings_popup");
		if (event.code === "ArrowDown") {
			if (playerboxindex < player_item_set.length - 1) {
				playerboxindex++;
				addremplayersettings()
			}
		} else if (event.code === "ArrowUp") {
			if (playerboxindex > 0) {
				playerboxindex--;
				addremplayersettings()
			}
		} else if (event.code === "ArrowLeft") {
			block_settings_popup.style.transform = "translateX(-100%)";
			currentBlock = "videoblock";

		} else if (event.code === "Enter") {
			document.querySelector(".actives").click();
		} else if (event.code === "Backspace") {
			block_settings_popup.style.transform = "translateX(-100%)";
			currentBlock = "videoblock";
		}
	} else if (currentBlock === "categoryTV") {
		let category_col_item = document.querySelectorAll(".category_item");
		let category_element_list = document.querySelector(".category_list")

		if (event.code === "ArrowDown") {
			if (categoryindex < document.querySelectorAll(".category_item").length - 1) {
				categoryindex++;
				categoryadditem()

				if (categoryindex > 4) {
					category_element_list.style.transform = "translateY(-1%)";
					category_element_list.style.transition = "all 0.3s linear 0s";
				}
			};

		} else if (event.code === "ArrowUp") {
			if (categoryindex > 0) {
				categoryindex--
				categoryadditem();

				if (categoryindex < 5) {
					category_element_list.style.transform = "translateY(0)";
					category_element_list.style.transition = "all 0.3s linear 0s";
				}
			}
		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		} else if (event.code === "Backspace") {
			document.querySelector(".container").innerHTML = "";
			currentBlock = "menu";
			menu();
			addrem__menu();
		}
	} else if (currentBlock === "TV") {
		if (event.code === "ArrowDown") {
			if (chanalindex < document.querySelectorAll(".item_block").length - 1) {
				chanalindex++;
				Addchannel()
			}
		} else if (event.code === "ArrowUp") {
			if (chanalindex > 0) {
				chanalindex--;
				Addchannel()
			}
		} else if (event.code === "Backspace") {
			let header_category_block = document.querySelector(".category_parent_block");
			let chanal_inner_elem = document.querySelector(".channel_inner_item_block");

			let tv_category_keyboard = document.querySelector(".category_search_block")

			header_category_block.style.transform = "translateX(0)";
			header_category_block.style.transition = "all 0.6s linear 0s";

			chanal_inner_elem.style.transition = "all 0.6s linear 0s";
			chanal_inner_elem.style.opacity = "0";
			chanal_inner_elem.style.transform = "scale(1)";
			chanal_inner_elem.style.zindex = "0";

			tv_category_keyboard.style.transform = "translateX(+100%)";
			tv_category_keyboard.style.transition = "all 0.6s liner 0s";


			currentBlock = "categoryTV";
			update_channel_info_btn()
			categoryindex;
			categoryadditem();



		} else if (event.code === "Enter") {
			document.querySelector(".active").click();
		}
	} else if (currentBlock === "search_tv") {
		// currentBlock === "keyboard"
		if (event.key === "ArrowDown") {
			if (searchall_index < document.querySelectorAll(".item_block").length - 1) {
				searchall_index++;
				addactiveSearchChannel()
				if (searchall_index >= 3) {
					currentBlock = "keyboard";
					rowIndex = 0;
					addRemLogin();
				}
			}
			else if (searchall_index < document.querySelectorAll(".item_block").length - 1) {
				console.log("rfdfds");
			}
		} else if (event.key === "ArrowUp") {
			if (searchall_index > 0) {
				searchall_index--;
				addactiveSearchChannel()
			}


		} else if (event.key === "Enter") {
			document.querySelector(".active").click()
		}
		else if (event.code === "Backspace") {
			let all_category_block = document.querySelector(".category_search_block");
			let tv_popup_block = document.querySelector(".tv_player_block");


			all_category_block.style.transform = "translateX(+110%)";
			all_category_block.style.transition = "all 0.6s liner 0s";


			tv_popup_block.style.transform = "translateX(0)";
			tv_popup_block.style.transition = "all 0.6s liner 0s";

			currentBlock = "TV";
			infoBtn()

		}
	} else if (currentBlock === "live__tv") {
		if (event.key === "ArrowDown") {
			searchall_index++;
			if (searchall_index > document.querySelectorAll(".item_block").length - 1) {
				searchall_index = 0
			}
			addactiveSearchChannel()
		} else if (event.key === "ArrowUp") {
			searchall_index--;
			if (searchall_index < 0) {
				searchall_index = 3
			}
			addactiveSearchChannel()
		} else if (event.key === "Backspace") {
			let category_pr_block = document.querySelector(".category_parent_block");
			let channel_current_box = document.querySelector(".channel_inner_item_block");


			category_pr_block.style.transform = "translateX(0)";
			category_pr_block.style.transition = "all 0.5s linear 0s";

			channel_current_box.style.transition = "all 0.6s linear 0s";
			channel_current_box.style.opacity = "0";
			channel_current_box.style.transform = "scale(0)";
			channel_current_box.style.zindex = "0";

			currentBlock = "categoryTV";
			categoryindex = 0;
			categoryadditem()

		}
	} else if (currentBlock === "channel_exit_popup") {
		let channels_heder_popup_list = document.querySelector(".exit_liveTV_popup_parent")
		if (event.key === "Enter") {
			document.querySelector(".active_btn").click();
			currentBlock = "categoryTV";
			channels_heder_popup_list.style.opacity = "0";
		}
	} else if (currentBlock == "fullScreean") {
		let tv_video_fullscrean = document.querySelector(".full_screean");
		if (event.key === "Backspace") {
			tv_video_fullscrean.classList.remove("full_screean")
			tv_video_fullscrean.classList.add("tv_video_parent")
			currentBlock = "TV"
			chanalindex = 0;
			Addchannel();
		} else if (event.key == "ArrowDown") {
			document.querySelector(".video_inner")
		}
	}
});




function addremPopup() {
	if (document.querySelector(".active_popup")) {
		document.querySelector(".active_popup").classList.remove("active_popup");
	}
	document
		.querySelectorAll(".popup_btn")
	[popup_i].classList.add("active_popup");
}

function addrem() {
	if (document.querySelector(".login__block-item-active")) {
		document
			.querySelector(".login__block-item-active")
			.classList.remove("login__block-item-active");
	}
	document
		.querySelectorAll(".search__inp")
	[input_i].classList.add("login__block-item-active");
	currentInput = document.getElementsByClassName(
		".login__block-item-active"
	)[0];
}

function login_elements(keyboardCharacters, input) {
	let keyboard = document.createElement("div");

	let currentInput = input;

	keyboard.classList.add("keyboard__inner-block");

	for (let i = 0; i < keyboardCharacters.length; i++) {
		let row = document.createElement("div");
		row.classList.add("keyboard__row");
		keyboard.appendChild(row);

		for (let j = 0; j < keyboardCharacters[i].length; j++) {
			let key = document.createElement("div");
			key.classList.add("key");
			row.appendChild(key);

			let currentKey = keyboardCharacters[i][j];

			key.addEventListener("click", function () {
				let keyboard_parent = keyboard.parentElement;

				if (document.querySelector(".active")) {
					document.querySelector(".active").classList.remove("active");
				}
				key.classList.add("active");
				if (currentKey == "Clean") {
					currentInput.value = "";
				} else if (currentKey == "bspace") {
					currentInput.value = currentInput.value.slice(0, -1);
					update_channel_inner_item(channals);
				} else if (currentKey == "Shift") {
					if (currentKey === "Shift") {
						keyboard.style.textTransform = "uppercase";
						console.log("jklgjesjaejks");
					} else {
						keyboard.style.textTransform = "Lowercase";
					}
				} else if (currentKey == "123") {
					keyboard.remove();
					keyboard_parent.append(login_elements(keyboard_number, currentInput));
					keyboard.style.display = "flex";
					addRemLogin();
				} else if (currentKey == "Eng") {
					keyboard.remove();
					keyboard_parent.append(login_elements(leterkeyboard, currentInput));
					keyboard.style.display = "flex";
					addRemLogin();
				} else if (currentKey == "Done") {
					if (input_i < document.querySelectorAll(".search__inp").length - 2) {
						input_i++;
						addrem();
						// currentInput = document.querySelectorAll(".search__inp")[input_i];
						currentInput = document.querySelector(".login__block-item-active");
					} else {
						document.querySelector(".keyboard__inner-block").style.display =
							"none";
						input_i++;
						addrem();
						currentBlock = "login";
					}
				} else {
					const value = key.textContent;
					currentInput.value += value;
				}

				getsearchMovies(currentInput.value);
				getsearchChannels(currentInput.value)
			});

			if (keyboardCharacters[i][j] == "Space") {
				key.textContent = " ";
				key.classList.add("space");
			} else if (currentKey == "bspace") {
				key.classList.add("bspacer");
			} else if (currentKey == "Shift") {
				key.classList.add("shift__lang");
			} else if (currentKey == "Done") {
				key.classList.add("done__login");
				key.textContent = "Done";
			} else if (currentKey == "Clean") {
				key.textContent = "Clean";
				key.classList.add("clear__input");
			} else {
				key.textContent = keyboardCharacters[i][j];
			}
		}
	}
	addRemLogin();
	return keyboard;
}

let login_inputs = document.querySelectorAll(".login__input");

login_inputs.forEach((input, index) => {
	input.addEventListener("click", (e) => {
		document
			.querySelector(".login__block-item-active")
			.classList.remove("login__block-item-active");
		e.target.classList.add("login__block-item-active");
		input_i = index;
		currentInput = e.target;
		keyboard_block.innerHTML = "";
		keyboard_block.append(login_elements(leterkeyboard, currentInput));
		addRemLogin();
		currentBlock = "keyboard";
	});
});

function addRemLogin() {
	if (document.querySelector(".active")) {
		document.querySelector(".active").classList.remove("active");
	}
	if (document.querySelectorAll(".keyboard__row")[colIndex]) {
		document
			.querySelectorAll(".keyboard__row")
		[colIndex].querySelectorAll(".key")
		[rowIndex].classList.add("active");
	}
}

// let url =
//   "http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_vod_streams";
// let request = fetch(url)
//   .then(function (response) {
//     return response.json("");
//   })
//   .then(function (response) {
//     console.log(response);
//     requestfunc(response);
//   });

// function requestfunc(response) {
//   for (let i = 0; i < response.length; i++) {
//     if (response[i].category_id == 5) {
//       console.log(response[i]);
//     }
//   }
// }

function loginPassword(username, password) {
	let url = ` http://79.143.180.88:25461/player_api.php?username=${username}&password=${password}`;
	fetch(url)
		.then(function (data) {
			return data.json();
		})
		.then(function (data) {
			if (data.user_info.auth) {
				setTimeout(function () {
					document.querySelector(".container").innerHTML = "";
					// menu();
				}, 700);
			} else {
				document.querySelector(".invalid__text").style.display = "flex";
			}
		})
		.catch(function (Error) {
			ErorMessage();
		});
}

function userinf() {
	let btn = document.querySelector(".search__button");

	btn.addEventListener("click", function () {
		let user = document.querySelector(".username").value;
		let password = document.querySelector(".password").value;

		loginPassword(user, password);
	});
}
userinf();

function ErorMessage() {
	document.querySelector(".invalid__text").style.display = "flex";
	setTimeout(function () {
		document.querySelector(".invalid__text").style.display = "none";
	}, 2000);
}
