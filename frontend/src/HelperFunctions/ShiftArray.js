const shiftArray = (arr) => {
    let newArr = [...arr];
    const el = newArr.shift();
    return [...newArr, el];
}

export default shiftArray;