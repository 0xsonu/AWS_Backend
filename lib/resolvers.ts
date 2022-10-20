import { userResolvers } from '../src/user/resolvers';
import { recordResolvers } from '../src/record/resolvers';

export default { ...recordResolvers, ...userResolvers };
