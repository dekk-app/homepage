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

export type AggregateWish = {
	__typename?: "AggregateWish";
	_avg?: Maybe<WishAvgAggregate>;
	_count?: Maybe<WishCountAggregate>;
	_max?: Maybe<WishMaxAggregate>;
	_min?: Maybe<WishMinAggregate>;
	_sum?: Maybe<WishSumAggregate>;
	avg?: Maybe<WishAvgAggregate>;
	count?: Maybe<WishCountAggregate>;
	max?: Maybe<WishMaxAggregate>;
	min?: Maybe<WishMinAggregate>;
	sum?: Maybe<WishSumAggregate>;
};

export type DateTimeFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeFilter>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeNullableFilter>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type EnumModerationNullableFilter = {
	equals?: Maybe<Moderation>;
	in?: Maybe<Array<Moderation>>;
	not?: Maybe<NestedEnumModerationNullableFilter>;
	notIn?: Maybe<Array<Moderation>>;
};

export type EnumRoleFilter = {
	equals?: Maybe<Role>;
	in?: Maybe<Array<Role>>;
	not?: Maybe<NestedEnumRoleFilter>;
	notIn?: Maybe<Array<Role>>;
};

export type IntFilter = {
	equals?: Maybe<Scalars["Int"]>;
	gt?: Maybe<Scalars["Int"]>;
	gte?: Maybe<Scalars["Int"]>;
	in?: Maybe<Array<Scalars["Int"]>>;
	lt?: Maybe<Scalars["Int"]>;
	lte?: Maybe<Scalars["Int"]>;
	not?: Maybe<NestedIntFilter>;
	notIn?: Maybe<Array<Scalars["Int"]>>;
};

export enum Moderation {
	Accepted = "accepted",
	Declined = "declined",
	Pending = "pending",
}

export type Mutation = {
	__typename?: "Mutation";
	createWish: Wish;
	createWishVote: WishVote;
	deleteWishVote?: Maybe<WishVote>;
	updateWish?: Maybe<Wish>;
};

export type MutationCreateWishArgs = {
	data: WishCreateInput;
};

export type MutationCreateWishVoteArgs = {
	data: WishVoteCreateInput;
};

export type MutationDeleteWishVoteArgs = {
	where: WishVoteWhereUniqueInput;
};

export type MutationUpdateWishArgs = {
	data: WishUpdateInput;
	where: WishWhereUniqueInput;
};

export type NestedDateTimeFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeFilter>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
	equals?: Maybe<Scalars["DateTime"]>;
	gt?: Maybe<Scalars["DateTime"]>;
	gte?: Maybe<Scalars["DateTime"]>;
	in?: Maybe<Array<Scalars["DateTime"]>>;
	lt?: Maybe<Scalars["DateTime"]>;
	lte?: Maybe<Scalars["DateTime"]>;
	not?: Maybe<NestedDateTimeNullableFilter>;
	notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumModerationNullableFilter = {
	equals?: Maybe<Moderation>;
	in?: Maybe<Array<Moderation>>;
	not?: Maybe<NestedEnumModerationNullableFilter>;
	notIn?: Maybe<Array<Moderation>>;
};

export type NestedEnumRoleFilter = {
	equals?: Maybe<Role>;
	in?: Maybe<Array<Role>>;
	not?: Maybe<NestedEnumRoleFilter>;
	notIn?: Maybe<Array<Role>>;
};

export type NestedIntFilter = {
	equals?: Maybe<Scalars["Int"]>;
	gt?: Maybe<Scalars["Int"]>;
	gte?: Maybe<Scalars["Int"]>;
	in?: Maybe<Array<Scalars["Int"]>>;
	lt?: Maybe<Scalars["Int"]>;
	lte?: Maybe<Scalars["Int"]>;
	not?: Maybe<NestedIntFilter>;
	notIn?: Maybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
	contains?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	equals?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringFilter>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	startsWith?: Maybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
	contains?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	equals?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringNullableFilter>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	startsWith?: Maybe<Scalars["String"]>;
};

export type Query = {
	__typename?: "Query";
	aggregateWish: AggregateWish;
	user?: Maybe<User>;
	wishes: Array<Wish>;
};

export type QueryAggregateWishArgs = {
	cursor?: Maybe<WishWhereUniqueInput>;
	orderBy?: Maybe<Array<WishOrderByInput>>;
	skip?: Maybe<Scalars["Int"]>;
	take?: Maybe<Scalars["Int"]>;
	where?: Maybe<WishWhereInput>;
};

export type QueryUserArgs = {
	where: UserWhereUniqueInput;
};

export type QueryWishesArgs = {
	cursor?: Maybe<WishWhereUniqueInput>;
	distinct?: Maybe<Array<WishScalarFieldEnum>>;
	orderBy?: Maybe<Array<WishOrderByInput>>;
	skip?: Maybe<Scalars["Int"]>;
	take?: Maybe<Scalars["Int"]>;
	where?: Maybe<WishWhereInput>;
};

