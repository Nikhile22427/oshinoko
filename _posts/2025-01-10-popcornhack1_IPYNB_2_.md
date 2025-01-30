---

---

---
Popcorn Hacks One
---

 - Delete the last two items of the list below (delete1 and delete2)
 - Change the non dessert item (fries) to a dessert
 - Add two more desserts to list


```python
%%js

let desserts = ['cake', 'ice cream', 'cookies', 'fries', 'delete1', 'delete2']

console.log(desserts.join(", "))
desserts.splice(3, 2)
desserts[3] = "cupcakes"
desserts.push("other dessert 1")
desserts.push("other desset 2")
console.log(desserts.join(", "))
```


    <IPython.core.display.Javascript object>

