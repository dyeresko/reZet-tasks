function filterInput(array)
{
    words = "";
    results = [];
    for (let i = 0; i < array.length; i++)
    {
        
        if (((words + array[i]).length > 15) || i == array.length - 1)
        {
            results.push(words);
            words = array[i];
        }
        else
        {
            if (words == "")
            {
                words += array[i];
            }
            else
            {
                words += " " + array[i];
            }
        }
    
        
    }
    return results;
    
}


function format(arr, conditions)
{
    result = ["******************"]
    string = "                ";
    for (let i = 0; i < conditions.length; i++)
    {
        
        words = filterInput(arr[i]);
        if (conditions[i] == "LEFT")
        {
            for (let j = 0; j < words.length; j++)
            {
                result.push("*" + words[j] + string.slice(words[j].length) + "*")
            }        
        }
        else
        {
            for (let j = 0; j < words.length; j++)
            {
                result.push("*" + string.slice(words[j].length) + words[j] + "*")
            }
        }
        
    }
    result.push("******************");
    return result 
}

array = [["Hello", "world"], ["Brad", "came", "to", "dinner", "with", "us"], ["He", "loves", "tacos"]];

conditions = ["LEFT", "RIGHT", "LEFT"];
console.log(format(array, conditions));