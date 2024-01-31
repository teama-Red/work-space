"use strict";

// HTMLのonclickで呼び出す関数
function seeResult(){
    // テスト用
    // alert("hello");
    // document.getElementById('result').innerHTML = '<h1>Test<h1>'
    revealResult();
    let randomResult = createRandom();
    let result = createResult(randomResult);
    document.getElementById('result').append(result);
}

// 表示非表示の切り替えを行う関数
function revealResult() {
    // テスト用
    // alert("hello");
    document.getElementById('home').classList.remove('d-block');
    document.getElementById('home').classList.add('d-none');
    document.getElementById('result').classList.remove('d-none');
    document.getElementById('result').classList.add('d-block');
}

const data = {
    'results': [
        ['皿洗い', 'あなたはミシュラン3つ星の店の皿洗いです。あなたは皿を洗っているだけですが友達や親戚からは「そんなところで働けるなんてすごい！！」と羨望の眼差しを向けられます。'],
        ['自宅警備員', 'あなたはALS×Kに不信感を抱き、家族を守るため自ら仕事を捨てポテチを食べながら日夜自宅の安全をデスクトップの前で守っています。'],
        ['マダオ', 'あなたは以前外務省のエリート官僚でしたがとある事件を機にあなたの本体であるグラサン以外の全てを失い、まるでダメなおっさん、略してマダオに身を落とし、現在は主に公園に住んでいます。'],
        ['魔法使い', '魔術、妖術、幻術などを使うものたちの総称、または30歳になっても生涯１人の女性にも相手にされなかった惨めな男性のこと。'],
        ['勇者', '勇気ある者のこと。同義語・類義語に勇士、勇夫などがある。また人の家の壺を勝手に割ることが許されている。'],
        ['King of Kings(王の中の王)', 'あなたはイタリアで絶大な権力をもつボスです。おかっぱ頭と新入りの金髪の小僧には気をつけましょう。'],
        ['Kaiser(皇帝)', 'あなたは世界を支配する帝国の皇帝です。あなたは全てを簡単に手に入れることができます。“親友”を除いてね。'],
        ['大工', '大工とは、おもとして木造建造物・修理を行う職人のこと。というのは表の姿で裏の姿は世界を裏から支配する世界最大の秘密組織「フリーメイソン」の一大幹部です。'],
        ['サラリーマン', 'サラリーマンとは会社、団体などに継続的に、定期的に給料をもらっている人。直訳は「給料人間」'],
        ['村人C', '特にこれと言って書くことがない人たち。']
    ],
    'skills': ['虫使い', 'ハッキング', 'スキルなし', '黒魔術', '剣術', 'キングクリムゾン', 'カリスマ', '建築', '土下座'],
    'item-group1': ['最強の', '伝説の', '壊れた', '他人の', '闇の', '黄ばんだ'],
    'item-group2': ['ダンボール', 'グラサン', '剣', '洗剤', 'PC', 'マント']
}

function createRandom(){
    const jobIndex = Math.floor(Math.random() * 11);
    const jobName = data['results'][jobIndex][0];
    const jobDescription = data['results'][jobIndex][1];
    return {'職業':jobName, '説明':jobDescription}
}

function createResult(randomResult){
    const resultHtml = document.createElement('div');
    resultHtml.innerHTML = `
    <h1>${randomResult['職業']}</h1>
    <p>${randomResult['説明']}</p>
    `;
    return resultHtml
}