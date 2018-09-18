import { AsyncStorage } from 'react-native'

export const DECK_KEY = 'flashcards:decks'

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
    // return new Promise(function (resolve, reject) {
    //     resolve(decks);
    // })
    return AsyncStorage.getItem(DECK_KEY).then((results) => {
        return JSON.parse(results)
    })
}

export const createDeck = (deck) => {
    return AsyncStorage.getItem(DECK_KEY)
        .then((results) => {
            let decks = []
            if (!results) {
                decks = JSON.parse(results)
            }
            decks.push(deck)
            AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks))
        }).catch((error) => {
            let decks = [deck]
            AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks))
        })
}

export const save = (key, item) => {
    return AsyncStorage.setItem(key, item)
}

export const addQuestionToDeck = (question, deck) => {
    return AsyncStorage.getItem(DECK_KEY)
        .then((results) => {
            let decks = JSON.parse(results)
            const deckToAdd = decks.find(d => d.id === deck.id)
            deckToAdd.questions.push(question)
            decks = decks.filter((d) => d.id !== deck.id).concat([deckToAdd]);
            AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks))
        })
}

export const remove = (item) => {
    return AsyncStorage.removeItem(item)
}