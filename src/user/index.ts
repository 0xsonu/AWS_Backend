/* eslint-disable no-case-declarations */
import { DB } from '../utils/DB';
import { User } from './utils/userModel';
import { AppSyncEvent } from '../utils/customTypes';
import { getCurrentUser } from '../utils/authentication';

export const handler = async (event: AppSyncEvent): Promise<any> => {
  try {
    await DB();
    const { fieldName } = event.info;
    const { arguments: args, identity } = event;
    const tempFilter: any = {};
    let tempSubscription = {};
    let users: any = [];
    let count = 0;

    // const authUser = await getCurrentUser(identity);

    switch (fieldName) {
      case 'createUser':
        // return await User.create({
        //   ...args,
        // });
        return 'User Created!';
      case 'getUsers':
        // const {
        //   page = 1,
        //   limit = 10,
        //   search = '',
        //   lowerRange = null,
        //   higherRange = null,
        //   sortBy = '-createdAtDate',
        //   active = null,
        // } = args;

        // if (active !== null) {
        //   tempFilter.active = active;
        // }

        // if (lowerRange !== null && higherRange !== null) {
        //   tempFilter.createdAt = {
        //     $gte: lowerRange,
        //     $lte: higherRange,
        //   };
        // }

        // users = await User.find({
        //   ...tempFilter,
        //   $or: [
        //     {
        //       email: { $regex: search, $options: 'i' },
        //     },
        //     {
        //       name: { $regex: search, $options: 'i' },
        //     },
        //   ],
        // })
        //   .limit(limit * 1)
        //   .skip((page - 1) * limit)
        //   .sort(sortBy)
        //   .exec();

        // count = await User.countDocuments({
        //   ...tempFilter,
        //   $or: [
        //     {
        //       email: { $regex: search, $options: 'i' },
        //     },
        //     {
        //       name: { $regex: search, $options: 'i' },
        //     },
        //   ],
        // });

        return {
          users: 'Total User is 12',
          count: 12,
        };
      default:
        throw new Error('Something went wrong! Please check your resolver mapping template');
    }
  } catch (error) {
    const error2 = error;
    throw error2;
  }
};
