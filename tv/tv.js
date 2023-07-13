let merged_categories = {}
let liveTVdataTable_epg = [];
let chanals = [];
let searchdataCHannels = [];
let category = [];
let channals = [];
let favorites = []
let categoryindex = 0;
let channelindex = 0;
let chanalindex = 0;
let searchall_index = 0;
let searchChannels;
let chnnel_exit_button_index = 0;
let desc_sort = false;


async function getLiveTVdata_epg(id) {
	let liveTVurl = `http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_simple_data_table&stream_id=${id}`

	await fetch(liveTVurl)
		.then(function (data) {
			return data.json();
		})
		.then(function (data) {
			liveTVdataTable_epg = data;
		})
		.catch(function (Error) {
			return Error;
		});

	let now = new Date();
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let current_time = 0



	liveTVdataTable_epg.epg_listings.forEach((item, index) => {
		let startDate = new Date(item.start);
		let endDate = new Date(item.end);
		if (now > startDate && now < endDate) {
			current_time = index
			return
		}
	})


	let end_time = new Date(liveTVdataTable_epg.epg_listings[current_time].end);

	let start_time = new Date(liveTVdataTable_epg.epg_listings[current_time].start);

	let sttart_time_query = document.querySelector(".curent_time");
	sttart_time_query.innerHTML = start_time.getHours() + ":" + String(start_time.getMinutes()).padStart(2, '0');

	let end_time_query = document.querySelector(".nex_time");
	end_time_query.innerHTML = end_time.getHours() + ":" + String(end_time.getMinutes()).padStart(2, '0');

	let curent_epg_title_ = document.querySelector(".curent_epg_title");
	curent_epg_title_.innerHTML = atob(liveTVdataTable_epg.epg_listings[0].title);

	let end_time_title = document.querySelector(".nex_time_title");
	end_time_title.innerHTML = atob(liveTVdataTable_epg.epg_listings[0].title);
}


async function categoryTv() {

	let tv_block = el("div", "tv_block", "tv_block_id");
	let tv_block_heder = el("div", "tv_block_heder", "tv_block_heder_id");
	let tv_top_block = el("div", "tv_top_block", "tv_top_block-id");
	let tv_category_all = el("div", "tv_category_all");
	let category_all_block = el("div", "category_all_block");
	let category_text_title = document.createElement("div");
	category_text_title.classList.add("category_text_title")
	category_text_title.innerHTML = "All";



	category_all_block.append(category_text_title);
	tv_top_block.append(tv_category_all);
	tv_top_block.append(category_all_block);

	var data = await getAllData()


	tv_block_heder.append(tv_top_block, data, channel_inner_item(channals));

	tv_block.append(tv_block_heder)
	tv_block.append(video_player_block(), category_keyboard(), exitTV());
	container.append(tv_block);


	categoryindex = 0;
	categoryadditem();

}


