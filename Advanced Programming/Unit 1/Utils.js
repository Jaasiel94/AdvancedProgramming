var module = "This is my module";

export default function validateWord(variable, word)
{
    if(variable.includes(word))
    {
        console.log("Validated");
        return true;
    }
    else
    {
        console.log("Validated");
        return false;
    }
}