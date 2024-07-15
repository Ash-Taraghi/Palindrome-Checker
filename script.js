const textInput = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn");


const result = document.getElementById("result");


const isPalindrome = (input) =>{
  const originalInput = input;
  if (input === ""){
    alert("Please input a value");
    return;
  }
  result.replaceChildren(); 

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p')
  pTag.className = "user-input"
  pTag.innerHTML = resultMsg 
  result.appendChild(pTag)

  result.classList.remove("hidden");

}

  checkBtn.addEventListener("click", () =>{
    isPalindrome(textInput.value);
    textInput.value = "";
  })

  textInput.addEventListener('keydown' ,e =>{
    if (e.key === "Enter"){
        isPalindrome(textInput.value);
        textInput.value= "";
    }
  })
