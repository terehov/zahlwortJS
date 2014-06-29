# zahlwortJS
==========

Library for replacing numbers with written-out GERMAN words in JavaScript


```javascript
var zahlwort = require("zahlwort");

// Just a Number to written-out word
console.log(zahlwort(110));

// with decimals
console.log(zahlwort(110.98));

// to currency (Default: Euro)
console.log(zahlwort(110, true));


// to Dollar currency
console.log(zahlwort(110, true, ["Dollar", "Cent"]));
```

