//localstorageの使用（must）
//携帯で見れる大きさ
//配列、for文、if文の取り入れ
//swich case関数の取り入れ
//非同期処理の取り入れ
//6種の時間カウント
//色を選んでlocalstorageする
//上記の選んだ色をそのまま最後の円グラフの色へ反映させる
//1日の終わりにかかった時間の割合を出す
//かかった時間の割合を円グラフで出す
// 画面遷移はスクロールではなく、同じ場所からシュッと変わる
//locastorageに画像を保存する
//最後に並べる
//一週間分記録できるようにする


// 現在時刻を表示する
$(function(){
  setInterval(function(){
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let w = now.getDay();
  let wd = ['日', '月', '火', '水', '木', '金', '土'];
  let h = now.getHours();
  let mi = now.getMinutes();
  let s = now.getSeconds();
  // 逆から数える sliceで指定した順番の要素だけ取得する。下から2番目まで
  let mm = ('0' + m).slice(-2);
  let dd = ('0' + d).slice(-2);
  let hh = ('0' + h).slice(-2);
  let mmi = ('0' + mi).slice(-2);
  let ss = ('0' + s).slice(-2);
  $('#now_show').text(y + '年' + mm + '月' + dd + '日' + hh + '時' + mmi + '分' + ss + '秒' + '(' + wd[w] + ')');
  }, 1000);
  });

  // 時間を取得する
  // const nowtime = Date.now();
  // console.log(nowtime);


  // 自分で時間を登録して、クリックしたらその時刻が保存される
  // $("#sleep_s").on('click',function(){
  //   let input_time =$("#input_time").val();
  //   let memo =$("#memo").val();
  //   console.log(input_time,'時間の登録');
  //   console.log(memo,'memoしたこと');

  //   localStorage.setItem(input_time,memo)

  // })

  // $("#sleep_e").on('click',function(){
  //   let input_time =$("#input_time").val();
  //   let memo =$("#memo").val();
  //   console.log(input_time,'時間の登録');
  //   console.log(memo,'memoしたこと');

  //   localStorage.setItem(input_time,memo)

  // })

  // はじまりor終わりのボタンでその時刻が保存される(実装できたもの)

  // $("#record").on('click',function(){
  //   let nowTime = new Date();
  //   console.log(nowTime, '今の時間');

  //   $("#show").text(nowTime);
  // });

  // はじまりor終わりのボタンでその時刻が保存される

  $("#sleep_s").on('click',function(){
    let nowTime = new Date();
    let start_time = 'すいみんはじめ';

    console.log(nowTime.toLocaleString(), '今の時間');
    console.log(start_time,'何を押したか');
    // console.log(start_time.getFullYear());

    localStorage.setItem(nowTime,start_time)

    $("#slps_show").text(nowTime); //

    // ローカルストレージ内から呼び込み
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const html = `
      <tr>
          <th>${key}</th>
          <td>${value}</td>
      </tr>
      `
  
      // 画面上に埋め込み
      $("#list").append(html)
      }


  $("#sleep_e").on('click',function(){
    let nowTime_e = new Date();
    let end_time = 'すいみんおわり';

    console.log(nowTime_e.toLocaleString(), '今の時間');
    console.log(end_time,'何を押したか');

    localStorage.setItem(nowTime_e,end_time)

    $("#slpe_show").text(nowTime_e); //

    // ローカルストレージ内から呼び込み
    for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const html = `
      <tr>
          <th>${key}</th>
          <td>${value}</td>
      </tr>
      `

      // 画面上に埋め込み
      $("#list").append(html)
      }

    $("#record").on('click',function(){
      let elapseTime = end_time - start_time;
      console.log(elapseTime);
    });


  });

});










  // $("#sleep_s").on('click',function(){
  //   let sleep_push =$("#sleep_s").val();
  //   let time =$("#memo").val(); //押した時間にしたい
  //   console.log(sleep_s,'時間の登録');
  //   console.log(time,'memoしたこと'); //押した時間にしたい

  //   localStorage.setItem(sleep_push,time)

  // })

//時間を測る項目毎に色を選択する
// $("#sleep").on('click',function(){
//   let ch_color = $("#each_color").val();
//   console.log(ch_color);
//   $("body").css('background',ch_color)
// })

// let start_datetime = new Date(); //←はこれは表示する？？
// console.log(start_datetime.toString());

// const startTime = Date.now();

// for(let i = 0; i<100000 ; i++){}

// const elapseTime = Date.now() - startTime;



// テキストで記載した内容を保存する
// $("#save").on('click',function(){
//   const key = $("#key").val();
//   const memo = $("#memo").val();
//   console.log(key,'keyの確認');
//   console.log(memo,'memoの確認');


//   localStorage.setItem(key,memo)

//   // const html = '<tr><th>' + key + '<>'
//     // jsの変数を埋め込むための ${}
//     const html = `
//         <tr>
//             <th>${key}</th>
//             <td>${memo}</td>
//         </tr>
//     `;
//     $("#list").append(html);
// })

