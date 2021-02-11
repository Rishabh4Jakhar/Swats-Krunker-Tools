// ==UserScript==
// @name         Krunker gambling exposer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Find out the real rates of krunker gambling maps.
// @author       Swat
// @match        *://krunker.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @grant        none
// ==/UserScript==

//Special thanks to Lemons for letting me steal his WebSocket code, and Jakkky for having taught me a crap ton of stuff.
window.msgpack = msgpack;
window.wsData = {};
var playerpos = [0, 0, 0];
var overlap = document.createElement("div");

function parseData(data) {
    if (data instanceof DataView) data = new Uint8Array(data.buffer);
    if (data instanceof ArrayBuffer) data = new Uint8Array(data);
    try {data = JSON.parse(data);} catch (err) {}
    try {data = msgpack.decode(data);} catch (err) {}
    return data;
}

window.addEventListener('load', function(){
    //document.querySelector("#inGameUI").
    overlap.setAttribute("id", "overlapInteractMsg");
    overlap.style.position = "absolute";
    overlap.style.marginRight = "-50%";
    overlap.style.left = "50%";
    overlap.style.transform = "translate(-50%, 0)";
    overlap.style.bottom = "220px";
    overlap.style.fontSize = "25px";
    overlap.style.lineHeight = "75px";
    overlap.style.paddingLeft = "45px";
    overlap.style.paddingRight = "45px";
    overlap.style.color = "#fff";
    overlap.style.backgroundColor = "black";
    overlap.style.display = "hidden";
    overlap.classList.add("centerUIB");
    overlap.innerHTML = "Awaiting player position. . .";

    document.querySelector("#inGameUI").appendChild(overlap);


    const observer = new MutationObserver((mutationsList, observer) => {
        for(const mutation of mutationsList){
            overlap.style.display = mutation.target.style.display;
            if (mutation.target.style.display !== "block") overlap.innerHTML = "Awaiting player position...";
        }
    });

    observer.observe(document.querySelector("#interactMsg"), {attributes: true, childList: false, subtree: false});
});

window.WebSocket = new Proxy(WebSocket, {
    construct(target, args) {
        var ws = window.wsHook = new target(...args);
        var domain = new URL(ws.url).origin;
        window.wsData[domain] = {received: [], sent: []};

        var jackpotsData = [];
        var position = [0, 0, 0];

        ws.addEventListener('message', function(message) {
            var data = parseData(message.data);
            window.wsData[domain].received.push(data);
            if (data[0] == "init")
                if(typeof data[9] === "object" && data[9] != null){
                    try { var krunker_objects = JSON.parse(data[9].data); } catch (err){ alert("An issue occured while loading this map: " + err); }
                    for (let i = 0; i < krunker_objects.objects.length; i++){
                        if (krunker_objects.objects[i].tac !== undefined){
                            console.log("-------");
                            console.log(JSON.stringify(krunker_objects.objects[i]));
                            console.log(krunker_objects.objects[i].tin);
                            console.log("-------");
                            if (krunker_objects.objects[i].cha !== undefined) jackpotsData.push(krunker_objects.objects[i]);
                            //if there are middleman triggers
                            else if (krunker_objects.objects[i].tin !== undefined){
                                console.log("this was chained ^");
                                var triggerTree = [];
                                var interfaceQueue = [krunker_objects.objects[i].tin];
                                var interfaceList = [krunker_objects.objects[i].tin];
                                var index = 0;
                                var test = 0;
                                while (true || index > 7500){
                                    index++;
                                    if (interfaceQueue.length <= 0) break;
                                    test = 0;
                                    for (let y = 0; y < krunker_objects.objects.length; y++){
                                        if(krunker_objects.objects[y].in == interfaceQueue[0]){
                                            if (krunker_objects.objects[y].tin !== undefined && !interfaceList.includes(krunker_objectsi .objects[y].tin)){
                                                interfaceQueue.push(krunker_objects.objects[y].tin);
                                                interfaceList.push(krunker_objects.objects[y].tin);
                                            }

                                            triggerTree.push(krunker_objects.objects[y]);
                                            test++;
                                        }
                                    }
                                    console.log(test + " triggers found under interface " + interfaceQueue[0]);
                                    interfaceQueue.splice(0, 1);
                                }
                                console.log(triggerTree);
                            }
                            //
                        }
                    }
                }

            if (data[0] == "l" && position != [data[1][2], data[1][3], data[1][4]]){
                position = [data[1][2], data[1][3], data[1][4]];
                if (jackpotsData.length > 0)
                    for (let i = 0; i < jackpotsData.length; i++)
                        if (position[1] >= jackpotsData[i].p[1] && position[1] <= jackpotsData[i].p[1] + jackpotsData[i].s[1])
                            if (position[0] <= (jackpotsData[i].p[0] + (jackpotsData[i].s[0] / 2)) + 10 && position[0] >= (jackpotsData[i].p[0] - (jackpotsData[i].s[0] / 2)) - 10)
                                if (position[2] <= (jackpotsData[i].p[2] + (jackpotsData[i].s[2] / 2)) + 10 && position[2] >= (jackpotsData[i].p[2] - (jackpotsData[i].s[2] / 2)) - 10){
                                    console.log(JSON.stringify(jackpotsData[i]));
                                    overlap.innerHTML = "Press <span style=\"color:#FBC02D\">[G]</span> to gamble <span style=\"color:#9eeb56\">[" + jackpotsData[i].tac + "]</span> KR. ("+ jackpotsData[i].cha +"% chance of winning " + jackpotsData[i].te + " KR)";
                                }
            }
        });

        return ws;
    }
});