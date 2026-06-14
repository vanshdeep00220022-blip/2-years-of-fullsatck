# Day 32: Deep Object Cloning 🧬

Welcome to **Day 32** of my 2-Year Full Stack Developer Challenge! 🚀

Today I tackled one of the most common sources of bugs in JavaScript: **Object References**. When you copy an object with nested properties using a shallow copy (like `Object.assign` or `...spread`), the nested objects still share the same memory location. Mutating the copy mutates the original. 

To solve this, I wrote a recursive `deepClone` algorithm.

## 🧠 The Logic
The function checks if the passed argument is an object or array. If it's a primitive, it returns the value. If it's an array or object, it iterates through the keys and recursively calls itself to ensure every nested layer gets a brand new memory reference.

## 🚀 Code Snippet
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(item => deepClone(item));
  
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) clonedObj[key] = deepClone(obj[key]);
  }
  return clonedObj;
}
