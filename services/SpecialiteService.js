// const Specialite = require('../models/Specialite');

// class SpecialiteService {
//   constructor(specialiteModel) {
//     this.specialiteModel = specialiteModel;
//   }

//   async getAllSpecialite() {
//     try {
//       const specialites = await this.specialiteModel.find();
//       return specialites;
//     } catch (error) {
//       throw new Error(`Unable to fetch specialites: ${error}`);
//     }
//   }

//   async getSpecialiteById(id) {
//     try {
//       const specialite = await this.specialiteModel.findById(id);
//       if (!specialite) {
//         throw new Error(`Specialite not found with ID ${id}`);
//       }
//       return specialite;
//     } catch (error) {
//       throw new Error(`Unable to fetch specialite with ID ${id}: ${error}`);
//     }
//   }

// }
// module.exports = SpecialiteService;