const handleClick = (item) => {
	active_channel_info_btn();


	let category_heder_block = document.querySelector(".category_parent_block");
	let chanals_sort_blok = document.querySelector(".channel_inner_item_block");
	chanals_sort_blok.style.opacity = "0";

	let category__title = document.querySelector('.category_text_title');
	let tv_video_block_box = document.querySelector(".tv_player_block");

	let category_block_keyboard = document.querySelector(".category_search_block");


	category__title.innerHTML = item.category_name



	let popup_chanel = document.querySelector(".exit_liveTV_popup_parent");

	if (item.category_name == "Favorites") {



		// currentBlock = "TV"
		// chanalindex = 0;
		// Addchannel();



		let favoriteList = []
		channals.forEach((item) => {


			if (favorites.includes(item.stream_id)) {
				favoriteList.push(item)

				console.log(favoriteList);
				category_heder_block.style.transform = "translateX(-110%)";
				category_heder_block.style.transition = "all 0.6s linear 0s";

				chanals_sort_blok.style.transition = "all 0.6s linear 0s";
				chanals_sort_blok.style.opacity = "1";
				chanals_sort_blok.style.transform = "scale(1)";
				chanals_sort_blok.style.zindex = "1";

				currentBlock = "TV"
				chanalindex = 0;
				Addchannel();

			} else {
				currentBlock = "channel_exit_popup";
				popup_chanel.style.opacity = "1"
				exitTV()
				currentBlock = "channel_exit_popup";
				chnnel_exit_button_index = 0;
				addActiveExitTV()
			}
			update_channel_inner_item(favoriteList);
		})



	} else if (item.category_name == "All") {

		category_heder_block.style.transform = "translateX(-110%)";
		category_heder_block.style.transition = "all 0.6s linear 0s";

		chanals_sort_blok.style.transition = "all 0.6s linear 0s";
		chanals_sort_blok.style.opacity = "1";
		chanals_sort_blok.style.transform = "scale(1)";
		chanals_sort_blok.style.zindex = "1";

		update_channel_inner_item(channals);

		currentBlock = "TV";
		chanalindex = 0;
		Addchannel();

	} else if (item.category_name == "Search") {

		//  currentBlock = "search_tv";
		update_channel_inner_item(channals);


		category_heder_block.style.transform = "translateX(-110%)";
		category_heder_block.style.transition = "all 0.6s linear 0s";

		tv_video_block_box.style.transform = "translateX(110%)";
		tv_video_block_box.style.transition = "all 0.6s linear 0s";

		chanals_sort_blok.style.transition = "all 0.6s linear 0s";
		chanals_sort_blok.style.opacity = "1";
		chanals_sort_blok.style.transform = "scale(1)";
		chanals_sort_blok.style.zindex = "1";

		category_block_keyboard.style.transform = "translateX(-12%)";
		category_block_keyboard.style.transition = "all 0.6s linear 0s";
		category_block_keyboard.style.opacity = "1";


		if (item.category_id == "22") {
			currentBlock = "search_tv";
			searchall_index = 0;
			addactiveSearchChannel()
		} else {
			currentBlock = "TV";
		}


	} else {
		update_channel_inner_item(merged_categories[item.category_id])

		category_heder_block.style.transform = "translateX(-110%)";
		category_heder_block.style.transition = "all 0.6s linear 0s";

		chanals_sort_blok.style.transition = "all 0.6s linear 0s";
		chanals_sort_blok.style.opacity = "1";
		chanals_sort_blok.style.transform = "scale(1)";
		chanals_sort_blok.style.zindex = "1";


		currentBlock = "TV";
		chanalindex = 0;
		Addchannel();

		let channel_category_elements = document.querySelector(".category_parent_block");
		channel_category_elements.style.transform = "translateX(-110%)";
		channel_category_elements.style.transition = "all 0.6s linear 0s";


		searchall_index = 0;
		addactiveSearchChannel();

	}
}


async function getChannelsData() {
	const res = await fetch(`http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_live_streams`)
	const data = await res.json();
	return data
}


async function getCategoriesData() {
	const res = await fetch(`http://79.143.180.88:25461/player_api.php?username=4&password=4&action=get_live_categories`)
	const data = await res.json();
	return data
}


async function getAllData() {

	let result = await Promise.all(
		[getChannelsData(), getCategoriesData()]
	)

	result = mergeChannelsCategoriesData(result)

	return result
}


