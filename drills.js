1. Create a stack class
class _Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop(){
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function starTrek(){
  const stStack = new Stack()

  stStack.push('Kirk')
  stStack.push('Spock')
  stStack.push('McCoy')
  stStack.push('Scotty')
  display(stStack)
}

starTrek();

2. Useful methods for a stack
function peek(stack){
  return console.log(`Top = ${stack.top.data}, Top.next = ${stack.top.next.data}`)
}

function isEmpty(stack){
  return console.log(!stack.top)
}

function display(stack){
  let node = stack.top
  let order = 0
  while(node !== null){
    console.log(order, node.data)
    order++
    node = node.next
  }
}

3. Check for palindromes using a stack
function is_palindrome(s) {
  const stack = new Stack();
  let reverseS = '';

  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for (let i = 0; i < s.length; i++){
    stack.push(s[i]);
  }

  while (stack.top !== null){
    reverseS += stack.pop();
  }
  return s === reverseS;
//     // Your code goes here
}
// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

4. Matching parentheses in an expression
function matchingParens(str) {
  let tempStack = new Stack();
  let openCounter = 0;
  let closeCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openCounter++;
    } else if (str[i] === ')') {
      closeCounter++;
    } 
    
    tempStack.push(str[i]);
  }
 
  if(openCounter > closeCounter) {  //4 3
    let mistakes = openCounter - closeCounter; //1
    let ignore = openCounter - mistakes; //3
    let count = 0;
    for (let i = 0; i < str.length; i++) { //ignore 3 '('
      if (tempStack.pop() === '(') {
        count++;
        if (count > ignore) {
          console.log('You have an extra opening parenthesis at position', str.length - i);
        }
      }
    }
  } else if (closeCounter > openCounter) {
    let mistakes = closeCounter - openCounter; //1
    let count = 0;
    for (let i = 0; i < str.length; i++) { //ignore 3 '('
      if (tempStack.pop() === ')') {
        count++;
        if (count <= mistakes) {
          console.log('You have an extra closing parenthesis at position', str.length - i);
        }
      }
    }
  } else {
    console.log('You have not made a mistake.');
  }

  return;
}

5. Sort stack
function sort(stack) {
  let tempStack = new Stack();
  let initialStack = new Stack();
  let temp = 0;

  for (let i = 0; i < stack.length; i++) {
    initialStack.push(stack[i]);
  }

  while (initialStack.top !== null) { 

    temp = initialStack.pop();
    
    if (tempStack.top === null) {
      if (peek(initialStack) < temp) {
        tempStack.push(initialStack.pop());
        tempStack.push(temp);
      } else {
        tempStack.push(temp);
      }
    } else {
      while ( temp < peek(tempStack)) {
        initialStack.push(tempStack.pop());
        if (tempStack.top === null) break;
      }
      tempStack.push(temp);
    }
  }

  while (tempStack.top !== null) {
    initialStack.push(tempStack.pop());
  }

  return initialStack;
}

6. Create a queue using Singly linked list
