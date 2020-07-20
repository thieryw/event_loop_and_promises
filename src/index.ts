function createRecipeMap() {
    const recipes = new Map();

    recipes.set(100, { author: "william", name: "cherry trifle" });
    recipes.set(101, { author: "joseph", name: "christmass pudding" });
    recipes.set(102, { author: "florian", name: "silabub" });
    recipes.set(103, { author: "alexy", name: "lemon curd" });

    return recipes;
}

const getRecipeIds = (() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(createRecipeMap());
        }, 1500);
    });
})();

const getRecipeName = (id: number, recipes: any) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(
            () => {
                if (recipes.has(id)) {
                    resolve(`${id} : ${recipes.get(id).name}`);
                    return;
                }

                reject("fatal error");
            },
            1500,
            id,
            recipes,
        );
    });
};

const getRecipeAuthor = (id: number, recipes: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (recipes.has(id)) {
                    resolve(
                        `${recipes.get(id).name} : ${recipes.get(id).author}`,
                    );
                    return;
                }

                reject("fatal error");
            },
            1500,
            id,
            recipes,
        );
    });
};

getRecipeIds
    .then(ids => {
        console.log(ids);
        return {
            authorPr: getRecipeAuthor(103, ids),
            namePr: getRecipeName(101, ids),
        };
    })
    .then(prs => {
        prs.authorPr
            .then(author => {
                console.log(author);
            })
            .catch(error => {
                console.log(error);
            });

        prs.namePr
            .then(name => {
                console.log(name);
            })
            .catch(error => {
                console.log(error);
            });
    });

function showOkAMillionTimes() {
    for (let i = 0; i < 10; i++) {
        console.log("ok");
    }
}

new Promise(resolve => {
    resolve(showOkAMillionTimes());
}).then(() => {
    console.log("fuck");
});
