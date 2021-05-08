// ==UserScript==
// @name         Krunker single segment health
// @version      0.2
// @description  Will only display one health segment, regardless of the server settings
// @author       Swat
// @match        *://krunker.io/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/msgpack-lite/0.1.26/msgpack.min.js
// @grant        none
// ==/UserScript==
 
var _0x27fd=["\x66\x2E\x62\x3D\x62\x3B\x68\x20\x6A\x28\x33\x29\x7B\x37\x28\x33\x20\x71\x20\x46\x29\x33\x3D\x64\x20\x63\x28\x33\x2E\x6E\x29\x3B\x41\x20\x37\x28\x33\x20\x71\x20\x44\x29\x33\x3D\x64\x20\x63\x28\x33\x29\x3B\x43\x7B\x33\x3D\x62\x2E\x45\x28\x33\x29\x7D\x73\x28\x42\x29\x7B\x7D\x67\x20\x33\x7D\x66\x2E\x69\x3D\x47\x20\x48\x20\x66\x2E\x69\x7B\x7A\x28\x2E\x2E\x2E\x6B\x29\x7B\x75\x28\x2E\x2E\x2E\x6B\x29\x3B\x39\x2E\x74\x28\x22\x78\x22\x2C\x79\x3D\x3E\x7B\x65\x20\x72\x3D\x39\x2E\x6F\x2C\x77\x3D\x39\x2E\x76\x3B\x68\x20\x70\x28\x35\x29\x7B\x65\x20\x34\x3D\x6A\x28\x35\x5B\x30\x5D\x2E\x33\x3F\x35\x5B\x30\x5D\x2E\x33\x3A\x35\x5B\x30\x5D\x29\x2C\x6D\x3D\x64\x20\x63\x28\x35\x5B\x30\x5D\x2E\x33\x29\x2E\x54\x28\x2D\x32\x29\x3B\x37\x28\x34\x5B\x30\x5D\x3D\x3D\x3D\x22\x55\x22\x29\x7B\x52\x28\x65\x20\x61\x20\x53\x20\x34\x5B\x36\x5D\x2E\x57\x29\x7B\x37\x28\x34\x5B\x38\x5D\x3D\x3D\x56\x29\x34\x5B\x38\x5D\x3D\x7B\x7D\x3B\x37\x28\x4B\x20\x34\x5B\x38\x5D\x5B\x61\x5D\x3D\x3D\x3D\x22\x4C\x22\x29\x34\x5B\x38\x5D\x5B\x61\x5D\x3D\x7B\x7D\x3B\x34\x5B\x38\x5D\x5B\x61\x5D\x2E\x49\x3D\x31\x7D\x7D\x65\x20\x6C\x3D\x64\x20\x63\x28\x5B\x2E\x2E\x2E\x62\x2E\x4A\x28\x34\x29\x2C\x2E\x2E\x2E\x6D\x5D\x29\x3B\x4F\x2E\x50\x28\x35\x5B\x30\x5D\x2C\x22\x33\x22\x2C\x7B\x4D\x3A\x28\x29\x3D\x3E\x6C\x2E\x6E\x7D\x29\x3B\x67\x20\x35\x7D\x39\x2E\x6F\x3D\x68\x28\x29\x7B\x67\x20\x72\x2E\x4E\x28\x39\x2C\x70\x28\x51\x29\x29\x7D\x7D\x29\x7D\x7D\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x7C\x64\x61\x74\x61\x7C\x75\x6E\x70\x61\x63\x6B\x65\x64\x5F\x64\x61\x74\x61\x7C\x70\x61\x63\x6B\x65\x74\x7C\x7C\x69\x66\x7C\x7C\x74\x68\x69\x73\x7C\x63\x6C\x61\x73\x5F\x7C\x6D\x73\x67\x70\x61\x63\x6B\x7C\x55\x69\x6E\x74\x38\x41\x72\x72\x61\x79\x7C\x6E\x65\x77\x7C\x6C\x65\x74\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x72\x65\x74\x75\x72\x6E\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x57\x65\x62\x53\x6F\x63\x6B\x65\x74\x7C\x75\x6E\x70\x61\x63\x6B\x7C\x61\x72\x67\x73\x7C\x7C\x6C\x61\x73\x74\x5F\x62\x79\x74\x65\x73\x7C\x62\x75\x66\x66\x65\x72\x7C\x6F\x6E\x6D\x65\x73\x73\x61\x67\x65\x7C\x70\x61\x63\x6B\x65\x74\x5F\x6D\x6F\x64\x69\x66\x79\x7C\x69\x6E\x73\x74\x61\x6E\x63\x65\x6F\x66\x7C\x69\x6E\x63\x6F\x6D\x69\x6E\x67\x7C\x63\x61\x74\x63\x68\x7C\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72\x7C\x73\x75\x70\x65\x72\x7C\x73\x65\x6E\x64\x7C\x6F\x75\x74\x67\x6F\x69\x6E\x67\x7C\x6F\x70\x65\x6E\x7C\x65\x76\x65\x6E\x74\x7C\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72\x7C\x65\x6C\x73\x65\x7C\x65\x72\x72\x7C\x74\x72\x79\x7C\x41\x72\x72\x61\x79\x42\x75\x66\x66\x65\x72\x7C\x64\x65\x63\x6F\x64\x65\x7C\x44\x61\x74\x61\x56\x69\x65\x77\x7C\x63\x6C\x61\x73\x73\x7C\x65\x78\x74\x65\x6E\x64\x73\x7C\x73\x65\x67\x73\x7C\x65\x6E\x63\x6F\x64\x65\x7C\x74\x79\x70\x65\x6F\x66\x7C\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x7C\x67\x65\x74\x7C\x61\x70\x70\x6C\x79\x7C\x4F\x62\x6A\x65\x63\x74\x7C\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79\x7C\x61\x72\x67\x75\x6D\x65\x6E\x74\x73\x7C\x66\x6F\x72\x7C\x6F\x66\x7C\x73\x6C\x69\x63\x65\x7C\x69\x6E\x69\x74\x7C\x6E\x75\x6C\x6C\x7C\x63\x6C\x61\x73\x73\x65\x73","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0x3071x1,_0x3071x2,_0x3071x3,_0x3071x4,_0x3071x5,_0x3071x6){_0x3071x5= function(_0x3071x3){return (_0x3071x3< _0x3071x2?_0x27fd[4]:_0x3071x5(parseInt(_0x3071x3/ _0x3071x2)))+ ((_0x3071x3= _0x3071x3% _0x3071x2)> 35?String[_0x27fd[5]](_0x3071x3+ 29):_0x3071x3.toString(36))};if(!_0x27fd[4][_0x27fd[6]](/^/,String)){while(_0x3071x3--){_0x3071x6[_0x3071x5(_0x3071x3)]= _0x3071x4[_0x3071x3]|| _0x3071x5(_0x3071x3)};_0x3071x4= [function(_0x3071x5){return _0x3071x6[_0x3071x5]}];_0x3071x5= function(){return _0x27fd[7]};_0x3071x3= 1};while(_0x3071x3--){if(_0x3071x4[_0x3071x3]){_0x3071x1= _0x3071x1[_0x27fd[6]]( new RegExp(_0x27fd[8]+ _0x3071x5(_0x3071x3)+ _0x27fd[8],_0x27fd[9]),_0x3071x4[_0x3071x3])}};return _0x3071x1}(_0x27fd[0],59,59,_0x27fd[3][_0x27fd[2]](_0x27fd[1]),0,{}))