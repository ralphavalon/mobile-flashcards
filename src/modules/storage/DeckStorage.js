export const getAllDecks = () => {
    return new Promise(function (resolve, reject) {
        resolve([{
            "id": "1",
            "name": "Java",
            "cards": ["1"]
        },
        {
            "id": "2",
            "name": "Javascript",
            "cards": []
        }]
        );
    })
}