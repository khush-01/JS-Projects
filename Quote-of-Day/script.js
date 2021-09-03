var quotesArray = [
  {
    'author': 'Albert Einstein',
    'quote': 'Life is like a bicycle, to maintain balance you have to keep moving.'
  },
  {
    'author': 'Albert Einstein',
    'quote': 'Anyone who has never made a mistake has never tried anything new.'
  },
  {
    'author': 'Dr. APJ Abdul Kalam',
    'quote': 'Some of the greatest minds in the country can be found on the last benches of the classroom.'
  },
  {
    'author': 'Lao Tzu',
    'quote': 'The journey of a thousand miles begins with a single step.'
  },
  {
    'author': 'Mahatma Gandhi',
    'quote': 'You must be the change you wish to see in the world.'
  },
  {
    'author': 'Elbert Hubbard',
    'quote': 'When life gives you lemons, make lemonade.'
  }
]

function selector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
  var randNumber = selector(quotesArray.length);

  document.getElementById('quoteOutput').innerText = ' " ' + quotesArray[randNumber].quote + ' " ';
  document.getElementById('authorOutput').innerText = '- ' + quotesArray[randNumber].author;
}
