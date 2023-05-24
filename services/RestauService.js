// const Restaurant = require('../models/Restaurant');

// class RestauService {
//   constructor(restauModel) {
//     this.restauModel = restauModel;
//   }

//   async getAllRestaurants() {
//     try {
//       const restaurants = await this.restauModel.find();
//       return restaurants;
//     } catch (error) {
//       throw new Error(`Unable to fetch restaurants: ${error}`);
//     }
//   }

//   async getRestauById(id) {
//     try {
//       const restaurant = await this.restauModel.findById(id);
//       if (!restaurant) {
//         throw new Error(`Restaurant not found with ID ${id}`);
//       }
//       return restaurant;
//     } catch (error) {
//       throw new Error(`Unable to fetch restaurant with ID ${id}: ${error}`);
//     }
//   }
//   async getRestauBySpecialiteId(specialiteId) {
//     try {
//       const restaurants = await this.restauModel.find({ specialite: specialiteId });
//       return restaurants;
//     } catch (error) {
//       throw new Error(`Unable to fetch restaurants for specialite ${specialiteId}: ${error}`);
//     }
//   }


// }
// module.exports = RestauService;