let count = Number(localStorage.getItem('count'))||0;
document.querySelector("#like_count").innerHTML=`${count} Like`;

const Like = () =>
{
    count = count+1;
    document.querySelector("#like_count").innerHTML=`${count} Like`;
    localStorage.setItem('count',count);

}

document.querySelector("#like").addEventListener("click",Like);


let follow=Number(localStorage.getItem('follow'))||0;
document.querySelector("#follow_count").innerHTML=`${follow} Follow`;

document.querySelector("#follow").addEventListener("click",(e)=>
{
    follow= follow+1;
    document.querySelector("#follow_count").innerHTML=`${follow} Follow`;
    localStorage.setItem('follow',follow);
})

