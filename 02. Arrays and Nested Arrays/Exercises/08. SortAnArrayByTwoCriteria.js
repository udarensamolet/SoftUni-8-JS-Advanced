function sortAnArrayByTwoCriteria(input) {
    input.sort((a, b) => a.length - b.length === 0 ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()) : a.length - b.length);

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}