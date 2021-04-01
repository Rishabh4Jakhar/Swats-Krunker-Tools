// ==UserScript==
// @name         Krunker mapping comp announcement patch
// @version      0.1
// @description  adds an announcement for the krunker mapping comp, so you can easily read it
// @author       Swat
// @run-at       document-start
// @match        *://krunker.io/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// ==/UserScript==


window.msgpack = msgpack;

function unpack(data) {
	if (data instanceof DataView) data = new Uint8Array(data.buffer);
	else if (data instanceof ArrayBuffer) data = new Uint8Array(data);
	try { data = msgpack.decode(data); } catch (err) {}

	return data;
}

window.WebSocket = new Proxy(WebSocket, {
    construct(target, args) {
        let ws = new target(...args);
        ws.addEventListener('message', function(message) {
            let data = unpack(message.data);
            if (data[0] == "load"){
                var container = document.createElement("div");
                container.style.backgroundColor = "rgba(0,0,0,.5)";
                container.style.padding = "10px";
                container.style.borderRadius = "4px";
                container.style.marginTop = "10px";
                container.style.color = "#FFF";
                container.style.minWidth = "240px";

                var icon = document.createElement("img");
                icon.src = "https://assets.krunker.io/textures/previews/cosmetics/1_25.png?build=14T5P";
                icon.id = "compIcon"
                icon.style.width = "50px";
                icon.style.height = "50px";
                icon.style.paddingRight = "4px";

                var text = document.createElement("div");
                text.innerText = "Mapping 50k competition!"
                text.onclick = function(){document.getElementById("bdayBlock").style.display = "block";}
                text.style.display = "inline-block";
                text.style.verticalAlign = "top";
                text.style.color = "white";
                text.style.marginLeft = "8px";
                text.style.cursor = "pointer";
                text.style.pointerEvents = "all";

                var subtext = document.createElement("div");
                subtext.innerText = "Read more";
                subtext.style.fontSize = "15px";
                subtext.style.color = "#fbc02d";

                text.appendChild(subtext);
                container.appendChild(icon);
                container.appendChild(text);
                document.getElementById("tlInfHold").appendChild(container);

                console.log(container);
                console.log("AAAAAA");
            }
        })
        return ws;
    }
})
