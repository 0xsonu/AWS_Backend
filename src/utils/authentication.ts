import * as mongoose from "mongoose";
import { User } from "../user/utils/userModel";
import { IIdentity } from "./customTypes";

export const getCurrentUser = async (identity: IIdentity) => {
  let user;
  if (
    identity &&
    identity.claims &&
    identity.claims.sub &&
    identity.claims["custom:_id"]
  ) {
    user = {
      _id: identity.claims["custom:_id"],
      name: identity.claims.name,
      picture: identity.claims.picture,
    };
  } else if (identity && identity.claims && identity.claims.sub) {
    user = await User.findOne({ userId: identity.claims.sub }).select(
      "_id name picture"
    );
  }
  return user;
};
