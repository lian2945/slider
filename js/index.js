const sliderBox=document.querySelector('.slider-box');
const slider=sliderBox.querySelector('.slider');

const btn_Prev=document.querySelector(".btn-prev");
const btn_Next=document.querySelector(".btn-next");

let slideIndex=0;
let intervalid=0;

const file=sliderBox.querySelector('.file');
const files=sliderBox.querySelector('.files');

const total=file.length;

const sliderWidth=slider.clientWidth;

const pagination = sliderBox.querySelector('.pagination');

const autoBtn = document.querySelector('.autoplay');

btn_Prev.onclick=function()
{
    clearInterval(intervalid);
    prevpage();
}

function prevpage()
{
    if(slideIndex==0) slideIndex=5;
    else slideIndex--;
    files.style.left=-(sliderWidth*slideIndex)+'px';
}

btn_Next.onclick=function()
{
    clearInterval(intervalid);
    nextpage();
};

function nextpage()
{
    if(slideIndex==5) slideIndex=0;
    else slideIndex++;
    files.style.left=-(sliderWidth*slideIndex)+'px';
}

autoBtn.onclick=function()
{
    intervalid=setInterval(function(){
        nextpage();
    }, 3000);
}