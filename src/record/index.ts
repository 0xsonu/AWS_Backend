import { AppSyncEvent } from '../utils/customTypes';
import { DB } from '../utils/DB';
import { Record } from './utils/RecordModel';

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
      case 'getRecords':
        const fetchedRecord = await Record.find().limit(10);
        console.log(fetchedRecord);
        return fetchedRecord;
      case 'getRecordById':
        const { id } = args;
        const fetchedRecordById = await Record.findById(id);
        console.log(fetchedRecordById);
        return fetchedRecordById;
      case 'createRecord':
        const createdRecord = await Record.create(args);
        console.log(createdRecord);
        return createdRecord;
      default:
        throw new Error('Something went wrong! Please check your resolver mapping template');
    }
  } catch (error) {
    const error2 = error;
    throw error2;
  }
};
