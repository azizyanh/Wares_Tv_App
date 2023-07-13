var XTREAM = {

    host: '',
    servers: [],
    username: "",
    password: "",
    playlistId: '',

    server_info: {},
    user_info: {},

    init: function (data, cb) {

        try {

            if (!data) data = JSON.parse(localStorage.getItem("xtreamAccount"));

            this.host = data.host.replace("/get.php", "");
            this.username = data.username;
            this.password = data.password;
            this.playlistId = data.id;



        } catch (err) {
            // console.log(err.message);
        }

        XTREAM.login(cb);

    },

    generateLoginUrl: function () {
        return this.host + "/player_api.php?username=" + this.username + "&password=" + this.password
    },
    generatePlaylistUrl: function () {
        return this.host + "/get.php?username=" + this.username + "&password=" + this.password + '&type=m3u_plus&output=mpegts'
    },
    genereteLiveUrl: function () {
        return this.host + "/" + this.username + "/" + this.password + "/"
    },
    getServerList: function () {
        return this.host + '/api.php?action=server&sub=list'
    },
    genereteMovieUrl: function () {
        return this.host + "/movie/" + this.username + "/" + this.password + "/"
    },
    genereteSeriesUrl: function () {
        return this.host + "/series/" + this.username + "/" + this.password + "/"
    },
    genereteUrl: function () {
        return this.host + "/player_api.php?username=" + this.username + "&password=" + this.password
    },
    getPlayerUrl: function (type, id, extension) {

        if (type == 'live') return this.host + '/' + this.username + '/' + this.password + '/' + id;
        return this.host + '/' + type + '/' + this.username + '/' + this.password + '/' + id + '.' + extension;
    },
    getm3u8url: function (id) {

        return this.host + '/live/' + this.username + '/' + this.password + '/' + id + '.m3u8';
    },
    login: function (cb) {

        var url = XTREAM.genereteUrl();

        XTREAM.request(url, function (data) {

            if (data.user_info.status == 'Expired' || data.user_info.auth == 0) {
                PAGES.alert.show('Your account has expired. Please contact your service provider.')
                return
            }
            XTREAM.user_info = data.user_info;
            XTREAM.server_info = data.server_info;

            // if (XTREAM.server_info && XTREAM.server_info.port) {

            //     if (XTREAM.host.indexOf(XTREAM.server_info.port) == -1) {
            //         XTREAM.host += ":" + XTREAM.server_info.port;
            //     }

            // }
            if (cb) cb();
        }, function (err) {
            SPLASHSCREEN.init('hide');
            PAGES.alert.show(err);

        });

    },

    channels: {

        all: function () {

            var url = XTREAM.genereteUrl();

            url += "&action=get_live_streams";

            return url;

        },

        url: function (id) {

            return XTREAM.genereteLiveUrl() + id;

        },

        getDayEpg: function (id) {

            var url = XTREAM.genereteUrl();

            url += "&action=get_simple_data_table&stream_id=" + id;

            return url;

        },
        getEpg: function (id) {
            var url = XTREAM.genereteUrl();
            url += '&action=get_simple_data_table&stream_id=' + id

            return url
        },
        groups: function () {

            var url = XTREAM.genereteUrl();

            url += "&action=get_live_categories";

            return url;
        }

    },

    movies: {

        all: function () {

            var url = XTREAM.genereteUrl();

            url += "&action=get_vod_streams";

            return url;

        },

        url: function (id, ext) {

            var url = XTREAM.genereteMovieUrl();

            url += id + "." + ext;

            return url;
        },

        categories: function () {

            var url = XTREAM.genereteUrl();

            url += "&action=get_vod_categories";

            return url;
        },

        info: function (id) {
            var url = XTREAM.genereteUrl();

            url += "&action=get_vod_info&vod_id=";
            if (id) url += id;

            return url;

        }

    },

    series: {

        all: function () {

            var url = XTREAM.genereteUrl();

            url += "&action=get_series";

            return url;

        },

        url: function (id, ext) {

            var url = XTREAM.genereteSeriesUrl();

            url += id + "." + ext;

            return url;
        },

        categories: function () {

            var url = XTREAM.genereteUrl();

            url += "&action=get_series_categories";

            return url;
        },

        info: function (id) {

            var url = XTREAM.genereteUrl();

            url += "&action=get_series_info&series_id=";

            if (id) url += id;

            return url;

        },

    },

    request: function (url, success, err) {

        try {

            if (!window.navigator.onLine) return PAGES.alert.show("Network disconnected", function () { location.reload() });

            var req = new XMLHttpRequest();

            req.timeout = 30000;

            req.onreadystatechange = function () {

                if (this.readyState == 4) {

                    if (this.status == 200) {
                        var result = true;
                        try {
                            var data = JSON.parse(this.responseText);

                        } catch (e) {
                            result = false
                        }
                        if (result)
                            success(data);
                        else
                            err('incorrect playlist url')
                    } else {
                        // err('incorrect playlist url')
                    }


                }

            }

            req.onerror = function (e) {
                if (err) err("incorrect playlist url");
            }

            req.ontimeout = function () {
                if (err) err("incorrect playlist url");
            }

            req.open("get", url);
            req.send();

        } catch (e) {
            // console.log(e.message);
        }

    }

}


XTREAM.request(XTREAM.channels.all(),)