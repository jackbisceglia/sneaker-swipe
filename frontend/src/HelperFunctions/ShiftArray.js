const shiftArray = (arr) => {
    let newArr = [...arr];
    newArr.shift();
    return [...newArr];
}

export default shiftArray;