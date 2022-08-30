const containerEl = document.querySelector(".container");
const loadMoreEl = document.querySelector(".load-more");
let currentLimit = 6;
let incrementAmount = 6;

const mixer = mixitup(containerEl, {
  multifilter: {
    enable: true,
  },
  controls: {
    enable: true,
  },
  pagination: {
    limit: currentLimit,
  },
});

function handleLoadMoreClick() {
  // On each click of the load more button, we increment
  // the current limit by a defined amount

  currentLimit += incrementAmount;

  mixer.paginate({ limit: currentLimit });
}

loadMoreEl.addEventListener("click", handleLoadMoreClick);

const cat1 = document.querySelector(".cat");
const cat1Sub = document.querySelector(".cat1sub");

const catArr = document.querySelectorAll(".cat");
const catSub = document.querySelectorAll(".catsub");

catArr.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    let id = document.querySelector(e.currentTarget.dataset.item);
    id.classList.toggle("active");
  });
});
