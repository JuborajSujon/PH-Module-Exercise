const latestPostContainer = document.getElementById("latest-post-container");
const latestPostLoader = document.getElementById("latest-post-loader");

const fetchDataLatestPost = async () => {
  try {
    // Clear container
    latestPostContainer.innerHTML = "";

    // Show loader
    latestPostLoader.classList.remove("hidden");

    // Fetch data from API
    const url = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
    const res = await fetch(url);
    const data = await res.json();

    // Render data
    renderLatestPosts(data);

    // Hide loader
    latestPostLoader.classList.add("hidden");
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    // Handle error
  }
};

const renderLatestPosts = (data) => {
  data.forEach((item) => {
    const article = createArticleElement(item);
    latestPostContainer.appendChild(article);
  });
};

const createArticleElement = (item) => {
  const article = document.createElement("article");
  article.className = `bg-white hover:bg-[#F3F3F5] p-5 md:p-7 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md border border-slate-300`;

  article.innerHTML = `
    <div class="w-full mb-5">
      <img class="rounded-xl" src="${item?.cover_image}" alt="${item?.title}" />
    </div>
    <div class="text-[#12132D] font-mulish grow">
      <p class="text-base font-semibold opacity-60 mb-3">
        <i class="fa-regular fa-calendar-plus mr-2"></i>
        <span>${item?.author?.posted_date || "No Publish Date"}</span>
      </p>
      <h3 class="text-lg font-bold mb-4 font-mulish">
        ${item?.title}
      </h3>
      <p class="opacity-60 text-base mb-5">
        ${item?.description}
      </p>

      <!-- Author information section  -->
      <div class="flex items-center justify-start gap-3">
        <div class="w-14 h-14 shrink-0">
          <img class="rounded-full" src="${item?.profile_image}" alt="${
    item?.author?.name
  }" />
        </div>
        <div>
          <h5 class="font-bold">${item?.author?.name}</h5>
          <p class="opacity-60 text-sm">${
            item?.author?.designation ? item.author.designation : "Unknown"
          }</p>
        </div>
      </div>
    </div>
  `;

  return article;
};

fetchDataLatestPost();
