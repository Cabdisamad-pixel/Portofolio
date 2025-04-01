let Button1 = document.getElementById('Button1');
let Button2 = document.getElementById('Button2');
const Skills=document.getElementById('Skills');
const Tools =document.getElementById('Tools');
const TechSkills =document.getElementById('TechSkills');
const row4=document.getElementById('row4');
const lirow1=document.getElementById('lirow1');

Button1.addEventListener('click', ()=> {
  Button1.style.backgroundColor = '#000';
  Button1.style.color = 'white';
  Button2.style.backgroundColor = '#fff';
  Button2.style.color='black';
  row4.style.visibility='hidden';
  TechSkills.style.visibility='visible';
  Tools.style.order='4';
  TechSkills.style.order='3';
});


Button2.addEventListener('click', ()=> {
  row4.style.visibility='visible';
   Button1.style.backgroundColor ='#fff'
   Button1.style.color = 'black';
   Button2.style.backgroundColor = '#000';
   Button2.style.color='white';
   TechSkills.style.visibility='hidden';
   Tools.style.visibility='visible';
   Tools.style.marginBottom='10px';
   Tools.style.order='3';
   TechSkills.style.order='4';
  });

  lirow1.addEventListener('click', ()=> {
    const parlirow = document.createElement('p');
    alert('dcjdsch d')
    parlirow.textContent = 'Advanced';
    lirow1.appendChild(parlirow);
  });




