import{i as r,S as h}from"./vendor-8c59ed88.js";const p="45116673-24298b0cd3e8b5c60e15e7e67",f="http://pixabay.com/api",y=document.querySelector(".form"),i=document.querySelector(".input"),n=document.querySelector(".gallery-list"),b=document.querySelector(".result"),l=e=>({enable:()=>document.querySelector(e).classList.remove("disabled"),disable:()=>document.querySelector(e).classList.add("disabled")}),o=l(".text"),a=l(".loading-text"),u=l(".result-text");y.addEventListener("submit",e=>{e.preventDefault();const s=i.ariaValueMax;$(s)});function $(e){const s=`${f}?key=${p}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;o.enable(),a.enable(),fetch(s).then(t=>{if(!t.ok)throw new Error(`Error! status: ${t.status}`);return t.json()}).then(t=>{o.disable(),a.disable(),u.enable(),b.textContent=i.value,t.hits?x(t.hits):r.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff"})}).catch(t=>{o.disable(),a.disable(),console.error(t),r.warning({title:"Error",message:"An error occurred while fetching images"})})}const v="Sorry, there are no images matching your search query. Please try again!";function x(e){if(n.innerHTML="",e.length===0){o.disable(),a.disable(),u.disable(),r.warning({message:v,backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(c,2e3);return}const s=e.map(S).join("");n.insertAdjacentHTML("beforeend",s),setTimeout(c,500),q.refresh()}function c(){i.value=""}const q=new h(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function S({webformatURL:e,tags:s,downloads:t,likes:d,comments:m,views:g}){return`<li class="list-container">
    <div >
      <div class="image-container">
        <a href="${e}" data-source="${e}">
          <img src="${e}" alt="${s}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${d}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${g}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${m}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${t}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}
//# sourceMappingURL=form-a9745185.js.map
