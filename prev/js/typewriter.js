const TypeWriter = function(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert text to element
    this.txtElement.innerHTML = `<span class="txt big-font">${this.txt}</span>`;

    // Type Speed
    let typeSpeed = 100;

    if(this.isDeleting) {
        typeSpeed /= 5;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
        // Pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        // Set delete to false
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before typing
        typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Start on DOM Loaded
document.addEventListener('DOMContentLoaded', start);

// Start App
function start() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}