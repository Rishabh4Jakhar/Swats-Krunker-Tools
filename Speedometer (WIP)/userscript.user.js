// ==UserScript==
// @name         Krunker Speed Meter
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Displays how fast you move in a nicer way.
// @author       Swat
// @match        *://krunker.io/*
// @grant        none
// @run-at       document-start
// @updateURL    https://github.com/SwatDoge/Krunker-Speed-Meter/raw/master/userscript.user.js
// @downloadURL  https://github.com/SwatDoge/Krunker-Speed-Meter/raw/master/userscript.user.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @grant        none
// ==/UserScript==

var ss = {
    "clockface":{
        "skin": "https://swatdoge.nl/s/speedmeter/SpeedMeter.png",
        "shading": [ //set to "[]" to not use shading.
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0001.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0002.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0003.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0004.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0005.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0006.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0007.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0008.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0009.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0010.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0011.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0012.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0013.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0014.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0015.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0016.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0017.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0018.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0019.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0020.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0021.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0022.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0023.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0024.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0025.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0026.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0027.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0028.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0029.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0030.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0031.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0030.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0031.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0032.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0033.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0034.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0035.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0036.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0037.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0038.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0039.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0040.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0041.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0042.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0043.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0044.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0045.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0046.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0047.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0048.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0049.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0050.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0051.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0052.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0053.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0054.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0055.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0056.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0057.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0058.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0059.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0060.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0061.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0062.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0063.png",
            "https://swatdoge.nl/s/speedmeter/shading_64/speedman_high_quality0064.png",
        ]
    },
    "speed_dail":{
        "enabled": true,
        "skin": "https://swatdoge.nl/s/speedmeter/SpeedPin.png",
        "top_speed": 450,
        "enable_overspinning": false
    },
    "max_speed_dail":{
        "enabled": true,
        "skin": "https://swatdoge.nl/s/speedmeter/SpeedPinSmall.png", //set to NULL (no quotes) to use the skin of the main speed_dail
        "top_speed": 450,
        "enable_overspinning": false
    },
    "stopwatch":{
        "enabled": true,
        "skin": "https://swatdoge.nl/s/speedmeter/SpeedPinSmall.png", //set to NULL (no quotes) to use the skin of the main speed_dail
        "start_time": new Date().getSeconds(),
        "max_time": 59,
    }
}


var current_speed = 0; //current speed youre going at
var top_speed = 0; //top speed youve achieved within a life
var player_x_rotation = 45; //rotation of the player
var player_location = [0, 0, 0];
var sun_location = [0, 0, 0]; //location of the sun in coordinates.
var player_degrees_from_north_relevant_from_sun = 0; //degrees the player is away from the north with sun as center
var shadow_rotation = 0; //degrees of the player relative to the north minus the atan of the north relative to the sun

//Hooks for when you want to connect your own functions
function speed_formula(value) {let x = Math.round((value/ss.speed_dail.top_speed) * 340); if (x > 340) x = 340; return x;} //the formula used for the rotation of the main dail.
function top_speed_formula(value) {let x = Math.round((value/ss.max_speed_dail.top_speed) * 340); if (x > 340) x = 340; return x;} //the formula used for the rotation of the top speed dail.
function stopwatch_formula(value) {return (value / ss.stopwatch.max_time) * 360} //the formula for the rotation of the stopwatch.
function shading_formula() {return ss.clockface.shading[Math.floor((shadow_rotation / (360 / ss.clockface.shading.length)))]} //the formula of  the lighting casted based on the position of the sun and the rotatation of the player.

// The meter circle itself. (styling)
var speedMeter = document.createElement("div");
speedMeter.setAttribute("id", "speedMeter");
speedMeter.style.zIndex = "10";
speedMeter.style.position = "absolute";
speedMeter.style.bottom = "0px";
speedMeter.style.left = "370px";
speedMeter.style.width = "300px";
speedMeter.style.height = "300px";
speedMeter.style.display = "block";
speedMeter.style.backgroundImage = "url("+ss.clockface.skin+")";
speedMeter.style.backgroundSize = "100%";
speedMeter.style.backgroundRepeat = "no-repeat";

//The pin on the meter which moves according to your speed
var speedPin = create_default_pin();
speedPin.style.backgroundImage = "url("+ss.speed_dail.skin+")";

var maxSpeedPin = create_default_pin();
maxSpeedPin.style.backgroundImage = "url("+(ss.max_speed_dail.skin == null ? ss.speed_dail.skin : ss.max_speed_dail.skin)+")";
maxSpeedPin.style.width = "90px";
maxSpeedPin.style.height = "90px";
maxSpeedPin.style.position = "absolute";
maxSpeedPin.style.left = "155px";
maxSpeedPin.style.top = "106px";

