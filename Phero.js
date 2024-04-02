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
        // console.log(iteam.category)
    const btn=document.createElement('button');
    btn.classList.add('btn','px-8','btn-active','focus:bg-red-600','text-xl','text-gray-600');
    btn.innerText = iteam.category;
    btn.onclick =() =>{
        mainCard(iteam.category_id);
        loader(true);
    }
    categoriesId.appendChild(btn);
    });
}
cetagory();

// loader section

const loader=(loading)=>{
    const loaderId=document.getElementById('loader');
    if(loading){
        loaderId.classList.remove('hidden');
    }
    else{
        loaderId.classList.add('hidden');
    }
}

// main card section 
const mainCard= async (categoryId)=>{
    const LinkCard=await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const res= await LinkCard.json();
    const data=res.data;
    Card(data);
}

const Card=(data)=>{
    const Card_Id=document.getElementById('Card_id');
    // clear preveus section 
    Card_Id.innerHTML='';
    data.forEach(element => {
    const card=document.createElement('div');
    card.classList.add('card', 'w-96');
    card.innerHTML=`
    <figure><img src="${element.thumbnail}" alt="Shoes" /></figure>
    <div class="card-body">
    <div class="flex gap-2">
    <img class="p-4" src="${element.authors.profile_picture}" alt="profile">
      <h2 class="card-title">${element.title}</h2>
    </div>
    <div class="flex">
    <p>${element.authors.profile_name}</p>
    <p>${element.authors.verified}</p>
    </div>
    <p>${element.others.views}</p>
      </div>
    `;
    Card_Id.appendChild(card);
    });
    loader(false);

}