"use strict";

// HTMLのonclickで呼び出す関数
function seeResult(){
    revealResult();
    let randomResult = createRandom();
    let result = createResult(randomResult);
    document.getElementById('result').append(result);
}

// 表示非表示の切り替えを行う関数
function revealResult() {
    document.getElementById('home').classList.remove('d-block');
    document.getElementById('home').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');
    document.getElementById('result').classList.add('d-block');
}

// 「もう一度おみくじを引く」ボタンに適用する関数
function retry() {
    document.getElementById('result').classList.remove('d-block');
    document.getElementById('result').classList.add('d-none');
    document.getElementById('home').classList.remove('d-none');
    document.getElementById('home').classList.add('d-block');
    document.getElementById('result').innerHTML = '';
}

// おみくじの結果を格納した変数
const data = {
    'results': [
        ['皿洗い', 'あなたはミシュラン3つ星の店の皿洗いです。あなたは皿を洗っているだけですが友達や親戚からは「そんなところで働けるなんてすごい！！」と羨望の眼差しを向けられます。', 'img/sara_arai_man.png'],
        ['自宅警備員', 'あなたはALS×Kに不信感を抱き、家族を守るため自ら仕事を捨てポテチを食べながら日夜自宅の安全をデスクトップの前で守っています。', 'img/computer_kurayami_man.png'],
        ['マダオ', 'あなたは以前外務省のエリート官僚でしたがとある事件を機にあなたの本体であるグラサン以外の全てを失い、まるでダメなおっさん、略してマダオに身を落とし、現在は主に公園に住んでいます。', 'img/homeless_furousya.png'],
        ['魔法使い', '魔術、妖術、幻術などを使うものたちの総称、または30歳になっても生涯１人の女性にも相手にされなかった惨めな男性のこと。', 'img/mahoutsukai_man.png'],
        ['勇者', '勇気ある者のこと。同義語・類義語に勇士、勇夫などがある。また人の家の壺を勝手に割ることが許されている。', 'img/yuusya_game.png'],
        ['King of Kings(王の中の王)', 'あなたはイタリアで絶大な権力をもつボスです。おかっぱ頭と新入りの金髪の小僧には気をつけましょう。', 'img/nigaoe_shikoutei.png'],
        ['Kaiser(皇帝)', 'あなたは世界を支配する帝国の皇帝です。あなたは全てを簡単に手に入れることができます。“親友”を除いてね。', 'img/royal_king.png'],
        ['大工', '大工とは、おもとして木造建造物・修理を行う職人のこと。というのは表の姿で裏の姿は世界を裏から支配する世界最大の秘密組織「フリーメイソン」の一大幹部です。', 'img/daiku.png'],
        ['サラリーマン', 'サラリーマンとは会社、団体などに継続的に、定期的に給料をもらっている人。直訳は「給料人間」', 'img/businessman_busy.png'],
        ['村人C', '特にこれと言って書くことがない人たち。', 'img/man03_smile.png']
    ],
    'skills': ['虫使い', 'ハッキング', 'スキルなし', '黒魔術', '剣術', 'キングクリムゾン', 'カリスマ', '建築', '土下座'],
    'item-group1': ['最強の', '伝説の', '壊れた', '他人の', '闇の', '黄ばんだ'],
    'item-group2': ['ダンボール', 'グラサン', '剣', '洗剤', 'PC', 'マント']
}

// ランダムな結果を選び、辞書型で返す関数
function createRandom(){
    const jobIndex = Math.floor(Math.random() * 10);
    const jobName = data['results'][jobIndex][0];
    const jobDescription = data['results'][jobIndex][1];
    const jobImage = data['results'][jobIndex][2];

    const skillIndex = Math.floor(Math.random() * 9);
    const item1Index = Math.floor(Math.random() * 6);
    const item2Index = Math.floor(Math.random() * 6);

    const skill = data['skills'][skillIndex];
    const item1 = data['item-group1'][item1Index];
    const item2 = data['item-group2'][item2Index];

    return {'職業':jobName, '説明':jobDescription, '画像':jobImage, 'スキル':skill, 'アイテム1':item1, 'アイテム2':item2}
}

// 受け取った結果をHTMLに代入し、結果表示用のHTMLを返す関数
function createResult(randomResult){
    const resultHtml = document.createElement('div');

    resultHtml.innerHTML = `
    <div>
        <h1 class="text-danger yuji-syuku pt-3">
        あなたの来世みくじ
        </h1>
    </div>
    <div class="bg-white">
    <div class="wrap-red-line">
        <hr class="line-red" />
        <img class="illust" src="${randomResult["画像"]}" />
        <hr class="line-red" />
        <h1 class="text-danger yuji-syuku text-center p-3">
        ${randomResult["職業"]}
        </h1>
    
    <div>
    <p class="text-danger yuji-syuku p-3">
    ${randomResult["説明"]}
    </p>
    </div>
    <div class="mb-3">
        <hr class="line-red" />
        <p class="text-danger yuji-syuku text-center">✿ スキル ✿</p>
        <h5 class="text-danger yuji-syuku text-center">${randomResult["スキル"]}</h5>
        <hr class="line-red" />
        <p class="text-danger yuji-syuku text-center">
        ✿ ラッキーアイテム ✿
        </p>
        <h5 class="text-danger yuji-syuku text-center">${randomResult["アイテム1"]}</h5>
        <h5 class="text-danger yuji-syuku text-center">${randomResult["アイテム2"]}</h5>
    </div>
    </div>
    </div>
    <div class="mb-3">
        <button
        id="re-draw-omikuji"
        type="button"
        class="btn btn-danger rounded-pill yuji-syuku"
        >
        もう一度おみくじを引く
        </button>
    </div>
    `;

    // 「もう一度おみくじを引く」ボタンをクリックした際に反応する関数を設定
    resultHtml.querySelectorAll('#re-draw-omikuji');
    resultHtml.addEventListener('click', function(){
        retry();
    });

    return resultHtml
}