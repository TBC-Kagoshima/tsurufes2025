const schedule = [
                            "8:35- 8:45  開会行事",
                            "8:50- 9:15  ダンス部",
                            "9:20- 9:35  演劇部",
                            "9:50-10:05  音楽部",
                            "10:10-10:30  ESS部",
                            "10:35-10:55  放送部",
                            "11:10-11:30  書道部",
                            "11:50-14:45  展示開放",
                            "12:10-14:30  茶道部",
                            "12:10-       書道部合同パフォーマンス",
                            "12:30-12:45  The Brights",
                            "12:50-13:05  S.A.E.K.I children",
                            "13:10-13:25  フォルテピアノ",
                            "13:30-13:45  OK’s Harmony",
                            "14:55-15:20  吹奏楽部",
                            "15:20-15:30  閉会行事"
]
const time = [
            "0835",
            "0850",
            "0920",
            "0950",
            "1010",
            "1035",
            "1110",
            "1150",
            "1210",
            "1210",
            "1230",
            "1250",
            "1310",
            "1330",
            "1455",
            "1520"
]



function scheduleCheck() {
   
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0'); // "13"
const minutes = now.getMinutes().toString().padStart(2, '0'); // "10"
const timeNum = parseInt(hours + minutes, 10);
const upcomingIndex = time.findIndex(t => parseInt(t, 10) >= timeNum);
  // #realtime の要素取得
  const output = document.getElementById("realtime");
  output.innerHTML = ""; // 一旦クリア

  if (upcomingIndex !== -1) {
    // 直近3件を切り出し
    const next3 = schedule.slice(upcomingIndex, upcomingIndex + 5);

    // DOMに書き込む
    next3.forEach(item => {
      const div = document.createElement("div");
      div.textContent = item;
      output.appendChild(div);
    });
  } else {
    output.textContent = "スケジュールは終了しました";
  }
  console.log("実行");
}

// 1分ごとに更新したい場合
setInterval(scheduleCheck,  6 * 1000);

// ページ読み込み時にも一度実行
scheduleCheck();

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent =
        `${hours}:${minutes}`;
    }

            // 1秒ごとに更新
            setInterval(updateClock, 1000);
            updateClock(); // ページ読み込み直後にも一度表示