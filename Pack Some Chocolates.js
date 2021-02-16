function makeChocolates(small, big, goal) {
    for (let i = 0; i <= small; i++){
        for (let j = 0; j <= big; j++){
            if (goal === ((j * 5) + (i * 2)))
                return i;
        }
    }
    return -1;
}
//Pack Some Chocolates task level 6
//https://www.codewars.com/kata/5f5daf1a209a64001183af9b