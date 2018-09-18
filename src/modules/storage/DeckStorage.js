let decks = [{
    "id": 1,
    "title": "Java",
    "questions": [{
        "question": "Oh nana, what's my name?",
        "answer": "Rihanna"
    }]
},
{
    "id": 2,
    "title": "Javascript",
    "questions": []
}]

export const getAllDecks = () => {
    return new Promise(function (resolve, reject) {
        resolve(decks);
    })
}

export const createDeck = (name) => {
    decks.push({
        id: new Date().getTime(),
        title: name,
        questions: []
    })

    return new Promise(function (resolve, reject) {
        resolve(decks);
    })
}

export const addQuestionToDeck = (question, deck) => {
    const deckToAdd = decks.find(d => d.id === deck.id)
    deckToAdd.questions.push(question)
    decks = decks.filter((d) => d.id !== deck.id).concat([deckToAdd]);
    return new Promise(function (resolve, reject) {
        resolve(decks);
    })
}