function mergeChannelsCategoriesData(data) {

	const resArr = [];
	category = data[1];
	channals = data[0];


	category.unshift(
		{ category_id: '10', category_name: "Favorites", parent_id: 0 },
		{ category_id: "11", category_name: "All", parent_id: 0 },
		{ category_id: "22", category_name: "Search", parent_id: 0 },
	)


	for (let i = 0; i < category.length; i++) {
		merged_categories[category[i].category_id] = []
		for (let j = 0; j < channals.length; j++) {
			if (channals[j].category_id == category[i].category_id) {
				merged_categories[category[i].category_id].push(channals[j]);
			}
		}
	}



	let category_parent_block = el("div", "category_parent_block");
	category_parent_block.style.height = "100%";

	let category_list = el("div", "category_list")

	category_parent_block.append(category_list);


	category.forEach((item) => {
		let category_item = el("div", "category_item", "category_item");
		let category_inner_item = el("div", "category_inner_item");
		category_item.onclick = () => {
			handleClick(item);

		};

		category_inner_item.innerHTML = item.category_name

		category_item.append(category_inner_item)
		category_list.append(category_item)
	})


	for (let key in category) {
		resArr.push(category[key]);
	}


	return category_parent_block
}


const handleCategoryClick = (item) => {
	let content_block = el("div", "child_category_block");
	content_block.innerHTML = "";

	content_block.append(channel_inner_item(merged_categories[item.category_id]));

	let channel_category_elements = document.querySelector(".category_parent_block");
	channel_category_elements.style.transform = "translateX(-110%)";
	channel_category_elements.style.transition = "all 0.6s linear 0s";

	return tv_block_header
}


function categoryadditem() {
	if (document.querySelector(".active")) {
		document.querySelector(".active").classList.remove("active");
	}

	let elem = document.getElementsByClassName("category_item")
	elem[categoryindex].classList.add("active");
}


function video_player_block() {
	let tv_player_block = el("div", "tv_player_block", "tv_player_block-id");
	let tv_video_parent = el("div", "tv_video_parent", "tv_block-id");
	let tv_epg_loded = el("div", "tv_epg_loded")
	let time_block = el("div", "time_block");
	let day_element = el("div", "day_element")
	let hours = el("div", "hours");

	updateTime()

	setInterval(() => {
		tv_epg_loded.remove()
	}, 2000);


	function updateTime() {

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();

		todayText = dd + ' / ' + mm + ' / ' + yyyy;

		var hour = today.getHours();
		var minut = String(today.getMinutes()).padStart(2, '0');


		day_element.innerHTML = todayText;
		hours.innerHTML = hour + ":" + minut
		setTimeout(updateTime, 1000)
	}




	time_block.append(hours);
	time_block.append(day_element);
	tv_player_block.append(time_block)
	tv_video_parent.append(tv_epg_loded, videoPlay())
	tv_player_block.append(tv_video_parent)
	tv_player_block.append(channal());
	tv_player_block.append(infoBtn())


	return tv_player_block
}


function videoPlay() {
	let tv_loading = el("div", "tv_loading")
	let video = el("video", "video_inner", "video_inner-id");
	video.autoplay = true;

	if (Hls.isSupported()) {
		var hls_video = new Hls();
		// hls_video.loadSource(`http://79.143.180.88:25461/4/4/`);
		hls_video.attachMedia(video);
	}

	tv_loading.append(video);
	return tv_loading;
}


function update_video_block(id) {
	let video = document.querySelector(".video_inner");
	video.autoplay = true;

	let tv_video_parent_block = document.querySelector(".tv_video_parent");

	if (tv_video_parent_block) {
		tv_video_parent_block.classList.remove("tv_video_parent")
		tv_video_parent_block.classList.add("full_screean")
		currentBlock = "fullScreean"
	} else {
		tv_video_parent_block.classList.remove("full_screean");
		tv_video_parent_block.classList.add("tv_video_parent");
		currentBlock = "TV"
	}

	if (Hls.isSupported()) {
		var hls_video = new Hls();
		hls_video.loadSource(`http://79.143.180.88:25461/live/4/4/${id}.m3u8`);
		hls_video.attachMedia(video);
	}
}


