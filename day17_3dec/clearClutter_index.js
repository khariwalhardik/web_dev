console.log("we are clearing the clutter project");

const fs = require('fs');
const path = require('path');

const mypath = `${__dirname}/clutter`;

//extract the files from the clutter folder and display them

// fs.readdir(mypath,(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         files.forEach(file=>{
//             console.log(file);
//         });
//     }
// }
// );

//extract extension of the files from the clutter folder and display them

// fs.readdir(mypath,(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         files.forEach(file=>{
//             console.log(path.extname(file));
//         });
//     }
// }   );

//create the folder named with organized/extensionName and move the files to the respective folders

//firstly create the folder named organized

if (!fs.existsSync(`${mypath}/organized`)) {
    fs.mkdirSync(`${mypath}/organized`);
}
fs.readdir(mypath, (err, files) => {
    if (err) {
        console.log(err);
    }
    else {
        //extract the extension of the files
        files.forEach(file => {
            let extensionName = path.extname(file).slice(1);
            console.log(extensionName);
            // check if the folder exists with the extension name
            // if not create the folder
            if (!fs.existsSync(`${mypath}/organized/${extensionName}`)) {
                fs.mkdirSync(`${mypath}/organized/${extensionName}`);
            }
            //moving the file to its respective folder
            fs.rename(`${mypath}/${file}`, `${mypath}/organized/${extensionName}/${file}`, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("file moved successfully");
                }
            });

        });

    }
});
