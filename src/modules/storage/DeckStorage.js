export const getAllDecks = () => {
    return new Promise(function (resolve, reject) {
        resolve([{
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
        );
    })
}