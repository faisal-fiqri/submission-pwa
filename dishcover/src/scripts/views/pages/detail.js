import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantDbSource.restaurantDetailById(url.id);
    console.log(data);
    console.log(data.restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(data);
    const baseImageUrl = 'https://restaurant-api.dicoding.dev/images/medium/';
    const { pictureId } = data.restaurant;
    const imageUrl = `${baseImageUrl}${pictureId}`;
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        picture: imageUrl,
        rating: data.restaurant.rating,
      },
    });
  },
};

export default Detail;
