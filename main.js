// html questions
const questions1 = [
    {
        question: "HTML nimani anglatadi?",
        options: [
            "Hyper Text Markup Language",
            "Yuqori Texnologiyali Dizayn",
            "Hyperlinking Text Management Language",
            "Uy Asboblari Boshqaruv Tili"
        ],
        answer: 0
    },
    {
        question: "<title> tegi nimaga xizmat qiladi?",
        options: [
            "Sahifa sarlavhasini ko'rsatadi",
            "Giperhavola yaratadi",
            "Brauzer tabidagi sarlavhani ko'rsatadi",
            "Skript joylashtiradi"
        ],
        answer: 2
    },
    {
        question: "HTML'da giperhavola yaratish uchun qaysi teg ishlatiladi?",
        options: [
            "<link>",
            "<a>",
            "<h1>",
            "<p>"
        ],
        answer: 1
    },
    {
        question: "<img> tegi nimaga xizmat qiladi?",
        options: [
            "Audio fayl qo'shadi",
            "Rasm joylashtiradi",
            "Video fayl qo'shadi",
            "Yangi bo'lim aniqlaydi"
        ],
        answer: 1
    },
    {
        question: "HTML'da tartibsiz ro'yxat qaysi teg orqali yaratiladi?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<list>"
        ],
        answer: 1
    },
    {
        question: "HTML'da jadval qatorini yaratish uchun qaysi teg ishlatiladi?",
        options: [
            "<th>",
            "<td>",
            "<tr>",
            "<table>"
        ],
        answer: 2
    },
    {
        question: "HTML'da qatorni ajratish uchun qaysi teg ishlatiladi?",
        options: [
            "<lb>",
            "<break>",
            "<br>",
            "<hr>"
        ],
        answer: 2
    },
    {
        question: "HTML'da rasm manbasini ko'rsatish uchun qaysi atribut ishlatiladi?",
        options: [
            "alt",
            "src",
            "href",
            "link"
        ],
        answer: 1
    },
    {
        question: "HTML'da eng katta sarlavha qaysi teg bilan yoziladi?",
        options: [
            "<h6>",
            "<h3>",
            "<h1>",
            "<h4>"
        ],
        answer: 2
    },
    {
        question: "Gorizontal chiziq chizish uchun qaysi teg ishlatiladi?",
        options: [
            "<line>",
            "<hr>",
            "<br>",
            "<hl>"
        ],
        answer: 1
    },
    {
        question: "HTML'da izoh qo'shish uchun qaysi sintaksis ishlatiladi?",
        options: [
            "// Izoh",
            "/* Izoh */",
            "<!-- Izoh -->",
            "<! Izoh >"
        ],
        answer: 2
    },
    {
        question: "HTML'da forma yaratish uchun qaysi teg ishlatiladi?",
        options: [
            "<input>",
            "<form>",
            "<fieldset>",
            "<textarea>"
        ],
        answer: 1
    },
    {
        question: "HTML'da tushish menyusi uchun qaysi teg ishlatiladi?",
        options: [
            "<dropdown>",
            "<select>",
            "<option>",
            "<input>"
        ],
        answer: 1
    },
    {
        question: "Forma jo'natish uchun qaysi `input` turi ishlatiladi?",
        options: [
            "text",
            "submit",
            "button",
            "form"
        ],
        answer: 1
    },
    {
        question: "HTML'da video qo'shish uchun qaysi teg ishlatiladi?",
        options: [
            "<embed>",
            "<video>",
            "<media>",
            "<object>"
        ],
        answer: 1
    },
    {
        question: "Tashqi CSS faylni ulash uchun to'g'ri sintaksis qaysi?",
        options: [
            "<link rel='stylesheet' href='style.css'>",
            "<css href='style.css'>",
            "<style src='style.css'>",
            "<stylesheet link='style.css'>"
        ],
        answer: 0
    },
    {
        question: "HTML'da matnni qalin qilib ko'rsatish uchun qaysi teg ishlatiladi?",
        options: [
            "<strong>",
            "<b>",
            "<bold>",
            "<thick>"
        ],
        answer: 1
    },
    {
        question: "HTML'da qaysi teg bo'limlarni guruhlash uchun ishlatiladi?",
        options: [
            "<section>",
            "<div>",
            "<group>",
            "<span>"
        ],
        answer: 1
    },
    {
        question: "HTML'da kod blokini formatlash uchun qaysi teg ishlatiladi?",
        options: [
            "<code>",
            "<pre>",
            "<block>",
            "<syntax>"
        ],
        answer: 1
    },
    {
        question: "HTML'da yangi satr qo'shish uchun qaysi teg ishlatiladi?",
        options: [
            "<br>",
            "<hr>",
            "<line>",
            "<p>"
        ],
        answer: 0
    },
    {
        question: "HTML'da matnni chapga tekislash uchun qaysi CSS xususiyati ishlatiladi?",
        options: [
            "text-left",
            "align-left",
            "text-align",
            "float-left"
        ],
        answer: 2
    },
    {
        question: "HTML'da `<a>` tegi qanday vazifa bajaradi?",
        options: [
            "Matnni qalin qiladi",
            "Rasm joylashtiradi",
            "Giperhavola yaratadi",
            "Jadval yaratadi"
        ],
        answer: 2
    },
    {
        question: "HTML'da `<ol>` nima uchun ishlatiladi?",
        options: [
            "Tartibsiz ro'yxat uchun",
            "Tartiblangan ro'yxat uchun",
            "Jadval uchun",
            "Bo'lim ajratish uchun"
        ],
        answer: 1
    },
    {
        question: "HTML'da matnni markazga tekislash uchun qaysi CSS xususiyati ishlatiladi?",
        options: [
            "text-align: center;",
            "align-center;",
            "text-center;",
            "center: true;"
        ],
        answer: 0
    }
];

