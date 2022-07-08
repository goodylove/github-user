const search = document.querySelector(".search");
const content = document.querySelector(".content");
const info = document.querySelector(".info-text");
let show = document.querySelector(".show");

function fetchData() {
  let searchValue = search.value;
  info.innerHTML = `seraching for  ${searchValue}`;
  if (show.innerHTML) {
    show.innerHTML = "";
  }
  const api_url = `https://api.github.com/users/${searchValue}`;

  fetch(api_url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      info.innerHTML = "";
      const { name, avatar_url, bio, following, followers, public_repos } =
        data;
      const display = `<div class="content">
   <div class="img-cont">
     <img src="${avatar_url}" alt="${name}"/>
   </div>
   <div class="info">
     <p class="username">${name}</p>
     <p class="bio">Bio:${bio}</p>
     <p class="followers"> followers:${followers}</p>
     <p class="following">followings:${following}</p>
     <p class="following">git repo:${public_repos}</p>
     </div>
 </div>`;

      show.innerHTML = display;
    });
}

search.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.target.value) {
    searchValue = e.target.value;
    fetchData();
  }
});
