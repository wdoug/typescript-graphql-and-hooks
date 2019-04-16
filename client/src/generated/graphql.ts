type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Long: any;
};

export type AggregatePost = {
  count: Scalars['Int'];
};

export type AggregateTodo = {
  count: Scalars['Int'];
};

export type AggregateUser = {
  count: Scalars['Int'];
};

export type AuthPayload = {
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type BatchPayload = {
  count: Scalars['Long'];
};

export type Mutation = {
  createPost: Post;
  updatePost?: Maybe<Post>;
  updateManyPosts: BatchPayload;
  upsertPost: Post;
  deletePost?: Maybe<Post>;
  deleteManyPosts: BatchPayload;
  createUser: User;
  updateUser?: Maybe<User>;
  updateManyUsers: BatchPayload;
  upsertUser: User;
  deleteUser?: Maybe<User>;
  deleteManyUsers: BatchPayload;
  createTodo: Todo;
  updateTodo?: Maybe<Todo>;
  updateManyTodoes: BatchPayload;
  upsertTodo: Todo;
  deleteTodo?: Maybe<Todo>;
  deleteManyTodoes: BatchPayload;
  signup?: Maybe<AuthPayload>;
  login?: Maybe<AuthPayload>;
  createDraft?: Maybe<Post>;
  publish?: Maybe<Post>;
};

export type MutationCreatePostArgs = {
  data: PostCreateInput;
};

export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};

export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};

export type MutationDeletePostArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostWhereInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationCreateTodoArgs = {
  data: TodoCreateInput;
};

export type MutationUpdateTodoArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};

export type MutationUpdateManyTodoesArgs = {
  data: TodoUpdateManyMutationInput;
  where?: Maybe<TodoWhereInput>;
};

export type MutationUpsertTodoArgs = {
  where: TodoWhereUniqueInput;
  create: TodoCreateInput;
  update: TodoUpdateInput;
};

export type MutationDeleteTodoArgs = {
  where: TodoWhereUniqueInput;
};

export type MutationDeleteManyTodoesArgs = {
  where?: Maybe<TodoWhereInput>;
};

export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type MutationCreateDraftArgs = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type MutationPublishArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type PageInfo = {
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Post = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  author: User;
};

export type PostConnection = {
  pageInfo: PageInfo;
  edges: Array<PostEdge>;
  aggregate: AggregatePost;
};

export type PostCreateInput = {
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  author: UserCreateOneWithoutPostsInput;
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateWithoutAuthorInput = {
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export type PostEdge = {
  node: Post;
  cursor: Scalars['String'];
};

export enum PostOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  Published_Asc = 'published_ASC',
  Published_Desc = 'published_DESC',
  Title_Asc = 'title_ASC',
  Title_Desc = 'title_DESC',
  Content_Asc = 'content_ASC',
  Content_Desc = 'content_DESC',
}

export type PostScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  published_not?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Scalars['String']>>;
  content_not_in?: Maybe<Array<Scalars['String']>>;
  content_lt?: Maybe<Scalars['String']>;
  content_lte?: Maybe<Scalars['String']>;
  content_gt?: Maybe<Scalars['String']>;
  content_gte?: Maybe<Scalars['String']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  content_starts_with?: Maybe<Scalars['String']>;
  content_not_starts_with?: Maybe<Scalars['String']>;
  content_ends_with?: Maybe<Scalars['String']>;
  content_not_ends_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateManyDataInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostUpdateManyMutationInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
};

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
};

export type PostUpdateWithoutAuthorDataInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  published_not?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Scalars['String']>>;
  content_not_in?: Maybe<Array<Scalars['String']>>;
  content_lt?: Maybe<Scalars['String']>;
  content_lte?: Maybe<Scalars['String']>;
  content_gt?: Maybe<Scalars['String']>;
  content_gte?: Maybe<Scalars['String']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  content_starts_with?: Maybe<Scalars['String']>;
  content_not_starts_with?: Maybe<Scalars['String']>;
  content_ends_with?: Maybe<Scalars['String']>;
  content_not_ends_with?: Maybe<Scalars['String']>;
  author?: Maybe<UserWhereInput>;
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  post?: Maybe<Post>;
  posts: Array<Post>;
  postsConnection: PostConnection;
  user?: Maybe<User>;
  users: Array<User>;
  usersConnection: UserConnection;
  todo?: Maybe<Todo>;
  todoes: Array<Todo>;
  todoesConnection: TodoConnection;
  todos: Array<Todo>;
  me?: Maybe<User>;
  feed?: Maybe<Array<Post>>;
  drafts?: Maybe<Array<Post>>;
  filterPosts?: Maybe<Array<Post>>;
};

export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryTodoArgs = {
  where: TodoWhereUniqueInput;
};

export type QueryTodoesArgs = {
  where?: Maybe<TodoWhereInput>;
  orderBy?: Maybe<TodoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryTodoesConnectionArgs = {
  where?: Maybe<TodoWhereInput>;
  orderBy?: Maybe<TodoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryTodosArgs = {
  where?: Maybe<TodoWhereInput>;
  orderBy?: Maybe<TodoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>;
};

export type Subscription = {
  feedSubscription?: Maybe<Post>;
};

export type Todo = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  text?: Maybe<Scalars['String']>;
  completed: Scalars['Boolean'];
};

export type TodoConnection = {
  pageInfo: PageInfo;
  edges: Array<TodoEdge>;
  aggregate: AggregateTodo;
};

export type TodoCreateInput = {
  text?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type TodoEdge = {
  node: Todo;
  cursor: Scalars['String'];
};

export enum TodoOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
  Text_Asc = 'text_ASC',
  Text_Desc = 'text_DESC',
  Completed_Asc = 'completed_ASC',
  Completed_Desc = 'completed_DESC',
}

export type TodoUpdateInput = {
  text?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type TodoUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type TodoWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  completed_not?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<TodoWhereInput>>;
  OR?: Maybe<Array<TodoWhereInput>>;
  NOT?: Maybe<Array<TodoWhereInput>>;
};

export type TodoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type User = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  posts?: Maybe<Array<Post>>;
};

export type UserConnection = {
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutPostsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UserEdge = {
  node: User;
  cursor: Scalars['String'];
};

export enum UserOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Email_Asc = 'email_ASC',
  Email_Desc = 'email_DESC',
  Password_Asc = 'password_ASC',
  Password_Desc = 'password_DESC',
  Name_Asc = 'name_ASC',
  Name_Desc = 'name_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutPostsDataInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_lt?: Maybe<Scalars['String']>;
  password_lte?: Maybe<Scalars['String']>;
  password_gt?: Maybe<Scalars['String']>;
  password_gte?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};
export type CreateTodoMutationVariables = {
  text?: Maybe<Scalars['String']>;
};

export type CreateTodoMutation = { __typename?: 'Mutation' } & {
  createTodo: { __typename?: 'Todo' } & Pick<Todo, 'id' | 'text'>;
};

export type CompleteTodoMutationVariables = {
  id: Scalars['ID'];
};

export type CompleteTodoMutation = { __typename?: 'Mutation' } & {
  updateTodo: Maybe<{ __typename?: 'Todo' } & Pick<Todo, 'text' | 'completed'>>;
};

export type TodosQueryVariables = {};

export type TodosQuery = { __typename?: 'Query' } & {
  todos: Array<
    { __typename?: 'Todo' } & Pick<Todo, 'id' | 'text' | 'completed'>
  >;
};