// css questions


const questions = [
    {
        question: "CSS nimani anglatadi?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 2
    },
    {
        question: "Qaysi HTML elementi ichida CSS yoziladi?",
        options: [
            "<css>",
            "<style>",
            "<stylesheet>",
            "<script>"
        ],
        answer: 1
    },
    {
        question: "Qaysi xususiyat matn rangini o'rnatadi?",
        options: [
            "font-color",
            "color",
            "text-color",
            "bg-color"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib tashqi CSS faylni ulash mumkin?",
        options: [
            "<link rel='stylesheet' href='style.css'>",
            "<css link='style.css'>",
            "<style> style.css </style>",
            "<script src='style.css'>"
        ],
        answer: 0
    },
    {
        question: "Qaysi xususiyat matnni markazga hizalaydi?",
        options: [
            "text-center",
            "text-align",
            "align-text",
            "justify"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib HTML fon rangini o'rnatish mumkin?",
        options: [
            "color",
            "bgcolor",
            "background-color",
            "background"
        ],
        answer: 2
    },
    {
        question: "CSS-da elementning kengligini o'rnatish uchun qaysi xususiyat ishlatiladi?",
        options: [
            "width",
            "max-width",
            "min-width",
            "height"
        ],
        answer: 0
    },
    {
        question: "Matnni qalin qilish uchun qaysi xususiyat ishlatiladi?",
        options: [
            "font-weight",
            "font-style",
            "text-bold",
            "font-color"
        ],
        answer: 0
    },
    {
        question: "Qanday qilib CSS'da matn ostiga chiziq chiziladi?",
        options: [
            "text-style: underline;",
            "text-decoration: underline;",
            "underline: true;",
            "font-decoration: underline;"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib CSS'da fon rasmi qo'shish mumkin?",
        options: [
            "background-image: url('image.jpg');",
            "image-background: url('image.jpg');",
            "background: image('image.jpg');",
            "image-url: 'image.jpg';"
        ],
        answer: 0
    },
    {
        question: "CSS'da elementga chegara qo'shish uchun qaysi xususiyat ishlatiladi?",
        options: [
            "border-style",
            "border-width",
            "border",
            "border-outline"
        ],
        answer: 2
    },
    {
        question: "Qaysi xususiyat elementning chetlarini o'rnatadi?",
        options: [
            "padding",
            "margin",
            "spacing",
            "border"
        ],
        answer: 1
    },
    {
        question: "Elementning ichki bo'shligini (padding) qanday o'rnatish mumkin?",
        options: [
            "padding",
            "margin",
            "spacing",
            "border"
        ],
        answer: 0
    },
    {
        question: "CSS'da qanday qilib gradient fon qo'shish mumkin?",
        options: [
            "background: gradient(red, blue);",
            "background: linear-gradient(red, blue);",
            "gradient: linear(red, blue);",
            "linear-gradient: background(red, blue);"
        ],
        answer: 1
    },
    {
        question: "Qaysi xususiyat blok elementni markazlashtiradi?",
        options: [
            "margin: auto;",
            "text-align: center;",
            "align-content: center;",
            "justify-content: center;"
        ],
        answer: 0
    },
    {
        question: "Qaysi xususiyat elementlarni yonma-yon joylashtiradi?",
        options: [
            "display: block;",
            "display: inline;",
            "display: flex;",
            "display: grid;"
        ],
        answer: 2
    },
    {
        question: "CSS'da qanday qilib elementga soyalar qo'shish mumkin?",
        options: [
            "box-shadow: 5px 5px 10px gray;",
            "shadow-box: gray;",
            "box: shadow gray;",
            "shadow: box gray;"
        ],
        answer: 0
    },
    {
        question: "Qaysi xususiyat matnning harflari orasidagi masofani o'rnatadi?",
        options: [
            "word-spacing",
            "letter-spacing",
            "text-spacing",
            "font-spacing"
        ],
        answer: 1
    },
    {
        question: "Qaysi xususiyatdan foydalanib, elementning aylana shaklini hosil qilish mumkin?",
        options: [
            "border-style: round;",
            "border-radius: 50%;",
            "circle: true;",
            "shape: circle;"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib hover effekti yaratish mumkin?",
        options: [
            "element.onhover",
            "element:hover",
            "hover(element)",
            "hover-effect"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib font ulash mumkin?",
        options: [
            "font-face: 'Arial';",
            "@font-family: Arial;",
            "@font-face { font-family: Arial; }",
            "font: Arial;"
        ],
        answer: 2
    },
    {
        question: "Flexbox'da elementlarni markazlashtirish uchun qaysi xususiyat ishlatiladi?",
        options: [
            "align-items: center;",
            "justify-content: center;",
            "A va B to'g'ri",
            "text-align: center;"
        ],
        answer: 2
    },
    {
        question: "CSS animatsiyalarni qanday qo'shish mumkin?",
        options: [
            "@keyframes",
            "animation-keyframe",
            "animation-play",
            "transition"
        ],
        answer: 0
    },
    {
        question: "CSS'da qanday qilib matnni kichik harfda ko'rsatish mumkin?",
        options: [
            "text-transform: lowercase;",
            "text-case: lower;",
            "font-case: lower;",
            "transform-text: lowercase;"
        ],
        answer: 0
    }
];


// Generate HTML and CSS questions
 


// JavaScript questions

 const questions2 = [
    {
        question: "JavaScript nimani anglatadi?",
        options: [
            "Java Server Pages",
            "Java Scripting Language",
            "JavaScript Programming Language",
            "Java Standalone Programming"
        ],
        answer: 2
    },
    {
        question: "Qaysi HTML elementi ichida JavaScript yoziladi?",
        options: [
            "<js>",
            "<scripting>",
            "<javascript>",
            "<script>"
        ],
        answer: 3
    },
    {
        question: "JavaScriptda o'zgaruvchi qanday e'lon qilinadi?",
        options: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
            "Barchasi to'g'ri"
        ],
        answer: 3
    },
    {
        question: "Qanday qilib 'Hello World'ni alert oynasida ko'rsatish mumkin?",
        options: [
            "alert('Hello World');",
            "window.alert('Hello World');",
            "msg('Hello World');",
            "A va B to'g'ri"
        ],
        answer: 3
    },
    {
        question: "JavaScriptda funksiyani qanday yaratamiz?",
        options: [
            "function myFunction() {}",
            "create myFunction() {}",
            "def myFunction() {}",
            "myFunction = function() {}"
        ],
        answer: 0
    },
    {
        question: "JavaScriptda matnni qanday o'zlashtirish mumkin?",
        options: [
            "text = 'Hello';",
            "let text = 'Hello';",
            "var text = 'Hello';",
            "Barchasi to'g'ri"
        ],
        answer: 3
    },
    {
        question: "JavaScriptda massiv qanday e'lon qilinadi?",
        options: [
            "let myArray = [];",
            "let myArray = {};",
            "let myArray = ();",
            "let myArray = array();"
        ],
        answer: 0
    },
    {
        question: "Qanday qilib massivning birinchi elementini olish mumkin?",
        options: [
            "myArray(1);",
            "myArray[0];",
            "myArray.first;",
            "myArray.getFirst();"
        ],
        answer: 1
    },
    {
        question: "JavaScriptda sikl (loop) qanday boshlanadi?",
        options: [
            "loop(i=0; i<5; i++)",
            "for (let i=0; i<5; i++)",
            "while(i=0; i<5; i++)",
            "forEach (let i=0; i<5; i++)"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib sharh yoziladi?",
        options: [
            "// Bu sharh",
            "<!-- Bu sharh -->",
            "/* Bu sharh */",
            "** Bu sharh **"
        ],
        answer: 0
    },
    {
        question: "JavaScriptda shartli operator qaysi?",
        options: [
            "if else",
            "switch",
            "for",
            "A va B to'g'ri"
        ],
        answer: 3
    },
    {
        question: "Qanday qilib console log yoziladi?",
        options: [
            "console.log('Hello')",
            "log.console('Hello')",
            "console('Hello')",
            "print('Hello')"
        ],
        answer: 0
    },
    {
        question: "JavaScriptda qanday string metod mavjud?",
        options: [
            "toUpperCase()",
            "toLowerCase()",
            "concat()",
            "Barchasi to'g'ri"
        ],
        answer: 3
    },
    {
        question: "JavaScriptda 'let' va 'const' farqi nima?",
        options: [
            "'let' o'zgaruvchi qayta o'zlashtiriladi, 'const' esa o'zgarmaydi",
            "Ikkalasi bir xil",
            "'const' vaqtinchalik qiymat uchun ishlatiladi",
            "'let' faqat stringlar uchun ishlatiladi"
        ],
        answer: 0
    },
    {
        question: "Qanday qilib sahifa yuklangandan keyin funksiya ishga tushadi?",
        options: [
            "window.onload = function() {}",
            "function onLoad() {}",
            "document.ready()",
            "loadWindow()"
        ],
        answer: 0
    },
    {
        question: "Qanday qilib elementga id orqali murojaat qilinadi?",
        options: [
            "document.getElement('id')",
            "document.getElementById('id')",
            "document.get('#id')",
            "document.id('id')"
        ],
        answer: 1
    },
    {
        question: "JavaScriptda qanday o'zgartirish kiritish mumkin?",
        options: [
            "document.getElementById('id').innerHTML = 'Hello';",
            "document.getElementById('id').text = 'Hello';",
            "document.getElement('id').value = 'Hello';",
            "document.getElementByClass('id').text = 'Hello';"
        ],
        answer: 0
    },
    {
        question: "JavaScriptda qaysi xatolikni ushlash uchun ishlatiladi?",
        options: [
            "try...catch",
            "if...else",
            "errorHandler()",
            "tryCatch()"
        ],
        answer: 0
    },
    {
        question: "JavaScriptda DOM nimani anglatadi?",
        options: [
            "Document Object Model",
            "Data Object Management",
            "Document Oriented Model",
            "Dynamic Object Manipulation"
        ],
        answer: 0
    },
    {
        question: "JavaScriptda qanday Event Listener qo'shish mumkin?",
        options: [
            "element.onClick()",
            "element.addEventListener('click', function() {})",
            "click.element()",
            "document.clickEvent()"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib interval bilan kod ishga tushiriladi?",
        options: [
            "setTimeout()",
            "setInterval()",
            "setTime()",
            "runEvery()"
        ],
        answer: 1
    },
    {
        question: "JavaScriptda ob'ekt qanday yaratiladi?",
        options: [
            "let person = new Object();",
            "let person = {};",
            "let person = Object.create();",
            "let person = object();"
        ],
        answer: 1
    },
    {
        question: "Qanday qilib massivning oxirgi elementini olish mumkin?",
        options: [
            "myArray.last;",
            "myArray[-1];",
            "myArray[myArray.length - 1];",
            "myArray.getLast();"
        ],
        answer: 2
    },
    {
        question: "JavaScriptda qiymatni qanday o'chirish mumkin?",
        options: [
            "delete x;",
            "x = null;",
            "x = undefined;",
            "Barchasi to'g'ri"
        ],
        answer: 3
    }
];




let selectedQuestions = []; // To store randomly selected questions
let currentQuestionIndex = 0;
let score = 0;

// Function to get 10 random questions
function getRandomQuestions() {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

// Initialize the quiz with random questions
function startQuiz() {
    selectedQuestions = getRandomQuestions();
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Load Current Question
function loadQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((button, index) => {
        button.innerText = currentQuestion.options[index];
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });

    document.getElementById('score').innerText = `Ball: ${score}`;
    document.getElementById('result-section').style.display = 'none';
}

// Check Answer
function checkAnswer(selectedIndex) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === currentQuestion.answer) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('wrong');
        }
    });

    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    document.getElementById('score').innerText = `Ball: ${score}`;
}

// Move to the Next Question or Show Results
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show Results (No Correct Answers Displayed)
function showResults() {
    document.getElementById('final-score').innerText = `Final Score: ${score} / ${selectedQuestions.length}`;

    // Hides all answers and only displays score
    document.getElementById('all-answers').style.display = 'none';

    document.getElementById('result-section').style.display = 'block';
    document.querySelector('.next-btn').style.display = 'none';
}

// Restart the Quiz
function startAgain() {
    startQuiz();
    document.querySelector('.next-btn').style.display = 'block';
    document.getElementById('all-answers').style.display = 'none';
}

// Start the quiz on page load
startQuiz();