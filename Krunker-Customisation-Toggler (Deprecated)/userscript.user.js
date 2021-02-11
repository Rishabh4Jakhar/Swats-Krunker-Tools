// ==UserScript==
// @name         Swat's krunker cosmetics remover.
// @version      0.1
// @description  Removes all cosmetics of your choice.
// @author       Swat
// @run-at       document-start
// @match        *://krunker.io/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// ==/UserScript==

//
//  Want any things added/fixed? Make an issue on github, or message Swat#7165 on discord.
//

var usersettings = {
    //skins means both skins and models.
    "cosmetics":{
        "hats": false,
        "back_items": false,
        "weapon_skins": false,
        "knife_skins": false,
        "dyes": false,
        "waist_items": false,
        "faces": false,
    },
    "exclusives":{
        "verified_checkmarks": false,
        "partnered_checkmarks": false,
        "premium_checkmarks": false,
        "clan_tags": false,
        "challange_level_color": false,
        "colored_chat": false,
        "colored_hair": false,
        "colored_skin": false
    },
    //disabling colored skins, will also remove skin tints. You can set one global skin color which will apply to every krunker player.
    "set_yourself":{
        //0 (no quotes) is darkest color.
        //"1", "2", "3", "4" are lighter tints. ("3" is the original skin color.)
        "global_skin_color": "3"
    }
}

var _0x5445=['buffer','url','apply','faces','wsData','WebSocket','partnered_checkmarks','challange_level_color','msgpack','colored_skin','onmessage','set_yourself','knife_skins','wsHook','origin','global_skin_color','colored_chat','verified_checkmarks','clan_tags','dyes','data','push','It\x20seems\x20like\x20krunker\x27s\x20player\x20data\x20model\x20has\x20changed,\x20disable\x20your\x20\x22Swat\x27s\x20cosmetics\x20remover\x22\x20extension\x20and\x20notify\x20Swat#7165\x20about\x20this\x20error.','length'];(function(_0x50d5b9,_0x54453d){var _0x3ddc22=function(_0x465a99){while(--_0x465a99){_0x50d5b9['push'](_0x50d5b9['shift']());}};_0x3ddc22(++_0x54453d);}(_0x5445,0x1c6));var _0x3ddc=function(_0x50d5b9,_0x54453d){_0x50d5b9=_0x50d5b9-0x0;var _0x3ddc22=_0x5445[_0x50d5b9];return _0x3ddc22;};var _0x20aa64=_0x3ddc;window[_0x20aa64('0xa')]=msgpack,window[_0x20aa64('0x6')]={};var cosmetic_values=[],p_data_size=0x28,usc=usersettings['cosmetics'],use=usersettings['exclusives'];if(!usc['hats'])cosmetic_values[_0x20aa64('0x17')](0xd);if(!usc['back_items'])cosmetic_values[_0x20aa64('0x17')](0xe);if(!usc[_0x20aa64('0xe')])cosmetic_values[_0x20aa64('0x17')](0x13);if(!usc[_0x20aa64('0x15')])cosmetic_values[_0x20aa64('0x17')](0x19);if(!usc['waist_items'])cosmetic_values[_0x20aa64('0x17')](0x21);if(!usc[_0x20aa64('0x5')])cosmetic_values['push'](0x25);function parseData(_0x465a99){if(_0x465a99 instanceof ArrayBuffer)_0x465a99=new Uint8Array(_0x465a99);else return null;try{_0x465a99=msgpack['decode'](_0x465a99);}catch(_0x3e3bb6){return null;}return _0x465a99;}window[_0x20aa64('0x7')]=new Proxy(WebSocket,{'construct'(_0x32ac3b,_0x4c2441){var _0xf3e13f=_0x20aa64,_0x2a9e9=window[_0xf3e13f('0xf')]=new _0x32ac3b(..._0x4c2441),_0x257bd6=new URL(_0x2a9e9[_0xf3e13f('0x3')])[_0xf3e13f('0x10')];return window[_0xf3e13f('0x6')][_0x257bd6]={'received':[],'sent':[]},setTimeout(()=>{var _0x152866=_0xf3e13f,_0x42de01=_0x2a9e9[_0x152866('0xc')];_0x2a9e9[_0x152866('0xc')]=function(_0x3d5e5f){var _0x71638d=_0x152866,_0x47c661=parseData(_0x3d5e5f['data']),_0x110487=_0x47c661;window['wsData'][_0x257bd6]['received'][_0x71638d('0x17')](_0x47c661);if(_0x110487!=null){if(_0x110487[0x0]=='ch'){_0x110487[0x5]=null;if(!use[_0x71638d('0x12')])_0x47c661=_0x110487;}if(_0x110487[0x0]=='0'){if(_0x110487[0x1]['length']%p_data_size===0x0){let _0xf614e0=![];for(let _0x1a1053=0x0;_0x1a1053<_0x110487[0x1]['length']/0x28;_0x1a1053++){let _0x25ae1f=_0x1a1053*p_data_size;if(typeof _0x110487[0x1][_0x25ae1f+0xc]==='object'||_0x110487[0x1][_0x25ae1f+0xc]===0x0){if(!usc['weapon_skins'])_0x110487[0x1][_0x25ae1f+0xc]=0x0;for(let _0x577866=0x0;_0x577866<cosmetic_values[_0x71638d('0x1')];_0x577866++)if(Number['isInteger'](_0x110487[0x1][_0x25ae1f+cosmetic_values[_0x577866]]))_0x110487[0x1][_0x25ae1f+cosmetic_values[_0x577866]]=-0x1;else{_0xf614e0=!![];break;};}if(!use[_0x71638d('0xb')])_0x110487[0x1][_0x25ae1f+0x14]=usersettings[_0x71638d('0xd')][_0x71638d('0x11')];if(!use['colored_hair'])_0x110487[0x1][_0x25ae1f+0x23]=-0x1;if(!use[_0x71638d('0x14')])_0x110487[0x1][_0x25ae1f+0xb]=null;if(!use[_0x71638d('0x13')])_0x110487[0x1][_0x25ae1f+0x1a]=0x0;if(!use[_0x71638d('0x9')])_0x110487[0x1][_0x25ae1f+0x1b]=0x0;if(!use[_0x71638d('0x8')])_0x110487[0x1][_0x25ae1f+0x27]=0x0;if(!use['premium_checkmarks'])_0x110487[0x1][_0x25ae1f+0x1e]=0x0;}if(!_0xf614e0)_0x47c661=_0x110487;else alert(_0x71638d('0x0'));}}}return _0x47c661=new Uint8Array([...msgpack['encode'](_0x47c661),0x0,0x0]),_0x47c661=_0x47c661[_0x71638d('0x2')],Object['defineProperty'](_0x3d5e5f,_0x71638d('0x16'),{'get':()=>_0x47c661}),_0x42de01[_0x71638d('0x4')](this,[_0x3d5e5f]);};}),_0x2a9e9;}});