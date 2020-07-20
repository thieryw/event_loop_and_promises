function foo() {
    if (Date.now() % 2 === 0) {
        throw new Error("fail!");
    }

    return "Hello World";
}

let str: ReturnType<typeof foo>;

try {
    str = foo();
} catch (error) {
    console.log(`There was an error, here is the message: ${error.message}`);

    process.exit(1);
}

console.log(str);
