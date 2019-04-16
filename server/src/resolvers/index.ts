import { Query } from './Query';
import { User } from './User';
import { Mutation } from './Mutation';
import { feedSubscription } from './Subscription';
import { AuthPayload } from './AuthPayload';
import { Todo } from './Todo';

export const resolvers = {
  Query,
  User,
  Mutation,
  Todo,
  feedSubscription,
  AuthPayload,
};
