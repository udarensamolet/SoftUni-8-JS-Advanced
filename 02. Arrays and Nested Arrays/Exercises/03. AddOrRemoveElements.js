function addOrRemoveElements(commands) {
    let arr = [];
    let currNum = 1;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == "add"){
            arr.push(currNum);
        } else if (commands[i] == "remove") {
            arr.pop();
        }
        currNum++;
    }

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    } else {
        console.log('Empty');
    }
}
