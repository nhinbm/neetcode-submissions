class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = 0;
        
        while(true) {
            let len = students.length;
            
            for (let i = 0; i < len; i++) {
                let st = students.shift();
                if (st === sandwiches[0]) {  
                    sandwiches.shift();
                } else {
                    students.push(st);
                }
            }

            if (len === students.length) {
                res = len;
                break;
            }
        }

        return res;
    }
}
