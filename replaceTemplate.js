
module.exports = (htmlStr, course)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%NAME%}/g, course.customerName);
    output = output.replace(/{%IMAGE%}/g, course.image);
    output = output.replace(/{%FROM%}/g, course.from);
    output = output.replace(/{%PHONENUMBER%}/g, course.phoneNumber);
    output = output.replace(/{%LOANAMOUNT%}/g, course.loanAmount);
    output = output.replace(/{%INTEREST%}/g, course.interest);
    output = output.replace(/{%LOANTERMYEARS%}/g, course.loanTermYears);
    output = output.replace(/{%PAYPERMONTH%}/g, course.PayPerMonth);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%ID%}/g, course.id);
    let total = ((course.loanAmount/course.loanTermYears) + course.interest) //LOAN FORMULA
    output = output.replace(/{%TOTAL%}/g, total);

    return output;
 }

    //module.exports = (course) => {
       // course.interest = (course.loanAmount * (course.interest * 0.01)) / course.loanTermYears ; 

       //return (total);



   //}