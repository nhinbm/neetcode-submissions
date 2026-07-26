class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arrPrime = generatePrimes(26);
        const result = {};

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            let multi = 1;

            for (let j = 0; j < str.length; j++) {
                let idx = str[j].charCodeAt(0) % 97;
                multi *= arrPrime[idx];
            }

            if (!result[multi]) {
                result[multi] = [str];
            } else {
                result[multi].push(str);
            }
        }

        return Object.values(result);
    }
}

function generatePrimes(count) {
    const primes = [];
    let num = 2;

    while (primes.length < count) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(num);
        }

        num += 1;
    }

    return primes;
}
