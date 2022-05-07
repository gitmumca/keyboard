keysCode = [[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8], [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46], [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13], [16, 226, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16], [17, 91, 18, 32, 18, 17, 37, 40, 39]]
/*
~!@#$%^&*()_+
Ё!»№;%:?*()_+
*/
var keyRusShiftUp = [['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace'],['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\','Del'],['Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'],['Shift','\\','Я','Ч','С','М','И','Т','Ь','Б','Ю','/','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

var keyEngShiftUp = [['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'],['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','\|','Del'],['Caps Lock','A','S','D','F','G','H','J','K','L',':','"','Enter'],['Shift','\\','Z','X','C','V','B','N','M','<','>','?','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

var keyRusShift = [['ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace'],['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del'],['Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],['Shift','\\','я','ч','с','м','и','т','ь','б','ю','/','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

var keyEngShift = [['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'],['Tab','q','w','e','r','t','y','u','i','o','p','{','}','\|','Del'],['Caps Lock','a','s','d','f','g','h','j','k','l',':','"','Enter'],['Shift','\\','z','x','c','v','b','n','m','<','>','?','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

var keyRusUp = [['Ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\/','Del'],['Caps Lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'],['Shift','\\','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

var keyEngUp = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\','Del'],['Caps Lock','A','S','D','F','G','H','J','K','L',';','\'','Enter'],['Shift','\\','Z','X','C','V','B','N','M',',','.','/','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

var keyRus = [['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del'],['Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],['Shift','\\','я','ч','с','м','и','т','ь','б','ю','.','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

var keyEng = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del'],['Caps Lock','a','s','d','f','g','h','j','k','l',';','\'','Enter'],['Shift','\\','z','x','c','v','b','n','m',',','.','/','up','Shift2'],['Ctrl','Win','Alt','Space','Alt','Ctrl','left','down','right']];

//var keys = keyEng;
var keys70 = ['Backspace', 'Enter', 'Shift', 'Ctrl', 'Caps Lock'];
var keysSound = ['Backspace', 'Enter', 'Shift', 'CapsLock', 'Caps Lock'];
var clickNoAdd = ['Backspace', 'Enter', 'Shift', 'Shift2', 'Ctrl', 'Caps Lock', 'Del', 'Win', 'up', 'left', 'down', 'right', 'Alt', 'Tab'];
var keysNoAdd = [8, 9, 13, 46, 20, 16, 17, 18, 37, 38, 39, 40, 91];
var keysNavi = {'left': '&#9668', 'up': '&#9650', 'right': '&#9658', 'down': '&#9660'};

var capslock = false;
var shift = false;
var english = true;

var soundOff = false;
var microphone = false;
var hideKeys = false;

var SpeechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

SpeechRecognition.onresult = function(event){
//  console.log('onresult', SpeechRecognition.lang, event.results[0][0].transcript);
  addToArea(event.results[0][0].transcript);
};

SpeechRecognition.onend = function(){
//  console.log('onend', SpeechRecognition.lang);
  SpeechRecognition.lang = (english) ? 'en-US' : 'ru-RU';
  if (microphone) SpeechRecognition.start();
//  SpeechRecognition.start();
};

//var textAreaFocus = false;
//var selectionStart = 0;

//const textArea = document.querySelector('.body');
//textArea.addEventListener('focus', () => textAreaFocus = true);
//textArea.addEventListener('blur', () => textAreaFocus = false);

function initBtn() {

  console.log(document.documentElement.clientWidth < 799);
  console.log(document.querySelector('.main') === null);

  if (document.querySelector('.main') === null)  {
    return;
  }
  else if (document.documentElement.clientWidth < 799) {
    console.log(document.documentElement.clientWidth);
    document.querySelector('.micro_img').src = (microphone) ? 'assets/micro24.png' : 'assets/microOff24.png';
    document.querySelector('.sound_img').src = (soundOff) ? 'assets/soundOff24.png' : 'assets/sound24.png';
    document.querySelector('.lang_img').src = (english) ? 'assets/english24.png' : 'assets/russian24.png';
    document.querySelector('.clean_img').src = 'assets/clean24.png';
    document.querySelector('.hide_img').src = (hideKeys) ? 'assets/hide24.png' : 'assets/show24.png';
  }
  else {
    document.querySelector('.micro_img').src = (microphone) ? 'assets/micro.png' : 'assets/microOff.png';
    document.querySelector('.sound_img').src = (soundOff) ? 'assets/soundOff.png' : 'assets/sound.png';
    document.querySelector('.lang_img').src = (english) ? 'assets/english.png' : 'assets/russian.png';
    document.querySelector('.clean_img').src = 'assets/clean.png';
    document.querySelector('.hide_img').src = (hideKeys) ? 'assets/hide.png' : 'assets/show.png';
  }
};

window.onload = function() {
  createDocument();
  initBtn();
}

function createDocument() {

  let body = document.querySelector('.body');
  let script = document.querySelector('.script');

  let divMain = document.createElement('div'); // main
  divMain.classList.add('main');
  body.insertBefore(divMain, script);

  let divTitle = document.createElement('div'); //title
  divTitle.classList.add('title');
  divMain.appendChild(divTitle);

    let flexTitle = document.createElement('div');
    flexTitle.classList.add('flex-title');
    divTitle.appendChild(flexTitle);

      let h1 = document.createElement('h1');
      h1.textContent = 'keyBoard';
      flexTitle.appendChild(h1);

      let flexLang = document.createElement('div');
      flexLang.classList.add('flex-lang');
      flexTitle.appendChild(flexLang);

        let MicroOnBtn = document.createElement('button');
        MicroOnBtn.classList.add('micro');
        MicroOnBtn.setAttribute('onclick', 'microOnOff()');
        flexLang.appendChild(MicroOnBtn);

          let MicroOnImg = document.createElement('img');
          MicroOnImg.classList.add('micro_img');
//          MicroOnImg.src = 'assets/microOff.png';
          MicroOnBtn.appendChild(MicroOnImg);

        let SoundOnBtn = document.createElement('button');
        SoundOnBtn.classList.add('sound');
        SoundOnBtn.setAttribute('onclick', 'soundImg()');
        flexLang.appendChild(SoundOnBtn);

          let SoundOnImg = document.createElement('img');
          SoundOnImg.classList.add('sound_img');
//          SoundOnImg.src = 'assets/sound.png';
          SoundOnBtn.appendChild(SoundOnImg);

        let languageBtn = document.createElement('button');
        languageBtn.classList.add('language');
        languageBtn.setAttribute('onclick', 'changeLanguage()');
        flexLang.appendChild(languageBtn);

          let languageImg = document.createElement('img');
          languageImg.classList.add('lang_img');
//          languageImg.src = 'assets/english.png';
          languageBtn.appendChild(languageImg);

        let clearBtn = document.createElement('button');
        clearBtn.classList.add('clean');
        clearBtn.setAttribute('onclick', 'clearArea()');
        flexLang.appendChild(clearBtn);

          let clearImg = document.createElement('img');
          clearImg.classList.add('clean_img');
//          clearImg.src = 'assets/clean.png';
          clearBtn.appendChild(clearImg);

        let hideBtn = document.createElement('button');
        hideBtn.classList.add('hide');
        hideBtn.setAttribute('onclick', 'hideKeyBoard()');
        flexLang.appendChild(hideBtn);

          let hideImg = document.createElement('img');
          hideImg.classList.add('hide_img');
//          hideImg.src = 'assets/hide.png';
          hideBtn.appendChild(hideImg);

  let divContainer = document.createElement('div'); // container  
  divContainer.classList.add('container');
  divMain.appendChild(divContainer);

  let flexKey = document.createElement('div');
  flexKey.classList.add('flex_key');
  divContainer.appendChild(flexKey);

  let textArea = document.createElement('textarea');
  textArea.classList.add('text');
  flexKey.appendChild(textArea);

  let keyBody = document.createElement('div');
  keyBody.classList.add('key_body');
  flexKey.appendChild(keyBody);

  let keys = (capslock) ? ((english) ? keyEngUp : keyRusUp)
                        : ((english) ? keyEng : keyRus);

  for (let i=0; i<5; i++) {

    let keyLine = document.createElement('div');
    keyLine.classList.add('key_line');
    keyBody.appendChild(keyLine);

    for (let j=0; j<keys[i].length; j++) {

      let btnBase = document.createElement('button');
      btnBase.classList.add('btn_base');
      if (keys70.includes(keys[i][j])) {btnBase.classList.add('btn_base70')}

      btnBase.textContent = keys[i][j];

      if (isNavi(keys[i][j])) {btnBase.innerHTML = keysNavi[keys[i][j]]; }

      if (keys[i][j] == 'Shift2') {btnBase.textContent = 'Shift'}
      if (keys[i][j] == 'Space') {
        btnBase.classList.add('btn_baseSpace');
        btnBase.textContent = '';
      }

      btnBase.indI = i;
      btnBase.indJ = j;
      btnBase.id = (''+i)+j;

      btnBase.setAttribute('onclick', 'mouseToArea('+btnBase.indI+', '+btnBase.indJ+');');
      keyLine.appendChild(btnBase);
    }      
  }
}

function changeLanguage() {
/*
  let lang_img = document.querySelector('.lang_img');

  if (english) {lang_img.src = 'assets/russian.png'; }
  else {lang_img.src = 'assets/english.png'; }
*/
  english = !english;
  initBtn();
  SpeechRecognition.lang = (english) ? 'en-US' : 'ru-RU';
  refreshKeys();  
}

function soundImg() {
/*
  let sound_img = document.querySelector('.sound_img');
  if (soundOff) {
    sound_img.src = 'assets/sound.png';
  }
  else {
    sound_img.src = 'assets/soundOff.png'
  }
*/  
  soundOff = !soundOff;
  initBtn();
}

function hideKeyBoard() {

  hideKeys = !hideKeys;
  if (hideKeys) {document.querySelector('.key_body').style.visibility = 'hidden'; }
  else {document.querySelector('.key_body').style.visibility = 'visible'; }
  initBtn();
}

function isNavi(btn) {

  for (let key in keysNavi) {
    if (key === btn) {return true; }
  }   
  return false;
}

function microOnOff() {

//  let micro_img = document.querySelector('.micro_img');

  microphone = !microphone;
  initBtn();

  if (microphone) {
    SpeechRecognition.lang = (english) ? 'en-US' : 'ru-RU';
    window.SpeechRecognition.start(); 
  }
  else {
    window.SpeechRecognition.stop();
  }
};

function leftRightUpDown(btn) {

  let textArea = document.querySelector('.text');  
  let pos = textArea.selectionStart;

  if (btn === 'left') {
    if (pos > 0) {
      textArea.selectionStart = pos - 1;
      textArea.selectionEnd = pos - 1;
    }
  }
  else if (btn === 'right') {
    textArea.selectionStart = pos + 1;
    textArea.selectionEnd = pos + 1;
  }  
  else if (btn === 'up') {
    let strLeft = document.querySelector('.text').value.slice(0, pos);  
    let arr = strLeft.split('\n');
    if (arr.length > 1) {
      let posStr = arr[arr.length-1].length;
      let posPrev = (arr[arr.length-2].length > posStr) ? posStr : arr[arr.length-2].length;
//      console.log('if', btn, pos, strLeft, arr, arr.length > 1, posStr, posPrev);
      textArea.selectionStart = arr.filter((el, index) => index < arr.length - 2).join('').length + (arr.length - 2) + posPrev;
      textArea.selectionEnd = textArea.selectionStart;
//      console.log(textArea.selectionStart, textArea.selectionEnd);
    }
    else {
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
//      console.log('else', btn, pos, strLeft, arr, arr.length > 1, textArea.selectionStart);
    }
  }  
  else if (btn === 'down') {
    let strRight = document.querySelector('.text').value.slice(pos);  
    let arr = strRight.split('\n');
    if (arr.length > 1) {
      let posStr = arr[0].length;
      let posNext = (arr[1].length > posStr) ? posStr : arr[1].length;

      let cur1 = document.querySelector('.text').value.length;
      let cur2 = arr.filter((el, index) => index > 1).join('').length;
      let cur3 = arr.length - 2;

      textArea.selectionStart = document.querySelector('.text').value.length - arr.filter((el, index) => index > 1).join('').length - (arr.length - 2) - posNext;
      textArea.selectionEnd = textArea.selectionStart;
      console.log('if', btn, pos, strRight, arr, cur1, cur2, cur3, posNext, posStr);
      console.log(textArea.selectionStart, textArea.selectionEnd);
    }
    else {
      textArea.selectionStart = document.querySelector('.text').value.length;
      textArea.selectionEnd = textArea.selectionStart;
      console.log('else', btn, pos, strRight, arr, textArea.selectionStart);
    }
  }  
  textArea.focus();
}

function clearArea() {
  document.querySelector('.text').value = '';  
  document.querySelector('.text').focus();
}

function addToArea(newSymbol) {

  let textArea = document.querySelector('.text');  
  let pos = textArea.selectionStart;

  if (newSymbol == 'Backspace') {
    textArea.value = textArea.value.slice(0,pos-1) + textArea.value.slice(pos,textArea.value.length);
    textArea.selectionStart = pos - 1;
    textArea.selectionEnd = pos - 1;
  }
  else if (newSymbol == 'Del') {
    textArea.value = textArea.value.slice(0,pos) + textArea.value.slice(pos+1,textArea.value.length);
    textArea.selectionStart = pos;
    textArea.selectionEnd = pos;
  }  
  // буквы/цифра/символ
  else {
    textArea.value = textArea.value.slice(0,pos) + newSymbol + textArea.value.slice(pos,textArea.value.length);
    textArea.selectionStart = pos + 1;
    textArea.selectionEnd = pos + 1;
  }  
  textArea.focus();
}

function getKeys() {

  if (capslock) {
    if (shift) {
      if (english) {return keyEngShift; } 
      else {return keyRusShift; }  
    }
    else {
      if (english) {return keyEngUp; } 
      else {return keyRusUp; } 
    }  
  } 
  else {
    if (shift) {
      if (english) {return keyEngShiftUp; } 
      else {return keyRusShiftUp; } 
    }
    else {
      if (english) {return keyEng; } 
      else {return keyRus; } 
    }  
  }

}

function mouseToArea(i, j) {

  let keys = getKeys();
  mouseKey = keys[i][j];

  if (!soundOff) {playSound(keysSound.includes(mouseKey)); }

  if (mouseKey === 'Backspace' || mouseKey === 'Del') {addToArea(mouseKey)}
  else if (isNavi(mouseKey)) {leftRightUpDown(mouseKey)}  
  else if (mouseKey === 'Caps Lock') {
    document.getElementById('20').classList.toggle('capslock'); 
    capslock = !capslock;
/*
    if (shift) {
      document.getElementById('30').classList.toggle('shift'); 
      document.getElementById('313').classList.toggle('shift'); 
      shift = !shift;
    }
*/
    refreshKeys();
  }
  else if ((mouseKey === 'Shift') || (mouseKey === 'Shift2')) {
    document.getElementById('30').classList.toggle('shift'); 
    document.getElementById('313').classList.toggle('shift'); 
    shift = !shift;
/*
    if (capslock) {
      document.getElementById('20').classList.toggle('capslock'); 
      capslock = !capslock;
    }
*/
    refreshKeys();
  }

  else if (mouseKey === 'Enter') {addToArea('\r\n') }
  else if (mouseKey === 'Space') {addToArea(' ') }
  else if (isClickShow(mouseKey)) {
    addToArea(mouseKey);
/*    if (shift) {
      document.getElementById('30').classList.toggle('shift'); 
      document.getElementById('313').classList.toggle('shift'); 
      shift = !shift; 
      refreshKeys()
    }*/
  }

}

// отображение символов на кнопках
function refreshKeys() {

  document.querySelectorAll('.btn_base').forEach(function (el) {

    let keys = getKeys();
    el.textContent = keys[el.indI][el.indJ];

    if (isNavi(el.textContent)) {el.innerHTML = keysNavi[el.textContent]; }
    if (el.textContent === 'Shift2') {el.textContent = 'Shift'; }
    if (el.textContent === 'Space') {el.textContent = ''; }
  })
}

// выделение цветом активной кнопки по нажатию
function refreshFocus(code) {

  for (let i=0; i<5; i++) {
    for (let j=0; j<keysCode[i].length; j++) {

      if ((code != '20') && (keysCode[i][j] == code)) {
        document.getElementById((''+i)+j).style.borderColor = 'lightgreen';
        setTimeout(function(){document.getElementById((''+i)+j).style.borderColor = ''}, 200);
      }
    }
  }
}

function isCharShow(c) {
  return (keysNoAdd.includes(c)) ? false : true;
}

function isClickShow(c) {
  return (clickNoAdd.includes(c)) ? false : true;
}
/*
function keyToArea(code, up) {

  for (let i=0; i<5; i++) {
    for (let j=0; j<keysCode[i].length; j++) {
      if (keysCode[i][j] == code) {

/*            
        let newSymbol = ((up && !capslock) || (!up && capslock)) 
                ? ((english) ? keyEngUp[i][j] : keyRusUp[i][j])
                : ((english) ? keyEng[i][j] : keyRus[i][j]);
        addToArea(newSymbol);
*/
/*                
        addToArea(getKeys()[i][j]);
      }
    }
  }
}
*/
function playSound(backSpace) {

  let numberSound = (english) ? 2 : 7;
  if (backSpace) {numberSound = 5;}

  var audio = new Audio();
  audio.src = 'sound' + numberSound + '.mp3';
  audio.autoplay = true;
}

// нажатие кнопки клавиатуры
document.onkeydown = keyDown;

function keyDown(e) {

  let keyCode = e.keyCode;
  document.querySelector('.text').focus();

//  shift = (e.key === 'Shift');
  if (!soundOff) {playSound(keysSound.includes(e.key)); }

  if (e.key === 'CapsLock') {
      document.getElementById('20').classList.toggle('capslock'); 
      capslock = !capslock;
      refreshKeys();
  }  
  else if (e.key === 'Shift') {
//      document.getElementById('20').classList.toggle('capslock'); 
      shift = !shift;
      refreshKeys();
  }  
  else {

    for (let i=0; i<5; i++) {
      for (let j=0; j<keysCode[i].length; j++) {
        if (keysCode[i][j] == keyCode) {
/*
          newSymbol = ((shiftKey && !capslock) || (!shiftKey && capslock)) 
                  ? ((english) ? keyEngUp[i][j] : keyRusUp[i][j])
                  : ((english) ? keyEng[i][j] : keyRus[i][j]);
*/
//          newSymbol = getKeys()[i][j];
        }
      }
    }              

  }


//  let textArea = document.querySelector('.text');  
//  console.log('222', e, newSymbol, keyCode, textArea.selectionStart, textAreaFocus);
/*
  if (textAreaFocus) {
    if (keyCode == '8') {textArea.value = textArea.value.slice(0,textArea.value.length-1);}
    else if (keyCode == '20') {
      document.getElementById('20').classList.toggle('capslock'); 
      capslock = !capslock;
      refreshKeys();
    }
    else if (keyCode == '13') {textArea.value += '\r\n' }
         else if (keyCode == '32') {textArea.value += ' ' }
              else if (isCharShow(keyCode)) {addToArea(newSymbol)}

  }
  refreshKeys();
*/  
  refreshFocus(keyCode);
}

var grammarEng = '#JSGF V1.0; grammar colors; public <color> = A | B | C | D | E | F | G | H | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | Y | X | Z;';

var grammarRus = '#JSGF V1.0; grammar colors; public <color> = А | Б | В | Г | Д | Е | Ё | Ж | З | И | Й | К | Л | М | Н | О | П | Р | С | Т | У | Ф | Х | Ц | Ч;';

/*
var speechRecognitionList = new window.SpeechGrammarList();

recognition.grammars = speechRecognitionList;
recognition.interimResults = false;
recognition.maxAlternatives = 1;
*/

/*
var SpeechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
SpeechRecognition.lang = "ru-RU";

SpeechRecognition.onresult = function(event){
  console.log(event.results[0][0].transcript);
};

SpeechRecognition.onend = function(event){
  SpeechRecognition.start();
};

SpeechRecognition.start();
*/

//SpeechRecognition.start();

/*
var recognition = new (window.SpeechRecognition || 
                       window.webkitSpeechRecognition || 
                       window.mozSpeechRecognition || 
                       window.msSpeechRecognition)();
*/                       

//toggle.addEventListener('click', 
/*
const micro = document.querySelector('.micro_img');
micro.addEventListener('click', function () {
*/

/*
recognition.onresult = function(event) {
  console.log(event);
  addToArea(event.results[0][0].transcript);
  console.log(event.results[0][0].transcript);
}

recognition.onend = function(event) {
  console.log(event);
//  addToArea(event.results[0][0].transcript);
  recognition.start(); 
}

/*
const language = document.querySelector('.language');
language.addEventListener('click', function() {

  let lang_img = document.querySelector('.lang_img');
  if (lang_img.src.indexOf('russian') > -1) {lang_img.src = 'assets/english.png';}
  else {lang_img.src = 'assets/russian.png'}
  english = !english;
  refreshKeys();  

});


  return ((Number(c) > 47  && Number(c) < 58)  ||  //  цифры
          (Number(c) > 64  && Number(c) < 91)  ||  //  латинские большие
          (Number(c) > 96  && Number(c) < 123) ||  //  латинские маленькие
          (Number(c) > 127 && Number(c) < 176) ||  //  русские 
          (Number(c) > 223 && Number(c) < 242))    //  русские 

const clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
  document.querySelector('.text').value = '';  
})
*/

/*
var keysObj = [[{192: ['`']}, {49: ['1']}, {50: ['2']}, {51: ['3']}, {52: ['4']}, {53: ['5']}, {54: ['6']}, {55: ['7']}, {56: ['8']}, {57: ['9']}, {48: ['0']}, {189: ['-']}, {187: ['=']}, {18: ['*']}], [{192: ['`']}, {49: ['1']}, {50: ['2']}, {51: ['3']}, {52: ['4']}, {53: ['5']}, {54: ['6']}, {55: ['7']}, {56: ['8']}, {57: ['9']}, {48: ['0']}, {189: ['-']}, {187: ['=']}, {18: ['*']}], [{192: ['`']}, {49: ['1']}, {50: ['2']}, {51: ['3']}, {52: ['4']}, {53: ['5']}, {54: ['6']}, {55: ['7']}, {56: ['8']}, {57: ['9']}, {48: ['0']}, {189: ['-']}, {187: ['=']}, {18: ['*']}], [{192: ['`']}, {49: ['1']}, {50: ['2']}, {51: ['3']}, {52: ['4']}, {53: ['5']}, {54: ['6']}, {55: ['7']}, {56: ['8']}, {57: ['9']}, {48: ['0']}, {189: ['-']}, {187: ['=']}, {18: ['*']}], [{192: ['`']}, {49: ['1']}, {50: ['2']}, {51: ['3']}, {52: ['4']}, {53: ['5']}, {54: ['6']}, {55: ['7']}, {56: ['8']}, {57: ['9']}, {48: ['0']}, {189: ['-']}, {187: ['=']}, {18: ['*']}]]
*/
