let nums = [1, 2, 3, 4, 5, 6];
let contagemDePares = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        contagemDePares++;
    }
}

console.log(contagemDePares);