def numToWords(num):

    resultInWords=""

    units={"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen"}
    tens={"1":"ten","2":"twenty","3":"thirty","4":"forty","5":"fifty","6":"sixty","7":"seventy","8":"eighty","9":"ninety"}
    suffixArr=["thousand","million","billion","trillion"]
    
    mainArr=num.split(",")#split number into array using the comma delimiter note: the commas helps separate the number into sets of 3s max
    mainArr=list(reversed(mainArr))#reverse the array - we are reading from right to left
    l=len(mainArr)#length of the array

    for j in range(l):#loop through each element - each element is a 3 number value max
        c=mainArr[j]
        c=c[::-1]
        #c=c.split('')#foreach element, split its value into an array and reverse it - again we are reading this set from right to left
        #list(reversed(c))
        p=j-1

            
        #compute the last number
        unitTxt=""
        try:
            c[0]
            unitTxt=units[c[0]]+" " if c[0]!="0" else ""
        except:print()


        #compute middle number
        tensTxt=""
        try:
            c[1]
            if c[1]!="0":
                if (c[1]=="1"):#between 11 and 19
                    tensTxt=units[c[1]+c[0]]+" "#store it as a tens value
                    unitTxt="";#ignore the last number's value
                else: tensTxt=tens[c[1]]+" " #only when the number is btw 20 and 99        
        except:print()
        

        #compute the first number
        hundsTxt=""
        try:
            c[2]
            if(c[2]!="0"):
                hundsTxt=units[c[2]]+" hundred "
                hundsTxt+="and " if ((p>-1) and (tensTxt!="" or unitTxt!="")) else "" #when the last two numbers in a second set are not zeros
        except:print()


        #for added accuracy in result
        if((p<0) and (tensTxt!="" or unitTxt!="")): tensTxt="and "+tensTxt

        concTxt=hundsTxt + tensTxt + unitTxt#concatenate computations from first number to last

        suffix=""
        try:
            suffixArr[p]
            suffix=suffixArr[p]+" " if p>-1 and concTxt!="" else "" #compute a suffix (thousand, million etc) if there is a number after a set of 3 numbers
        except:print()

        resultInWords=concTxt + suffix + resultInWords #add them to the start of the final result because the algorithm computes from last number to first number
    
    return resultInWords

print(numToWords("769,001,201,011"))
