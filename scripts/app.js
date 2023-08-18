
// DOM ELEEMNTS

const homePage = document.getElementById('home-page')
const homePageContent = document.querySelector('.home-page-content')
const questionSection = document.getElementById('question-section')
const resultSection = document.getElementById('result-section')

// ARRAYS

const questionsArray = [
    // easy category questions
        [   
            {
                question: 'Z ktorého mesta pochádzal Maestro?',
                answers: [
                    'prievidza',
                    'topoľčany',
                    'hlohovec',
                ],
                correctAnswerIndex: 0,
            },
            {
                question: 'Akú surovinu nemala maestrová družka doma 22.?',
                answers: [
                    'Soľ',
                    'Cibulu',
                    'Chlieb',
                ],
                correctAnswerIndex: 1,
            },
            {
                question: 'Akým vulgarizmom označil Maestro svoju družku v nahrávke Cibula?',
                answers: [
                    'Piča',
                    'Marha',
                    'Opica Neramotná',
                ],
                correctAnswerIndex: 1,

            },
            {
                question: 'Akou formou likvidácie sa vyhrážal Mestro svojim susedom?',
                answers: [
                    'Odpálením Plynu',
                    'Sekerou',
                    'Zastrelením',
                ],
                correctAnswerIndex: 0,
            },
            {
                question: 'Akú dobu po výplate nemala Maestrová družka cibulu?',
                answers: [
                    'Týžden',
                    '3 týždne',
                    '2 týždne',
                ],
                correctAnswerIndex: 2,
            },
            {
                question: 'Čo sa nedalo odpisovať, kvôli padajúcemu brizolitu?',
                answers: [
                    'Hodiny',
                    'Mená na zvončeku',
                    'Nákupný zoznam',
                ],
                correctAnswerIndex: 0,
            },
            {
                question: 'Pre čo išla Maestrová družka v daždi do mesta?',
                answers: [
                    '500 korun',
                    'Mlieko',
                    'Vajcia',
                ],
                correctAnswerIndex: 0,
            },
            {
                question: 'Akú prezývku mala Maestrova družka',
                answers:[
                    'Ježibaba',
                    'Čarodejnica',
                    'Etela',
                ],
                correctAnswerIndex: 2,
            },
            {
                question: 'Akým nožom chcel zabiť Maestro kokota čo po ňom kričal?',
                answers: [
                    'Bodákom',
                    'Motýlikom',
                    'Kuchynským',
                ],
                correctAnswerIndex: 0,
            },
            {
                question: 'Ako sa volali maestrovi susedia?',
                answers: [
                    'Novákovci',
                    'Šarinovci',
                    'Toráčovci',
                ],
                correctAnswerIndex: 1,
            }
        ],

    // harder category questions

    [
        {
            question: 'Čo napchali Šarinovci Maestrovi do zámku?',
            answers: [
                'Zápalky',
                'Špáradlá',
                'Lepidlo',
            ],
            correctAnswerIndex: 0,
        }, 
        {
            question: 'Koľkatý krát vytopili Maestra susedia?',
            answers: [
                'Desiaty',
                'Piaty',
                'Tretí',
            ],
            correctAnswerIndex: 0,

        }, 
        {
            question: 'Čo podpísala Etela bez Maestrovho vedomia?',
            answers: [
                'Nájomnú Zmluvu',
                'Žiacku Knižku',
                'Pôžičku',
            ],
            correctAnswerIndex: 1,
        }, 
        {
            question: 'Čo neoprala Maestrovi Etela?',
            answers: [
                'Tepláky',
                'Trenky',
                'Monterky',
            ],
            correctAnswerIndex: 2,
        },
        {
            question: 'Čo považoval Maestro za hlavné jedlo?',
            answers: [
                'Držkovú',
                'Soľ',
                'Chren',
            ],
            correctAnswerIndex: 1,
        },
        {
            question: 'Kam chcel ísť Maestro pozerať televízor?',
            answers: [
                'Na rieku Nitru',
                'Do pivnice',
                'Na strechu',
            ],
            correctAnswerIndex: 0,
        },
        {
            question: 'Čo rozčúlilo Maestra v nahrávke Varenie?',
            answers: [
                'Prihorené jedlo',
                'Že Etela varí, keď nikto nie je doma',
                'Že Etela nevarí keď je niekto doma',
            ],
            correctAnswerIndex: 1,
        },
        {
            question: 'Kde spoznal Maestro svoju družku Etelu?',
            answers: [
                'V krčme',
                'V base',
                'Na hoteli Hviezda na zábave',
            ],
            correctAnswerIndex: 2,
        },
        {
            question: 'S kým hral syn Peter tenis?',
            answers: [
                'S cigáňma',
                'S feťákmi',
                'S Hendžom',
            ],
            correctAnswerIndex: 0,
        },
        {
            question: 'Čo ostalo Maestrovi v rukách?',
            answers: [
                'Klúčka',
                'Dvere',
                'Okno',
            ],
            correctAnswerIndex: 1,
        },
    ],

    // hardest category questions
    
    [
        {
            question: 'Aká potravina mohla Maestrovi spôsobiť zažívacie ťažkosti?',
            answers: [
                'Kozacie Mlieko',
                'Kolienka s hríbama',
                'Krky jedny',
            ],
            correctAnswerIndex: 0,
        }, 
        {
            question: 'Kam mal ísť Maestro kúpiť Chren kvôli Etelinmu nesprávnemu skladovaniu?',
            answers: [
                'Do kauflandu',
                'Do Laskára',
                'Na trh',
            ],
            correctAnswerIndex: 1,

        }, 
        {
            question: '"Potom prišiel oný..."',
            answers: [
                'Noha',
                'Hendžo',
                'Kokot koktavý',
            ],
            correctAnswerIndex: 0,
        }, 
        {
            question: 'Kde bol ten kokot koktavý?',
            answers: [
                'V márnici',
                'Na Magure',
                'V tej Prahe Bratislave',
            ],
            correctAnswerIndex: 2,
        },
        {
            question: 'Ry.. oné',
            answers: [
                'Hrach',
                'Šošovica',
                'Fazuľa',
            ],
            correctAnswerIndex: 0,
        },
        {
            question: 'Kam chcel ísť Maestro pozerať televízor?',
            answers: [
                'Na rieku Nitru',
                'Do pivnice',
                'Na strechu',
            ],
            correctAnswerIndex: 0,
        },
        {
            question: 'Čo nebolo doma byte, kvôli tomu, že mali Meliškovci cigáňov byte?',
            answers: [
                'Košík na smeti',
                'Cukor',
                'Budík',
            ],
            correctAnswerIndex: 0,
        },
        {
            question: 'Akú funkciu mal Maestro vo výkone trestu',
            answers: [
                'Udržbár',
                'Brigadír',
                'Upratovač',
            ],
            correctAnswerIndex: 1,
        },
        {
            question: 'Čo spôsobilo predčasné úmrtie Miška 2.?',
            answers: [
                'Prisadnutie',
                'Jedol sukor, to nemoše',
                'Dehydratácia',
            ],
            correctAnswerIndex: 1,
        },
        {
            question: 'Kde mal maestro s tyma páskama tie modré gate?',
            answers: [
                'Za gaučom',
                'V kúpelni na drote',
                'Na okne',
            ],
            correctAnswerIndex: 1,
        },
    ]
    
]

