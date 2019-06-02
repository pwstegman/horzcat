/**
 * Horizontally concatenate 2D arrays
 * @param  {...Array} matrices - The arrays to concatenate
 * @returns {Array} A new array with all values concatenated
 */
function horzcat(...matrices) {
    // Number of rows in first matrix
    // As each matrix should have same number of rows
    let rows = matrices[0].length;

    // Validate each matrix has same number of rows
    for(let i = 1; i < matrices.length; i++) {
        if(matrices[i].length != rows) {
            throw new Error('Arrays must all have the same number of rows');
        }
    }

    // Calculate the total number of columns
    let cols = matrices[0][0].length;
    for(let i = 1; i < matrices.length; i++){
        cols += matrices[i][0].length;
    }

    let result = new Array(rows);
    for(let r = 0; r < rows; r++){
        result[r] = new Array(cols);

        let column_offset = 0;
        for(let m = 0; m < matrices.length; m++){
            for(let c = 0; c < matrices[m][0].length; c++){
                result[r][c + column_offset] = matrices[m][r][c];
            }
            column_offset += matrices[m][0].length;
        }
    }

    return result;
}

module.exports = horzcat;
