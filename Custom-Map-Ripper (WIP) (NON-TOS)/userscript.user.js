// ==UserScript==
// @name         Krunker custom map ripper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  rips custom maps youre playing.
// @author       Swat
// @run-at       document-start
// @match        *://krunker.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @grant        none
// ==/UserScript==

window.msgpack = msgpack;
var copy_button = create_copy_button();
var open_button = create_open_button();
var map_button = create_map_button();
var input_field = document.createElement("input");

function unpack(data) {
	if (data instanceof DataView) data = new Uint8Array(data.buffer);
	else if (data instanceof ArrayBuffer) data = new Uint8Array(data);
	try { data = msgpack.decode(data); } catch (err) {}

	return data;
}

function create_copy_button(){
    let button = document.createElement("div");
    default_button(button);
    button.innerText = "Can't rip"
    button.onclick = function(){
        if (input_field.value != ""){
            input_field.select();
            document.execCommand("copy");
            let text_backup = button.innerText;
            button.style.minWidth = button.clientWidth + "px";
            button.innerText = "Copied"
            setTimeout(function(){ button.innerText = text_backup }, 1000);
        }
    }
    return button;
}

function create_open_button(){
    let button = document.createElement("div");
    default_button(button);
    button.innerText = "Can't open"
    button.onclick = function(){
        if (input_field.value != ""){
            let opened = window.open("");
            opened.document.write(input_field.value);
        }
    }
    return button;
}

function default_button(el){
    el.classList.add("button");
    el.classList.add("small");
    el.classList.add("buttonD");
    el.setAttribute("onmouseenter", "playTick()");
    el.fontSize = "18px";
}

function create_container(){
    let container = document.createElement("div");
    container.style.display = "flex";
    return container;
}

function create_map_button(){
    let button = document.createElement("div");
    default_button(button);
    button.innerText = "Public map";
    button.onclick = () => {if (input_field.value != "") window.open("https://krunker.io/social.html?q=" + JSON.parse(input_field.value).name + "&p=map", "_blank")};
    return button
}

window.WebSocket = new Proxy(WebSocket, {
    construct(target, args) {
        let ws = new target(...args);
        ws.addEventListener('message', function(message) {
            let data = unpack(message.data);
            if (data[0] == "load"){
                let observer = new MutationObserver(() => {
                    let container = create_container();
                    let name = document.querySelector("#mapInfo").innerText;
                    container.appendChild(map_button);
                    container.appendChild(copy_button);
                    container.appendChild(open_button);
                    document.querySelector("#mapInfo").replaceWith(container);

                    document.getElementsByTagName("body")[0].appendChild(input_field);
                    observer.disconnect();
                })
                observer.observe(document.querySelector("#mapInfo"), {childList: true});
            }
            if (data[0] == "init"){
                if(typeof data[10] === "object" && data[10] != null){
                    try {
                        input_field.value = data[10].data;
                        open_button.classList.add("buttonB");
                        open_button.classList.remove("buttonD");
                        open_button.innerText = "Open";

                        copy_button.classList.add("buttonB");
                        copy_button.classList.remove("buttonD");
                        copy_button.innerText = "Copy";

                        map_button.classList.add("buttonB");
                        map_button.classList.remove("buttonD");
                        map_button.innerText = JSON.parse(input_field.value).name;
                    }
                    catch (err){ alert("An issue occured while loading this map: " + err); }
                }
            }
        })
        return ws;
    }
});