function channal() {
	let curent_channel = el("div", "curent_channel", "curent_channel_id");
	let curent_channel_number = el("div", "curent_channel_number",);
	curent_channel_number.innerHTML = "1";
	let curent_channel_info = el("div", "curent_channel_info", "curent_channel_info_id");
	let curent_channel_name = el("div", "curent_channel_name");
	curent_channel_name.innerHTML = "H1"
	let icon = el("img", "icons");

	let curent_channel_epg = el("div", "curent_channel_epg");
	let curent_epg = el("div", "curent_epg");
	let curent_time = el("div", "curent_time");
	curent_time.innerHTML = "00:00";
	let curent_epg_title = el("div", "curent_epg_title")
	curent_epg_title.innerHTML = "Zadruga Narod pita";

	let next_epg = el("div", "next_epg");
	let nex_time = el("div", "nex_time");
	nex_time.innerHTML = "00:00"
	let nex_time_title = el("div", "nex_time_title");
	nex_time_title.innerHTML = "Nacionalni dnevnik u 15";

	curent_epg.append(curent_time, curent_epg_title);
	next_epg.append(nex_time, nex_time_title);
	curent_channel_epg.append(curent_epg);
	curent_channel_epg.append(next_epg);

	curent_channel_info.append(curent_channel_name);
	curent_channel_info.append(curent_channel_epg);
	curent_channel.append(curent_channel_number);
	curent_channel.append(icon)
	curent_channel.append(curent_channel_info);

	return curent_channel
}


function update_channel_info() {
	let curent_epg_time = document.querySelector(".curent_time");
	curent_epg_time.innerHTML = "--:--"

	let end_tiem = document.querySelector(".nex_time");
	end_tiem.innerHTML = "--:--";
}


function updateChanelinfo(activeItem) {
	let curent_channel_number_update = document.querySelector(".curent_channel_number");
	curent_channel_number_update.innerHTML = activeItem.num;

	let curent_channel_update_name = document.querySelector(".curent_channel_name");
	curent_channel_update_name.innerHTML = activeItem.name;

	let channel_icon_update = document.querySelector(".icons");
	channel_icon_update.style.backgroundImage = `url(${activeItem.stream_icon})`;
}


function infoBtn() {
	let info_button = el("div", "info_button");

	let info_options_btn = el("div", "info_options_btn  red_btn");
	info_options_btn.innerHTML = "Sort";
	info_options_btn.style.opacity = "0";

	info_options_btn.onclick = () => {
		updateSort()
		update_channel_inner_item(channals);
		chanalindex = 0
		Addchannel()
	}


	let target_category = false;
	let info_category_btn = el("div", "info_options_btn  green_btn ");
	info_category_btn.innerHTML = "Category";
	info_category_btn.style.opacity = "0";

	info_category_btn.onclick = () => {
		if (target_category !== true) {
			let category_parent_block = document.querySelector(".category_parent_block");
			category_parent_block.style.transform = "translateX(0%)";
			category_parent_block.style.zindex = "0";

			let channel_inner_item_block = document.querySelector(".channel_inner_item_block");
			channel_inner_item_block.style.transition = "all 0.6s linear 0s;"
			channel_inner_item_block.style.transform = "scale(0.8)";
			channel_inner_item_block.style.opacity = "0"


			info_options_btn.style.opacity = "0";
			info_category_btn.style.opacity = "0";
			info_favorites_btn.style.opacity = "0";

			currentBlock = "categoryTV";
			categoryadditem()
		}
	}

	let info_favorites_btn = el("div", "info_options_btn  yellow_btn");
	info_favorites_btn.innerHTML = "Favorites";
	info_favorites_btn.style.opacity = "0";

	// const text_item = document.querySelector(".item_block_text")


	info_favorites_btn.onclick = () => {

		let activeItem = document.getElementsByClassName("item_block active");
		let id = activeItem[0].getAttribute("id")

		let itemBlocks = document.querySelectorAll("div .item_block")
		let itemBlock;

		itemBlocks.forEach(element => {
			if (element.getAttribute("id") == id) {
				itemBlock = element
			}
		});

		let item = channals.find(function (el) {
			return el.stream_id == id;
		});



		add_channel_favorite(itemBlock, item);

		select_favorites(itemBlock, item)
	}


	let info_menu_btn = el("div", "info_options_btn  blue_btn");
	info_menu_btn.innerHTML = "Menu";


	info_menu_btn.onclick = () => {
		document.querySelector(".container").innerHTML = "";
		menu();
	}


	info_button.append(info_options_btn, info_category_btn, info_favorites_btn, info_menu_btn);


	return info_button;
}


