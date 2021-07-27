export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
	DateTime: any;
};

export type DateTimeFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeNullableFilter>;
};

export type EnumRoleFilter = {
	equals?: Maybe<Role>;
	in?: Maybe<Array<Role>>;
	notIn?: Maybe<Array<Role>>;
	not?: Maybe<NestedEnumRoleFilter>;
};

export type IntFilter = {
	equals?: Maybe<Scalars["Int"]>;
	in?: Maybe<Array<Scalars["Int"]>>;
	notIn?: Maybe<Array<Scalars["Int"]>>;
	lt?: Maybe<Scalars["Int"]>;
	lte?: Maybe<Scalars["Int"]>;
	gt?: Maybe<Scalars["Int"]>;
	gte?: Maybe<Scalars["Int"]>;
	not?: Maybe<NestedIntFilter>;
};

export type Mutation = {
	__typename?: "Mutation";
	deleteWishVote?: Maybe<WishVote>;
	createWish: Wish;
	createWishVote: WishVote;
	updateWish?: Maybe<Wish>;
};

export type MutationDeleteWishVoteArgs = {
	where: WishVoteWhereUniqueInput;
};

export type MutationCreateWishArgs = {
	data: WishCreateInput;
};

export type MutationCreateWishVoteArgs = {
	data: WishVoteCreateInput;
};

export type MutationUpdateWishArgs = {
	data: WishUpdateInput;
	where: WishWhereUniqueInput;
};

