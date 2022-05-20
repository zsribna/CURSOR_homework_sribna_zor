
let n=prompt("введіть число ")
n=Math.round(n);
if(isNaN(n)){
    do{
        alert('введіть ціле число!!!');
     n= Math.round(prompt('введіть ціле число N знову:'));
     if (isNaN(n)==false) {break}
 } while (true);
}
let m=prompt("введіть число ")
m=Math.round(m);
if(isNaN(m)){
    do{
        alert('введіть ціле число!!!');
     m = Math.round(prompt('введіть ціле число M знову:'));
     if (isNaN(m)==false) {break}
 } while (true);
}
let sum=0;
if (confirm('Чи пропустимо парні числа?')) {
    for (let i= n; i <= m; i++) if(i % 2 !=0)
    sum+=i;
} else {
    for (let i= n; i <= m; i++)
    sum+=i
  }
  console.log(sum);