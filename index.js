const array = [
  {
    text: 'Letter One: уверенность',
    id: 'line-h3'
  },
  {
    text: "Hey My Dear,",
    id: 'line-head'
  },
  {
    text: "I know I am a nerd who doesn't know how to express the feeling of Love/Romance/Affection.",
    id: 'line-0'
  },
  {
    text: "But, the day I met You I swear I felt something different tickling My heart.",
    id: 'line-1'
  },
  {
    text: "As days passed the thoughts of You started filling My heart,",
    id: 'line-2'
  },
  {
    text: "they kept on increasing leading to increased responsibility, Joy, Safety, Courage, Scare.",
    id: 'line-3'
  },
  {
    text: "You know what I am DAMN sure, it is going to increase every second.",
    id: 'line-4'
  },
  {
    text: "May be this is Called Love or whatever the term is. But,",
    id: 'line-5'
  },
  {
    text: "I am confident this will help Me keep You, Our Family Happy & Safe forever.",
    id: 'line-6'
  },
  {
    text: "From Your Nerdy Boyfriend Hoping,",
    id: "line-7"
  },
  {
    text: "'I am Confident'",
    id: "line-8"
  },
  {
    text: " turns to ",
    id: "line-9"
  },
  {
    text: "'We are Confident'.",
    id: "line-10"
  },
  {
    text: "To My Dear Love",
    id: "line-11"
  },
  {
    text: "Anitha aka Meena aka Pondatti",
    id: "line-12"
  },
];
async function displayTextOneLetterAtATime(text, outputElement) {
  let index = 0;
  const resolvePromise = new Promise((resolve) => {
    displayNextLetter(resolve);
  })
  function displayNextLetter(resolve) {
    if (index < text.length) {
      outputElement.textContent += text.charAt(index);
      index++;
      setTimeout(() => displayNextLetter(resolve), 100); // Adjust the delay (in milliseconds) between letters
    } else {
      resolve();
    }
  }
  return resolvePromise;
}

let i=0;

const doOperation = async () => {
  while (i < array.length) {
    const { text, id } = array[i];
    await displayTextOneLetterAtATime(text, document.getElementById(id));
    i++;
  }
}

doOperation();
  
 


