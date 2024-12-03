console.log('dynamicCard.js loaded');

function createCard(title,channelName,views,monthsOld,duration,thumbnailUrl){
    let card = document.createElement('div');
    card.className = 'card';
    card.style.height = '125px';
    card.style.width = '80vw';
    // card.style.border = '1px solid black';
    card.style.backgroundColor = '#151515';
    card.style.display='flex';
    card.style.borderRadius='15px';
    card.style.padding='10px';
    //which property to js to use for hovering effect and change background color
    card.addEventListener('mouseenter', () => {
        card.style.opacity = '0.9'; // Change background color on hover
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.opacity = '1'; // Reset background color
      });

    // Image
    let imgdiv = document.createElement('div');
    imgdiv.className = 'img';
    imgdiv.style.height='100%';
    imgdiv.style.width='222px';
    // imgdiv.style.border = '1px solid black';
    imgdiv.style.positin='fixed';
    imgdiv.style.borderRadius='15px';
    imgdiv.style.backgroundImage='url('+thumbnailUrl+')';
    imgdiv.style.backgroundSize='cover';
    imgdiv.style.backgroundPosition='center';
    imgdiv.style.backgroundRepeat='no-repeat';
    imgdiv.style.zIndex='3';


    // Duration
    let durationspan = document.createElement('span');
    durationspan.className = 'duration';
    durationspan.innerText = duration;
    durationspan.style.backgroundColor='darkgrey';
    durationspan.style.opacity='0.7';
    durationspan.style.color='white';
    durationspan.style.position='relative';
    durationspan.style.top='81%';
    durationspan.style.left='79%';
    durationspan.style.borderRadius='5px';
    durationspan.style.padding='2px';
    durationspan.style.fontSize='15px';
    imgdiv.appendChild(durationspan);
    card.appendChild(imgdiv);


    // Content
    let content = document.createElement('div');
    content.className = 'content';
    content.style.height='100%';
    content.style.width='calc(100% - 222px)';
    // content.style.border = '1px solid black';
    // content.style.display='grid';

    //title
    let titlediv = document.createElement('div');
    titlediv.className = 'title';
    content.appendChild(titlediv);
    titlediv.innerText = title;
    titlediv.style.height='30%';
    // titlediv.style.width='100%';
    // titlediv.style.border = '1px solid black';
    titlediv.style.color='white';
    titlediv.style.textAlign='top';
    titlediv.style.fontSize='21.5px';
    titlediv.style.fontWeight='bold';
    titlediv.style.fontFamily='Poppins';
    titlediv.style.padding='10px';




    let descdiv = document.createElement('div');
    descdiv.className = 'desc';
    if(views>1000000){
        views = (views/1000000).toFixed(1) + 'M';
    }
    else if(views>1000){
        views = (views/1000).toFixed(1) + 'K';
    }


    descdiv.innerText = channelName + ' > ' + views + ' views > ' + monthsOld + ' months ago';
    descdiv.style.fontSize='15px';
    descdiv.style.fontFamily='Poppins';
    content.appendChild(descdiv);
    descdiv.style.textAlign='top';
    descdiv.style.height='60%';
    descdiv.style.color='grey';
    descdiv.style.padding='10px';

    //button
    let buttondiv = document.createElement('div');
    buttondiv.className = 'button';
    buttondiv.innerText = ':';
    buttondiv.style.height='35px';
    buttondiv.style.width='35px';
    buttondiv.style.borderRadius='50%';
    buttondiv.style.color='white';
    buttondiv.style.position='relative';
    buttondiv.style.top='50%';
    buttondiv.style.left='90%';
    buttondiv.style.zIndex='3';
    content.appendChild(buttondiv);
    card.appendChild(content);
    return card;

}

console.log('dynamicCard.js ended');

let container=document.querySelector('.container');
container.style.gap='10px';
container.style.display='grid';
let card1 = createCard('Hardik Khariwal Learning Web Development -> Day1','Reading By HK',1000,1,'10:30','https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB2CBsdfdhlYA7kZwtSfre44-Wx_g');
container.appendChild(card1);
let card2 = createCard('Think Faster, Talk Smarter with Matt Abrahams','Standford Alumni',1000000,1,'1:52:38','https://i.ytimg.com/vi/x6TsR3y5Qfg/hqdefault.jpg?sqp=-oaymwE1CMQBEG5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgSShAMA8=&rs=AOn4CLCwpVXrSny7F4KaVAzAY7MKmiRYZw');
container.appendChild(card2);
let card3 = createCard('Hardik Khariwal Learning Web Development -> Day3','Reading By HK',12420000,1,'10:30','https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB2CBsdfdhlYA7kZwtSfre44-Wx_g');
container.appendChild(card3);
let totalCards=6;
for(let i=0;i<totalCards;i++){
    let card=createCard('Hardik Khariwal Learning Web Development -> Day'+(i+4),'Reading By HK',252350000,1,'10:30','https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB2CBsdfdhlYA7kZwtSfre44-Wx_g');
    container.appendChild(card);
}