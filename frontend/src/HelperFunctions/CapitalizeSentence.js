const capitalizeSentence = (sentence) => {
    return sentence.split(" ").map(curr => `${curr.charAt(0).toUpperCase()}${curr.slice(1)}`).join(" ");
}

export default capitalizeSentence;