export type NestedDateTimeFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedEnumRoleFilter = {
	equals?: Maybe<Role>;
	in?: Maybe<Array<Role>>;
	notIn?: Maybe<Array<Role>>;
	not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedIntFilter = {
	equals?: Maybe<Scalars["Int"]>;
	in?: Maybe<Array<Scalars["Int"]>>;
	notIn?: Maybe<Array<Scalars["Int"]>>;
	lt?: Maybe<Scalars["Int"]>;
	lte?: Maybe<Scalars["Int"]>;
	gt?: Maybe<Scalars["Int"]>;
	gte?: Maybe<Scalars["Int"]>;
	not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
	equals?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	contains?: Maybe<Scalars["String"]>;
	startsWith?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
	equals?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	contains?: Maybe<Scalars["String"]>;
	startsWith?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringNullableFilter>;
};

export type Query = {
	__typename?: "Query";
	user?: Maybe<User>;
	wishes: Array<Wish>;
};

export type QueryUserArgs = {
	where: UserWhereUniqueInput;
};

export type QueryWishesArgs = {
	where?: Maybe<WishWhereInput>;
	orderBy?: Maybe<Array<WishOrderByInput>>;
	cursor?: Maybe<WishWhereUniqueInput>;
	take?: Maybe<Scalars["Int"]>;
	skip?: Maybe<Scalars["Int"]>;
	distinct?: Maybe<Array<WishScalarFieldEnum>>;
};

export enum Role {
	User = "user",
	Admin = "admin",
	Manager = "manager",
}

export enum SortOrder {
	Asc = "asc",
	Desc = "desc",
}

export type StringFilter = {
	equals?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	contains?: Maybe<Scalars["String"]>;
	startsWith?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
	equals?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	contains?: Maybe<Scalars["String"]>;
	startsWith?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringNullableFilter>;
};

export type User = {
	__typename?: "User";
	id: Scalars["Int"];
	name?: Maybe<Scalars["String"]>;
	email?: Maybe<Scalars["String"]>;
	emailVerified?: Maybe<Scalars["DateTime"]>;
	image?: Maybe<Scalars["String"]>;
	createdAt: Scalars["DateTime"];
	updatedAt: Scalars["DateTime"];
	role: Role;
};

export type UserConnectCreateWishInput = {
	connect?: Maybe<UserWhereUniqueInput>;
};

export type UserConnectCreateWishVotesInput = {
	connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutWishVotesInput = {
	create?: Maybe<UserCreateWithoutWishVotesInput>;
	connectOrCreate?: Maybe<UserCreateOrConnectWithoutWishVotesInput>;
	connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutWishVotesInput = {
	where: UserWhereUniqueInput;
	create: UserCreateWithoutWishVotesInput;
};

export type UserCreateWithoutWishVotesInput = {
	name?: Maybe<Scalars["String"]>;
	email?: Maybe<Scalars["String"]>;
	emailVerified?: Maybe<Scalars["DateTime"]>;
	image?: Maybe<Scalars["String"]>;
	createdAt?: Maybe<Scalars["DateTime"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	role?: Maybe<Role>;
	wishes?: Maybe<WishCreateNestedManyWithoutAuthorInput>;
};

export type UserRelationFilter = {
	is?: Maybe<UserWhereInput>;
	isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
	AND?: Maybe<Array<UserWhereInput>>;
	OR?: Maybe<Array<UserWhereInput>>;
	NOT?: Maybe<Array<UserWhereInput>>;
	id?: Maybe<IntFilter>;
	name?: Maybe<StringNullableFilter>;
	email?: Maybe<StringNullableFilter>;
	emailVerified?: Maybe<DateTimeNullableFilter>;
	image?: Maybe<StringNullableFilter>;
	createdAt?: Maybe<DateTimeFilter>;
	updatedAt?: Maybe<DateTimeFilter>;
	role?: Maybe<EnumRoleFilter>;
	wishVotes?: Maybe<WishVoteListRelationFilter>;
	wishes?: Maybe<WishListRelationFilter>;
};

export type UserWhereUniqueInput = {
	id?: Maybe<Scalars["Int"]>;
	email?: Maybe<Scalars["String"]>;
};

export type Wish = {
	__typename?: "Wish";
	id: Scalars["Int"];
	authorId: Scalars["Int"];
	subject: Scalars["String"];
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	votes: Scalars["Int"];
	voted: Scalars["Boolean"];
};

export type WishConnectCreateWishVotesInput = {
	connect?: Maybe<WishWhereUniqueInput>;
};

export type WishCreateInput = {
	subject: Scalars["String"];
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	author: UserConnectCreateWishInput;
	wishVote?: Maybe<WishVoteCreateWithoutWishInput>;
};

export type WishCreateManyAuthorInput = {
	id?: Maybe<Scalars["Int"]>;
	subject: Scalars["String"];
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type WishCreateManyAuthorInputEnvelope = {
	data: Array<WishCreateManyAuthorInput>;
	skipDuplicates?: Maybe<Scalars["Boolean"]>;
};

export type WishCreateNestedManyWithoutAuthorInput = {
	create?: Maybe<Array<WishCreateWithoutAuthorInput>>;
	connectOrCreate?: Maybe<Array<WishCreateOrConnectWithoutAuthorInput>>;
	createMany?: Maybe<WishCreateManyAuthorInputEnvelope>;
	connect?: Maybe<Array<WishWhereUniqueInput>>;
};

export type WishCreateOrConnectWithoutAuthorInput = {
	where: WishWhereUniqueInput;
	create: WishCreateWithoutAuthorInput;
};

export type WishCreateWithoutAuthorInput = {
	subject: Scalars["String"];
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	wishVotes?: Maybe<WishVoteCreateNestedManyWithoutWishInput>;
};

export type WishListRelationFilter = {
	every?: Maybe<WishWhereInput>;
	some?: Maybe<WishWhereInput>;
	none?: Maybe<WishWhereInput>;
};

export type WishOrderByInput = {
	id?: Maybe<SortOrder>;
	authorId?: Maybe<SortOrder>;
	subject?: Maybe<SortOrder>;
	body?: Maybe<SortOrder>;
	createdAt?: Maybe<SortOrder>;
	updatedAt?: Maybe<SortOrder>;
};

export type WishRelationFilter = {
	is?: Maybe<WishWhereInput>;
	isNot?: Maybe<WishWhereInput>;
};

export enum WishScalarFieldEnum {
	Id = "id",
	AuthorId = "authorId",
	Subject = "subject",
	Body = "body",
	CreatedAt = "createdAt",
	UpdatedAt = "updatedAt",
}

export type WishUpdateInput = {
	subject?: Maybe<Scalars["String"]>;
	body?: Maybe<Scalars["String"]>;
};

export type WishVote = {
	__typename?: "WishVote";
	id: Scalars["Int"];
	userId: Scalars["Int"];
	wishId: Scalars["Int"];
};

export type WishVoteCreateInput = {
	user: UserConnectCreateWishVotesInput;
	wish: WishConnectCreateWishVotesInput;
};

export type WishVoteCreateManyWishInput = {
	id?: Maybe<Scalars["Int"]>;
	userId: Scalars["Int"];
};

export type WishVoteCreateManyWishInputEnvelope = {
	data: Array<WishVoteCreateManyWishInput>;
	skipDuplicates?: Maybe<Scalars["Boolean"]>;
};

export type WishVoteCreateNestedManyWithoutWishInput = {
	create?: Maybe<Array<WishVoteCreateWithoutWishInput>>;
	connectOrCreate?: Maybe<Array<WishVoteCreateOrConnectWithoutWishInput>>;
	createMany?: Maybe<WishVoteCreateManyWishInputEnvelope>;
	connect?: Maybe<Array<WishVoteWhereUniqueInput>>;
};

export type WishVoteCreateOrConnectWithoutWishInput = {
	where: WishVoteWhereUniqueInput;
	create: WishVoteCreateWithoutWishInput;
};

export type WishVoteCreateWithoutWishInput = {
	user: UserCreateNestedOneWithoutWishVotesInput;
};

export type WishVoteListRelationFilter = {
	every?: Maybe<WishVoteWhereInput>;
	some?: Maybe<WishVoteWhereInput>;
	none?: Maybe<WishVoteWhereInput>;
};

export type WishVoteUserId_WishIdCompoundUniqueInput = {
	userId: Scalars["Int"];
	wishId: Scalars["Int"];
};

export type WishVoteWhereInput = {
	AND?: Maybe<Array<WishVoteWhereInput>>;
	OR?: Maybe<Array<WishVoteWhereInput>>;
	NOT?: Maybe<Array<WishVoteWhereInput>>;
	id?: Maybe<IntFilter>;
	userId?: Maybe<IntFilter>;
	user?: Maybe<UserRelationFilter>;
	wishId?: Maybe<IntFilter>;
	wish?: Maybe<WishRelationFilter>;
};

export type WishVoteWhereUniqueInput = {
	id?: Maybe<Scalars["Int"]>;
	userId_wishId?: Maybe<WishVoteUserId_WishIdCompoundUniqueInput>;
};

export type WishWhereInput = {
	AND?: Maybe<Array<WishWhereInput>>;
	OR?: Maybe<Array<WishWhereInput>>;
	NOT?: Maybe<Array<WishWhereInput>>;
	id?: Maybe<IntFilter>;
	author?: Maybe<UserRelationFilter>;
	authorId?: Maybe<IntFilter>;
	subject?: Maybe<StringFilter>;
	body?: Maybe<StringFilter>;
	wishVotes?: Maybe<WishVoteListRelationFilter>;
	createdAt?: Maybe<DateTimeNullableFilter>;
	updatedAt?: Maybe<DateTimeNullableFilter>;
};

export type WishWhereUniqueInput = {
	id?: Maybe<Scalars["Int"]>;
};
