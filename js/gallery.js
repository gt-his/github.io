'use strict'

{

  // gallery ギャラリー
let album = [
  {src: 'img/eat.jpg', msg: `ごはん食べながら大笑いw`},
  {src: 'img/bath.jpg', msg: `赤ちゃんのころからお風呂が大好き^^`},
  {src: 'img/smile.jpg', msg: `我が家の天使です^^happy`},
  {src: 'img/sky.jpg', msg: `ドライブが趣味です！`},
  {src: 'img/watch3.jpg', msg: `時計も好きです、これは初めて買った思い出のブライトリング！`},
];

// 最初のデータを表示　写真
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);
// 最初のデータを表示　キャプション
let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;
// HTMLに反映
let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});

}