// 恐龙数据可继续添加图片，恐龙素材网站：http://www.cdkf.cn/tupian-List-285-2.html
const dinosaurs = [
    { name: '剑龙', image: './img/恐龙问答游戏/剑龙.jpg' },
    { name: '特异龙', image: './img/恐龙问答游戏/特异龙.jpg' },
    { name: '蛇颈龙', image: './img/恐龙问答游戏/蛇颈龙.jpg' },
    { name: '三角龙', image: './img/恐龙问答游戏/三角龙.jpg' },
    { name: '始祖鸟', image: './img/恐龙问答游戏/始祖鸟.jpg' },
    { name: '瑞氏幽灵猎龙', image: './img/恐龙问答游戏/瑞氏幽灵猎龙.jpg' },
    { name: '鸭嘴龙', image: './img/恐龙问答游戏/鸭嘴龙.jpg' },
    { name: '厚鼻龙宝宝', image: './img/恐龙问答游戏/厚鼻龙宝宝.jpg' },
    { name: '雅库伊赤烈龙', image: './img/恐龙问答游戏/雅库伊赤烈龙.jpg' },
    { name: '甲龙', image: './img/恐龙问答游戏/甲龙.jpg' },
    { name: '恐爪龙', image: './img/恐龙问答游戏/恐爪龙.jpg' },
    { name: '副龙栉龙', image: './img/恐龙问答游戏/副龙栉龙.jpg' },
    { name: '镰刀龙', image: './img/恐龙问答游戏/镰刀龙.jpg' },
    { name: '牛龙', image: './img/恐龙问答游戏/牛龙.jpg' },
    { name: '戟龙', image: './img/恐龙问答游戏/戟龙.jpg' },
    { name: '阿里瓦龙', image: './img/恐龙问答游戏/阿里瓦龙.jpg' },
    { name: '易门彩云龙', image: './img/恐龙问答游戏/易门彩云龙.jpg' },
    { name: '安德萨角龙', image: './img/恐龙问答游戏/安德萨角龙.jpg' },
    { name: '腕龙', image: './img/恐龙问答游戏/腕龙.jpg' },
    { name: '迅猛龙', image: './img/恐龙问答游戏/迅猛龙.jpg' }
];

// 游戏分数
let score = 0;
// 当前选择的恐龙
let currentdinosaur;
// 已回答问题数量
let questionsAnswered = 0;
// 游戏问题数量，可修改
const totalQuestions = 6;

function generateQuestion() {
    // 随机选择一个恐龙
    currentdinosaur = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
    
    // 生成错误选项
    const wrongOptions = dinosaurs
        .filter(a => a.name !== currentdinosaur.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
        .map(a => a.name);

    // 合并选项并随机排序
    const options = [currentdinosaur.name, ...wrongOptions].sort(() => Math.random() - 0.5);

    // 更新轮换图片
    document.getElementById('dinosaur-image').src = currentdinosaur.image;

    // 生成选项按钮
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = options
        .map(option => `<button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>`)
        .join('');
}

// 检查答案, 正确+10分
function checkAnswer(selectedAnswer) {
    questionsAnswered++;
    if (selectedAnswer === currentdinosaur.name) {
        score += 10;
        document.getElementById('score').textContent = score;
    }

    if (questionsAnswered < totalQuestions) {
        generateQuestion();
    } else {
        endGame();
    }
}

// 游戏结束
function endGame() {
    document.querySelector('.game-container').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';
    document.getElementById('final-score').textContent = score;
}

// 开始游戏
generateQuestion();