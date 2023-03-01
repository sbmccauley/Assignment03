let num=100;
let m = 'Marco!';
let p = 'Polo!';
for (i =1; i<=num; i++) {
   if(i%3 == 0 && i%5 == 0) {
       console.log(`${i} is ${m} ${p}`);                
   } else if(i%5 ==0) {
       console.log(`${i} is ${p}`);
   } else if(i%3 == 0) {
       console.log(`${i} is ${m}`);

   }
   
}