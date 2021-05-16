// ==UserScript==
// @name         Krunker single segment health (release)
// @version      0.2
// @description  Will only display one health segment, regardless of the server settings
// @author       Swat
// @match        *://krunker.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @grant        none
// ==/UserScript==

var _0x6450=["\x6D\x73\x67\x70\x61\x63\x6B","\x62\x75\x66\x66\x65\x72","\x64\x65\x63\x6F\x64\x65","\x73\x6C\x69\x63\x65","\x69\x6E\x69\x74","\x63\x6C\x61\x73\x73\x65\x73","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x73\x65\x67\x73","\x65\x6E\x63\x6F\x64\x65","\x57\x65\x62\x53\x6F\x63\x6B\x65\x74","\x6D\x65\x73\x73\x61\x67\x65","\x64\x61\x74\x61","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];window[_0x6450[0]]= msgpack;function unpack(_0x3a78x2){if(_0x3a78x2 instanceof  DataView){_0x3a78x2=  new Uint8Array(_0x3a78x2[_0x6450[1]])}else {if(_0x3a78x2 instanceof  ArrayBuffer){_0x3a78x2=  new Uint8Array(_0x3a78x2)}};try{_0x3a78x2= msgpack[_0x6450[2]](_0x3a78x2)}catch(err){};return _0x3a78x2}function packet_modify(_0x3a78x4){let _0x3a78x5=unpack(_0x3a78x4),_0x3a78x6= new Uint8Array(_0x3a78x4)[_0x6450[3]](-2);if(_0x3a78x5[0]=== _0x6450[4]){for(let _0x3a78x7 of _0x3a78x5[6][_0x6450[5]]){if(_0x3a78x5[8]== null){_0x3a78x5[8]= {}};if( typeof _0x3a78x5[8][_0x3a78x7]=== _0x6450[6]){_0x3a78x5[8][_0x3a78x7]= {}};_0x3a78x5[8][_0x3a78x7][_0x6450[7]]= 1}};return  new Uint8Array([...msgpack[_0x6450[8]](_0x3a78x5),..._0x3a78x6]);;}window[_0x6450[9]]= class  extends window[_0x6450[9]]{constructor(..._0x3a78x9){super(..._0x3a78x9);this[_0x6450[13]](_0x6450[10],(_0x3a78xa)=>{Object[_0x6450[12]](_0x3a78xa,_0x6450[11],{value:packet_modify(_0x3a78xa[_0x6450[11]])})})}}
