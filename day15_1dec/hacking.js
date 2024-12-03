

//write code for blinking dots repeatedly after every 1 second

async function dots(text, timeout) {
    let box = document.querySelector(".box");
    let i = timeout;
    while (i >= 0) {
        box.innerText = `${text}\xa0\xa0\xa0\xa0${i} seconds remaining`;
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        i--;
        if (i < 0) break;
        box.innerText = `${text}.\xa0\xa0\xa0${i} seconds remaining`;
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        i--;
        if (i < 0) break;
        box.innerText = `${text}..\xa0\xa0${i} seconds remaining`;
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        i--;
        if (i < 0) break;

        box.innerText = `${text}...\xa0${i} seconds remaining`;
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        i--;
    }
}
async function main() {
    let box = document.querySelector(".box");
    let timeout = Math.floor(Math.random() * 7);
    console.log(timeout);
    box.innerText = "Hacking started";
    // box.style.color="red";
    // box.style.fontSize="20px";
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
    let arr = ["Initializing Hacking", "Reading your Files", "Password Files Detected", "Decrypting Passwords", "Sending to Server", "Cleaning up traces"];
    
    for(let i=0;i<arr.length;i++){
        timeout = Math.floor(Math.random() * 7);
        console.log(timeout);
        await dots(arr[i], timeout);
    }

    // await dots("Initializing Hacking", timeout);
    // timeout = Math.floor(Math.random() * 7);
    // console.log(timeout);
    // await dots("Reading your Files", timeout);
    // timeout = Math.floor(Math.random() * 7);
    // console.log(timeout);
    // await dots("Password Files Detected", timeout);
    // timeout = Math.floor(Math.random() * 7);
    // console.log(timeout);
    // await dots("Decrypting Passwords ", timeout);
    // timeout = Math.floor(Math.random() * 7);
    // console.log(timeout);
    // await dots("Sending to Server", timeout);
    // timeout = Math.floor(Math.random() * 7);
    // console.log(timeout);
    // await dots("Cleaning up traces", timeout);
    // timeout = Math.floor(Math.random() * 7);
    // console.log(timeout);
    // await dots("Hacking Completed", timeout);
    box.innerText = "Hacking Completed";

}
main();

//Initializing Hacking
//Reading your Files
//Password Files Detected
//Decrypting Passwords
//Sending to Server
//Cleaning up traces
//Hacking Completed

//after 7 seconds each line should be printed
//with 3 dots blinking in between each line

//write code
//use async await
//use setTimeout
//use promises

//which colors hacker use to write text

