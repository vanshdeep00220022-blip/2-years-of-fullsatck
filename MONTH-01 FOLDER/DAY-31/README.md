# Day 31: Group Objects by Property 📦

Welcome to **Day 31** of my 2-Year Full Stack Developer Challenge! 🚀

Moving into month two, the focus shifts to advanced **Object manipulation**. Today, I built a `groupBy` algorithm. This is a vital utility function used to organize raw data from an API into structured groups for the frontend to render.

## 🧠 The Logic
The function uses JavaScript's native `.reduce()` method. It iterates over the array of objects, checks the value of the specified key, and builds a new object where the keys represent the groups and the values are arrays containing the matching objects.

## 🚀 Code Snippet
```javascript
function groupBy(array, key) {
  return array.reduce((result, currentObject) => {
    const groupKey = currentObject[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentObject);
    return result;
  }, {});
}