function updateSort() {
	let redcolor_btn_asc = document.querySelector(".red_btn");


	if (desc_sort !== true) {
		desc_sort = true
		redcolor_btn_asc.classList.add("asc");
		redcolor_btn_asc.classList.remove("desc");
	} else {
		desc_sort = false
		redcolor_btn_asc.classList.remove("asc");
		redcolor_btn_asc.classList.add("desc")
	}

	if (desc_sort == true) {
		channals.sort(function (a, b,) {

			if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

			if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

			console.log(channals);
			return 0;
		});
	} else {
		channals.sort(function (a, b) {
			if (a.name < b.name) {
				return 1;
			}
			if (a.name > b.name) {
				return -1;
			}
			return 0;
		});
	}

}


function active_channel_info_btn() {
	let active_red_btn = document.querySelector(".red_btn");
	active_red_btn.style.opacity = "1";

	let active_green_btn = document.querySelector(".green_btn");
	active_green_btn.style.opacity = "1";

	let active_yellow_btn = document.querySelector(".yellow_btn");
	active_yellow_btn.style.opacity = "1"
}


function update_channel_info_btn() {
	let active_red_btns = document.querySelector(".red_btn");
	active_red_btns.style.opacity = "0";

	let active_green_btns = document.querySelector(".green_btn");
	active_green_btns.style.opacity = "0";

	let active_yellow_btns = document.querySelector(".yellow_btn");
	active_yellow_btns.style.opacity = "0"
}


function getsearchChannels(searchvalue) {

	searchdataCHannels = channals;

	if (!channals) return;
	if (!searchvalue) return channel_inner_item([])

	searchdataCHannels = channals.filter(function (el) {
		return el.name.toLowerCase().includes(searchvalue.toLowerCase())
	})

	update_channel_inner_item(searchdataCHannels)
}


function channel_inner_item(CHanaleBlockData) {
	let channel_inner_item_block = el("div", "channel_inner_item_block");
	let channelssss = el("div", "channelssss")

	CHanaleBlockData.forEach((item, index) => {
		let item_block = el("div", "item_block", "item_block_id");


		item_block.onclick = function () {
			console.log(item);
		}


		let item_block_number = el("div", "item_block_number");
		let item_block_icon = el("div", "item_block_icon");
		let item_block_text = el("div", "item_block_text");

		item_block_number.innerHTML = item.num;
		item_block_icon.style.backgroundImage = `url("${item.stream_icon}")`;
		item_block_text.innerHTML = item.name;

		item_block.append(item_block_number, item_block_icon, item_block_text);
		channelssss.append(item_block);
		channel_inner_item_block.append(channelssss);


	})

	JSON.parse(localStorage.getItem("Favorites")).forEach((el) => {
		favorites.push(el)
	})

	return channel_inner_item_block;
}


