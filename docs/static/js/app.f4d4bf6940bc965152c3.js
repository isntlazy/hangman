webpackJsonp([1],{"1U3S":function(t,e){},"2mV7":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("w+hY"),s={};n.keys().forEach(function(t){"./index.js"!==t&&(s[t.split("/").pop().replace(/(\.\/|\.js)/g,"")]=n(t).default)}),e.default=s},"3xDa":function(t,e){},"7zck":function(t,e){},"9p8B":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{attrs:{to:"/"}},[r("v-list-tile-action",[r("v-icon",[t._v("home")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("Start New Game")])],1)],1),t._v(" "),r("v-list-tile",{attrs:{to:"/about"}},[r("v-list-tile-action",[r("v-icon",[t._v("contact_mail")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("About")])],1)],1)],1)],1),t._v(" "),r("v-toolbar",{attrs:{color:"light-blue darken-4",dark:"",fixed:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[t._v("The Hangman Game")])],1),t._v(" "),r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"",row:""}},[r("router-view")],1)],1)],1),t._v(" "),r("v-footer",{attrs:{color:"light-blue darken-4",app:""}},[r("span",{staticClass:"white--text"},[t._v("  © 2018")])])],1)},staticRenderFns:[]},a=r("VU/8")({data:function(){return{drawer:!1}}},s,!1,null,null,null).exports,o=r("/ocq"),i=r("Dd8w"),c=r.n(i),u=r("NYxO"),l={methods:c()({},Object(u.b)(["resetGameSettings","activatePlayerGameMode","activateComputerGameMode"])),mounted:function(){this.resetGameSettings()}},d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-card",[r("v-img",{attrs:{src:"/static/bg.jpg",height:"200px"}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline font-weight-bold"},[t._v("Welcome to Hangman Game!")]),t._v(" "),r("span",{staticClass:"grey--text"},[t._v("Please choose a Game Mode")])])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{to:"/game",dark:"",large:""},on:{click:t.activatePlayerGameMode}},[t._v("I want to solve the word")]),t._v(" "),r("v-btn",{attrs:{to:"/game",large:""},on:{click:t.activateComputerGameMode}},[t._v("I want computer to solve my word")]),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-slide-y-transition",[r("v-card-text",[t._v("\n        By choosing a type of Game you can choose between two modes: to guess the word yourself or to give computer a chance to guess your word. Have a Nice Game!\n      ")])],1)],1)],1)},staticRenderFns:[]};var v=r("VU/8")(l,d,!1,function(t){r("3xDa")},"data-v-77680a46",null).exports,m={data:function(){return{possibleStatuses:[0,1,2,3,4,5,6]}},computed:c()({},Object(u.c)(["hangmanStatus"])),methods:c()({},Object(u.b)(["changeHangmanStatus"]))},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.possibleStatuses,function(e){return r("img",{directives:[{name:"show",rawName:"v-show",value:e===t.hangmanStatus,expression:"status === hangmanStatus"}],key:e,attrs:{src:"/static/hangman"+e+".png"}})}))},staticRenderFns:[]};var f=r("VU/8")(m,h,!1,function(t){r("oBzL")},"data-v-17980a08",null).exports,_={data:function(){return{currentLetter:"",isLetterUsed:!0,showSnackbar:!1,snackBarText:""}},computed:c()({},Object(u.c)(["wordToGuess","usedLetters","gameMode"])),methods:c()({},Object(u.b)(["guessLetter"]),{guessNewLetter:function(t){this.showSnackbar=!1;var e=t.target.value.toUpperCase();if(""===e)return!1;-1!==this.usedLetters.indexOf(e)?this.snackBarText="Hey, you already used this letter, try another one!":(-1!==this.wordToGuess.indexOf(e)?this.snackBarText="Nice! Another right letter":this.snackBarText="No "+e+" letter there, sorry...",this.guessLetter(e)),this.showSnackbar=!0,this.currentLetter=""}})},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("h3",[t._v("Input your letter in the field and hit Enter!")]),t._v(" "),r("v-text-field",{staticClass:"mt-2 letter-input",attrs:{mask:"a",autofocus:"",dark:"",maxlength:"1",label:"Letter",placeholder:"Let's try to guess it!",solo:""},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.guessNewLetter(e)}},model:{value:t.currentLetter,callback:function(e){t.currentLetter=e},expression:"currentLetter"}}),t._v(" "),r("v-snackbar",{attrs:{timeout:5e3,top:"top"},model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},[t._v("\n        "+t._s(t.snackBarText)+"\n        "),r("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(e){t.showSnackbar=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var g=r("VU/8")(_,p,!1,function(t){r("hS6I")},null,null).exports,w={data:function(){return{possibleLetters:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],playerWord:"",showSnackbar:!1,snackBarText:""}},computed:c()({},Object(u.c)(["wordToGuess","usedLetters","gameMode","gameIsOver"])),watch:{usedLetters:function(t){var e=this;this.gameIsOver||setTimeout(function(){e.guessNewLetter()},4e3)}},methods:c()({},Object(u.b)(["guessLetter","changeWordToGuess"]),{saveGuessed:function(){""!==this.playerWord&&this.changeWordToGuess(this.playerWord)},guessNewLetter:function(){var t=this.generateRandomLetter();this.snackBarText="Computer selected letter "+t,this.guessLetter(t),this.showSnackbar=!0},generateRandomLetter:function(){var t=this.possibleLetters[Math.floor(Math.random()*this.possibleLetters.length)];return-1!==this.usedLetters.indexOf(t)?this.generateRandomLetter():t}})},E={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[t.wordToGuess.length?r("h3",[t._v("Great! Now computer will try to guess your word. Just sit and watch it!")]):r("h3",[t._v("Input your word so computer will try to guess it. After hit Enter!")]),t._v(" "),r("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!t.wordToGuess.length,expression:"!wordToGuess.length"}],staticClass:"mt-2 letter-input",attrs:{mask:"aaaaaaaaaaaa",autofocus:"",dark:"",maxlength:"12",label:"Letter",placeholder:"Input your word here",solo:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.saveGuessed(e):null}},model:{value:t.playerWord,callback:function(e){t.playerWord=e},expression:"playerWord"}}),t._v(" "),r("v-snackbar",{attrs:{timeout:3e3,top:"top"},model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},[t._v("\n        "+t._s(t.snackBarText)+"\n        "),r("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(e){t.showSnackbar=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var G=r("VU/8")(w,E,!1,function(t){r("1U3S")},null,null).exports,x={computed:c()({},Object(u.c)(["wordToGuess","usedLetters"]))},T={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"word-container"},[r("v-item-group",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},t._l(t.wordToGuess,function(e,n){return r("v-flex",{key:n,staticClass:"mt-3"},[r("v-card",{attrs:{dark:"",color:"secondary"}},[0===n||n===t.wordToGuess.length-1||-1!==t.usedLetters.indexOf(e)?r("v-card-text",{staticClass:"px-0"},[t._v(t._s(e))]):r("v-card-text",{staticClass:"px-0"},[t._v("_")])],1)],1)}))],1)],1)],1)},staticRenderFns:[]};var b=r("VU/8")(x,T,!1,function(t){r("kM6Q")},null,null).exports,y={created:function(){this.setFirstAndLastLetters(this.wordToGuess)},watch:{wordToGuess:function(t){this.setFirstAndLastLetters(t)}},computed:c()({},Object(u.c)(["usedLetters","wordToGuess"])),methods:c()({},Object(u.b)(["guessLetter"]),{setFirstAndLastLetters:function(t){if(t.length){var e=t.substring(0,1),r=t.slice(-1);this.guessLetter(e),e!==r&&this.guessLetter(r)}}})},k={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{dark:"",color:"light-blue darken-4 pt-2"}},[r("h3",[t._v("Used Letters:")]),t._v(" "),r("v-card-text",{staticClass:"px-0 display-2 mr-3"},t._l(t.usedLetters,function(e,n){return r("v-chip",{key:n,attrs:{color:"primary","text-color":"white"}},[r("v-avatar",[-1!==t.wordToGuess.indexOf(e)?r("v-icon",[t._v("check_circle")]):r("v-icon",[t._v("cancel")])],1),t._v(" "),r("span",{staticClass:"font-weight-bold"},[t._v(t._s(e))])],1)}))],1)],1)],1)],1)],1)},staticRenderFns:[]};var S={components:{Hangman:f,WordContainer:b,UsedLetters:r("VU/8")(y,k,!1,function(t){r("kH54")},"data-v-176d5e6a",null).exports,PlayerGame:g,ComputerGame:G},computed:c()({},Object(u.c)(["gameIsOver","gameMode"])),watch:{gameIsOver:function(t,e){!0===t&&this.$router.push("/game_over")}}},L={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{xs12:""}},[r("div",[r("h1",[t._v(t._s("player"===t.gameMode?"Try to guess the word":"Computer will try to guess your word"))]),t._v(" "),r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-card",[r("hangman")],1)],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-card",[r("word-container"),t._v(" "),r("player"===t.gameMode?"player-game":"computer-game",{tag:"component"})],1)],1)],1)],1),t._v(" "),r("used-letters")],1)])},staticRenderFns:[]};var A=r("VU/8")(S,L,!1,function(t){r("Prbp")},"data-v-2294f49a",null).exports,O={computed:c()({},Object(u.c)(["isWinner","gameMode"]))},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",["player"===this.gameMode?e("div",[this.isWinner?e("h1",[this._v("Congratulations! You did it! You win the game!")]):e("h1",[this._v("Sorry, you lose. Try next time")])]):e("div",[this.isWinner?e("h1",[this._v("Wow, computer guessed your word. Try more complex next time!")]):e("h1",[this._v("Nice word! Even the genius computer didn't solve it")])])])},staticRenderFns:[]};var C=r("VU/8")(O,M,!1,function(t){r("Wq1P")},"data-v-532f0286",null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("About Page")])])}]};var R=r("VU/8")({},N,!1,function(t){r("9p8B")},"data-v-b1ac9372",null).exports;n.default.use(o.a);var I=new o.a({routes:[{path:"/",name:"Welcome",component:v},{path:"/game",name:"Game",component:A},{path:"/game_over",name:"GameOver",component:C},{path:"/about",name:"About",component:R}],mode:"history"}),W=r("2mV7");n.default.use(u.a);var U=new u.a.Store({state:{},mutations:{},actions:{},getters:{},modules:W.default}),H=r("3EgV"),j=r.n(H);r("7zck");n.default.use(j.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:I,store:U,components:{App:a},template:"<App/>"})},Prbp:function(t,e){},Wq1P:function(t,e){},hS6I:function(t,e){},kH54:function(t,e){},kM6Q:function(t,e){},oBzL:function(t,e){},"w+hY":function(t,e,r){var n={"./Game.js":"zDnZ","./index.js":"2mV7"};function s(t){return r(a(t))}function a(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="w+hY"},zDnZ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={state:{gameMode:"computer",hangmanStatus:0,wordToGuess:"Testing",usedLetters:[],gameIsOver:!1,isWinner:!1},mutations:{RESET_GAME_SETTINGS:function(t){t.usedLetters=[],t.gameIsOver=!1,t.isWinner=!1},ACTIVATE_PLAYER_GAME_MODE:function(t){t.gameMode="player",t.hangmanStatus=0,t.wordToGuess="Testing"},ACTIVATE_COMPUTER_GAME_MODE:function(t){t.gameMode="computer",t.hangmanStatus=0,t.wordToGuess=""},CHANGE_WORD_TO_GUESS:function(t,e){t.wordToGuess=e},CHANGE_HANGMAN_STATUS:function(t,e){t.hangmanStatus=e},CHANGE_GAME_OVER:function(t,e){t.gameIsOver=e},CHANGE_IS_WINNER:function(t,e){t.isWinner=e},GUESS_LETTER:function(t,e){t.usedLetters.push(e)}},actions:{resetGameSettings:function(t){(0,t.commit)("RESET_GAME_SETTINGS")},activatePlayerGameMode:function(t){var e=t.commit;e("RESET_GAME_SETTINGS"),e("ACTIVATE_PLAYER_GAME_MODE")},activateComputerGameMode:function(t){var e=t.commit;e("RESET_GAME_SETTINGS"),e("ACTIVATE_COMPUTER_GAME_MODE")},changeWordToGuess:function(t,e){(0,t.commit)("CHANGE_WORD_TO_GUESS",e)},changeHangmanStatus:function(t,e){(0,t.commit)("CHANGE_HANGMAN_STATUS",e)},guessLetter:function(t,e){var r=t.commit,n=t.getters;-1===n.wordToGuess.indexOf(e)&&r("CHANGE_HANGMAN_STATUS",n.hangmanStatus+1),r("GUESS_LETTER",e),6===n.hangmanStatus&&(r("CHANGE_GAME_OVER",!0),r("CHANGE_IS_WINNER",!1));var s=!0;n.wordToGuess.split("").forEach(function(t){-1===n.usedLetters.indexOf(t)&&(s=!1)}),s&&(r("CHANGE_GAME_OVER",!0),r("CHANGE_IS_WINNER",!0))}},getters:{hangmanStatus:function(t){return t.hangmanStatus},gameMode:function(t){return t.gameMode},wordToGuess:function(t){return t.wordToGuess.toUpperCase()},usedLetters:function(t){return t.usedLetters},gameIsOver:function(t){return t.gameIsOver},isWinner:function(t){return t.isWinner}}}}},["NHnr"]);
//# sourceMappingURL=app.f4d4bf6940bc965152c3.js.map