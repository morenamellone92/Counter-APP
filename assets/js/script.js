
//first div counter
const counter = document.querySelector('div');


//second div container
const container = document.createElement('div');
counter.appendChild(container);

//third div div_counter contained in  container
const div_counter  = document.createElement('div');
container.appendChild(div_counter);

//span counter
const text_counter = document.createElement('span');
text_counter.textContent = "0";
div_counter.appendChild(text_counter);

//fourth div container_button contained in  cointainer
const container_button = document.createElement('div');
div_counter.appendChild(container_button);

//fifth div div_button contained in container button
const div_button = document.createElement('div');
container_button.appendChild(div_button);

//button contained in in div_button

const decrementButton = document.createElement('button');
div_button.appendChild(decrementButton);

const resetButton = document.createElement('button');
div_button.appendChild(resetButton);

const incrementButton = document.createElement('button');
div_button.appendChild(incrementButton);

//footer
const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);

//div footer_gallery contained in footer
const footer_gallery = document.createElement('div');
footer.appendChild(footer_gallery);

//img social contained in footer_gallery
const instagram_footer = document.createElement('img');
instagram_footer.src = "assets/img/instagram.svg";
footer_gallery.appendChild(instagram_footer);

const linkedin_footer = document.createElement('img');
linkedin_footer.src = "assets/img/linkedin.svg";
footer_gallery.appendChild(linkedin_footer);

const github_footer = document.createElement('img');
github_footer.src = "assets/img/github.svg";
footer_gallery.appendChild(github_footer);

const logo_footer = document.createElement('img');
logo_footer.src = "assets/img/logo.svg";
footer_gallery.appendChild(logo_footer);

const text_footer = document.createElement('h3');
text_footer.textContent = "© Copyright 2022 - Morena Mellone";
footer.append(text_footer);

//class element
body.setAttribute('class', 'body');
counter.setAttribute('class', 'counter');
container.setAttribute('class', 'container');
div_counter.setAttribute('class', 'div_counter');
text_counter.setAttribute('class', 'text_counter');
container_button.setAttribute('class', 'container_button');
div_button.setAttribute('class', 'div_button');
footer.setAttribute('class', 'footer');
footer_gallery.setAttribute('class', 'footer_gallery');
instagram_footer.setAttribute('class', 'img_footer');
linkedin_footer.setAttribute('class', 'img_footer');
github_footer.setAttribute('class', ('img_footer'))
logo_footer.setAttribute('class', ('img_footer'))
text_footer.setAttribute('class', ('text_footer'));
decrementButton.setAttribute('class', 'button');
incrementButton.setAttribute('class', 'button');
resetButton.setAttribute('class', 'button');

//id button
incrementButton.setAttribute('id', 'increment_button');
decrementButton.setAttribute('id', 'decrement_Button');
resetButton.setAttribute('id', 'reset_Button');


valueCounter = 0;

//function button
incrementButton.addEventListener('click', () =>{
    valueCounter += 1;
    text_counter.innerHTML = valueCounter;
});

decrementButton.addEventListener('click', () =>{
    valueCounter -= 1;
    text_counter.innerHTML = valueCounter;

});

resetButton.addEventListener('click', () =>{
    if (window.confirm("Do you want to reset your counter?")) {
        valueCounter = 0;
        text_counter.innerHTML = valueCounter;
      }
});


// open new windows for social element
instagram_footer.addEventListener('click', () =>{
    window.open('https://instagram.com/morena_mellone_dev');
})

linkedin_footer.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/in/morena-mellone-77301a200');
})

github_footer.addEventListener('click', () =>{
    window.open('https://github.com/morenamellone92')
})

logo_footer.addEventListener('click', ()=>{
    window.open('https://morenamellone92.github.io')
})


