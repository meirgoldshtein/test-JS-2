// החזרת מספרים זוגיים במערך
const Mission1 = (arr) => {
    return arr.filter(element => element % 2 == 0)
}

// ספירת כמות מילים עם 4 אותיות
const Mission2 = (str) => {
   arr = str.split(' ');
   let counter = 0;
   for (let i = 0; i < arr.length; i++) {
       if (arr[i].length == 4) {
           counter++;
       }
   }
   return counter
}

// שיטוח מערך דו מימדי
const Mission3 = (arr) => {
    return arr.flat()
}

// בדיקה אם המערך עולה או יורד או בכלל לא
const Mission4 = (arr) => {
    let up = true;
    let down = true;

    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < arr[i + 1]) {
            down = false;
        } else if (arr[i] > arr[i + 1]) {
            up = false;
        }
    }
    if (up) {return 1}
    if (down) {return 2}
    else {return 0}
}

module.export = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}