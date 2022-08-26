const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

checkButton.addEventListener("click", function checkValues()
{
    console.log(dateOfBirth.value, luckyNumber.value);
})

// checkButton.addEventListener("click", checkIsBirthdayLucky());

// function checkIsBirthdayLucky()
// {
//     let dob = dateOfBirth.value;
//     let sum = calculateSum(dob);
//     compareValues(sum, luckyNumber.value);
// }

// function calculateSum(dob)
// {
//     dob = dob.replaceAll("-", "");
//     let sum = 0;
//     for(let i=0; i<dob.length; i++)
//     {
//         sum = sum + Number(dob.charAt(i));
//     }   
//     return sum;
// }

// function compareValues(sum, luckyNumber)
// {
//     if(sum%luckyNumber === 0)
//     {
//         outputBox.innerText = "Your birthday is lucky";
//     }
//     else
//     {
//         outputBox.innerText = "Your birthday is not so lucky";
//     }
// }