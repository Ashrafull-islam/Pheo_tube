// cetagory 
const cetagory=async()=>{
    const result = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data=await result.json();
    const res=data.data;
    displayCategories(res);
}

const displayCategories=(iteam)=>{
    const categoriesId=document.getElementById('Catagories');
    iteam.forEach(iteam => {
        console.log(iteam.category)
    const btn=document.createElement('button');
    btn.classList.add('btn','px-8','btn-active','focus:bg-red-600','text-xl','text-gray-600');
    btn.innerText = iteam.category;
    categoriesId.appendChild(btn);
    });
}
cetagory();


// main card section 
const mainCard=()=>{
    
}