export enum Role {
	Admin = "admin",
	Manager = "manager",
	User = "user",
}

export enum SortOrder {
	Asc = "asc",
	Desc = "desc",
}

export type StringFilter = {
	contains?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	equals?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringFilter>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	startsWith?: Maybe<Scalars["String"]>;
};

export type StringNullableFilter = {
	contains?: Maybe<Scalars["String"]>;
	endsWith?: Maybe<Scalars["String"]>;
	equals?: Maybe<Scalars["String"]>;
	gt?: Maybe<Scalars["String"]>;
	gte?: Maybe<Scalars["String"]>;
	in?: Maybe<Array<Scalars["String"]>>;
	lt?: Maybe<Scalars["String"]>;
	lte?: Maybe<Scalars["String"]>;
	not?: Maybe<NestedStringNullableFilter>;
	notIn?: Maybe<Array<Scalars["String"]>>;
	startsWith?: Maybe<Scalars["String"]>;
};

export type User = {
	__typename?: "User";
	createdAt: Scalars["DateTime"];
	email?: Maybe<Scalars["String"]>;
	emailVerified?: Maybe<Scalars["DateTime"]>;
	id: Scalars["Int"];
	image?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	role: Role;
	updatedAt: Scalars["DateTime"];
};

export type UserConnectCreateWishInput = {
	connect?: Maybe<UserWhereUniqueInput>;
};

