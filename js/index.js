var inputs = [
    document.querySelector('#inputNome'),
    document.querySelector('#inputFreq'),
    document.querySelector('#inputN1'),
    document.querySelector('#inputN2'),
    document.querySelector('#inputProvaF')
];

console.log(inputs)

var tbody = document.querySelector('#js-resultadoView');
document.querySelector('.form').addEventListener('submit' , (e) => {
    e.preventDefault();
    var tr = document.createElement('tr');
   
   inputs.forEach(function(input) {       
       var td = document.createElement('td');
       td.textContent = input.value;
       tr.appendChild(td);
    });
  
  tbody.appendChild(tr);
  
  inputs[0].value = '';
  inputs[1].value = 0;
  inputs[2].value = 0;
  inputs[3].value = 0;
  inputs[4].value = 0;
  
  inputs[0].focus();
})