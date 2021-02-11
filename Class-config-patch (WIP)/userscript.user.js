// ==UserScript==
// @name         Krunker class config fixer
// @version      0.1
// @description  Fixes class import for krunker presets
// @author       Swat
// @match        *://krunker.io/*
// @grant        unsafeWindow
// @grant        @GM_setValue
// @grant        @GM_getValue
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @run-at       document-start
// ==/UserScript==

function unpack(data) {
	if (data instanceof DataView) data = new Uint8Array(data.buffer);
	else if (data instanceof ArrayBuffer) data = new Uint8Array(data);
	else try { data = JSON.parse(data); } catch (err) {}
	try { data = msgpack.decode(data); } catch (err) {}

	return data;
}

unsafeWindow.WebSocket = new Proxy(WebSocket, {
	construct(target, args) {
        var settings = {};
		var ws = new target(...args);
		ws.addEventListener('message', function(message) {
			if (unpack(message.data)[0] === "init"){
                var _slider = unsafeWindow.updateWSliderLabel;
                var _select = unsafeWindow.windows[7].changeCls;
                var _save = unsafeWindow.windows[7].presetAction;
                var offset = 0;

                unsafeWindow.windows[7].changeCls = function(){
                    offset = arguments[0];
                    _select(arguments);
                }

                function setSettings(clss, name, value){
                    if (typeof(settings["class_" + clss]) === "undefined") settings["class_" + clss] = {}
                    settings["class_" + clss][name.replace("\n", "").replace(/\s/g, "")] = value;
                    console.log(name.replace("\n", "").replace(/\s/g, "") + "a");
                }

                unsafeWindow.windows[7].presetAction = function(){
                    console.log(arguments[0]);
                    if (arguments[0] === 0){
                        let classes = Object.entries(JSON.parse(window.localStorage.krk_hostPresets).test).filter(item=> {
                            if (typeof(item[1]) === "object" && item[0].includes("class_")){
                                item[0] = parseInt(item[0].replace("class_", ""));
                                return item
                            }
                        })
                    }
                    if (arguments[0] === 1){
                        let preset_name = document.getElementById("presetSelect").value;
                        if (preset_name !== "Select" && document.getElementById("classSelect").parentElement.children.item(1).firstChild.checked){
                            let old = JSON.parse(unsafeWindow.localStorage.krk_hostPresets);
                            let obj = {};
                            Object.entries(old[preset_name]).map(item=>{if (typeof(item[1]) !== "object" && !item[0].includes("class_")) obj[preset_name][item[0]] = item[1];})

                            obj[preset_name] = {...obj[preset_name], ...settings};
                            _save(arguments[0]);
                            unsafeWindow.localStorage.krk_hostPresets = JSON.stringify(obj);
                        }
                    }
                }

                unsafeWindow.updateWSliderLabel = function(){
                    console.log("customCSet" + arguments[0] + arguments[1]);
                    console.log(arguments);
                    document.getElementById("customCSet" + arguments[0] + arguments[1]).innerText = arguments[2];
                    let name = document.getElementById("customCSet"+ arguments[0] + arguments[1]).parentElement.innerText.replace(arguments[2], "");
                    setSettings(arguments[0], name, arguments[2]);
                    _slider(arguments);
                }
            }
		});
        return ws;
    }
})