const resultsArray = [

    // first category results

    [
        {
            category: 'Začiatočník',
            conclusion: 'Hoci máš plný počet bodov, musíš na sebe pracovať'
        },

        {
            category: 'Opica Negramotná',
            conclusion: 'Nedosiahnut v tejto kategorii plný počet je ostuda'
        },

        {
            category: 'No toto neni možné',
            conclusion: 'Vieš vôbec kto bol Ladislav Meliško?'
        }
    ],

    // second cateory results

    [
        {
            category: 'Velký Kokot',
            conclusion: 'Máš celkom prehlad, ale Dzurindovi do kancelárie ešte ísť nemôžeš'
        },

        {
            category: 'Mierne pokročilý',
            conclusion: 'Negramotný nie si, ale nie je to žiadna sláva'
        },

        {
            category: 'Slabota',
            conclusion: 'Máš veľmi slabý prehlad, hybadj do piče odomňa a choď na doučovanie'
        }
    ],

    // third category results

    [
        {
            category: 'Král Šumavy',
            conclusion: 'Isto máš deavať tried a tri roky učilišťa, môžeš ísť Dzurindovi do kancelárie'
        },

        {
            category: 'Stály Bôbar',
            conclusion: 'V tejto kategorii je to solidný výsledok, isto by si neprejebal jak Etela'
        },

        {
            category: 'Slabota',
            conclusion: 'Ešte ti treba doučovanie'
        }
    ],


]

    // result cateories array

    const resultCategoriesArray = ['ľahká', 'stredná', 'ťažká']

// FUNCTIONS

// general functions

// show and hide functions

    function show(element) {
        element.classList.remove('hide')
    }

    function hide(element) {
        element.classList.add('hide')
    }