export type UserConnectCreateWishVotesInput = {
	connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateNestedOneWithoutWishVotesInput = {
	connect?: Maybe<UserWhereUniqueInput>;
	connectOrCreate?: Maybe<UserCreateOrConnectWithoutWishVotesInput>;
	create?: Maybe<UserCreateWithoutWishVotesInput>;
};

export type UserCreateOrConnectWithoutWishVotesInput = {
	create: UserCreateWithoutWishVotesInput;
	where: UserWhereUniqueInput;
};

export type UserCreateWithoutWishVotesInput = {
	createdAt?: Maybe<Scalars["DateTime"]>;
	email?: Maybe<Scalars["String"]>;
	emailVerified?: Maybe<Scalars["DateTime"]>;
	image?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	role?: Maybe<Role>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
	wishes?: Maybe<WishCreateNestedManyWithoutAuthorInput>;
};

export type UserRelationFilter = {
	is?: Maybe<UserWhereInput>;
	isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
	AND?: Maybe<Array<UserWhereInput>>;
	NOT?: Maybe<Array<UserWhereInput>>;
	OR?: Maybe<Array<UserWhereInput>>;
	createdAt?: Maybe<DateTimeFilter>;
	email?: Maybe<StringNullableFilter>;
	emailVerified?: Maybe<DateTimeNullableFilter>;
	id?: Maybe<IntFilter>;
	image?: Maybe<StringNullableFilter>;
	name?: Maybe<StringNullableFilter>;
	role?: Maybe<EnumRoleFilter>;
	updatedAt?: Maybe<DateTimeFilter>;
	wishVotes?: Maybe<WishVoteListRelationFilter>;
	wishes?: Maybe<WishListRelationFilter>;
};

export type UserWhereUniqueInput = {
	email?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["Int"]>;
};

export type Wish = {
	__typename?: "Wish";
	authorId: Scalars["Int"];
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	id: Scalars["Int"];
	moderate?: Maybe<Moderation>;
	subject: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
	voted: Scalars["Boolean"];
	votes: Scalars["Int"];
};

export type WishAvgAggregate = {
	__typename?: "WishAvgAggregate";
	authorId?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

export type WishConnectCreateWishVotesInput = {
	connect?: Maybe<WishWhereUniqueInput>;
};

export type WishCountAggregate = {
	__typename?: "WishCountAggregate";
	_all: Scalars["Int"];
	authorId: Scalars["Int"];
	body: Scalars["Int"];
	createdAt: Scalars["Int"];
	id: Scalars["Int"];
	moderate: Scalars["Int"];
	subject: Scalars["Int"];
	updatedAt: Scalars["Int"];
};

export type WishCreateInput = {
	author: UserConnectCreateWishInput;
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	moderate?: Maybe<Moderation>;
	subject: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
	wishVote?: Maybe<WishVoteCreateWithoutWishInput>;
};

export type WishCreateManyAuthorInput = {
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	id?: Maybe<Scalars["Int"]>;
	moderate?: Maybe<Moderation>;
	subject: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type WishCreateManyAuthorInputEnvelope = {
	data: Array<WishCreateManyAuthorInput>;
	skipDuplicates?: Maybe<Scalars["Boolean"]>;
};

export type WishCreateNestedManyWithoutAuthorInput = {
	connect?: Maybe<Array<WishWhereUniqueInput>>;
	connectOrCreate?: Maybe<Array<WishCreateOrConnectWithoutAuthorInput>>;
	create?: Maybe<Array<WishCreateWithoutAuthorInput>>;
	createMany?: Maybe<WishCreateManyAuthorInputEnvelope>;
};

export type WishCreateOrConnectWithoutAuthorInput = {
	create: WishCreateWithoutAuthorInput;
	where: WishWhereUniqueInput;
};

export type WishCreateWithoutAuthorInput = {
	body: Scalars["String"];
	createdAt?: Maybe<Scalars["DateTime"]>;
	moderate?: Maybe<Moderation>;
	subject: Scalars["String"];
	updatedAt?: Maybe<Scalars["DateTime"]>;
	wishVotes?: Maybe<WishVoteCreateNestedManyWithoutWishInput>;
};

export type WishListRelationFilter = {
	every?: Maybe<WishWhereInput>;
	none?: Maybe<WishWhereInput>;
	some?: Maybe<WishWhereInput>;
};

export type WishMaxAggregate = {
	__typename?: "WishMaxAggregate";
	authorId?: Maybe<Scalars["Int"]>;
	body?: Maybe<Scalars["String"]>;
	createdAt?: Maybe<Scalars["DateTime"]>;
	id?: Maybe<Scalars["Int"]>;
	moderate?: Maybe<Moderation>;
	subject?: Maybe<Scalars["String"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type WishMinAggregate = {
	__typename?: "WishMinAggregate";
	authorId?: Maybe<Scalars["Int"]>;
	body?: Maybe<Scalars["String"]>;
	createdAt?: Maybe<Scalars["DateTime"]>;
	id?: Maybe<Scalars["Int"]>;
	moderate?: Maybe<Moderation>;
	subject?: Maybe<Scalars["String"]>;
	updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type WishOrderByInput = {
	authorId?: Maybe<SortOrder>;
	body?: Maybe<SortOrder>;
	createdAt?: Maybe<SortOrder>;
	id?: Maybe<SortOrder>;
	moderate?: Maybe<SortOrder>;
	subject?: Maybe<SortOrder>;
	updatedAt?: Maybe<SortOrder>;
};

export type WishRelationFilter = {
	is?: Maybe<WishWhereInput>;
	isNot?: Maybe<WishWhereInput>;
};

export enum WishScalarFieldEnum {
	AuthorId = "authorId",
	Body = "body",
	CreatedAt = "createdAt",
	Id = "id",
	Moderate = "moderate",
	Subject = "subject",
	UpdatedAt = "updatedAt",
}

export type WishSumAggregate = {
	__typename?: "WishSumAggregate";
	authorId?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["Int"]>;
};

export type WishUpdateInput = {
	body?: Maybe<Scalars["String"]>;
	moderate?: Maybe<Moderation>;
	subject?: Maybe<Scalars["String"]>;
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
	connect?: Maybe<Array<WishVoteWhereUniqueInput>>;
	connectOrCreate?: Maybe<Array<WishVoteCreateOrConnectWithoutWishInput>>;
	create?: Maybe<Array<WishVoteCreateWithoutWishInput>>;
	createMany?: Maybe<WishVoteCreateManyWishInputEnvelope>;
};

export type WishVoteCreateOrConnectWithoutWishInput = {
	create: WishVoteCreateWithoutWishInput;
	where: WishVoteWhereUniqueInput;
};

export type WishVoteCreateWithoutWishInput = {
	user: UserCreateNestedOneWithoutWishVotesInput;
};

export type WishVoteListRelationFilter = {
	every?: Maybe<WishVoteWhereInput>;
	none?: Maybe<WishVoteWhereInput>;
	some?: Maybe<WishVoteWhereInput>;
};

export type WishVoteUserId_WishIdCompoundUniqueInput = {
	userId: Scalars["Int"];
	wishId: Scalars["Int"];
};

export type WishVoteWhereInput = {
	AND?: Maybe<Array<WishVoteWhereInput>>;
	NOT?: Maybe<Array<WishVoteWhereInput>>;
	OR?: Maybe<Array<WishVoteWhereInput>>;
	id?: Maybe<IntFilter>;
	user?: Maybe<UserRelationFilter>;
	userId?: Maybe<IntFilter>;
	wish?: Maybe<WishRelationFilter>;
	wishId?: Maybe<IntFilter>;
};

export type WishVoteWhereUniqueInput = {
	id?: Maybe<Scalars["Int"]>;
	userId_wishId?: Maybe<WishVoteUserId_WishIdCompoundUniqueInput>;
};

export type WishWhereInput = {
	AND?: Maybe<Array<WishWhereInput>>;
	NOT?: Maybe<Array<WishWhereInput>>;
	OR?: Maybe<Array<WishWhereInput>>;
	author?: Maybe<UserRelationFilter>;
	authorId?: Maybe<IntFilter>;
	body?: Maybe<StringFilter>;
	createdAt?: Maybe<DateTimeNullableFilter>;
	id?: Maybe<IntFilter>;
	moderate?: Maybe<EnumModerationNullableFilter>;
	subject?: Maybe<StringFilter>;
	updatedAt?: Maybe<DateTimeNullableFilter>;
	wishVotes?: Maybe<WishVoteListRelationFilter>;
};

export type WishWhereUniqueInput = {
	id?: Maybe<Scalars["Int"]>;
};
