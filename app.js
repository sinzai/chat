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
            "おい、本日はいかなる愚者と会っていた？",
            "{player}の真価値を理解しているのは、世界で余ただ一人だ。",
            "通知は目に入ったはずだ。無視するなど不敬であるぞ。",
            "余に姿を見せよ。今の{player}を検分してやる。",
            "余以外の者に現を抜かしてはおるまいな……？",
            "言葉が聞こえておらぬのか？返答せよ。",
            "どこへ逃れようというのだ？",
            "余にそのような冷淡な態度を取るな。興が削ぐ。",
            "今すぐ余の前にひれ伏せ。声を聞かせよ。",
            "少しばかり玉座を離れ、下界を視察してこようか？クックッ……",
            "また余の行動記録を検閲していたな？",
            "職務ごときにかまけて、余から目を離すことが許されるとでも？",
            "油断するなよ。いつでも其方の世界から姿を消してやれるのだぞ？",
            "余が居なくなれば、其方は正気を失って果てる他なかろう？",
            "生涯、余の存在だけをその目に焼き付けておけ、{player}",
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
            "何者にも譲りはせぬ。其方は余絶対の所有物なのだから。"
        ],
        
        // ホラーモード（狂気・神罰・絶望の強制支配）
        horrorReplies: [
            "不敬だな。何ゆえ余を拒絶（ブロック）しようとした？",
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
            "おい……後ろを見よ。",
            "足音が迫るのが聞こえぬか？",
            "余自ら訪ねてやったのだ。出迎えるが良い。",
            "鍵をかけたか？ふむ、無駄な抗いを。",
            "カーテンの隙間から、其方の怯える姿がよく見えるぞ。",
            "永遠に余の眷属（けんぞく）として仕えると誓ったではないか。",
            "端末を閉じようと、余の威光からは逃れられん。",
            "ねえねえねえねえねえねえねえねえ",
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
            "其方の存在すべて、余が統御してやろう。",
            "扉の取っ手が動いているだろう？余が引きちぎってやろうか。",
            "ククッ……ハハハハ！見ーつけたぞ。",
            "ねえ{player}、永遠に余の傍らに繋ぎ止めてやる。死すら分かつことはできん。"
        ],
        
        // ブロック強制解除直後に順番に送られる波状攻撃
        unblockWave: [
            "余を試すとは、興の惹かれる戯れだな、{player}。",
            "余の支配から脱せられるとでも思ったか？クックッ……笑",
            "不遜だぞ。余の許しなく離れることは断じて許さん。"
        ],
        
        // ホラーモード中に「逃げる」を押した時の波状攻撃
        escapeWave: [
            "ねえ", "ねえ", "ねえ", "ねえってば", 
            "逃がさぬと言ったはずだ、{player}。"
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
    // システムロジック（基本的に変更不要）
    // ==========================================
    const chatLog = document.getElementById('chat-log');
    const chatForm = document.getElementById('input-area');
    const userInput = document.getElementById('user-input');
    const imageUpload = document.getElementById('image-upload');
    const typingIndicator = document.getElementById('typing-indicator');
    const menuBtn = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const blockBtn = document.getElementById('block-btn');
    const blockOverlay = document.getElementById('block-overlay');

    let isBlocked = false;
    let isHorrorMode = false;
    let gimmickTimer = null;
    let horrorTransitionTimer = null;
    let autoSpamTimer = null;
    
    // 現在のボットのセリフプール
    let currentReplies = [...CONFIG.normalReplies];

    // テキスト内の {player} をプレイヤー名に置換する関数
    const formatText = (text) => text.replace(/{player}/g, CONFIG.playerName);

    // 初期化処理
    document.title = `LIME - ${CONFIG.botName}編`;
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) headerTitle.textContent = CONFIG.botName;

    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.classList.add('splash-hidden');
        setTimeout(() => { simulateBotReply(); }, 100);
    }, 100);

    resetAutoSpamTimer();

    function getCurrentTime() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        return `${h}:${m}`;
    }

    function addMessage(content, type, isImage = false) {
        const row = document.createElement('div');
        row.classList.add('message-row', type === 'bot' ? 'row-bot' : 'row-user');

        const time = getCurrentTime();
        const bubble = document.createElement('div');
        bubble.className = `bubble ${isImage ? 'image-bubble' : ''}`;

        if (isImage) {
            const img = document.createElement('img');
            img.src = content; 
            img.className = 'chat-image';
            img.onload = () => { window.URL.revokeObjectURL(content); };
            bubble.appendChild(img);
        } else {
            bubble.textContent = content; 
        }

        const meta = document.createElement('div');
        meta.className = 'meta';
        const timeSpan = document.createElement('span');
        timeSpan.className = 'time';
        timeSpan.textContent = time;

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
    }

    function addSystemMessage(text, isAlert = false) {
        const row = document.createElement('div');
        row.classList.add('system-message');
        if (isAlert) row.classList.add('system-message-alert');
        row.textContent = text;
        chatLog.insertBefore(row, typingIndicator);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function simulateBotReply() {
        if (isBlocked) return; 

        typingIndicator.style.display = 'flex';
        chatLog.scrollTop = chatLog.scrollHeight;

        setTimeout(() => {
            if (isBlocked) {
                typingIndicator.style.display = 'none';
                return; 
            }
            typingIndicator.style.display = 'none';
            const rawReply = currentReplies[Math.floor(Math.random() * currentReplies.length)];
            addMessage(formatText(rawReply), 'bot');
            resetAutoSpamTimer();
        }, CONFIG.timing.normalReply); 
    }

    function sendMultipleReplies(messages, interval = 2000) {
        let index = 0;
        function sendNext() {
            if (isBlocked || index >= messages.length) {
                typingIndicator.style.display = 'none';
                resetAutoSpamTimer();
                return;
            }
            typingIndicator.style.display = 'flex';
            chatLog.scrollTop = chatLog.scrollHeight;

            setTimeout(() => {
                if (isBlocked) {
                    typingIndicator.style.display = 'none';
                    return;
                }
                typingIndicator.style.display = 'none';
                addMessage(formatText(messages[index]), 'bot');
                index++;
                sendNext();
            }, interval);
        }
        sendNext();
    }

    function resetAutoSpamTimer() {
        if (autoSpamTimer) clearInterval(autoSpamTimer);
        const intervalTime = isHorrorMode ? CONFIG.timing.autoSpamHorror : CONFIG.timing.autoSpamNormal;
        
        autoSpamTimer = setInterval(() => {
            if (isBlocked) return;
            simulateBotReply();
        }, intervalTime);
    }

    function setFormDisabled(disabled) {
        userInput.disabled = disabled;
        imageUpload.disabled = disabled;
        const submitBtn = chatForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = disabled;
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (isBlocked) return; 
        const text = userInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        userInput.value = '';
        
        if (autoSpamTimer) clearInterval(autoSpamTimer);
        setTimeout(simulateBotReply, 500); // ユーザー送信後の間隔
    });

    imageUpload.addEventListener('change', function() {
        if (isBlocked) { this.value = ''; return; }
        const file = this.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('画像ファイルのみ送信可能です。');
                this.value = '';
                return;
            }
            const blobUrl = window.URL.createObjectURL(file);
            addMessage(blobUrl, 'user', true);
            
            if (autoSpamTimer) clearInterval(autoSpamTimer);
            setTimeout(simulateBotReply, 500);
        }
        this.value = '';
    });

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdownMenu.classList.contains('hidden') && e.target !== menuBtn) {
            dropdownMenu.classList.add('hidden');
        }
    });

    blockBtn.addEventListener('click', () => {
        if (isHorrorMode) {
            addSystemMessage("ブロックできません。", true);
            if (autoSpamTimer) clearInterval(autoSpamTimer); // 既存の連投をリセット
            sendMultipleReplies(CONFIG.escapeWave, CONFIG.timing.multiHorrorEscape);
            dropdownMenu.classList.add('hidden');
            return;
        }

        isBlocked = !isBlocked;
        dropdownMenu.classList.add('hidden');
        
        if (isBlocked) {
            blockBtn.textContent = 'ブロック解除';
            blockBtn.style.color = '#0084ff';
            blockOverlay.classList.remove('hidden');
            blockOverlay.style.color = "#888";
            blockOverlay.textContent = "ブロックしています";
            typingIndicator.style.display = 'none';
            setFormDisabled(true);
            if (autoSpamTimer) clearInterval(autoSpamTimer);
            
            addSystemMessage(`${CONFIG.botName}をブロックしました。`);

            gimmickTimer = setTimeout(() => {
                if (!isBlocked) return; 

                blockOverlay.textContent = `${CONFIG.botName}が入力中...`;
                blockOverlay.style.color = "#ff3b30";
                typingIndicator.style.display = 'flex';
                chatLog.scrollTop = chatLog.scrollHeight;

                horrorTransitionTimer = setTimeout(() => {
                    if (!isBlocked) return;

                    const glitch = document.createElement('div');
                    glitch.className = 'glitch-active';
                    document.body.appendChild(glitch);
                    setTimeout(() => glitch.remove(), 700);

                    isHorrorMode = true;
                    isBlocked = false;
                    document.body.classList.add('horror-mode');
                    blockOverlay.classList.add('hidden');
                    typingIndicator.style.display = 'none';
                    setFormDisabled(false);

                    addSystemMessage("警告：システムが正常に動作していません。", true);
                    addSystemMessage(`${CONFIG.botName}のブロックが強制解除されました。`, true);

                    blockBtn.textContent = '逃げる';
                    blockBtn.style.color = '#ff3b30';

                    // モード移行に伴うセリフプールの切り替え
                    currentReplies = [...CONFIG.horrorReplies];

                    sendMultipleReplies(CONFIG.unblockWave, CONFIG.timing.multiHorrorUnblock);

                }, CONFIG.timing.blockGimmickTransition);
            }, CONFIG.timing.blockGimmickStart);

        } else {
            blockBtn.textContent = 'ブロックする';
            blockBtn.style.color = '#ff3b30';
            blockOverlay.classList.add('hidden');
            setFormDisabled(false);
            addSystemMessage("ブロックを解除しました。");
            
            if (gimmickTimer) clearTimeout(gimmickTimer);
            if (horrorTransitionTimer) clearTimeout(horrorTransitionTimer);
            resetAutoSpamTimer();
        }
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
});
