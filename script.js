const input = document.querySelector('.input');
const info = document.querySelector('.info');

async function fetchApi(word) {
  try {
  info.style.display = 'block';
  info.textContent = `Searching the meaning of ${word}`;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const result = await fetch(url).then((res) => res.json());
  info.style.display = 'none';
  console.log(result);
  } catch (error) {
    console.log(error);
  }
}

input.addEventListener('keyup', (e) => {
 if(e.target.value && e.key === 'Enter') {
  fetchApi(e.target.value);
 }
})