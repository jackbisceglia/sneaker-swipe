const pluralize = (num, word) => {
    return num === 1
        ?
        word
        :
        `${word}s`;
}

export default pluralize;