// animations

    function slideDown(element) {
        element.style.animation = 'slide-down .8s ease-in-out forwards'
    }

    function fadeIn(element) {
        element.style.animation = 'fade-in .4s ease-in-out forwards'

        setTimeout(()=>{
            show(element)
        },400)
    }

    function fadeOut(element) {
        element.style.animation = 'fade-out .4s ease-in-out forwards'

        setTimeout(()=>{
            hide(element)
        },400)
    }

// app functions

    // load home page

    function loadHomePage() {
        slideDown(homePageContent)
    }

    // show options

    const optionsList = document.querySelector('.options-list')
    const options = document.querySelectorAll('.dificulty-option')

    function rollOptions() {
        let optionsListActivity = undefined

        if(optionsList.classList.contains('options-list-slide-down')){
            optionsListActivity = true
        } else if(!optionsList.classList.contains('options-list-slide-down')){
            optionsListActivity = false
        }

        optionsList.classList.toggle('options-list-slide-down')

        options.forEach(element=>{
            if (optionsListActivity == false) {
                show(element)    
                fadeIn(element)
            } else if(optionsListActivity == true){
                fadeOut(element)
                hide(element)
            }
       })
    }

    // select option
    const title = document.querySelector('.title')
    let selectedOptionIndex = undefined

    function selectOption(selectedOption) {
        selectedOptionIndex = parseFloat(selectedOption.dataset.index)
        title.innerHTML = selectedOption.innerHTML
    }

    const questionElement = document.getElementById('question')
    const answersList = document.querySelector('.answers-list')
    const answers = document.querySelectorAll('.answer')
    const dificultyErrorAlert = document.getElementById('dificulty-error-alert')

    // start test

    function startTest() {

        if(selectedOptionIndex == undefined){
            show(dificultyErrorAlert)
            return
        } else{
            hide(dificultyErrorAlert)
        }

        questionElement.innerHTML = questionsArray[selectedOptionIndex][0].question
        answers[0].innerHTML = questionsArray[selectedOptionIndex][0].answers[0]
        answers[1].innerHTML = questionsArray[selectedOptionIndex][0].answers[1]
        answers[2].innerHTML = questionsArray[selectedOptionIndex][0].answers[2]

        fadeOut(homePage)

        setTimeout(()=>{
            fadeIn(questionSection)
        },400)

        title.innerHTML = 'Zvol si obťiažnosť'
    }    

    // next and previous question question

    const errorAlert = document.getElementById('error-alert')

    let actualQuestionIndex = 0
    let nextQuestion
    let nextAnswers

    function showNextQuestion() {

        // check if checkbox is checked
        let answered = undefined

        checkBoxes.forEach(checkbox =>{
           if(checkbox.checked){
                answered = true
           }
        })

        if(answered != true){
            show(errorAlert)
            return
        }

        hide(errorAlert)

        // uncheck previous answer

        checkBoxes.forEach(checkbox=>{
            checkbox.checked = false
        })

        // show next question

        actualQuestionIndex++

        nextQuestion = questionsArray[selectedOptionIndex][actualQuestionIndex].question
        nextAnswers = questionsArray[selectedOptionIndex][actualQuestionIndex].answers  

        questionElement.innerHTML = nextQuestion
        answers[0].innerHTML = nextAnswers[0]
        answers[1].innerHTML = nextAnswers[1]
        answers[2].innerHTML = nextAnswers[2]

        // show end of quiz 

        if (actualQuestionIndex == 9){
            nextQuestionBtn.innerHTML = 'Vyhodnotiť kvíz'
            nextQuestionBtn.classList.add('end-quiz')
        }
    }

    let prevQuestion
    let prevAnswers

    function showPreviousQuestion() {
        actualQuestionIndex--

        prevQuestion = questionsArray[selectedOptionIndex][actualQuestionIndex].question
        prevAnswers = questionsArray[selectedOptionIndex][actualQuestionIndex].answers

        questionElement.innerHTML = prevQuestion
        answers[0].innerHTML = prevAnswers[0]
        answers[1].innerHTML = prevAnswers[1]
        answers[2].innerHTML = prevAnswers[2]

    }

    // check answer 

    const checkBoxes = document.querySelectorAll('.answers-checkbox')

    let correctAnswersCount = 0
    let checkedAnswerIndex = undefined

    function checkAnswer(checkedAnswer) {
        checkedAnswerIndex = parseFloat(checkedAnswer.dataset.index)

        checkBoxes.forEach(element=>{
            if(element != checkedAnswer){
                element.checked = false
            }
        })

        if(checkedAnswerIndex == questionsArray[selectedOptionIndex][actualQuestionIndex].correctAnswerIndex){
            correctAnswersCount++
        }
    }

    // question counter

    const questionNumberElement = document.getElementById('question-number')

    function questionCounter() {
        questionNumberElement.innerHTML = actualQuestionIndex + 1
    }

    // end quiz

    function endQuiz() {

            // check if checkbox is checked
            let answered = undefined

            checkBoxes.forEach(checkbox =>{
               if(checkbox.checked){
                    answered = true
                    }
                })
        
                if(answered != true){
                    show(errorAlert)
                    return
                }
        
                hide(errorAlert)

        fadeOut(questionSection)

        setTimeout(()=>{
            hide(questionSection)
            fadeIn(resultSection)
            show(resultSection)
        },400)

        checkBoxes.forEach(checkbox=>{
            checkbox.checked = false
        })
    }

    // result

    const rightAnswersCount = document.getElementById('result')
    const resultCategory = document.getElementById('category')
    const resultConclusion = document.getElementById('conclusion')
    const resultCategoryElement = document.getElementById('result-category')
    let resultIndex
    let categoryIndex

    function showResult() {

        // calaculate result

            categoryIndex = selectedOptionIndex    

            // easy category

            if(categoryIndex == 0){

                if(correctAnswersCount == 10){
                    resultIndex = 0
                    console.log(resultIndex)
                }
    
                if(correctAnswersCount < 10 && correctAnswersCount > 7){
                    resultIndex = 1
                    console.log(resultIndex)
                }
    
                if(correctAnswersCount < 7){
                    resultIndex = 2
                    console.log(resultIndex)
                }
            }

            // harder category

            if(categoryIndex == 1){
                if(correctAnswersCount == 10){
                    resultIndex = 0
                }
    
                if(correctAnswersCount < 10 && correctAnswersCount > 6){
                    resultIndex = 1
                }
    
                if(correctAnswersCount < 6){
                    resultIndex = 2
                }
            }

            // hardest category

            if(categoryIndex == 2){
                if(correctAnswersCount == 10){
                    resultIndex = 0
                }
    
                if(correctAnswersCount < 10 && correctAnswersCount > 6){
                    resultIndex = 1
                }
    
                if(correctAnswersCount < 6){
                    resultIndex = 2
                }
            }

        rightAnswersCount.innerHTML = correctAnswersCount
        resultCategory.innerHTML = resultsArray[categoryIndex][resultIndex].category
        resultConclusion.innerHTML = resultsArray[categoryIndex][resultIndex].conclusion 
        resultCategoryElement.innerHTML = resultCategoriesArray[categoryIndex]    
    }

    // try again

    function tryAgain() {
        fadeOut(resultSection)

        setTimeout(()=>{
            hide(resultSection)
            fadeIn(homePage)
            show(homePage)
        },400)

        actualQuestionIndex = 0
        nextQuestionBtn.innerHTML = 'Ďalšia otázka'
        nextQuestionBtn.classList.remove('end-quiz')
        actualQuestionIndex = 0
        questionNumberElement.innerHTML = actualQuestionIndex +1
        correctAnswersCount = 0
    }

