const pr = new Promise<number>((resolve, reject) => {
    const x = ~~(Math.random() * 100);

    if (x < 50) {
        reject(new Error("too low"));
        return;
    }

    resolve(x);
});

const pr2 = pr.catch((error: Error) => {
    if (Date.now() % 2 === 0) {
        throw new Error("Not even");
    }

    return error.message;
});

pr2.then(console.log);

pr2.catch(error => console.log("2: " + error.message));

/*
50% chances: "<number between 50 and 99>"
25% chances: "too low"
25% chances: "2: Not even"
*/

//.then(x => { console.log(x); });
