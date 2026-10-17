class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let st0 = 0;
        let st1 = 0;

        for (let i = 0; i < students.length; i++) {
            if (students[i] === 0) {
                st0 += 1;
            } else {
                st1 += 1
            }
        }

        for (let i = 0; i < sandwiches.length; i++) {
            if (sandwiches[i] === 0 && st0) {
                st0 -= 1;
            } else if (sandwiches[i] === 1 && st1) {
                st1 -= 1;
            } else {
                return st0 + st1;
            }
        }

        return 0;
    }
}
