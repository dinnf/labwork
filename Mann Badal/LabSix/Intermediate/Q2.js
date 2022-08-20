/* ⦁	Truncate the text
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"
 */

let number = 15;

function truncate(str){
    if (str.length > number) {
        return str.substring(0, number -3) + "..."
    } else {
        return str
    }
}

console.log(truncate("This is a super duper long text"))