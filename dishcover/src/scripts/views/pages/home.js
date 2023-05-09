import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Many Dish To Discover</h1>
    </div>
    </div>
    <div class="content" id="content">
      <div id="restaurants" class="restaurants">
      </div>
    </div>
  `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
