//--THIS IS A CONSOLE SCRIPT--\\

var kr_amount = 100;             //Amount of kr you want to gift the user.
var cooldown = 750;             //cooldown of the gifting in ms. Used to bypass krunker cooldown.

(function loop(i) {
        var max = i;
    setTimeout(function() {
            let value = 0;
            let money = 19;
            value = total * 19;
            value = (value < kr_amount ? total * 19 : ((total - 1) * 19) + (kr_amount - (total - 1) * 19))
            if (value >= kr_amount) money = kr_amount - value;
            if (money < 10) money = 10;
    
            console.log(money);
            console.log(value + " out of " + kr_amount + "KR sent");
      giftPopup();
      document.getElementById("giftIn").value=money;
      document.getElementById("giftMsg").value=kr_amount - value + " KR remaining";
      giftUser();

            total++;
      if (typeof(window.pause) === "undefined") if (value < kr_amount) loop(i);
    }, cooldown)
})(Math.ceil(kr_amount/19));
var total = 1; //dont modify
