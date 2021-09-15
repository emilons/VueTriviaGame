
export const getTriviaCategories = async () => {
    try {
        const {results} = await fetch('https://opentdb.com/api_category.php')
            .then(r => r.json())
        return [null, results];

    }
    catch (e) {
        return [e.message, null];
    }
}

export const getTriviaGame = async () => {
    try {
        //
    }
    catch (e) {
        //
    }
}