function checkTheCondition(array)
{
    result = [];
    while (array.length != 0)
    {
        
        let groupArray = array.slice(0, 3);
        array.shift();
        if (array.length >= 2)
        {
            if ((groupArray[0] > groupArray[1] && groupArray[1] < groupArray[2]) || (groupArray[0] < groupArray[1] && groupArray[1] > groupArray[2]))
            {
                result.push(1);
            }
            else
            {
                result.push(0);
            }
        }
    }
    return result
}


console.log(checkTheCondition([1, 3, 5, 4, 5, 7]));

