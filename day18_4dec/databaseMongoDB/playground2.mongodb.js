console.log("start creating a new database");

use("playground2");

db.createCollection("posts");

db.posts.insertMany([
    {
        title: "Post 1",
        text: "Text 1",
        tags: ["new", "tech"],
        creator: {
            name: "John",
            age: 25
        },
    },
    {
        title: "Post 2",
        text: "Text 2",
        tags: ["old", "tech"],
        creator: {
            name: "Jane",
            age: 30
        },
    },
    {
        title: "Post 3",
        text: "Text 3",
        tags: ["new", "tech"],
        creator: {
            name: "John",
            age: 25
        },
    },
    {
        title: "Post 4",
        text: "Text 4",
        tags: ["old", "tech"],
        creator: {
            name: "Jane",
            age: 30
        },
    }]);

    console.log("end creating a new database");

