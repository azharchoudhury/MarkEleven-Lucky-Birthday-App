const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

checkButton.addEventListener("click", checkIfBirthdayIsLucky);

function checkIfBirthdayIsLucky()
{
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob&&luckyNumber.value)
    {
        if(luckyNumber.value<0)
        {
            outputBox.innerText = "Your lucky number should be greater than 0";
        }
        else{
            compareValues(sum, luckyNumber.value);
        }
    }
    else
    {
        outputBox.innerText = "Please enter both the fields 😠";
    }
}

function calculateSum(dob)
{
    dob = dob.replaceAll("-" , "");
    let sum = 0;
    for(let i=0; i<dob.length; i++)
    {
        sum = sum + Number( dob.charAt(i) );
    }
    return sum;
}

function compareValues(sum, luckyNumber)
{
    if(sum%luckyNumber === 0)
    {
        outputBox.innerText = "Yayy!! Your birthday is lucky 🥳";
    }
    else
    {
        outputBox.innerText = "Ooops!! Your birthday is not that lucky 🤥"
    }
}