class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] !== "+" && tokens[i] !== "-" && tokens[i] !== "*" && tokens[i] !== "/") {
                stack.push(tokens[i]);
            } else {
                let num2 = Number.parseInt(stack.pop());
                let num1 = Number.parseInt(stack.pop());
                let result = 0;
                
                if (tokens[i] === "+") {
                    result = num1 + num2;
                } else if (tokens[i] === "-") {
                    result = num1 - num2;
                } else if (tokens[i] === "*") {
                    result = num1 * num2;
                } else if (tokens[i] === "/") {
                    result = Number.parseInt(num1 / num2);
                }

                stack.push(result);
            }
        }

        return stack[0];
    }
}
