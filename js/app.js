const questions = [
    {
        'que':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'Java',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'Which programming language is known for its use in data analysis and statistics?',
        'a': 'Python',
        'b': 'C++',
        'c': 'Ruby',
        'd': 'JavaScript',
        'correct': 'a'
    },
    {
        'que': 'Which protocol is used for secure communication over the internet, often seen in website URLs starting with "https://"?',
        'a': 'FTP',
        'b': 'HTTP',
        'c': 'SMTP',
        'd': 'SSL/TLS',
        'correct': 'd'
    },
    {
        'que': 'Which of the following is a relational database management system?',
        'a': 'MongoDB',
        'b': 'SQLite',
        'c': 'Redis',
        'd': 'Elasticsearch',
        'correct': 'b'
    },
    {
        'que': 'Which programming language is primarily used for building mobile applications?',
        'a': 'Swift',
        'b': 'Python',
        'c': 'Perl',
        'd': 'Rust',
        'correct': 'a'
    },
    {
        'que': 'Which web development framework is often used for building dynamic single-page applications?',
        'a': 'React',
        'b': 'jQuery',
        'c': 'Angular',
        'd': 'Bootstrap',
        'correct': 'a'
    }        
]

let index = 0
let total = questions.length
let right=0,
wrong=0
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
const loadQue = () =>{
    if(index===total){
        return endQuiz()
    }
    reset()
    const data= questions[index]
    queBox.innerText= ` ${index+1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}

const submitQuiz=()=>{
    const data = questions[index]
    const ans = getAnswer()

    if(ans === data.correct) {
        right++
    }
    else{
        wrong++
    }
    index++;
    loadQue()
    return
}

const getAnswer = () =>{
    let answer
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value
            }
        }
    )
    return answer
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )

}

const endQuiz = () =>{
    document.getElementById("box").innerHTML=`
    <h3> Thank you for playing quez</h3><br>
    <h2>${right}/${total} are correct ✅</h2>
    <h2>${wrong}/${total} are incorrect ❌</h2>
    `
}

loadQue();