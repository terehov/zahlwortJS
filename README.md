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

## Beispiele:
> eins
> ein Euro
> zwei
> zwei Euro
> fünf Komma fünf
> fünf Euro und fünf Cent
> dreizehn
> dreizehn Euro
> vierzig Komma vierzig
> vierzig Euro und vierzig Cent
> einundvierzig Komma einundvierzig
> einundvierzig Euro und einundvierzig Cent
> fünfundfünfzig Komma fünfundfünfzig
> fünfundfünfzig Euro und fünfundfünfzig Cent
> sechsundsechzig
> sechsundsechzig Euro
> neunundneunzig
> neunundneunzig Euro
> einhundert
> einhundert Euro
> einhunderteins
> einhundertein Euro
> einstausend
> eintausend Euro
> zehntausend
> zehntausend Euro
> zehntausendeins
> zehntausendein Euro
> einhunderttausend
> einhunderttausend Euro
> einhunderttausendeins
> einhunderttausendein Euro
> eine Million
> eine Million Euro
> zwei Millionen
> zwei Millionen Euro
> zwei Millionen und eins
> zwei Millionen und ein Euro
> drei Millionen und eins
> drei Millionen und ein Euro
> zehn Millionen
> zehn Millionen Euro
> zwanzig Millionen und eins
> zwanzig Millionen und ein Euro
> dreißig Millionen und dreihundertelf
> dreißig Millionen und dreihundertelf Euro
> einhundert Millionen und Komma achtundsiebzig
> einhundert Millionen und Euro und achtundsiebzig Cent 

