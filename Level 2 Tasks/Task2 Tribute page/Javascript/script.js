document.getElementById('quoteButton').addEventListener('click', function() {
    var quote = document.getElementById('quote');
    if (quote.style.display === 'none' || quote.style.display === '') {
        quote.style.display = 'block';
        this.textContent = 'Hide Quote';
    } else {
        quote.style.display = 'none';
        this.textContent = 'Show Quote';
    }
});
