let count_2 = Number(sessionStorage.getItem('count_2'))||0;
document.querySelector("#like_count_2").innerHTML=`${count_2} Like`;

const Session = () =>
{
    count_2 = count_2+1;
    document.querySelector("#like_count_2").innerHTML=`${count_2} Like`;
    sessionStorage.setItem('count_2',count_2);

}
document.querySelector("#close").addEventListener("click",Session);


let follow_2=Number(sessionStorage.getItem('follow_2'))||0;
document.querySelector("#follow_count_2").innerHTML=`${follow_2} Follow`;

document.querySelector("#follow_2").addEventListener("click",(e)=>
{
    follow_2= follow_2+1;
    document.querySelector("#follow_count_2").innerHTML=`${follow_2} Follow`;
    sessionStorage.setItem('follow_2',follow_2);
})
