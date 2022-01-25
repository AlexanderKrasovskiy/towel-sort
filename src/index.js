module.exports = function towelSort (matrix = []) {
    let result = [];
    
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            result = [...result, ...matrix[i]]
        } else if (i % 2 === 1) {
            result = [...result, ...matrix[i].reverse()]
        }
    }

    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         let colIdx = (i % 2 === 0)
    //             ? j
    //             : (matrix[i].length - 1 - j);
            
    //         result.push(matrix[i][colIdx])
    //     }
    // }

    return result
};
