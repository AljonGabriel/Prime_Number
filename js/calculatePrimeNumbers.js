const btn = document.getElementById('btn');

function isPrime(n) {
  const result = document.querySelector('#result');

  if (n < 2) {
    return (result.innerHTML = n + ' is not Prime number');
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return (result.innerHTML = n + ' is not Prime number');
    }
  }
  return (result.innerHTML = n + ' is Prime number');
}

btn.addEventListener('click', () => {
  const userInput = document.querySelector('#input');

  if (userInput.value === '') {
    return alert('Empty input');
  }

  isPrime(userInput.value);
});
