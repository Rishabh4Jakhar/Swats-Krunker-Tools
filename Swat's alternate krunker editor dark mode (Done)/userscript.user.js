// ==UserScript==
// @name         Swat's alternate dark mode.
// @version      0.1
// @description  Adds Swat's preferences to the krunker editor dark mode.
// @author       Swat
// @match        *://krunker.io/editor.html
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle (`
   .material-icons, .toolbarItem, .toolbarDropDownItem, .panelLabel, .section, .header > a, .subheader > a, .qs_textarea, #versionTxt, .windowHeader > div, .menuTabsNew > div, .inlineLabel, .mapListItem > * > a {
      color: #e0e0e0 !important;
   }

   .panel, .qs_textarea, .qs_title_bar, #menuWindow{
       background-color: #2e2e2e !important;
   }

   *{
      letter-spacing: .25px;
      -webkit-font-smoothing: subpixel-antialiased;
      -moz-osx-font-smoothing: auto;
   }

   .inlineInput{
      background-color: #ccc
   }

   .header a{
      font-size: 14px;
   }

   .section{
     font-size: 12px;
   }

   .toolbarItem{
       font-size: 10.5px;
   }

   .playbarItemL, .playbarItemR{
      border: none;
   }

   .right.panel, .left.panel, #hotbar,
   .toolbarDropDown, .toolbarSubDropDown,
   .restore:hover,
   #canvasObjEdit > div.button, #canvasInfo, #canvasAdd
   {
      box-shadow: unset;
   }

   .toolbarDropDown, .toolbarSubDropDown{
   background-color: #1f1f1f !important;
   }
   //

   .list{
     top: 5px;
   }
   .panel{
      padding-top: 5px;
   }

   .panelLabel{
      display: none;
   }

   .material-icons{
      transform: translateY(0) !important;
   }

   #transform > div .material-icons{
      color: #fff;
   }

   input[type="range"]::-moz-range-thumb, input:checked + .slider{
      background: unset;
      background-color: #1d8eb9;
      border: none;
   }

   .panelButtonLayout{
      grid-template-columns: fit-content(0) auto;
   }

   hr{
      border: none;
      margin-block-start: 0;
   }

   .header{
       background-color: rgba(255,255,255,.11);
   }

   .header:hover{
      background-color: rgba(255,255,255,.16);
   }

   #canvasInfo, #canvasAdd, #canvasObjEdit > div.button{
      background-color: rgba(100,100,100,.75);
   }

   #canvasUI > div:not(:first-child):not(#chatHolder), #canvasUI > #transform > div, #warning_error > .chatItem{
      background-color: rgba(100,100,100,.75);
      box-shadow: unset;
   }

   #_toolbar{
      padding-left: 5px;
      grid-template-columns: repeat(8, calc(min-content + 10px));
   }

   #hotbar{
      background-color: #222222;
      color: #e0e0e0 !important;
      -webkit-font-smoothing: subpixel-antialiased;
      -moz-osx-font-smoothing: auto;
      height: 32px;
   }

   #transform{
      column-gap: 9px;
   }

   #canvasUI .button, canvasObjEdit .button, #canvasInfo{
      padding: 6.5px;
   }

   @font-face {
      font-family: 'fff_forwardregular';
      src: url("https://cdn.discordapp.com/attachments/766037362999820310/840925471730302976/FFForward.svg") format("svg"),
           url("https://cdn.discordapp.com/attachments/766037362999820310/840925466973044756/FFForward.ttf") format("truetype"),
           url("https://cdn.discordapp.com/attachments/766037362999820310/840925467900641300/FFForward.woff") format("woff"),
           url("https://cdn.discordapp.com/attachments/766037362999820310/840925469015670784/FFForward.woff2") format("woff2");
      font-weight: normal;
      font-style: normal;
   }
`);