// EVENTS

// load home page

    window.addEventListener('load', (event)=>{
        loadHomePage()
    })

// show options and save chosen option

    document.addEventListener('click', (event)=>{
        if(event.target.classList.contains('select-title') || event.target.classList.contains('select-icon') || event.target.classList.contains('title')){
            rollOptions()
        }
    })

    options.forEach(element=>{
        element.addEventListener('click', (event)=>{
            selectOption(event.target)
            rollOptions()
        })
    })

// start test

    const startTestBtn = document.getElementById('dificulty-sub-btn')

    startTestBtn.addEventListener('click', ()=>{
        startTest()
    })

    document.addEventListener('keyup', (event)=>{
        if(event.key === 'Enter'){
            startTest()
        }
    })

// check answer


    checkBoxes.forEach(element=>{
        element.addEventListener('click', (event)=>{
            checkAnswer(event.target)
        })
    })

// next and previous questions

    const nextQuestionBtn = document.getElementById('next-question')

    nextQuestionBtn.addEventListener('click', (event)=>{
        if(event.target.classList.contains('end-quiz')){
            endQuiz()
            showResult()
        } else{
            showNextQuestion()
            questionCounter()
        }
    })

    const prevQuestionBtn = document.getElementById('prev-question')
    
    prevQuestionBtn.addEventListener('click', ()=>{
        showPreviousQuestion()
        questionCounter()
    })

    // try again

    const tryAgainBtn = document.getElementById('try-again-btn')

    tryAgainBtn.addEventListener('click', ()=>{
        tryAgain()
    })
    
