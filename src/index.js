module.exports = function toReadable (number) {

  function elOrTw() {
    if (test[test.length-2] == 1 && test[test.length - 1] == 1) {
        result.push(cent[1])
        test.pop();
        test.pop()
    } else if (test[test.length-2] == 1 && test[test.length - 1] == 2) {
        result.push(cent[2])
        test.pop();
        test.pop();
    } else if (test[test.length-2] == 1 && test[test.length - 1] > 2 && test[test.length - 1] <= 9) {
        result.push(cent[test[1]]);
        test.pop();
        test.pop();
    } else if (test[test.length-2] >= 2 && test[test.length-2] <= 9 && test[test.length - 1] != 0){
        current = test[0];
        result.push(decade[current]);
        current = test[1];
        result.push(nums[current]);
    } else if (test[test.length-2] >= 2 && test[test.length-2] <= 9 && test[test.length - 1] == 0) {
        current = test[0];
        result.push(decade[current]);
    } else if (test.length == 2 && test[0] == 0 && test[1] != 0) {
        current = test[1];
        result.push(nums[current]);
    } else if (test.length == 2 && test[0] == 1 && test[1] == 0) {
        result.push(nums[10]);
   }
    return result;
}

  let test = String(number).split("");
    let result = [];
    let current;
        if (test.length <= 1) {
            current = test[0];
            result.push(nums[current]);
        } else if (test.length > 1 && test.length <= 2) {
            elOrTw();
        } else if (test.length > 2 && test.length <= 3) {
            current = test[0];
            result.push(nums[current], cento[0]);
            test.shift();
            elOrTw();
        }
    return result.join(" ");
}

let nums = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
let cent = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
let decade = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred'];
let cento = ['hundred'];
