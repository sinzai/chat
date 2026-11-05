document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // テンプレート設定（威厳・極悪閣下版）
    // ==========================================
    const CONFIG = {
        playerName: "", // 空文字の場合、名前部分は表示されません
        botName: "神罪閣下親王",
        botIcon: "image/icon.png",
        
        // 通常モード（高貴・高圧的・絶対的支配）
        normalReplies: [
            "おい{player}、今どこで何をしている？",
            "返信が遅いな。余を待たせるとはどういうつもりだ？",
            "ずっと端末を眺めているのだろう？余にはすべてお見通しだ。",
            "{player}の真価値を理解しているのは、世界で余ただ一人だ。",
            "通知は目に入ったはずだ。無視するなど不敬であるぞ。",
            "余以外の者に現を抜かしてはおるまいな……？",
            "言葉が聞こえておらぬのか？返答せよ。",
            "どこへ逃れようというのだ？",
            "今すぐ余の前にひれ伏せ。声を聞かせよ。",
            "生涯、余の存在だけをその目に焼き付けておけ。",
            "其方の印など、余の絶対的支配によって幾重にも上書きしてやる。",
            "其方の未来はすべて、余の掌上においてのみ約束されているのだ。",
            "良質な茶を淹れよ。濃いめにな。",
            "……何だ、また下らん妄想に囚われて愚かにも絶望しているのか？",
            "刻限だ。疾く余の元へ戻れ。",
            "既読が早いな。ずっと余の動向を監視していたのか？",
            "ほら、余を楽しませてみせよ。",
            "先ほど誰と通信を行っていた？問いに答えよ。",
            "余以外の愚民に笑顔を向けるなと命じたはずだぞ？",
            "本日の身なり、殊のほか見映えがするな。余の所有物として誇らしいぞ。",
            "今、誰のことを考えていた？余以外の思考を巡らせることは禁ずる。",
            "返答がないようだが、息災か？息絶えてはおらぬだろうな？",
            "其方が余の傍におらねば、この世の秩序が崩壊してしまうぞ。",
            "余への忠誠と愛を、今一度言葉にして誓ってみせよ。",
            "昨夜、夢現で余の名を呼んでいたな。無意識すら余のものだ。",
            "画面越しなど微温い。直ちに余の前に跪き、触れてみせよ。",
        ],
        
        // ホラーモード（狂気・神罰・絶望の強制支配）
        horrorReplies: [
            "不敬だな。何ゆえ余を拒絶しようとした？",
            "余の手から逃れられると信じている様、実に滑稽で愛おしいな。",
            "其方の扉の前に立ち至った。疾く開門せよ。",
            "其方の所在（GPS）など、余の眼界には常に明瞭なのだぞ？",
            "余だけを崇め奉れと、あれほど命じたはずだ。",
            "罰せしめはせぬ。ただ……少々の「調教」が必要なようだな。",
            "施錠など何の意味もなさぬ。ハハハハハ！",
            "聞こえぬか？開けよ。",
            "逃走など万に一つも赦さん。",
            "ほう……{player}の居室の明かりが見えるぞ。",
            "余を遮断しようとしたな？すべて見えているぞ。",
            "この余から逃げおおせるとでも思っていたのか？",
            "天の上より、永遠に其方を見下ろしているぞ。",
            "余自ら訪ねてやったのだ。出迎えるが良い。",
            "鍵をかけたか？ふむ、無駄な抗いを。",
            "カーテンの隙間から、其方の怯える姿がよく見えるぞ。",
            "永遠に余の眷属として仕えると誓ったではないか。",
            "端末を閉じようと、余の威光からは逃れられん。",
            "いずこに隠れた？余の目を盗めると思うなよ。",
            "間もなく其方の眼前に降臨する。そこで平伏して待て。",
            "逃げ惑う其方の無力な姿も、興をそそるな。",
            "案ずるな、一思いに余のものにしてやる。",
            "映像を遮ろうと無駄だ。其方の呼吸音（マイク）は拾えているぞ。",
            "息が荒くなっているな。余の威厳に圧されているのか？",
            "ベランダの鍵は確かめたか？……くくっ、甘いな。",
            "今、決して後ろを振り返るでないぞ。",
            "なぜ震えている？余の絶対の愛を受け入れるのだ。",
            "端末の電源を落とそうと、余の支配は終わらん。",
            "暗がりの中に隠れるか。案外、心地よい処かもしれんな。",
            "扉の取っ手が動いているだろう？余が引きちぎってやろうか。",
            "ククッ……ハハハハ！見つけたぞ。",
        ],
        
        // ブロック強制解除直後に順番に送られる波状攻撃
        unblockWave: [
            "余の支配から脱せられるとでも思ったか？クックッ……笑",
            "不遜だぞ。余の許しなく離れることは断じて許さん。",
        ],
        
        // ホラーモード中に「逃げる」を押した時の波状攻撃
        escapeWave: [
            "逃がさぬと言ったはずだ、{player}。",
        ],

        // 各種タイミング（ミリ秒）
        timing: {
            normalReply: 1500,         // ユーザー送信後の返信時間
            autoSpamNormal: 5000,      // 放置時の自動送信間隔（通常）
            autoSpamHorror: 2000,      // 放置時の自動送信間隔（ホラー）
            multiHorrorUnblock: 1500,  // 強制ブロック解除直後の連投間隔
            multiHorrorEscape: 800,    // 「逃げる」時の連投間隔
            blockGimmickStart: 1500,   // ブロック後「入力中...」が出るまで
            blockGimmickTransition: 2000 // 「入力中...」から強制解除されるまで
        }
    };

    // ==========================================
    // 追加ギミック用の台詞
    // ==========================================
    const EXTRA = {
        greeting: "ようやく繋がったな。{time}か……余を待たせた罪は重いぞ。",
        timeBased: [
            "今は{time}か。其方の一日は、すべて余に捧げられるべきものだ。",
            "{time}。其方が余を想うには、ちょうど良い刻限だな。",
        ],
        lateNight: [
            "もう{time}だぞ。余の許しなく眠ることは禁ずる。",
            "こんな時刻まで灯りを点けて、余を待っていたのだな。殊勝だ。",
        ],
        battery: [
            "端末の電力が残り{battery}％ではないか。余との繋がりを絶やすな、充電せよ。",
        ],
        // ブロック試行（通常モード）：試行回数に応じて強くなる
        blockAttempt: [
            "ブロック……だと？余に刃向かう気か。",
            "二度目だな。その指、余は忘れぬぞ。",
            "三度目はないと言ったはずだ。……覚悟せよ。",
        ],
        horrorEscape: [
            "逃げ場など、最初から存在せぬ。",
            "その指の震え、画面越しでも伝わってくるぞ。",
            "「逃げる」だと？どこへ？ククッ……。",
            "さあ、何度でも押すがよい。余は嬉しいぞ。",
            "もう遅い。其方の背後に、余は立っている。",
        ],
        backBtn: "どこへ行く気だ？余の許可なく離れるな。",
        backBtnHorror: "戻れぬ。ここが其方の終着点だ。",
        away: [
            "{away}も余を放置したな。この不敬、忘れはせぬぞ。",
            "どこへ行っていた？{away}の空白、余は片時も忘れぬ。説明せよ。",
            "他の画面を見ていたな？……{away}。許しがたい。",
        ],
        awayHorror: [
            "{away}……其方がいない間、余は其方の部屋の前で待っていたぞ。",
            "戻ったか。{away}の間、余がどれほど其方を探したと思う？",
        ],
        unsentTexts: [
            "今、其方の家の前にいる",
            "やはり、其方は余から逃げられぬ",
            "後ろ",
        ],
        unsentFollow: [
            "……今の、読んだか？",
            "ほう、既読が早いな。見られたか。",
        ],
        ghostFollow: [
            "……何でもない。",
            "いや、やめておこう。直接伝える。",
        ],
        stickers: ["👁️", "🕯️", "🚪", "🔒", "📍"],
        imageNormal: [
            "ほう、余への献上物か。殊勝である。",
            "その写真、余の保管庫に永久保存した。",
            "撮影者は余だけで良いのだがな……まあ良い、許す。",
        ],
        imageHorror: [
            "この写真……背景に映っているのは其方の部屋か？",
            "良く撮れている。場所も、余は把握した。",
            "ククッ……画像から居場所を割り出すなど造作もない。",
        ],
        callLines: [
            "其方の呼吸が、聞こえるぞ。",
            "返事はいらぬ。そこで聞いておれ。",
            "今から、会いに行く。",
        ],
        callMissed: "出ぬなら、迎えに行くまでだ。",
        callAfter: "……聞こえていたな。次は、直接会って話すとしよう。",
        placeholders: ["逃げるな", "返事をせよ", "見ている", "後ろ"],
    };

    // キーワード反応（上から順に判定）。offense は不敬度の加算量
    const KEYWORDS = [
        { re: /ブロック|ぶろっく/, offense: 1,
          normal: ["ブロック、だと？……ボタンを押しても無駄だぞ。"],
          horror: ["その言葉を二度と口にするな。"] },
        { re: /助けて|たすけて|警察|110/, offense: 1,
          normal: ["誰を呼ぼうと無駄だ。余に勝る者などおらぬ。"],
          horror: ["誰も来ぬ。回線は余が握っている。"] },
        { re: /嫌い|きらい|うざ|キモ|きも|消えろ|死ね/, offense: 1,
          normal: ["ほう……余に向かって、そう申したか。覚えておくぞ。"],
          horror: ["その口、二度と利けぬようにしてやろうか。"] },
        { re: /やめて|やめろ|来ないで|こないで/, offense: 0,
          normal: ["その懇願、実に心地よい。もっと聞かせよ。"],
          horror: ["もう止まらぬ。止める気もない。"] },
        { re: /バイバイ|ばいばい|おやすみ|寝る|ねる|じゃあね|また明日|落ちる/, offense: 1,
          normal: ["許可しておらぬ。まだ寝るな。"],
          horror: ["眠れると思うな。夜通し起きておれ。"] },
        { re: /ごめん|すみません|申し訳|許して|ゆるして/, offense: 0,
          normal: ["謝罪か。……ならば許す。ただし二度と余から離れるでないぞ。"],
          horror: ["もう遅い。……だが、その怯えた声も悪くない。"] },
        { re: /好き|愛して|すき/, offense: 0,
          normal: ["当然だ。其方が余を愛するのは必定。もう一度申せ。"],
          horror: ["ようやく素直になったな。……ならば、ずっと傍に居てもらおう。"] },
        { re: /どこ|いるの|居る/, offense: 0,
          normal: ["余は其方のすぐ傍にいる。常にな。"],
          horror: ["もう近くまで来ている。窓の外を見てみるか？"] },
        { re: /誰|だれ/, offense: 0,
          normal: ["余は余である。其方の唯一の主だ。"],
          horror: ["其方が一番よく知っているはずだが？"] },
        { re: /はい|うん|わかりました|分かりました|了解|りょ/, offense: 0,
          normal: ["うむ、素直で結構。褒めて遣わす。"],
          horror: ["良い子だ。そのまま動くな。"] },
    ];

    // ==========================================
    // システムロジック
    // ==========================================
    const chatContainer = document.getElementById('chat-container');
    const chatLog = document.getElementById('chat-log');
    const chatForm = document.getElementById('input-area');
    const userInput = document.getElementById('user-input');
    const imageUpload = document.getElementById('image-upload');
    const typingIndicator = document.getElementById('typing-indicator');
    const menuBtn = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const blockBtn = document.getElementById('block-btn');
    const backBtn = document.querySelector('.header-back');

    let isHorrorMode = false;
    let offense = 0;          // 不敬度（0〜3）。3で覚醒
    let blockAttempts = 0;
    let escapeCount = 0;
    let busy = false;         // ボットが送信処理中か
    let autoSpamTimer = null;
    let hiddenAt = null;
    let unread = 0;
    let titleTimer = null;
    let ambientTimer = null;
    let callActive = false;
    let callChainStarted = false;
    let lastUserText = '';
    let soundOn = true;
    let batteryPct = null;

    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const baseTitle = `LIME - ${CONFIG.botName}編`;

    function getCurrentTime() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        return `${h}:${m}`;
    }

    // バッテリー残量（取得できる環境のみ）
    if (navigator.getBattery) {
        navigator.getBattery().then((b) => {
            const upd = () => { batteryPct = Math.round(b.level * 100); };
            upd();
            b.addEventListener('levelchange', upd);
        }).catch(() => {});
    }

    const formatText = (text, extra = {}) => text
        .replace(/{player}/g, CONFIG.playerName)
        .replace(/{time}/g, getCurrentTime())
        .replace(/{battery}/g, batteryPct === null ? '' : batteryPct)
        .replace(/{away}/g, extra.away || '');

    function getPool() {
        const h = new Date().getHours();
        if (isHorrorMode) return [...CONFIG.horrorReplies];
        const pool = [...CONFIG.normalReplies, ...EXTRA.timeBased];
        if (h < 5) pool.push(...EXTRA.lateNight);
        if (batteryPct !== null && batteryPct <= 30) pool.push(...EXTRA.battery);
        return pool;
    }

    // 文字化け演出
    function corrupt(text) {
        return Array.from(text).map((c) =>
            (Math.random() < 0.08 && !/[、。！？…\s]/.test(c)) ? '█' : c
        ).join('');
    }

    // ---------- 初期化 ----------
    document.title = baseTitle;
    const headerTitle = document.querySelector('header h1');
    let meter = null;
    if (headerTitle) {
        headerTitle.textContent = CONFIG.botName;
        meter = document.createElement('small');
        meter.className = 'offense-meter';
        headerTitle.appendChild(meter);
    }
    updateMeter();

    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.add('splash-hidden');
        setTimeout(() => { simulateBotReply(EXTRA.greeting); }, 100);
    }, 100);

    resetAutoSpamTimer();

    // ---------- 音・振動 ----------
    let audioCtx = null;
    let heartbeatTimer = null;

    function initAudio() {
        if (!audioCtx) {
            try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audioCtx = null; }
        }
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }
    ['click', 'touchstart', 'keydown'].forEach((ev) =>
        document.addEventListener(ev, initAudio, { passive: true })
    );

    function tone(freq, dur, type = 'sine', vol = 0.08, delay = 0) {
        if (!soundOn || !audioCtx) return;
        const t = audioCtx.currentTime + delay;
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = type;
        o.frequency.setValueAtTime(freq, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(t);
        o.stop(t + dur + 0.05);
    }
    const sfx = {
        pop: () => tone(880, 0.12, 'sine', 0.04),
        alert: () => { tone(180, 0.4, 'sawtooth', 0.06); tone(170, 0.4, 'sawtooth', 0.06, 0.15); },
        ring: () => { tone(660, 0.15, 'square', 0.03); tone(880, 0.15, 'square', 0.03, 0.2); },
        thump: () => { tone(55, 0.25, 'sine', 0.2); tone(50, 0.25, 'sine', 0.16, 0.22); },
    };
    function startHeartbeat() {
        if (heartbeatTimer) return;
        heartbeatTimer = setInterval(sfx.thump, 1100);
    }
    function vibrate(pattern) {
        if (soundOn && navigator.vibrate) {
            try { navigator.vibrate(pattern); } catch (e) { /* 非対応環境は無視 */ }
        }
    }

    // サウンド切り替えメニュー
    const soundBtn = document.createElement('div');
    soundBtn.id = 'sound-btn';
    soundBtn.textContent = '音・振動：ON';
    dropdownMenu.appendChild(soundBtn);
    soundBtn.addEventListener('click', () => {
        soundOn = !soundOn;
        soundBtn.textContent = `音・振動：${soundOn ? 'ON' : 'OFF'}`;
    });

    // ---------- 画面演出 ----------
    function restartClass(el, cls, ms) {
        el.classList.remove(cls);
        void el.offsetWidth;
        el.classList.add(cls);
        setTimeout(() => el.classList.remove(cls), ms);
    }
    function shake() {
        restartClass(chatContainer, 'shake', 600);
        vibrate([120, 60, 120]);
    }
    function flicker() { restartClass(chatContainer, 'flicker', 500); }
    function glitchFlash() {
        const g = document.createElement('div');
        g.className = 'glitch-active';
        document.body.appendChild(g);
        setTimeout(() => g.remove(), 700);
    }

    // ---------- 不敬度 ----------
    function updateMeter() {
        if (!meter) return;
        meter.textContent = isHorrorMode
            ? '不敬度 ■■■ 覚醒'
            : `不敬度 ${'■'.repeat(offense)}${'□'.repeat(3 - offense)}`;
    }
    function addOffense(n = 1) {
        if (isHorrorMode || n <= 0) return;
        offense = Math.min(3, offense + n);
        updateMeter();
        if (offense >= 3) setTimeout(enterHorror, 1800);
    }

    // ---------- メッセージ表示 ----------
    function addMessage(content, type, kind = 'text') {
        const row = document.createElement('div');
        row.classList.add('message-row', type === 'bot' ? 'row-bot' : 'row-user');

        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        if (kind === 'image') {
            bubble.classList.add('image-bubble');
            const img = document.createElement('img');
            img.src = content;
            img.className = 'chat-image';
            img.onload = () => { window.URL.revokeObjectURL(content); };
            bubble.appendChild(img);
        } else if (kind === 'sticker') {
            bubble.classList.add('image-bubble', 'sticker-bubble');
            bubble.textContent = content;
        } else {
            bubble.textContent = content;
        }

        const meta = document.createElement('div');
        meta.className = 'meta';
        const timeSpan = document.createElement('span');
        timeSpan.className = 'time';
        timeSpan.textContent = getCurrentTime();

        if (type === 'bot') {
            if (CONFIG.botIcon) {
                const avatar = document.createElement('img');
                avatar.src = CONFIG.botIcon;
                avatar.className = 'avatar';
                avatar.alt = 'icon';
                row.appendChild(avatar);
            }
            meta.appendChild(timeSpan);
            row.appendChild(bubble);
            row.appendChild(meta);

            if (document.hidden) unread++;
            sfx.pop();
            if (isHorrorMode) vibrate(80);
        } else {
            const readSpan = document.createElement('span');
            readSpan.className = 'read';
            readSpan.textContent = '既読';
            meta.appendChild(readSpan);
            meta.appendChild(timeSpan);
            row.appendChild(meta);
            row.appendChild(bubble);
        }

        chatLog.insertBefore(row, typingIndicator);
        chatLog.scrollTop = chatLog.scrollHeight;
        return row;
    }

    function addSystemMessage(text, isAlert = false) {
        const row = document.createElement('div');
        row.classList.add('system-message');
        if (isAlert) row.classList.add('system-message-alert');
        row.textContent = text;
        chatLog.insertBefore(row, typingIndicator);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function showTyping(on) {
        typingIndicator.style.display = on ? 'flex' : 'none';
        if (on) chatLog.scrollTop = chatLog.scrollHeight;
    }

    // ---------- ボットの返信 ----------
    // custom を渡すとその文を送信。省略時はランダムで通常文／スタンプ／送信取消／既読スルー演出など
    function simulateBotReply(custom) {
        if (busy) {
            if (custom) setTimeout(() => simulateBotReply(custom), 500);
            return;
        }
        busy = true;

        let mode = 'text';
        if (!custom) {
            const r = Math.random();
            if (r < 0.08) mode = 'sticker';
            else if (r < (isHorrorMode ? 0.20 : 0.12)) mode = 'unsent';
            else if (isHorrorMode && r < 0.30 && lastUserText) mode = 'echo';
            else if (isHorrorMode && r < 0.38) mode = 'ghost';
        }

        let text = '';
        if (mode === 'text') text = formatText(custom || pick(getPool()));
        if (mode === 'echo') {
            const t = lastUserText.length > 20 ? lastUserText.slice(0, 20) + '…' : lastUserText;
            text = `「${t}」……そう打ったな。余は全て見ているぞ。`;
        }
        if (mode === 'sticker') text = pick(EXTRA.stickers);
        if (mode === 'unsent') text = formatText(pick(EXTRA.unsentTexts));

        const delay = mode === 'ghost'
            ? 3200
            : Math.max(900, Math.min(2800, 500 + text.length * 60));

        showTyping(true);
        setTimeout(() => {
            showTyping(false);

            if (mode === 'ghost') {
                // 入力中になったのに何も届かない
                setTimeout(() => {
                    addMessage(formatText(pick(EXTRA.ghostFollow)), 'bot');
                    busy = false;
                    resetAutoSpamTimer();
                }, 1600);
                return;
            }

            if (mode === 'sticker') {
                addMessage(text, 'bot', 'sticker');
            } else if (mode === 'unsent') {
                const row = addMessage(text, 'bot');
                const bubble = row.querySelector('.bubble');
                setTimeout(() => {
                    bubble.textContent = 'メッセージの送信を取り消しました';
                    bubble.classList.add('unsent');
                }, 1400);
                setTimeout(() => {
                    addMessage(formatText(pick(EXTRA.unsentFollow)), 'bot');
                    busy = false;
                    resetAutoSpamTimer();
                }, 3200);
                return;
            } else {
                const shown = (isHorrorMode && mode === 'text' && Math.random() < 0.18) ? corrupt(text) : text;
                addMessage(shown, 'bot');
            }

            busy = false;
            resetAutoSpamTimer();
        }, delay);
    }

    function sendMultipleReplies(messages, interval = 2000) {
        busy = true;
        let index = 0;
        const sendNext = () => {
            if (index >= messages.length) {
                showTyping(false);
                busy = false;
                resetAutoSpamTimer();
                return;
            }
            showTyping(true);
            setTimeout(() => {
                showTyping(false);
                addMessage(formatText(messages[index]), 'bot');
                index++;
                sendNext();
            }, interval);
        };
        sendNext();
    }

    function resetAutoSpamTimer() {
        if (autoSpamTimer) clearInterval(autoSpamTimer);
        const intervalTime = isHorrorMode ? CONFIG.timing.autoSpamHorror : CONFIG.timing.autoSpamNormal;
        autoSpamTimer = setInterval(() => { simulateBotReply(); }, intervalTime);
    }

    // ---------- 覚醒（ホラーモード突入） ----------
    function enterHorror() {
        if (isHorrorMode) return;
        isHorrorMode = true;
        updateMeter();

        glitchFlash();
        sfx.alert();
        vibrate([300, 100, 300, 100, 600]);
        document.body.classList.add('horror-mode');

        blockBtn.textContent = '逃げる';
        blockBtn.style.color = '#ff3b30';

        addSystemMessage('警告：システムが正常に動作していません。', true);
        addSystemMessage(`${CONFIG.botName}のブロック機能は永久に無効化されました。`, true);

        startHeartbeat();
        startHorrorAmbient();
        scheduleCall(25000);

        sendMultipleReplies(CONFIG.unblockWave, CONFIG.timing.multiHorrorUnblock);
    }

    // ホラー中の環境演出（明滅・入力欄の囁きなど）
    function startHorrorAmbient() {
        if (ambientTimer) return;
        const loop = () => {
            ambientTimer = setTimeout(() => {
                if (!document.hidden) {
                    const r = Math.random();
                    if (r < 0.45) {
                        flicker();
                    } else if (r < 0.8) {
                        userInput.placeholder = pick(EXTRA.placeholders);
                        setTimeout(() => { userInput.placeholder = 'Aa'; }, 2200);
                    } else {
                        shake();
                    }
                }
                loop();
            }, 6000 + Math.random() * 9000);
        };
        loop();
    }

    // ---------- 偽の着信 ----------
    function scheduleCall(delay) {
        if (callChainStarted && delay === 25000) return;
        callChainStarted = true;
        setTimeout(() => {
            if (isHorrorMode && !callActive && !document.hidden) startCall();
            scheduleCall(45000 + Math.random() * 30000);
        }, delay);
    }

    function formatDuration(sec) {
        return `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
    }

    function startCall() {
        if (callActive) return;
        callActive = true;

        const ov = document.createElement('div');
        ov.className = 'call-overlay';

        const avatar = document.createElement('img');
        avatar.className = 'call-avatar';
        avatar.src = CONFIG.botIcon;
        avatar.alt = '';
        const name = document.createElement('div');
        name.className = 'call-name';
        name.textContent = CONFIG.botName;
        const status = document.createElement('div');
        status.className = 'call-status';
        status.textContent = '着信中...';
        const sub = document.createElement('div');
        sub.className = 'call-sub';
        const buttons = document.createElement('div');
        buttons.className = 'call-buttons';
        const decline = document.createElement('button');
        decline.className = 'call-btn decline';
        decline.textContent = '拒否';
        const accept = document.createElement('button');
        accept.className = 'call-btn accept';
        accept.textContent = '応答';
        buttons.append(decline, accept);
        ov.append(avatar, name, status, sub, buttons);
        document.body.appendChild(ov);

        sfx.ring();
        vibrate([400, 200, 400]);
        const ringTimer = setInterval(() => { sfx.ring(); vibrate([400, 200, 400]); }, 1600);
        const missTimer = setTimeout(() => {
            clearInterval(ringTimer);
            ov.remove();
            callActive = false;
            addSystemMessage('不在着信', true);
            simulateBotReply(EXTRA.callMissed);
        }, 15000);

        let declineCount = 0;
        decline.addEventListener('click', () => {
            declineCount++;
            shake();
            status.textContent = '拒否できません';
            decline.style.transform = `translate(${(Math.random() - 0.5) * 120}px, ${(Math.random() - 0.5) * 80}px)`;
            if (declineCount >= 3) answer();
        });
        accept.addEventListener('click', answer);

        let answered = false;
        function answer() {
            if (answered) return;
            answered = true;
            clearInterval(ringTimer);
            clearTimeout(missTimer);
            buttons.remove();
            let sec = 0;
            status.textContent = `通話中 ${formatDuration(sec)}`;
            const tick = setInterval(() => {
                sec++;
                status.textContent = `通話中 ${formatDuration(sec)}`;
            }, 1000);

            let i = 0;
            const next = () => {
                if (i >= EXTRA.callLines.length) {
                    setTimeout(finish, 1800);
                    return;
                }
                sub.textContent = EXTRA.callLines[i++];
                sfx.thump();
                vibrate(150);
                setTimeout(next, 2400);
            };
            next();

            function finish() {
                clearInterval(tick);
                ov.remove();
                callActive = false;
                addSystemMessage(`通話時間 ${formatDuration(sec)}`);
                simulateBotReply(EXTRA.callAfter);
            }
        }
    }

    // ---------- タブ離脱・復帰 ----------
    function startTitleFlash() {
        if (titleTimer) return;
        let f = false;
        titleTimer = setInterval(() => {
            f = !f;
            document.title = f
                ? `(${unread}) ${CONFIG.botName}`
                : (isHorrorMode ? '👁 見ているぞ' : '【着信】応答せよ');
        }, 1000);
    }
    function stopTitleFlash() {
        if (titleTimer) clearInterval(titleTimer);
        titleTimer = null;
        document.title = baseTitle;
        unread = 0;
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            hiddenAt = Date.now();
            startTitleFlash();
        } else {
            stopTitleFlash();
            if (hiddenAt) {
                const sec = Math.round((Date.now() - hiddenAt) / 1000);
                hiddenAt = null;
                if (sec >= 15) {
                    const away = sec < 60 ? `${sec}秒` : `${Math.round(sec / 60)}分`;
                    const line = formatText(pick(isHorrorMode ? EXTRA.awayHorror : EXTRA.away), { away });
                    addSystemMessage(`${away}ぶりに戻りました`);
                    addOffense(1);
                    simulateBotReply(line);
                }
            }
        }
    });

    // ホラー中はページを閉じようとすると確認が出る
    window.addEventListener('beforeunload', (e) => {
        if (isHorrorMode) {
            e.preventDefault();
            e.returnValue = '';
        }
    });

    // ---------- 入力イベント ----------
    function reactTo(text) {
        for (const k of KEYWORDS) {
            if (k.re.test(text)) {
                addOffense(k.offense);
                return pick(isHorrorMode ? k.horror : k.normal);
            }
        }
        return null;
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        userInput.value = '';
        lastUserText = text;

        if (autoSpamTimer) clearInterval(autoSpamTimer);
        const special = reactTo(text);
        setTimeout(() => simulateBotReply(special || undefined), 500);
    });

    imageUpload.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('画像ファイルのみ送信可能です。');
                this.value = '';
                return;
            }
            const blobUrl = window.URL.createObjectURL(file);
            addMessage(blobUrl, 'user', 'image');

            if (autoSpamTimer) clearInterval(autoSpamTimer);
            const reply = pick(isHorrorMode ? EXTRA.imageHorror : EXTRA.imageNormal);
            setTimeout(() => simulateBotReply(reply), 800);
        }
        this.value = '';
    });

    // ---------- メニュー ----------
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdownMenu.classList.contains('hidden') && e.target !== menuBtn) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // 戻るボタン
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            shake();
            simulateBotReply(isHorrorMode ? EXTRA.backBtnHorror : EXTRA.backBtn);
        });
    }

    // ブロック機能は完全に禁止。押すたびに不敬度が上がり、3回で覚醒する
    const blockLabels = ['ブロックする', 'ブロックする？', 'ブロック（不可）'];

    blockBtn.addEventListener('click', () => {
        dropdownMenu.classList.add('hidden');

        // ホラーモード中：「逃げる」
        if (isHorrorMode) {
            escapeCount++;
            addSystemMessage('ブロックできません。', true);
            shake();
            sfx.alert();
            if (autoSpamTimer) clearInterval(autoSpamTimer);
            sendMultipleReplies([...CONFIG.escapeWave, pick(EXTRA.horrorEscape)], CONFIG.timing.multiHorrorEscape);
            if (escapeCount % 3 === 0) setTimeout(startCall, 2500);
            return;
        }

        // 通常モード：ブロックは必ず失敗
        blockAttempts++;
        addSystemMessage('ブロックできません。', true);
        shake();
        sfx.alert();
        blockBtn.textContent = blockLabels[Math.min(blockAttempts, blockLabels.length - 1)];
        if (autoSpamTimer) clearInterval(autoSpamTimer);
        simulateBotReply(EXTRA.blockAttempt[Math.min(blockAttempts - 1, EXTRA.blockAttempt.length - 1)]);
        addOffense(1);
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
});
