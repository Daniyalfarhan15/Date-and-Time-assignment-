let date=new Date()
let myMonth=[1,2,3,4,5,6,7,8,9,10,11,12]
let myDays=['Sun','Mon','Tue','Wed','Thus','Fri','Sat']
let myFulday=['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday']
let myhours=[12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
var monthName= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
// console.log(date.getHours());
let hoursfunc=()=>{
    if (myhours[date.getHours()].lenght>13) {
        return `${myhours[date.getHours()]} PM`
    }
    else{
       return `  ${myhours[date.getHours()]}:${date.getSeconds()} AM`
    }

}
let datef=()=>{
    if (date.getDate()==1) {
        return `${date.getDate()}<sup>st</sup>`
    }
    else if (date.getDate()==2) {
           return `${date.getDate()}<sup>nd</sup>`
    }
    else if (date.getDate()==2) {
        return `${date.getDate()}<sup>rd</sup>`
 }
 else {
        return `${date.getDate()}<sup>th</sup>`
  }

}
let dateFormat1=()=>{
    
   return `(1)  ${ date.getDate()}/${ myMonth[date.getMonth()] }/${ date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}<br>`

}

let dateFormat2=()=>{
    
return `(2)  ${myDays[date.getDay()] }/${ myMonth[date.getMonth()] }/${ date.getDate()}/${ date.getFullYear()}  ${date.getHours()}.${date.getMinutes()}<br>
` 
 }


let dateFormat3=()=>{
    
return `(3)  ${ date.getFullYear()}-${ myMonth[date.getMonth()]}-${ date.getDate()} ${myhours[date.getHours()]}:${date.getMinutes()}:${myFulday[date.getDay()]}<br>
` 
 }
 let dateFormat4=()=>{
    
    return `(4)  ${ monthName[date.getMonth()]}${datef()}, ${ date.getFullYear()}   ${hoursfunc()}<br>
`
     }

     let dateFormat5=()=>{
    
    return `(5)  ${date.getDate()} ${monthName[date.getMonth()]} ${date.getFullYear()} at ${hoursfunc()}
`
         }
document.write(

         dateFormat1(),
         dateFormat2(),
         dateFormat3(),
         dateFormat4(),
         dateFormat5(),
    
        )

        module.exports={dateFormat1,dateFormat2,dateFormat3,dateFormat4,dateFormat5}
    