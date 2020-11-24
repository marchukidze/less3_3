a = [1, 2, 3, 4, 5, 6]

for (i = 0; i < a.length / 2; i++) {
    tmp = a[i];
    a[i] = a[a.length - (i + 1)];
    a[a.length - (i + 1)] = tmp;
}
console.log(a);


// for (i = a.length-1; i>=0 ; i--) {
//     console.log(a[i]);
// }
