"use strict";

/**
 * Library for replacing numbers with written-out GERMAN words.
 * Bibliothek zum Ausschreiben von Zahlen als deutsche Zahlwörter.
 * based on an old Adobe exampe: https://forums.adobe.com/thread/975923
 *
 * @param  {Number}  pNum           The actual number
 * @param  {Boolean} pIsCurrency    Is it a currency or just a number?
 * @param  {Array}   pCurrency      Array with Currency Names. Euro is Default: ["Euro", "Cent"]
 * 
 * @return {String} Number converted to a written-out word
 */
module.exports = function(pNum, pIsCurrency, pCurrency){

    var currency 				= "";
	var currencyDecimalisation 	= "";
	if(pIsCurrency){
		pCurrency = (pCurrency == null)? ["Euro", "Cent"] : pCurrency;
		currency 				= " " + pCurrency[0];
		currencyDecimalisation 	= " " + pCurrency[1];
	}

	var oneN = "eins"; // neutrum
	var oneF = "eine"; // female
	
	var ones = [ "", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"];	
	var tens = [ "zwanzig", "dreißig", "vierzig", "fünfzig", "sechzig", "siebzig", "achtzig", "neunzig"];
	var units = [ "tausend", " Million", " Billion", " Trillion", " Quadrillion"];

	var returnStr = "";
	if(pCurrency)
		returnStr = (!isFloat(pNum)) ? currency : currency + " und ";
	else
		returnStr = (!isFloat(pNum)) ? currency : currency + " Komma ";

	var fullNumber = Math.floor(pNum);
	for (var i = 0; fullNumber > 0; i ++ ){
		if (fullNumber % 1000 > 0){
			if(i === 1)
				returnStr = convertToHundreds(fullNumber) + "" + units[i - 1] + "" + returnStr;
			else if (i > 1){ // Millionen - Quadrillionen
				var numberSuffix = (fullNumber === 1)? "e" : "";
				var unitSuffix = (fullNumber === 1)? "" : "en";
				unitSuffix += (returnStr === currency)? "": " und ";
				
				returnStr = convertToHundreds(fullNumber, true) + numberSuffix + "" + units[i - 1] + unitSuffix + "" + returnStr;
			}
			else
				returnStr = convertToHundreds(fullNumber) + "" + returnStr;
		}
		fullNumber = Math.floor(fullNumber / 1000);
	}
	
	pNum = Math.round(pNum * 100) % 100;
	if (pNum > 0)
		returnStr += convertToHundreds(pNum) + currencyDecimalisation;


	// ---- helper functions -------	
	function convertToHundreds(pNum, pMoreThanAMillionPrefix){
		var num, numStr;
		var returnStr = "";
		var helperToSwitchLastTwoDigits = 0;
		pMoreThanAMillionPrefix = !(pMoreThanAMillionPrefix == null);

		pNum %= 1000;
		/* Hundreds. */
		if (pNum > 99){
			numStr = String(pNum);
			num = Number(numStr.charAt(0));
			returnStr += ones[num] + "hundert";
			pNum %= 100;
		}
		
		/* Ones and teens. */
		if (pNum > 20){
			if (pNum > 0){
				helperToSwitchLastTwoDigits = pNum;
				pNum %= 10;
				num = Math.floor(pNum);
				if(num > 0)
					returnStr += ones[num] + "und";
				pNum = helperToSwitchLastTwoDigits;
			}
		}
		
		/* Tens. */
		if (pNum > 19){
			numStr = String(pNum);
			num = Number(numStr.charAt(0));
			returnStr += tens[num - 2];
			pNum %= 10;
		}

		/* Ones and teens. */
		if (helperToSwitchLastTwoDigits == 0){
			if (pNum > 0){
				num = Math.floor(pNum);
				if(pCurrency || num != 1 || pMoreThanAMillionPrefix)
					returnStr += ones[num];
				else
					returnStr += oneN;

				if (ones[num] == ""){
					returnStr += "";
				}
			}
		}
		return returnStr;
	}

	function isFloat(mixed_var) {
	  //  discuss at: http://phpjs.org/functions/is_float/
	  return +mixed_var === mixed_var && (!isFinite(mixed_var) || !! (mixed_var % 1));
	};

	return returnStr.replace("  ", " ");
};