function update_channel_inner_item(data) {
	let channel_item_row = document.querySelector(".channelssss");
	channel_item_row.innerHTML = "";

	data.forEach((item, index) => {
		let item_block = el("div", "item_block", "item_block_id");

		item_block.onclick = function () {
			updateChanelinfo(item);
			getLiveTVdata_epg(item.stream_id);
			update_channel_info();
			update_video_block(item.stream_id);
		}



		item_block.setAttribute("id", item.stream_id);
		let item_block_number = el("div", "item_block_number");
		let item_block_icon = el("div", "item_block_icon");
		let item_block_text = el("div", "item_block_text");

		item_block_number.innerHTML = index + 1;
		item_block_icon.style.backgroundImage = `url("${item.stream_icon}")`;
		item_block_text.innerHTML = item.name;

		if (favorites.includes(item.stream_id)) {
			item_block_text.classList.add("channel_title");
		}


		item_block.append(item_block_number, item_block_icon, item_block_text,);
		channel_item_row.append(item_block);
	})


}


function category_keyboard() {
	let category_search_block = el("div", "category_search_block");
	let category_search_elem = el("div", "category_search_elem");
	let input = el("input", "input");
	input.type = "text";
	let keyboard_parent = el("div", "keyboard_parent");


	category_search_elem.append(input);
	category_search_block.append(category_search_elem);
	keyboard_parent.append(login_elements(leterkeyboard, input));

	category_search_block.append(keyboard_parent)

	return category_search_block;
}


function addactiveSearchChannel() {
	if (document.querySelector(".active")) {
		document.querySelector(".active").classList.remove("active");
	}
	document.querySelectorAll(".item_block")[searchall_index].classList.add("active")
}


function Addchannel() {
	if (document.querySelector(".active")) {
		document.querySelector(".active").classList.remove("active");
	}
	document.querySelectorAll(".item_block")[chanalindex].classList.add("active")
}


function addActiveExitTV() {
	if (document.querySelector(".active_btn")) {
		document.querySelector(".active_btn").classList.remove("active_btn")
	}
	document.querySelectorAll(".exit_tv_popup_btn")[chnnel_exit_button_index].classList.add("active_btn")
}


function exitTV() {
	let exit_liveTV_popup_parent = el("div", "exit_liveTV_popup_parent");
	exit_liveTV_popup_parent.style.zindex = "0";
	exit_liveTV_popup_parent.style.opacity = "0";


	let exit_tv_popup = el("div", "exit_tv_popup");
	let exit_tv_popup_title = el("div", "exit_tv_popup_title");
	exit_tv_popup_title.innerHTML = "Favorites is empty";
	let exit_tv_popup_button = el("div", "exit_tv_popup_button");
	let exit_tv_popup_btn = el("button", "exit_tv_popup_btn", "active_btn");
	exit_tv_popup_btn.innerHTML = "Ok"


	exit_tv_popup_btn.onclick = (e) => {
		let tv_block_heder_parent = document.querySelector(".tv_block");

		// tv_block_heder_parent.style.opacity = "1"
		tv_block_heder_parent.style.zindex = "+1"

		exit_liveTV_popup_parent.style.opacity = "-1";
		exit_liveTV_popup_parent.style.zindex = "0"

		currentBlock = "categoryTV";
	}

	exit_tv_popup.append(exit_tv_popup_title, exit_tv_popup_button);
	exit_tv_popup_button.append(exit_tv_popup_btn);
	exit_liveTV_popup_parent.append(exit_tv_popup);


	return exit_liveTV_popup_parent
}

function add_channel_favorite(itemBlock, item) {
	const text = itemBlock.querySelector(".item_block_text")
	const favorite_title = itemBlock.querySelector(".channel_title")


	if (favorite_title === null) {
		text.classList.add("channel_title");
		favorites.push(item.stream_id);
	} else {
		text.classList.remove("channel_title");
		let item_index = favorites.indexOf(item.stream_id)
		if (item_index > -1) {
			favorites.splice(item_index, 1)
		}
	}

	localStorage.setItem("Favorites", JSON.stringify(favorites))
}


function select_favorites(itemBlock, item) {
	// console.log(item);
	// console.log(itemBlock)

	// if (favorites.includes(item.stream_id)) {
	// 	item_block_text_title.classList.add("channel_title");
	// 	console.log(item);
	// }

}





