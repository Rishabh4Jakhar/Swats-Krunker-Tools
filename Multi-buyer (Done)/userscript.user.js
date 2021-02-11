//--THIS IS A CONSOLE SCRIPT--\\

//Go to the krunker store and filter it to an item/items you want.
//Press CTRL+SHIFT+I to open console, then paste this script.
//Modify the top values to your needs.
//Press enter to run the script.

var amount = 99; //the amount of items you want to buy
var purchase_cooldown = 750; //the amount of cooldown for each purchase (to bypass krunker purchase cooldown)
var price_limit_total = 250; //stop loop when you have spend x amount of money
var price_limit = 50; //stop loop when an item costs more then x


(function loop(i) {
    setTimeout(function() {
        let arrs = Array.from(document.getElementsByClassName("cardAction"));
        if (typeof(arrs[0]) !== "undefined") {
            let x = decodeURI(/\((.*?)\)/ig.exec(arrs[0].attributes.onclick.nodeValue)[1]).split(",");
            if (parseInt(x[5].slice(1, -1)) > price_limit){
                  i = 0;
                console.log("loop ended, the next item costs more then the given limit. (" + parseInt(x[5].slice(1, -1)) + "KR / " + price_limit + "KR)");
            }
            else if (total + parseInt(x[5].slice(1, -1)) > price_limit_total) {
                i = 0;
                console.log("loop ended, you've almost spent your total set amount of KR (" + total + "KR / " + price_limit_total + "KR) and the next item costs " + parseInt(x[5].slice(1, -1)) + "KR");
            } else {
                total += parseInt(x[5].slice(1, -1));
                buyItem(x[10], x[9]);
                console.log("Bought skin ID " + x[1] + " for the " + x[3].slice(1, -1) + " for " + x[5].slice(1, -1) + "KR (#" + x[9] + ") (" + x[10] + ")");
                i--;
            }
        }
        if (typeof(window.pause) === "undefined") if (i) loop(i);
    }, purchase_cooldown)
})(amount);
var total = 0; // dont modify;