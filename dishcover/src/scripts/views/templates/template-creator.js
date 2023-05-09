import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (data) => `
  <h2 class="restaurant__title">${data.restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + data.restaurant.pictureId}" alt="${data.restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${data.restaurant.city}</p>
    <h4>Address</h4>
    <p>${data.restaurant.address}</p>
    <h4>Category</h4>
    <p> ${data.restaurant.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')} </p>
    <h4>Rating</h4>
    <p>${data.restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${data.restaurant.description}</p>
  </div>
  <div class="detail-menu">
  <div class="menu-title-container">
      <h2 class="menu-title">Food</h2>
  </div>
  <ul class="menu-list">
      ${data.restaurant.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}
  <ul>
</div>
<div class="detail-menu">
  <div class="menu-title-container">
      <h2 class="menu-title">Drinks</h2>
  </div>
  <ul class="menu-list">
      ${data.restaurant.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}
  </ul>
</div>
<div id="review-container">
<h2>Customer Review</h2>
${data.restaurant.customerReviews.map((review) => `
    <div class="review-container">
            <h3 class="review-customer-name">${review.name}</h3>
            <small class="review-date-post">${review.date}</small>
            <p class="review-content">${review.review}</p>
    </div>
    `).join('')}
</div>
<div class="review-form-container">
<h2>Make a Review</h2>
<form class="review-form" id="review-form">
    <input type="hidden" name="id" value="${data.restaurant.id}">
    <div class="review-form-element">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" autocomplete="off">
    </div>
    <div class="review-form-element">
        <label for="review">Review</label>
        <textarea name="review" id="review"></textarea>
    </div>
    <button type="submit" id="button-review">Add Review</button>
</form>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.title}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : restaurant.picture}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = (reviews) => {
  const review = reviews.customerReviews[reviews.customerReviews.length - 1];

  const html = document.createElement('div');
  html.classList.add('review-container');
  html.innerHTML = `
        <div class="review-body">
            <h3 class="review-customer-name">${review.name}</h3>
            <small class="review-date-post">${review.date}</small>
            <p class="review-content">${review.review}</p>
        </div>
        
  `;

  return html;
};

const createButtonLoaderTemplate = () => `
  <div class="btn-loader">
  </div>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
  createButtonLoaderTemplate,
};
