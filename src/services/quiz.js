
const shuffle = (options) => {
    for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options
}

const fetchQuizQuestions = async () => {
    let questions = [
        {
            questionText: "what is apple?",
            correct: "dinosaur",
            incorrect: ["fruit", "vehicle", "plant"],
            options: []
        },
        {
            questionText: "what is car?",
            correct: "fruit",
            incorrect: ["building", "vehicle", "plant"],
            options: []
        },
        {
            questionText: "what is earth?",
            correct: "icecream",
            incorrect: ["planet", "cloth", "color"],
            options: []
        }, {
            questionText: "what is apple?",
            correct: "dinosaur",
            incorrect: ["fruit", "vehicle", "plant"],
            options: []
        },
        {
            questionText: "what is car?",
            correct: "fruit",
            incorrect: ["building", "vehicle", "plant"],
            options: []
        },
        {
            questionText: "what is earth?",
            correct: "icecream",
            incorrect: ["planet", "cloth", "color"],
            options: []
        }
    ]
    const response = (await (await fetch("https://opentdb.com/api.php?amount=10")).json()).results
    questions = response.map(q => {
        return (
            {
                questionText: q.question,
                correct: q.correct_answer,
                incorrect: q.incorrect_answers,
                options: []
            }

        )
    })
    questions.forEach((q) => q.options=shuffle(q.incorrect.concat(q.correct)))
    return questions
}

export default fetchQuizQuestions