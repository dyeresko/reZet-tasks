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
                let words = arr[i].reduce((word, element) => 
                {
                    let len = word.length;
                    if (len === 0 || (word[len - 1] + element).length > 15)
                    {
                      word[len] = element;
                    }
                    else 
                    {
                      word[len - 1] += " " + element;
                    }
                    return word;
                }, []);
                
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
                let words = arr[i].reduce((word, element) => 
                {
                    let len = word.length;
                    if (len === 0 || (word[len - 1] + element).length > 15)
                    {
                      word[len] = element;
                    }
                    else 
                    {
                      word[len - 1] += " " + element;
                    }
                    return word;
                }, []);
                
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