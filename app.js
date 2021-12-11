const button = document.querySelector('button');
const evenList = document.querySelector('.even');
const oddList = document.querySelector('.odd');

button.addEventListener('click', () => generateRandomNumbers(1, 100));

function generateRandomNumbers(min, max) {
  document.querySelectorAll('li').forEach((li) => li.remove());
  let randomNumbers = [];
  for (let i = 0; i < 20; i++)
    randomNumbers.push(Math.floor(Math.random() * (max - min) + min));
  randomNumbers.sort((a, b) => a - b);
  const oddNumbers = randomNumbers.filter((num) => num % 2);
  const evenNumbers = randomNumbers.filter((num) => !(num % 2));
  oddNumbers.forEach((num) => {
    let listItem = document.createElement('li');
    listItem.innerText = num;
    oddList.appendChild(listItem);
  });
  evenNumbers.forEach((num) => {
    let listItem = document.createElement('li');
    listItem.innerText = num;
    evenList.appendChild(listItem);
  });
}
