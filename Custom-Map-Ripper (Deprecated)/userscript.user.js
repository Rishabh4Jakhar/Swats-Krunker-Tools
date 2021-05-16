// ==UserScript==
// @name         Krunker custom map ripper (Release)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  rips custom maps youre playing.
// @author       Swat
// @match        *://krunker.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @run-at       document-start
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

GM_addStyle (`
   #subLogoButtons > div:last-child{
       display: grid;
       grid-template-columns: 1fr 1fr;
   }

   #subLogoButtons > div:last-child > .buttonD{
      transition: none;
   }

   #subLogoButtons > div:last-child > .buttonD:hover{
      transform: scale(1) !important;
      cursor: not-allowed;
   }
`)

var _0x7255=["\x6D\x73\x67\x70\x61\x63\x6B","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x6E\x70\x75\x74","\x62\x75\x74\x74\x6F\x6E\x44","\x61\x64\x64","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x62\x75\x74\x74\x6F\x6E","\x73\x6D\x61\x6C\x6C","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6D\x61\x70","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x6E\x6F\x6E\x65","\x6F\x6E\x6C\x6F\x61\x64","\x73\x75\x62\x4C\x6F\x67\x6F\x42\x75\x74\x74\x6F\x6E\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x64\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74","\x65\x6E\x64\x55\x49","\x6F\x62\x73\x65\x72\x76\x65","\x62\x75\x66\x66\x65\x72","\x64\x65\x63\x6F\x64\x65","\x73\x6C\x69\x63\x65","\x69\x6E\x69\x74","\x43\x6F\x70\x79\x20\x6D\x61\x70","\x56\x69\x65\x77\x20\x6D\x61\x70","\x43\x61\x6E\x27\x74\x20\x63\x6F\x70\x79","\x43\x61\x6E\x27\x74\x20\x76\x69\x65\x77","\x72\x65\x6D\x6F\x76\x65","\x62\x75\x74\x74\x6F\x6E\x42","\x6F\x6E\x63\x6C\x69\x63\x6B","","\x6F\x70\x65\x6E","\x64\x61\x74\x61","\x70\x61\x72\x73\x65","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65","\x64\x6F\x63\x75\x6D\x65\x6E\x74","\x76\x61\x6C\x75\x65","\x73\x65\x6C\x65\x63\x74","\x63\x6F\x70\x79","\x65\x78\x65\x63\x43\x6F\x6D\x6D\x61\x6E\x64","\x43\x6F\x70\x69\x65\x64","\x65\x6E\x63\x6F\x64\x65","\x57\x65\x62\x53\x6F\x63\x6B\x65\x74","\x6D\x65\x73\x73\x61\x67\x65","\x64\x6F\x77\x6E","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];unsafeWindow[_0x7255[0]]= msgpack;let copy=document[_0x7255[2]](_0x7255[1]),view=document[_0x7255[2]](_0x7255[1]),container=document[_0x7255[2]](_0x7255[1]),copy_field=document[_0x7255[2]](_0x7255[3]);[copy,view][_0x7255[12]]((_0xebddx5)=>{_0xebddx5[_0x7255[6]][_0x7255[5]](_0x7255[4]);_0xebddx5[_0x7255[6]][_0x7255[5]](_0x7255[7]);_0xebddx5[_0x7255[6]][_0x7255[5]](_0x7255[8]);_0xebddx5[_0x7255[9]]= _0x7255[10];container[_0x7255[11]](_0xebddx5)});copy_field[_0x7255[14]][_0x7255[13]]= _0x7255[15];container[_0x7255[11]](copy_field);unsafeWindow[_0x7255[16]]= function(){let _0xebddx6= new MutationObserver((_0xebddx7)=>{document[_0x7255[18]](_0x7255[17])[_0x7255[11]](container);_0xebddx6[_0x7255[19]]()});_0xebddx6[_0x7255[21]](document[_0x7255[18]](_0x7255[20]),{attributes:true})};function unpack(_0xebddx9){if(_0xebddx9 instanceof  DataView){_0xebddx9=  new Uint8Array(_0xebddx9[_0x7255[22]])}else {if(_0xebddx9 instanceof  ArrayBuffer){_0xebddx9=  new Uint8Array(_0xebddx9)}};try{_0xebddx9= msgpack[_0x7255[23]](_0xebddx9)}catch(err){};return _0xebddx9}function packet_modify(_0xebddxb,_0xebddxc){let _0xebddxd=unpack(_0xebddxb),_0xebddxe= new Uint8Array(_0xebddxb)[_0x7255[24]](-2);if(_0xebddxd[0]== _0x7255[25]){[copy[_0x7255[9]],view[_0x7255[9]]]= _0xebddxd[10]!= null?[_0x7255[26],_0x7255[27]]:[_0x7255[28],_0x7255[29]];if(_0xebddxd[10]!= null){[copy,view][_0x7255[12]]((_0xebddx5)=>{_0xebddx5[_0x7255[6]][_0x7255[30]](_0x7255[4]);_0xebddx5[_0x7255[6]][_0x7255[5]](_0x7255[31])});view[_0x7255[32]]= function(){let _0xebddxf=window[_0x7255[34]](_0x7255[33]);_0xebddxf[_0x7255[39]][_0x7255[38]](JSON[_0x7255[37]](JSON[_0x7255[36]](_0xebddxd[10][_0x7255[35]])))};copy[_0x7255[32]]= function(){copy_field[_0x7255[40]]= _0xebddxd[10][_0x7255[35]];copy_field[_0x7255[41]]();document[_0x7255[43]](_0x7255[42]);copy[_0x7255[9]]= _0x7255[44];setTimeout(function(){copy[_0x7255[9]]= _0x7255[26]},1000)}}};return  new Uint8Array([...msgpack[_0x7255[45]](_0xebddxd),..._0xebddxe])}unsafeWindow[_0x7255[46]]= class  extends unsafeWindow[_0x7255[46]]{constructor(..._0xebddx11){super(..._0xebddx11);this[_0x7255[50]](_0x7255[47],(_0xebddx12)=>{Object[_0x7255[49]](_0xebddx12,_0x7255[35],{value:packet_modify(_0xebddx12[_0x7255[35]],_0x7255[48])})})}}
