function checkIfContainsNumbers(matrix)
{
    let result = []
    for (let j = 0; j <= matrix[0].length; j++)
    {
        region = [];
        for (let i = 0; i < matrix.length; i++)
        {
            
            region.push(matrix[i].slice(0, 3));
            matrix[i].shift();
        }
        let results = []
        for (let number = 1; number <= 9; number++)
        {
            let check = false;
            outer: for (let k = 0; k < 3; k++)
            {
                for (let l = 0; l < 3; l++)
                {
                    
                    if (number == region[k][l])
                    {
                        results.push(true);
                        break outer;
                    }
                    
                    
                }
            }
            
            
        }
        if (results.length == 9)
        {
            result.push(true);
        }
        else
        {
            result.push(false);
        }
    }
    return(result)
}

console.log(checkIfContainsNumbers([[1, 2, 3, 2, 7], [4, 5, 6, 8, 1], [7, 8, 9, 4, 5]]));