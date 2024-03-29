function calculate(num1, num2, operator) {
    result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '%':
        result = num1 % num2;
        break;
      case '**':
        result = Math.pow(num1, num2);
        break;
      default:
        console.error('Invalid operator');
        return;
    }
  
    console.log(result);
  }
