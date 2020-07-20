type Recipe = { author: string; name: string };

function createRecipes() {
    const recipes = new Map<number, Recipe>();

    recipes.set(100, { "author": "william", "name": "cherry trifle" });
    recipes.set(101, { "author": "joseph", "name": "christmass pudding" });
    recipes.set(102, { "author": "florian", "name": "silabub" });
    recipes.set(103, { "author": "alexy", "name": "lemon curd" });

    return recipes;
}

/*
const prRecipes = (() => {

    return new Promise<Map<number, Recipe>>(resolve => {
        setTimeout(() => {
            resolve(createRecipes());
        }, 1500);
    });

})();
*/

const prRecipes = new Promise<Map<number, Recipe>>(resolve =>
    setTimeout(() => resolve(createRecipes()), 1500),
);

function getRecipeName(id: number, recipes: Map<number, Recipe>) {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const recipe = recipes.get(id);

            if (recipe === undefined) {
                reject(new Error("fatal error"));
                return;
            }

            resolve(`${id} : ${recipe.name}`);
        }, 1500);
    });
}

function getRecipeAuthor(
    id: number,
    recipes: ReturnType<typeof createRecipes>,
): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const recipe = recipes.get(id);
            if (recipe === undefined) {
                reject(new Error("error"));
                return;
            }

            resolve(`${recipe.name} : ${recipe.author}`);
        }, 1500);
    });
}

prRecipes
    .then(recipes => {
        console.log(recipes);
        return {
            "authorPr": getRecipeAuthor(103, recipes),
            "namePr": getRecipeName(101, recipes),
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
