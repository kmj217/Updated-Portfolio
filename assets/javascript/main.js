// Get the data modal element
var dateModal = document.getElementById('dateSelect');
// Get open date modal button
var modalDateBtn = document.getElementById('modalDateBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalDateBtn.addEventListener('click', openDateModal);
//Listen for close click
closeBtn.addEventListener('click', closeDateModal);
//Listen for outside click
window.addEventListener('click', clickOutsideDate);


//Function to open modal
function openDateModal(){
    dateModal.style.display = 'block';
}

//Function to close modal
function closeDateModal(){
    dateModal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutsideDate(e){
    if(e.target == dateModal){
    dateModal.style.display = 'none';
    }
}

// Get the word modal element
var wordModal = document.getElementById('wordSelect');
// Get open word modal button
var modalWordBtn = document.getElementById('modalWordBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[1];

//Listen for open click
modalWordBtn.addEventListener('click', openWordModal);
//Listen for close click
closeBtn.addEventListener('click', closeWordModal);
//Listen for outside click
window.addEventListener('click', clickOutsideWord);


//Function to open modal
function openWordModal(){
    wordModal.style.display = 'block';
}

//Function to close modal
function closeWordModal(){
    wordModal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutsideWord(e){
    if(e.target == wordModal){
    wordModal.style.display = 'none';
    }
}

// Get the trivia modal element
var triviaModal = document.getElementById('triviaSelect');
// Get open trivia modal button
var modalTriviaBtn = document.getElementById('modalTriviaBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[2];

//Listen for open click
modalTriviaBtn.addEventListener('click', openTriviaModal);
//Listen for close click
closeBtn.addEventListener('click', closeTriviaModal);
//Listen for outside click
window.addEventListener('click', clickOutsideTrivia);


//Function to open modal
function openTriviaModal(){
    triviaModal.style.display = 'block';
}

//Function to close modal
function closeTriviaModal(){
    triviaModal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutsideTrivia(e){
    if(e.target == triviaModal){
    triviaModal.style.display = 'none';
    }
}