var stopWatch = create_default_pin();
stopWatch.style.backgroundImage = "url("+(ss.stopwatch.skin == null ? ss.speed_dail.skin : ss.stopwatch.skin)+")";
stopWatch.style.width = "90px";
stopWatch.style.height = "90px";
stopWatch.style.position = "absolute";
stopWatch.style.left = "106px";
stopWatch.style.top = "155px";
stopWatch.style.transition = "unset";

function create_default_pin(){
    let div = document.createElement("div");
    div.style.width = "inherit";
    div.style.height = "inherit";
    div.style.backgroundSize = "100%";
    div.style.backgroundRepeat = "no-repeat";
    div.style.transform = "rotate(0deg)";
    div.style.transition = "all 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19)";
    return div;
}

//When the site is loaded...
window.addEventListener('load', function() {

    var container = document.createElement("div");
    container.id = "SOTTSpeedMeter";
    container.style.zIndex = "-999";
    container.style.position= "absolute"
    for (let x of ss.clockface.shading){
        var img = new Image();
        img.src = x;
        container.appendChild(img);
    }
    document.getElementsByTagName("body")[0].prepend(container);

    //Add the pins to the meter, and then add the meter to the HUD.
    if (ss.speed_dail.enabled) speedMeter.appendChild(speedPin);
    if (ss.max_speed_dail.enabled) speedMeter.appendChild(maxSpeedPin);
    if (ss.stopwatch.enabled) speedMeter.appendChild(stopWatch);

    document.querySelector("#inGameUI").appendChild(speedMeter);

    //the magic

    function unpack(data) {
        if (data instanceof DataView) data = new Uint8Array(data.buffer);
        else if (data instanceof ArrayBuffer) data = new Uint8Array(data);
        try { data = msgpack.decode(data); } catch (err) {}
        return data;
    }

    window.WebSocket = new Proxy(WebSocket, {
        construct(target, args) {
            var ws = new target(...args);
            ws.addEventListener('message', function(message) {
                var data = unpack(message.data);
                if (data[0] == "init"){
                    if(typeof data[10] === "object" && data[10] != null){
                        let parsed = JSON.parse(data[10].data);
                        let sunX = (typeof(parsed.sunAngX) != "undefined" ? parsed.sunAngX : 90);
                        let sunY = (typeof(parsed.sunAngY) != "undefined" ? parsed.sunAngY : 54);
                        let sunD = (typeof(parsed.lightD) != "undefined" ? parsed.lightD : 500);

                        let x = sunD * Math.sin(Math.PI * 2 * sunX / 360);
                        let y = sunD * Math.cos(Math.PI * 2 * sunX / 360);
                        let z = x * Math.sin(Math.PI * 2 * sunY / 360);
                        x = x * Math.cos(Math.PI * 2 * sunY / 360)

                        sun_location = [Math.round(y * -1), Math.round(z), Math.round(x * -1)];
                    }
                }
                if (data[0] == "l") {
                    player_location = [data[1][2], data[1][3], data[1][4]];
                    player_degrees_from_north_relevant_from_sun = (Math.atan2(player_location[0] - sun_location[0], player_location[2] - sun_location[2]) * (180/Math.PI)) + 180;
                }
            })

            var send = ws.send;

            ws.send = function(data) {
                let ret = send.apply(this, arguments);
                data = unpack(data);

                if (data[0] == "q" && data[2][0] != null){
                    player_x_rotation = (data[2][1] * 1) / 17.5;
                    shadow_rotation = player_degrees_from_north_relevant_from_sun - player_x_rotation;
                    while (shadow_rotation > 360) shadow_rotation -= 360;
                    while (shadow_rotation < 0) shadow_rotation += 360;

                    let shading = shading_formula();
                    if (typeof(shading) != "undefined") document.querySelector("#speedMeter").style.backgroundImage = "url(\"" + shading + "\")";
                }
                return ret;
            }
            return ws;
        }
    });

    stopWatch.style.transform = "rotate(" + ss.stopwatch.start_time + "deg)";
    let timer = ss.stopwatch.start_time;
    setInterval(function(){
        timer = (timer >= ss.stopwatch.max_time ? 0 : timer + 1)
        stopWatch.style.transform = "rotate(" + stopwatch_formula(timer) + "deg)"
    }, 1000);

    const og_fillText = window.CanvasRenderingContext2D.prototype.fillText;
    window.CanvasRenderingContext2D.prototype.fillText = function() {
        if ((this.fillStyle.startsWith("#0000") || this.fillStyle.startsWith("#ffff")) && typeof(arguments[0]) === "number" && arguments[2] == 0) {
            this.fillStyle.startsWith("#0000") ? top_speed = arguments[0] : current_speed = arguments[0];
            arguments[0] = "";
        }

        if (typeof(current_speed) === "number" && current_speed > 0) speedPin.style.transform = "rotate(" + speed_formula(current_speed) + "deg)";
        if (typeof(top_speed) === "number" && top_speed > 0) maxSpeedPin.style.transform = "rotate(" + top_speed_formula(top_speed) + "deg)";

        return og_fillText.apply(this, arguments);
    }
})
