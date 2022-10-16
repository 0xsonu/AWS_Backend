import { User } from "../user/utils/UserModel";

const models = [User];

export const createCollections = async () => {
  try {
    await Promise.all(models.map((model) => model.createCollection()));
  } catch (error) {
    console.log(`Error while creating collection ${error.message}`);
  }
};
