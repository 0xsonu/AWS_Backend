import { Record } from '../record/utils/RecordModel';
import { User } from '../user/utils/UserModel';

const models = [User, Record];

export const createCollections = async () => {
  try {
    await Promise.all(models.map((model) => model.createCollection()));
  } catch (error) {
    throw new Error(`Error while creating collection ${error.message}`);
  }
};
