const reviews = [
    {
      id: 1,
      name: "Lebron James Jr.",
      job: "Basketball Player",
      img:
        "usa_today_13792544 (1).png",
      text:
        " LeBron Raymone 'Bronny' James Jr. (/ləˈbrɒn/; born October 6, 2004)is an American high school basketball player who attends Sierra Canyon School in Los Angeles. He is the eldest child of professional basketball player LeBron James.",
    },
    {
      id: 2,
      name: "Savannah James",
      job: "",
      img:
        "../savannah-james-biography.jpg",
      text:
        "Lebron James' highschool sweetheart.They've been together since then.They have 3 beautiful kids now.",
    },
    {
      id: 3,
      name: "Bryce Maximus James",
      job: "Basketball Player",
      img:
        "https://biographymask.com/wp-content/uploads/2021/03/Bryce-James-Celebrity-kid-1200x1200.jpg",
      text:
        "Bryce Maximus James (born June 14, 2007) is an American basketball player who attends Sierra Canyon School in Chatsworth, Los Angeles.Lebron James' second son.",
    },
    {
      id: 4,
      name: "Zhuri James",
      job: "Youtube Star",
      img:
        "https://bckonline.com/wp-content/uploads/2020/10/zhuri-james.jpg",
      text:
        "Zhuri Nova James (/zɜːriː/; born October 22, 2014) is an American celebutante who attends Sierra Canyon School in Chatsworth, Los Angeles. ",
    },
  ];


const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");
const bars=document.getElementById('bars');


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem=0;





window.addEventListener("DOMContentLoaded",function(){
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
});


function showperson(person){
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showperson(currentItem);
});

prevBtn.addEventListener("click",function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
    showperson(currentItem);
})




