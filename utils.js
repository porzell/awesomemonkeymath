function pick_random(array)
{
    var out = array[Math.floor(Math.random()*array.length)];
    if(out == undefined)
        alert("Could not pick from " + array.toString());
        
    return out;
}

var names = [{"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine" },{"0":"ten","1":"eleven","2":"twelve","3":"thirteen","4":"fourteen","5":"fifteen","6":"sixteen","7":"seventeen","8":"eighteen","9":"nineteen"},{"2":"twenty","3":"thirty","4":"forty","5":"fifty","6":"sixty","7":"seventy","8":"eighty","9":"ninety"},["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion", "quindecillion","sexdecillion","septdecillion","octdecillion","novemdecillion","vigintillion"]];


//Adapted from: http://andrew-hoyer.com/experiments/numbers/
function spellOutNumber(num, n)
{
    var n = 0;
    var s = num.toString().replace(/[^0-9]/g, '').split('').reverse();
    
    var ns = s.slice(0,3);
    return (ns.length < 1)?"":spellOutNumber(s.slice(3,s.length),n+1)+((ns.length>1)?((ns.length==3&&ns[2]!="0")?names[0][ns[2]]+" hundred "+((ns[1]=="1")?names[1][ns[0]]+" ":(ns[1]!="0")?names[2][ns[1]]+" "+((ns[0]!="0")?names[0][ns[0]]+" ":""):(ns[0]!="0"?names[0][ns[0]]+" ":"")):((ns[1]=="1")?names[1][ns[0]]+" ":(ns[1]!="0")?names[2][ns[1]]+" "+((ns[0]!="0")?names[0][ns[0]]+" ":""):(ns[0]!="0"?names[0][ns[0]]+" ":""))) + (((ns.length==3&&(ns[0]!="0"||ns[1]!="0"||ns[2]!="0"))||(ns.length==2&&(ns[0]!="0"||ns[1]!="0"))||(ns.length==1&&ns[0]!="0"))?"<span class='magnitude'>"+names[3][n]+"</span> ":""):((ns.length==1&&ns[0]!="0")?names[0][ns[0]]+" ":"") + (((ns.length==3&&(ns[0]!="0"||ns[1]!="0"||ns[2]!="0"))||(ns.length==2&&(ns[0]!="0"||ns[1]!="0"))||(ns.length==1&&ns[0]!="0"))?"<span class='magnitude'>"+names[3][n]+"</span> ":""));
}