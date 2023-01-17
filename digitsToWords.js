function numToWords(num){

    let resultInWords="";
    if (num === 0) return "zero";
    const units={"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen"}
    const tens={"1":"ten","2":"twenty","3":"thirty","4":"forty","5":"fifty","6":"sixty","7":"seventy","8":"eighty","9":"ninety"}
    const suffixArr=["thousand","million","billion","trillion"];

    let mainArr=num.toLocaleString().toString().split(",");//split number into array using the comma delimiter NOTE: the commas helps separate the number into sets of 3s max
    mainArr=mainArr.reverse();//reverse the array - we are reading from right to left
    let l=mainArr.length;//length of the array

    for(let j=0;j<l;j++){//loop through each element - each element is a 3 number value max
        let c=mainArr[j];
        c=c.split('').reverse();//foreach element, split its value into an array and reverse it - again we are reading this set from right to left
        let p=j-1;

        //compute the last number
        let unitTxt=(c[0]!==undefined && c[0]!=="0")?units[c[0]]+" ":"";

        //compute middle number
        let tensTxt="";
        if(c[1]!==undefined && c[1]!=="0"){
            if(c[1]==="1"){//between 11 and 19
                tensTxt=units[c[1]+c[0]]+" ";//store it as a tens value
                unitTxt="";//ignore the last number's value
            }else{//only when the number is btw 20 and 99
                tensTxt=tens[c[1]]+" ";
            }
        }

        //compute the first number
        let hundsTxt="";
        if(c[2]!==undefined && c[2]!=="0"){
            hundsTxt=units[c[2]]+" hundred ";
            hundsTxt+=((p>-1) && (tensTxt!=="" || unitTxt!==""))?"and ":"";//when the last two numbers in a second set are not zeros
        }

        //for added accuracy in result
        if((p<0) && (tensTxt!=="" || unitTxt!=="")){
            tensTxt="and "+tensTxt;
        }


        let concTxt=hundsTxt + tensTxt + unitTxt;//concatenate computations from first number to last

        let suffix=(suffixArr[p]!==undefined && concTxt!=="")?suffixArr[p]+" ":"";//compute a suffix (thousand, million etc) if there is a number after a set of 3 numbers

        resultInWords=concTxt+suffix+resultInWords;//add them to the start of the final result because the algorithm computes from last number to first number

    }

    return resultInWords;
}

console.log(numToWords(5300801))//five million three hundred thousand eight hundred and one