function splitArray(array)
{
    word = "";
    results = [];
    for (let i = 0; i < array.length; i++)
    {
        
        if (((word + array[i]).length > 15) || i == array.length - 1)
        {
            results.push(word);
            word = array[i];
        }
        else
        {
            if (word == "")
            {
                word += array[i];
            }
            else
            {
                word += " " + array[i];
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
        if (conditions[i] == "LEFT")
        {
            if (arr[i].join(" ").length < 16)
            {
                result.push("*" + arr[i].join(" ") + string.slice(arr[i].join(" ").length) + "*")
            }
            else
            {
                words = splitArray(arr[i]);
                
                for (let j = 0; j < words.length; j++)
                {
                    result.push("*" + words[j] + string.slice(words[j].length) + "*")
                }
            }
        }
        else
        {
            if (arr[i].join(" ").length < 16)
            {
                result.push("*"  + string.slice(arr[i].join(" ").length) + arr[i].join(" ") + "*")
            }
            else
            {
                words = splitArray(arr[i]);
                
                for (let j = 0; j < words.length; j++)
                {
                    result.push("*" + string.slice(words[j].length) + words[j] + "*")
                }
            }
        }
    }
    result.push("******************");
    return result 
}





array = [["Hello", "world"], ["Brad", "came", "to", "dinner", "with", "us"], ["He", "loves", "tacos"]];



conditions = ["LEFT", "RIGHT", "LEFT"];
console.log(format(array, conditions));