let generateBtn = document.getElementById('generate');
let clearBtn = document.getElementById('clear');
let display = document.querySelector('.display');

let phrases = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Fusce semper, ligula a luctus vulputate, erat libero tempor ipsum, id venenatis erat tellus in sapien.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Maecenas aliquam enim ut odio convallis, quis volutpat nulla elementum.",
  "Morbi imperdiet elit vel magna lacinia, et hendrerit quam ornare.",
  "Vestibulum tempus sapien ut neque scelerisque, vitae interdum nisi porttitor.",
];

function generatePhrase() {
  let randomIndex = Math.floor(Math.random() * phrases.length);
  display.innerHTML = phrases[randomIndex];

  let colors = ['blue', 'red', 'green', 'yellow', 'purple'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  display.classList.add(randomColor);
}

function clearDisplay() {
  display.classList.remove('blue', 'red', 'green', 'yellow', 'purple');
  display.innerHTML = '';
}

generateBtn.addEventListener('click', generatePhrase);
clearBtn.addEventListener('click', clearDisplay);