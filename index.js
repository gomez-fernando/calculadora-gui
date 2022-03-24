let screen = '0';
let data = '0';
let operator = '';
let numbers = document.querySelectorAll('#n0, #n1, #n2, #n3, #n4, #n5, #n6, #n7, #n8, #n9, #point, #slash, #by, #minus, #plus');
let ok = document.querySelector("#ok");
let drop = document.querySelector('#drop');
let result0 = [];
let result1 = [];
let res0;
let res1;
let operator1 = '';
let operator2 = '';

document.querySelector('#screen').value = screen;

for(let i = 0; i < numbers.length; i++){

    numbers[i].onclick = (e) => {
      document.querySelector('#screen').value += e.target.value;
    }
}

ok.onclick = () => {
  data = document.querySelector('#screen').value;

    for(let i = 0; i < data.length; i++){

      if(operator1 === ''){
        if(data[i] === '1' || data[i] === '2' || data[i] === '3' || data[i] === '4'|| data[i] === '5'|| data[i] === '6'|| data[i] === '7'|| data[i] === '8'|| data[i] === '9'|| data[i] === '0'|| data[i] === '.'){
        result0.push(data[i]);
        } else if (data[i] === '+' || data[i] === '-' || data[i] === '*' || data[i] === '/'){
            operator1 = data[i];
        }
      } else if(operator1 !== ''){
          if(i === data.length - 1){
            if(data[i] === '1' || data[i] === '2' || data[i] === '3' || data[i] === '4'|| data[i] === '5'|| data[i] === '6'|| data[i] === '7'|| data[i] === '8'|| data[i] === '9'|| data[i] === '0'|| data[i] === '.'){
            result1.push(data[i]);


              switch(operator1) {
                case '+':
                  res0 = result0.join('');
                  res1 = result1.join('');
                  res0 = parseFloat(res0) + parseFloat(res1);

                  //set the response on screen
                  document.querySelector('#screen').value = res0;
                  data = res0.toString();
                  result0 = [];
                  result1 = [];
                  res0 = '';
                  res1 = '';
                  operator1 = '';
                  operator2 = '';
                  break;
                case '-':
                  res0 = result0.join('');
                  res1 = result1.join('');
                  res0 = parseFloat(res0) - parseFloat(res1);

                  //set the response on screen
                  document.querySelector('#screen').value = res0;
                  data = res0.toString();
                  result0 = [];
                  result1 = [];
                  res0 = '';
                  res1 = '';
                  operator1 = '';
                  operator2 = '';
                  break;
                case '*':
                  res0 = result0.join('');
                  res1 = result1.join('');
                  res0 = parseFloat(res0) * parseFloat(res1);

                  //set the response on screen
                  document.querySelector('#screen').value = res0;
                  data = res0.toString();
                  result0 = [];
                  result1 = [];
                  res0 = '';
                  res1 = '';
                  operator1 = '';
                  operator2 = '';
                  break;
                case '/':
                  res0 = result0.join('');
                  res1 = result1.join('');
                  res0 = parseFloat(res0) / parseFloat(res1);

                  //set the response on screen
                  document.querySelector('#screen').value = res0;
                  data = res0.toString();
                  result0 = [];
                  result1 = [];
                  res0 = '';
                  res1 = '';
                  operator1 = '';
                  operator2 = '';
                  break;
              }
            
            }  else if (data[i] === '+' || data[i] === '-' || data[i] === '*' || data[i] === '/'){
              operator2 = data[i];

              switch(operator2) {
                  case '+':
                    res0 = result0.join('');
                    res1 = result1.join('');
                    res0 = parseFloat(res0) + 0;

                    //set the response on screen
                    document.querySelector('#screen').value = res0;
                    data = res0.toString();
                    result0 = [];
                    result1 = [];
                    res0 = '';
                    res1 = '';
                    operator1 = '';
                    operator2 = '';
                    break;
                  case '-':
                    res0 = result0.join('');
                    res1 = result1.join('');
                    res0 = parseFloat(res0) - 0;

                    //set the response on screen
                    document.querySelector('#screen').value = res0;
                    data = res0.toString();
                    result0 = [];
                    result1 = [];
                    res0 = '';
                    res1 = '';
                    operator1 = '';
                    operator2 = '';
                    break;
                  case '*':
                    res0 = result0.join('');
                    res1 = result1.join('');
                    res0 = parseFloat(res0) * 0;

                    //set the response on screen
                    document.querySelector('#screen').value = res0;
                    data = res0.toString();
                    result0 = [];
                    result1 = [];
                    res0 = '';
                    res1 = '';
                    operator1 = '';
                    operator2 = '';
                    break;
                  case '/':
                    res0 = result0.join('');
                    res1 = result1.join('');
                    res0 = parseFloat(res0) / 0;

                    //set the response on screen
                    document.querySelector('#screen').value = res0;
                    data = res0.toString();
                    result0 = [];
                    result1 = [];
                    res0 = '';
                    res1 = '';
                    operator1 = '';
                    operator2 = '';
                    break;
                }
              } 
          } else{

              if(data[i] === '1' || data[i] === '2' || data[i] === '3' || data[i] === '4'|| data[i] === '5'|| data[i] === '6'|| data[i] === '7'|| data[i] === '8'|| data[i] === '9'|| data[i] === '0'|| data[i] === '.'){
                result1.push(data[i]);
      
              } else if (data[i] === '+' || data[i] === '-' || data[i] === '*' || data[i] === '/'){
                operator2 = data[i];
  
                switch(operator1) {
                    case '+':
                      res0 = result0.join('');
                      res1 = result1.join('');
                      res0 = parseFloat(res0) + parseFloat(res1);
    
                      result0 = [res0.toString()];
                      result1 = [];
                      res0 = '';
                      res1 = '';
                      operator1 = operator2;
                      operator2 = '';
                      break;
                    case '-':
                      res0 = result0.join('');
                      res1 = result1.join('');
    
                      res0 = parseFloat(res0) - parseFloat(res1);
    
                      result0 = [res0.toString()];
                      result1 = [];
                      res0 = '';
                      res1 = '';
                      operator1 = operator2;
                      operator2 = '';
                      break;
                    case '*':
                      res0 = result0.join('');
                      res1 = result1.join('');
    
                      res0 = parseFloat(res0) * parseFloat(res1);
    
                      result0 = [res0.toString()];
                      result1 = [];
                      res0 = '';
                      res1 = '';
                      operator1 = operator2;
                      operator2 = '';
                      break;
                    case '/':
                      res0 = result0.join('');
                      res1 = result1.join('');
    
                      res0 = parseFloat(res0) / parseFloat(res1);
    
                      result0 = [res0.toString()];
                      result1 = [];
                      res0 = '';
                      res1 = '';
                      operator1 = operator2;
                      operator2 = '';
                      break;
                  }
                } 
        }
      }
    }

}

drop.onclick = () => {
    document.querySelector('#screen').value = '0';
    operator = '';
    result0 = [];
    result1 = [];
    res0 = 0;
    res1 = 0;
    data = '0';
    operator1 = '';
    operator2 = '';
}

