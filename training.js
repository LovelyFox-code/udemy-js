let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('wrapper')


box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
//  for (let i=0; i<heart.length; i++) {
//      heart[i].style.backgroundColor = 'purple';
//  }

//  heart.forEach(function(item, i, hearts) {
//      item.style.backgroundColor = 'yellow';

//  });
  

 let div = document.createElement('div');
 text = document.createTextNode('Here i am');

 div.classList.add('black');

// document.body.appendChild(div);

// wrapper.appendChild(div);

// div.innerHTML = '<m>hello world!</m>'
div.textContent = 'Hello world!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);

 console.log(div);

