// ==UserScript==
// @name         MirapolisExtension
// @namespace    http://tampermonkey.net/
// @version      0.39
// @description  Adding new expanding functionality
// @author       Eugene
// @match        https://mv1.virtualroom.ru/*
// @match        https://mv4.virtualroom.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let areaStyle = document.createElement("style");
let scaleChatText = document.createElement("style");
let selectButtonStyle = document.createElement("style");
let scaleWebCamScript = document.createElement("script");
let sliderScaleChatTextStyle = document.createElement("style");
let customCheckBoxMessageStyle = document.createElement("style");
let customButtonRemoveAllMessageStyle = document.createElement("style");
let customCheckBoxWebStyle = document.createElement("style");
let hiddenWeb = document.createElement("style");
let hiddenButtonWeb = document.createElement("style");
document.body.appendChild(areaStyle);
document.body.appendChild(scaleChatText);
document.body.appendChild(selectButtonStyle);
document.body.appendChild(scaleWebCamScript);
document.body.appendChild(sliderScaleChatTextStyle);
document.body.appendChild(customCheckBoxMessageStyle);
document.body.appendChild(customButtonRemoveAllMessageStyle);
document.body.appendChild(customCheckBoxWebStyle);
document.body.appendChild(hiddenWeb);
document.body.appendChild(hiddenButtonWeb);
areaStyle.classList.add('areaStyle');
scaleChatText.classList.add('scaleChatText');
selectButtonStyle.classList.add('selectButtonStyle');
scaleWebCamScript.classList.add('scaleWebCamScript');
sliderScaleChatTextStyle.classList.add('sliderScaleChatTextStyle');
customCheckBoxMessageStyle.classList.add('customCheckBoxMessageStyle');
customButtonRemoveAllMessageStyle.classList.add('customButtonRemoveAllMessageStyle');
customCheckBoxWebStyle.classList.add('customCheckBoxWebStyle');
hiddenWeb.classList.add('hiddenWeb');
hiddenButtonWeb.classList.add('hiddenButtonWeb');
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
(function () {
  let MenuButtonStyle = document.createElement('style');
  document.body.appendChild(MenuButtonStyle);
  MenuButtonStyle.innerHTML = ".extension {position: absolute; top: 0; left: 0; height: 48px; display: flex; z-index: 200;} \
                               .menu {width: 128px; background-color: rgb(0, 170, 222); color: white; padding: 12px 40px 12px 40px; text-align: justify; font-size: 16px; border: none; cursor: pointer;} \
                               .menu:hover, .menu:focus {background-color: rgb(0, 153, 215)} \
                               .area {width: 128px; display: none; position: absolute; background-color: rgb(255, 255, 255); min-width: 111px; overflow: auto; border-radius: 0px 0px 15px 0px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5); z-index: 12;} \
                               .area p {font-size: 16px; color: black; padding: 10px 10px; display: block; margin: 0; cursor: pointer;} \
                               .main p:hover {background-color: rgb(221 221 221);} \
                               .show {display: block;}";
  areaStyle.innerHTML = ".header img {margin-left: 203px;}";
  let extension = document.createElement('div');
    let main = document.createElement('div');
      let menu = document.createElement('div');
      let menuText = document.createTextNode("Меню");
        let area = document.createElement('div');
         let fullScreen = document.createElement('p');
         let fullScreenText = document.createTextNode("Полный экран");
         let onlyWebCam = document.createElement('p');
         let onlyWebCamText = document.createTextNode("Только камера");
         let lecturerMode = document.createElement('p');
         let lecturerModeText = document.createTextNode("Для лектора");
         let exit = document.createElement('p');
         let exitText = document.createTextNode("Отменить");
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  extension.classList.add('extension');
    main.classList.add('main');
      menu.classList.add('menu');
       area.classList.add('area');
       area.setAttribute('id', 'dropdown')
       fullScreen.classList.add('fullScreen');
       onlyWebCam.classList.add('onlyWebCam');
       lecturerMode.classList.add('lecturerMode');
  document.body.appendChild(extension);
    extension.appendChild(main);
      menu.appendChild(menuText);
      main.appendChild(menu);
        main.appendChild(area);
          fullScreen.appendChild(fullScreenText);
          area.appendChild(fullScreen);
          onlyWebCam.appendChild(onlyWebCamText);
          area.appendChild(onlyWebCam);
          lecturerMode.appendChild(lecturerModeText);
          area.appendChild(lecturerMode);
          exit.appendChild(exitText);
          area.appendChild(exit);
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  document.querySelector('.extension').insertAdjacentHTML('beforeEnd', '<input type="button" class="customButtonRemoveAllMessage" title="Удалить все сообщения">');
  customButtonRemoveAllMessageStyle.innerHTML = '.customButtonRemoveAllMessage {position: relative; top: 12px; display: flex; flex-direction: row; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; flex-shrink: 0; margin-left: 16px; background: #edf1f1; width: 24px; height: 24px; border-radius: 50%; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; cursor: pointer; background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 24 24\'%3e%3cpath fill=\'rgb(142, 156, 160)\' d=\'M13.817 4.531c.331 0 .56-.334.436-.64A2.973 2.973 0 0011.5 2.03h-.575C10.71.898 9.716 0 8.5 0h-1C6.285 0 5.29.897 5.075 2.031H4.5c-1.245 0-2.313.77-2.753 1.86a.468.468 0 00.436.64h11.634zM7.5.938h1c.684 0 1.265.46 1.46 1.093H6.04A1.538 1.538 0 017.5.937zM3.47 14.694A1.411 1.411 0 004.873 16h6.254c.734 0 1.35-.574 1.403-1.306l.657-9.225H2.813l.657 9.225zm5.812-6.717a.469.469 0 01.936.046l-.25 5a.469.469 0 01-.936-.046l.25-5zm-3.055-.445a.469.469 0 01.491.445l.25 5a.469.469 0 11-.936.046l-.25-5a.469.469 0 01.445-.491z\'/%3e%3c/svg%3e");} \
                                                 .customButtonRemoveAllMessage:hover {background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 24 24\'%3e%3cpath fill=\'rgb(66 80 82);\' d=\'M13.817 4.531c.331 0 .56-.334.436-.64A2.973 2.973 0 0011.5 2.03h-.575C10.71.898 9.716 0 8.5 0h-1C6.285 0 5.29.897 5.075 2.031H4.5c-1.245 0-2.313.77-2.753 1.86a.468.468 0 00.436.64h11.634zM7.5.938h1c.684 0 1.265.46 1.46 1.093H6.04A1.538 1.538 0 017.5.937zM3.47 14.694A1.411 1.411 0 004.873 16h6.254c.734 0 1.35-.574 1.403-1.306l.657-9.225H2.813l.657 9.225zm5.812-6.717a.469.469 0 01.936.046l-.25 5a.469.469 0 01-.936-.046l.25-5zm-3.055-.445a.469.469 0 01.491.445l.25 5a.469.469 0 11-.936.046l-.25-5a.469.469 0 01.445-.491z\'/%3e%3c/svg%3e");}'
  document.querySelector('.extension').insertAdjacentHTML('beforeEnd', '<div class="customCheckBoxMessage"><input class="custom-checkbox" type="checkbox" id="cch" name="cch"><label for="cch" title="Уведомления о сообщениях"></label></div>');
  customCheckBoxMessageStyle.innerHTML ='.customCheckBoxMessage {position: relative; top: 12px; display: flex; flex-direction: row; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; flex-shrink: 0; margin-left: 16px; background: #edf1f1; width: 24px; height: 24px; border-radius: 50%; cursor: pointer;} \
                                         .custom-checkbox {position: absolute; z-index: -1; opacity: 0; cursor: pointer;} \
                                         .custom-checkbox+label {display: inline-flex; align-items: center; user-select: none; cursor: pointer;} \
                                         .custom-checkbox+label::before {content: ""; display: inline-block; width: 16px; height: 16px; flex-shrink: 0; flex-grow: 0; border: 1px solid #adb5bd; border-radius: 50%; background-repeat: no-repeat; background-position: center; background-size: 60%;} \
                                         .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {border-color: #425052;} \
                                         .custom-checkbox:checked+label:hover::before {border-color: #425052; background-color: #425052;} \
                                         .custom-checkbox:not(:disabled):active+label::before {background-color: rgb(142 156 160); border-color: rgb(142 156 160);} \
                                         .custom-checkbox:checked+label::before {border-color: #8e9ca0; background-color: #8e9ca0; background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3e%3c/svg%3e");}'
  document.querySelector('.extension').insertAdjacentHTML('beforeEnd', '<div class="displayCustomCheckBoxWeb"><div class="customCheckBoxWeb"><input class="custom-checkboxWeb" type="checkbox" id="cchw" name="cchw"><label for="cchw" title="Состояние камеры"></label></div></div>');
  customCheckBoxWebStyle.innerHTML ='.customCheckBoxWeb {position: relative; top: 12px; display: flex; flex-direction: row; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; flex-shrink: 0; margin-left: 16px; background: #edf1f1; width: 24px; height: 24px; border-radius: 50%; cursor: pointer;} \
                                       .custom-checkboxWeb {position: absolute; z-index: -1; opacity: 0; cursor: pointer;} \
                                       .custom-checkboxWeb+label {display: inline-flex; align-items: center; user-select: none; cursor: pointer;} \
                                       .custom-checkboxWeb+label::before {content: ""; display: inline-block; width: 24px; height: 24px; flex-shrink: 0; flex-grow: 0; border: 1px solid #edf1f1; border-radius: 50%; background-repeat: no-repeat; background-position: center; background-size: 65%; background-color: #edf1f1; background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 15 15\'%3e%3cpath fill=\'rgb(142 156 160)\' d=\'M4 4a2 2 0 00-2 2v4a2 2 0 002 2h5a2 2 0 002-2v-.066l2.223 1.482A.5.5 0 0014 11V5a.5.5 0 00-.777-.416L11 6.066V6a2 2 0 00-2-2H4zm7 3.268v1.464l2 1.334V5.934l-2 1.334z\'/%3e%3c/svg%3e") } \
                                       .custom-checkboxWeb:not(:disabled):not(:checked)+label:hover::before {border-color: #425052; background-color: #425052;} \
                                       .custom-checkboxWeb:checked+label:hover::before {border-color: #425052; background-color: #425052;} \
                                       .custom-checkboxWeb:not(:disabled):active+label::before {background-color: rgb(142 156 160); border-color: rgb(142 156 160);} \
                                       .custom-checkboxWeb:checked+label::before {border-color: #8e9ca0; background-color: #8e9ca0; background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 15 15\'%3e%3cpath fill=\'%23fff\' d=\'M13.583 1.159a.542.542 0 11.766.766L10.9 5.374A2 2 0 0111 6v.066l2.223-1.482A.5.5 0 0114 5v6a.5.5 0 01-.777.416L11 9.934V10a2 2 0 01-2 2H4.274l-2.35 2.35a.54.54 0 01-.765 0 .542.542 0 010-.767l1.847-1.847A2 2 0 012 10V6a2 2 0 012-2h5c.487 0 .933.174 1.28.463l3.303-3.304zM9.566 5.176A.995.995 0 009 5H4a1 1 0 00-1 1v4a1 1 0 00.769.973l5.797-5.797zM5.274 11H9a1 1 0 001-1V6.274L5.274 11zM13 10.066l-2-1.334V7.268l2-1.334v4.132z\'/%3e%3c/svg%3e");}'
 hiddenButtonWeb.innerHTML = '.displayCustomCheckBoxWeb {display: none}';
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  document.querySelector('.customCheckBoxMessage').onclick = () => {
    if (document.querySelector('.custom-checkbox').checked == true) {
      document.querySelector('.custom-checkbox').checked = false;
    }
    else {
      document.querySelector('.custom-checkbox').checked = true;
    }
  }
    let checkList = document.querySelectorAll('.remote');
  let focusBrowser = false;
  let check = true;
  let name = "name";
  let sound = () => {
    let audio = new Audio();
    audio.src = 'https://ia902502.us.archive.org/14/items/sound_20220523/Sound.mp3';
    audio.autoplay = true;
  }
  setInterval(() => {
    let newList = document.querySelectorAll('.remote');
    let preName = newList[1];
    if (preName === undefined) {
      } else { preName = preName.innerText };
    let findname = /\n(.*?)\n/g.exec(preName);
    if (findname === null) {
      } else { name = findname[1] };
    if(focusBrowser && check) {
      if(checkList.length < newList.length) {
      let message;
        if (newList[0].outerText.includes('\n')) {
            message = newList[3].innerText;
            } else { message = newList[2].innerText;}
        let notify = () => {
          new Notification(name, {
            body: message,
            icon: "https://mv1.virtualroom.ru/favicon.ico",
            silent: true,
          });
        }
        function notifSet() {
          if(Notification.permission === "granted") {
            notify();
            sound();
          }
          else if (Notification.permission !== "denied") {
            Notification.requestPermission(function (permission) {
              if(!('permission' in Notification)) Notification.permission = permission;
              if(permission === "granted") {
                notify();
                sound();
              }
            });
          }
        }
        notifSet();
      }
    }
    check = document.querySelector('.custom-checkbox').checked;
    checkList = newList;
    window.onblur = () => { focusBrowser = true; }
    window.onfocus = () => { focusBrowser = false; }
  }, 500);
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  document.querySelector('.customButtonRemoveAllMessage').onclick = () => {
    document.body.insertAdjacentHTML('afterBegin', '<div id="modalRoot"><div class="a"><div class="b"></div><div class="c d" style="padding: 0;"><div class="e"><div class="f"><div class="g"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 14l2-2 9-.001a1 1 0 001-1v-8A1 1 0 0013 2H3a1 1 0 00-1 1v11z"></path></svg></div><h4 class="h">Удалить сообщения?</h4></div><span class="i">Вы уверены, что хотите удалить ВСЕ сообщения?</span><div class="j"><div class="k"><button color="secondary" class="l">Отмена</button></div><div class="k"><button color="error" class="m">Удалить</button></div></div></div></div></div></div>');
    let modalRoot = document.createElement("style");
    document.body.appendChild(modalRoot);
    modalRoot.innerHTML = '.modalRoot {position: fixed; top: 0px; left: 0px; z-index: 1400;} \
                           *, ::before, ::after {box-sizing: inherit;} \
                           .a {position: fixed; inset: 0px; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; z-index: 1300;} \
                           .b {position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; cursor: pointer; background: rgba(42, 51, 53, 0.8);} \
                           .c {padding: 0px;} \
                           .d {position: relative; box-sizing: border-box; display: flex; -webkit-box-align: stretch; align-items: stretch; flex-direction: column; flex: 1 1 0%; width: 100%; max-width: 400px; max-height: calc(100% - 32px); padding: 32px; margin: auto; overflow: auto; background-color: rgb(255, 255, 255); color: rgb(66, 80, 82); border-radius: 8px; cursor: default;} \
                           .e {display: flex; flex-direction: column; width: 400px; padding: 32px; border-radius: 8px; overflow: auto; background-color: rgb(255, 255, 255); color: rgb(66, 80, 82);} \
                           .f {display: flex; margin-bottom: 16px; flex-direction: column; -webkit-box-align: center; align-items: center;} \
                           .g {display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; width: 40px; height: 40px; margin: 0px auto 32px; background-color: rgb(242, 245, 245); border-radius: 50%;} \
                           .h {width: 100%; margin: 0px; color: rgb(42, 51, 53); text-align: center;} \
                           .i {display: inline; text-align: center; white-space: pre-line; margin-bottom: 32px; word-break: break-word;} \
                           .j {display: flex; margin-top: auto; -webkit-box-pack: justify; justify-content: space-between;} \
                           .k {display: grid; width: 120px;} \
                           .l {width: auto; display: inline-flex; transition: all 150ms ease 0s; font-size: 0.875rem; line-height: 1.285; font-weight: 400; font-family: Lato, sans-serif; -webkit-box-align: center; align-items: center; outline: none; -webkit-box-pack: center; justify-content: center; border-radius: 4px; padding: 16px; background: rgb(237, 241, 241); color: rgb(66, 80, 82); border: 1px solid rgb(142, 156, 160); text-decoration: none; box-sizing: border-box;} \
                           .l:hover {background: rgb(237, 241, 241); border: 1px solid rgb(66, 80, 82); cursor: pointer;} \
                           .m {width: auto; display: inline-flex; transition: all 150ms ease 0s; font-size: 0.875rem; line-height: 1.285; font-weight: 400; font-family: Lato, sans-serif; -webkit-box-align: center; align-items: center; outline: none; -webkit-box-pack: center; justify-content: center; border-radius: 4px; padding: 16px; background: rgb(255, 21, 31); color: rgb(255, 255, 255); border: none; text-decoration: none; box-sizing: border-box;} \
                           .m:hover {background: rgb(204, 17, 25); border: none; cursor: pointer;}'
    let btnDel = document.querySelectorAll('#modalRoot button');
    let btnOriginDel = document.querySelectorAll('#modal-root button');
    btnDel[0].onclick = () => {
    document.getElementById('modalRoot').remove();
    }
    btnDel[1].onclick = () => {
      let remote = document.querySelectorAll('.remote button');
      let local = document.querySelectorAll('.local button');
      for(let i = 0; i < remote.length; i++) {
        remote[i].click();
        let btnOriginDel = document.querySelectorAll('#modal-root button');
        btnOriginDel[1].click();
      }
      for(let j = 0; j < local.length; j++) {
        local[j].click();
        let btnOriginDel = document.querySelectorAll('#modal-root button');
        btnOriginDel[1].click();
      }
      document.getElementById('modalRoot').remove();
    }
  }
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    fullScreen.onclick = () => {
    document.querySelector('.conference-area').removeAttribute("id");
    if (document.querySelector('.styled-slider')) document.querySelector('.styled-slider').remove();
    hiddenButtonWeb.innerHTML = '.displayCustomCheckBoxWeb {display: flex}'
    document.querySelector('.conference-area').id = 'web';
    function scaleFunc() {
      let scaleW = 1;
      let tX = 0;
      let tY = 0;
      function addOnWheel(elem, handler) {
        elem.addEventListener('wheel', handler);
      }
      addOnWheel(web, function(e) {
        let delta = e.deltaY;
          if(delta > 0) {
            scaleW += 0.05;
            tY += 6;
            tX += 8.5;
          } else {
            scaleW -= 0.05;
            tY -= 6;
            tX -= 8.5;
          }
        web.style = `top:${48+tY}px; transform: scale(${scaleW}); right: ${4+tX}px;`;
        e.preventDefault();
      });
    }
    areaStyle.innerHTML = `.shared-area{position: fixed; width: 100%; height: 100%; z-index: 9; top: 48px} \
                           .shared-area video {padding-bottom: 48px;} \
                           .header img {margin-left: 243px;}`;
    if(document.querySelector('.customCheckBoxWeb input').checked) {
      hiddenWeb.innerHTML = '.conference-area{display: none;)';
      } else {
      hiddenWeb.innerHTML = '.conference-area{position: fixed; top: 48px; right: 4px; z-index:10;}';
     }
    scaleWebCamScript.innerHTML = scaleFunc();
    document.querySelector('.customCheckBoxWeb input').onclick = () => {
    if(document.querySelector('.customCheckBoxWeb input').checked) {
      hiddenWeb.innerHTML = '.conference-area{display: none;)';
      } else {
      hiddenWeb.innerHTML = '.conference-area{position: fixed; top: 48px; right: 4px; z-index:10;}';
      }
    }
    selectButtonStyle.innerHTML = ".fullScreen{text-shadow: 1px 1px 4px rgb(0 61 222);}"
    document.documentElement.webkitRequestFullScreen();
  }
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  onlyWebCam.onclick = () => {
    document.querySelector('.conference-area').style = `top:48px; transform: scale(1); right: 0px;`;
    scaleWebCamScript.innerHTML = "";
    hiddenWeb.innerHTML = '';
    hiddenButtonWeb.innerHTML = '.displayCustomCheckBoxWeb {display: none}'
    document.querySelector('.conference-area').removeAttribute("id");
    if (document.querySelector('.styled-slider')) document.querySelector('.styled-slider').remove();
    document.querySelector('.conference-area').removeAttribute("style");
    document.documentElement.webkitRequestFullScreen();
    areaStyle.innerHTML = ".conference-area{position: fixed; z-index: 9; top: 48px; width: 100%; bottom: 0;} \
                           .speakers-videos{position: fixed; z-index: 10; top: 40px; width: inherit; transform: scale(0.9); bottom: 0;} \
                           .header img {margin-left: 203px;}";
    selectButtonStyle.innerHTML = ".onlyWebCam{text-shadow: 1px 1px 4px rgb(0 61 222);}"
  }
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  lecturerMode.onclick = () => {
    if (document.querySelector('.styled-slider')) document.querySelector('.styled-slider').remove();
    document.querySelector('.conference-area').removeAttribute("style");
    selectButtonStyle.innerHTML = ".lecturerMode{text-shadow: 1px 1px 4px rgb(0 61 222);}"
    document.webkitExitFullscreen();
    scaleWebCamScript.innerHTML = "";
    hiddenWeb.innerHTML = '';
    hiddenButtonWeb.innerHTML = '.displayCustomCheckBoxWeb {display: none}'
    document.querySelector('.conference-area').removeAttribute("id");
    areaStyle.innerHTML = ".shared-area{position: fixed; width: 30%; height: 50%; z-index: 9; left: 0; bottom: 0;} \
                           .conference-area{position: fixed; z-index: 8; width: 30%; height: 100%; top: 48px;} \
                           .communication-panel{position: fixed; z-index: 8; width: 70%; bottom: 0; right: 0; top: 48px;} \
                           .header{z-index:9;} \
                           .header img {margin-left: 203px;}";
    document.querySelector('.chat button').insertAdjacentHTML('beforeBegin', '<input class="styled-slider slider-progress" type="range" min="7" max="40" value="7">')
    let sliderScaleChatText = document.querySelector(".styled-slider");
    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
      e.style.setProperty('--value', e.value);
      e.style.setProperty('--min', e.min == '' ? '0' : e.min);
      e.style.setProperty('--max', e.max == '' ? '100' : e.max);
      e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }
    sliderScaleChatTextStyle.innerHTML = "input[type=range].styled-slider {height: 6px; width: 150px; -webkit-appearance: none;} \
                                          input[type=range].styled-slider.slider-progress {--range: calc(var(--max) - var(--min)); --ratio: calc((var(--value) - var(--min)) / var(--range)); --sx: calc(0.5 * 15px + var(--ratio) * (100% - 15px));} \
                                          input[type=range].styled-slider::-webkit-slider-thumb {-webkit-appearance: none; width: 15px; height: 15px; border-radius: 50%; background: #8e9ca0; border: 1px solid #FFFFFF; box-shadow: none; margin-top: calc(max((7px - 1px - 1px) * 0.5, 0px) - max(15px * 0.5, 1px));} \
                                          input[type=range].styled-slider::-webkit-slider-runnable-track {height: 7px; border: 1px solid #DDDDDD; border-radius: 3.5px; background: #FFFFFF; box-shadow: none;} \
                                          input[type=range].styled-slider::-webkit-slider-thumb:hover {background: #323839;} \
                                          input[type=range].styled-slider.slider-progress::-webkit-slider-runnable-track {background: linear-gradient(#8e9ca0, #8e9ca0) 0/var(--sx) 100% no-repeat, #FFFFFF;}}";
    sliderScaleChatText.oninput = function() {
      scaleChatText.innerHTML = `.remote {font-size: ${this.value/10}rem} \
                                 .remote a {font-size: ${this.value/15}rem} \
                                 .local {font-size: ${this.value/10}rem} \
                                 .local a {font-size: ${this.value/15}rem}`;
    }
  }
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  exit.onclick = () => {
    areaStyle.innerHTML = ".header img {margin-left: 203px;}";
    scaleChatText.innerHTML = "";
    selectButtonStyle.innerHTML = "";
    scaleWebCamScript.innerHTML = "";
    hiddenWeb.innerHTML = '';
    hiddenButtonWeb.innerHTML = '.displayCustomCheckBoxWeb {display: none}'
    document.querySelector('.conference-area').removeAttribute("id");
    document.querySelector('.conference-area').removeAttribute("style");
    if (document.querySelector('.styled-slider')) document.querySelector('.styled-slider').remove();
    document.webkitExitFullscreen();
    secret = 0;
  }
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  let secret = 0;
  menu.onclick = () => {
    secret += 1;
    if(secret == 20) {
      MenuButtonStyle.innerHTML += ".menu{background-color: rgb(255 165 186);} \
                                    .menu:hover, .menu:focus {background-color: rgb(255 148 179);} \
                                    .area {background-image: url(https://i.ibb.co/8c5YKj6/petals.gif), url(https://i.ibb.co/zQ22T5P/1614640317-17-p-fon-sakura-dlya-fotoshopa-26.png); background-size: 226%, 238%; background-position: -105px;} \
                                    .area p{color: white; text-shadow: 1px 1px 4px #ff002d;} \
                                    .main p:hover {background-color: #00000050;}"
    }
    document.getElementById("dropdown").classList.toggle("show");
  };
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  window.onclick = function (event) {
    if (!event.target.matches('.menu')) {
      let dropdowns = document.getElementsByClassName("area");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
})();
if (screen.width === 1024 && screen.height === 768) {
    document.body.style.zoom = 0.75;
}else if (screen.width > 1024 && screen.height > 768) document.body.style.zoom = 1;
