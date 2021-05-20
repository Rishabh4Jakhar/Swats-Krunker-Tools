// ==UserScript==
// @name         Swat's tainbow skies (release)
// @version      1
// @description  WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// @author       Swat
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

let frequency = 0.15;   //speed/accuracy of the spectrum. 0.15 is default. Set higher then 0.5 for a free epelepsy test.
let amplitude = 127;    //height of sine (127 is show full color spectrum)
let ms_shift_delay = 1; //time it takes to shift to the next color in miliseconds. 1 = every milisecond.

var _0xaba2=["\x73\x69\x6E","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x73\x75\x62\x73\x74\x72","\x72\x6F\x75\x6E\x64","\x6D\x61\x70","\x23","","\x6A\x6F\x69\x6E","\x73\x65\x74\x43\x6C\x65\x61\x72\x43\x6F\x6C\x6F\x72","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x72\x65\x6E\x64\x65\x72\x65\x72","\x5F\x72","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x73\x6B\x79\x43"];let offset=0;function rgb_hex(offset){let _0x8ffax3,_0x8ffax4,_0x8ffax5;[_0x8ffax3,_0x8ffax4,_0x8ffax5]= [_0x8ffax3,_0x8ffax4,_0x8ffax5][_0xaba2[4]]((_0x8ffax6,_0x8ffax7)=>{_0x8ffax6= Math[_0xaba2[0]](frequency* offset+ (_0x8ffax7* 2))* amplitude+ 128;return (Math[_0xaba2[3]](_0x8ffax6)+ 0x10000).toString(16)[_0xaba2[2]](-2)[_0xaba2[1]]()});return `${_0xaba2[5]}${[_0x8ffax3,_0x8ffax4,_0x8ffax5][_0xaba2[7]](_0xaba2[6])}${_0xaba2[6]}`}function startLoop(_0x8ffax9){setInterval(function(){_0x8ffax9[_0xaba2[8]](rgb_hex(offset));offset++},ms_shift_delay)}let init=false;Object[_0xaba2[12]](Object[_0xaba2[9]],_0xaba2[10],{get:function(){return this[_0xaba2[11]]},set:function(_0x8ffax3){this[_0xaba2[11]]= _0x8ffax3;if(!init){init= true;startLoop(_0x8ffax3)}}});Object[_0xaba2[12]](Object[_0xaba2[9]],_0xaba2[13],{value:0})