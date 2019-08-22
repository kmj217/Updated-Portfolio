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

// Get the trivia modal element
var liriModal = document.getElementById('liriSelect');
// Get open trivia modal button
var modalLIRIBtn = document.getElementById('modalLIRIBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[3];

//Listen for open click
modalLIRIBtn.addEventListener('click', openLIRIModal);
//Listen for close click
closeBtn.addEventListener('click', closeLIRIModal);
//Listen for outside click
window.addEventListener('click', clickOutsideLIRI);


//Function to open modal
function openLIRIModal(){
    liriModal.style.display = 'block';
}

//Function to close modal
function closeLIRIModal(){
    liriModal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutsideLIRI(e){
    if(e.target == liriModal){
    liriModal.style.display = 'none';
    }
}

// Get the bamazon modal element
var bamModal = document.getElementById('bamSelect');
// Get open trivia modal button
var modalBamBtn = document.getElementById('modalBamBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[4];

//Listen for open click
modalBamBtn.addEventListener('click', openBamModal);
//Listen for close click
closeBtn.addEventListener('click', closeBamModal);
//Listen for outside click
window.addEventListener('click', clickOutsideBam);


//Function to open modal
function openBamModal(){
    bamModal.style.display = 'block';
}

//Function to close modal
function closeBamModal(){
    bamModal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutsideBam(e){
    if(e.target == bamModal){
    bamModal.style.display = 'none';
    }
}

// Get the friend finder modal element
var finderModal = document.getElementById('finderSelect');
// Get open friend finder modal button
var modalFinderBtn = document.getElementById('modalFinderBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[5];

//Listen for open click
modalFinderBtn.addEventListener('click', openFinderModal);
//Listen for close click
closeBtn.addEventListener('click', closeFinderModal);
//Listen for outside click
window.addEventListener('click', clickOutsideFinder);


//Function to open modal
function openFinderModal(){
    finderModal.style.display = 'block';
}

//Function to close modal
function closeFinderModal(){
    finderModal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutsideFinder(e){
    if(e.target == finderModal){
    finderModal.style.display = 'none';
    }
}

// Get the burger modal element
var burgerModal = document.getElementById('burgerSelect');
// Get open burger modal button
var modalBurgerBtn = document.getElementById('modalBurgerBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[6];

//Listen for open click
modalBurgerBtn.addEventListener('click', openBurgerModal);
//Listen for close click
closeBtn.addEventListener('click', closeBurgerModal);
//Listen for outside click
window.addEventListener('click', clickOutsideBurger);


//Function to open modal
function openBurgerModal(){
    burgerModal.style.display = 'block';
}

//Function to close modal
function closeBurgerModal(){
    burgerModal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutsideBurger(e){
    if(e.target == burgerModal){
    burgerModal.style.display = 'none';
    }
}