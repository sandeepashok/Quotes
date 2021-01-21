var quotes = [

    {
        Name: 'Winston Churchill',
        Quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    },
    {
        Name: 'William James',
        Quote: 'Act as if what you do makes a difference. It does.'
    },
    {
        Name: 'Helen Keller',
        Quote: 'Never bend your head. Always hold it high. Look the world straight in the eye.'
    },
    {
        Name: 'Zig Ziglar',
        Quote: 'What you get by achieving your goals is not as important as what you become by achieving your goals.'
    },
    {
        Name: 'Jimmy Dean',
        Quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination."
    },
]


var quoteBtn = document.querySelector('#quoteBtn');
var quoteAuthor = document.querySelector('#quoteAuthor');
var quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {

    var number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].Name;
    quote.innerHTML = quotes[number].Quote;


}