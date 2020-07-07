import * as fs from "fs";
import * as path from "path";

function readFile(filePath: string): Promise<Buffer> {
    return new Promise(resolve => {
        fs.readFile(filePath, (err, buffer) => {
            if (err) {
                throw err;
            }
            resolve(buffer);
        });
    });
}

const prBuffer = readFile("../../package.json");

prBuffer.then(buffer => {
    console.log(buffer.toString("utf8"));
});

fs.readFile(path.join(__dirname, "..", "package.json"), (err, buffer) => {
    if (err) {
        throw err;
    }

    console.log(buffer.toString());
});

try {
    const buffer = fs.readFileSync("../../package.json");

    console.log(buffer.toString("utf8"));
} catch (error) {
    console.log(error.message);

    throw error;
}

console.log("a");

/*
function dummy(
    str: string,
): Promise<string> {

    return new Promise(
        resolve=> {

            setTimeout(()=> {

                resolve(`>${str}<`);

            }, 1000);

        }
    );

}
*/

async function dummy(str: string): Promise<string> {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 1000));

    return `>${str}<`;
}

const x = dummy("Hello World");

console.log(x);

/*
console.log("e");

const prResult = dummy("Hello World");

console.log("f");


prResult.then(
    result=> {

        console.log("g");

        console.log(result);
    }
);

console.log("h");
*/

(async () => {
    const prN = new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(33);
        }, 1000);
    });

    const n = await prN;

    console.log(n);

    const result = await dummy("Hello World");

    console.log(result);

    console.log(await dummy("One"));
    console.log(await dummy("Two"));
    console.log(await dummy("Three"));
})();
