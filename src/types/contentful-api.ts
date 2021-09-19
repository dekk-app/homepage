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
	/**
	 * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
	 *     compliant with the 'date-time' format outlined in section 5.6 of
	 *     the RFC 3339 profile of the ISO 8601 standard for representation
	 *     of dates and times using the Gregorian calendar.
	 */
	DateTime: any;
	/** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
	Dimension: any;
	/** The 'HexColor' type represents color in `rgb:ffffff` string format. */
	HexColor: any;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any;
	/** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
	Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
	__typename?: "Asset";
	contentType?: Maybe<Scalars["String"]>;
	contentfulMetadata: ContentfulMetadata;
	description?: Maybe<Scalars["String"]>;
	fileName?: Maybe<Scalars["String"]>;
	height?: Maybe<Scalars["Int"]>;
	linkedFrom?: Maybe<AssetLinkingCollections>;
	size?: Maybe<Scalars["Int"]>;
	sys: Sys;
	title?: Maybe<Scalars["String"]>;
	url?: Maybe<Scalars["String"]>;
	width?: Maybe<Scalars["Int"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
	transform?: Maybe<ImageTransformOptions>;
};

export type AssetCollection = {
	__typename?: "AssetCollection";
	items: Array<Maybe<Asset>>;
	limit: Scalars["Int"];
	skip: Scalars["Int"];
	total: Scalars["Int"];
};

export type AssetFilter = {
	AND?: Maybe<Array<Maybe<AssetFilter>>>;
	OR?: Maybe<Array<Maybe<AssetFilter>>>;
	contentType?: Maybe<Scalars["String"]>;
	contentType_contains?: Maybe<Scalars["String"]>;
	contentType_exists?: Maybe<Scalars["Boolean"]>;
	contentType_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	contentType_not?: Maybe<Scalars["String"]>;
	contentType_not_contains?: Maybe<Scalars["String"]>;
	contentType_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	description?: Maybe<Scalars["String"]>;
	description_contains?: Maybe<Scalars["String"]>;
	description_exists?: Maybe<Scalars["Boolean"]>;
	description_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	description_not?: Maybe<Scalars["String"]>;
	description_not_contains?: Maybe<Scalars["String"]>;
	description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	fileName?: Maybe<Scalars["String"]>;
	fileName_contains?: Maybe<Scalars["String"]>;
	fileName_exists?: Maybe<Scalars["Boolean"]>;
	fileName_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	fileName_not?: Maybe<Scalars["String"]>;
	fileName_not_contains?: Maybe<Scalars["String"]>;
	fileName_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	height?: Maybe<Scalars["Int"]>;
	height_exists?: Maybe<Scalars["Boolean"]>;
	height_gt?: Maybe<Scalars["Int"]>;
	height_gte?: Maybe<Scalars["Int"]>;
	height_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
	height_lt?: Maybe<Scalars["Int"]>;
	height_lte?: Maybe<Scalars["Int"]>;
	height_not?: Maybe<Scalars["Int"]>;
	height_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
	size?: Maybe<Scalars["Int"]>;
	size_exists?: Maybe<Scalars["Boolean"]>;
	size_gt?: Maybe<Scalars["Int"]>;
	size_gte?: Maybe<Scalars["Int"]>;
	size_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
	size_lt?: Maybe<Scalars["Int"]>;
	size_lte?: Maybe<Scalars["Int"]>;
	size_not?: Maybe<Scalars["Int"]>;
	size_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
	sys?: Maybe<SysFilter>;
	title?: Maybe<Scalars["String"]>;
	title_contains?: Maybe<Scalars["String"]>;
	title_exists?: Maybe<Scalars["Boolean"]>;
	title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	title_not?: Maybe<Scalars["String"]>;
	title_not_contains?: Maybe<Scalars["String"]>;
	title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	url?: Maybe<Scalars["String"]>;
	url_contains?: Maybe<Scalars["String"]>;
	url_exists?: Maybe<Scalars["Boolean"]>;
	url_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	url_not?: Maybe<Scalars["String"]>;
	url_not_contains?: Maybe<Scalars["String"]>;
	url_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	width?: Maybe<Scalars["Int"]>;
	width_exists?: Maybe<Scalars["Boolean"]>;
	width_gt?: Maybe<Scalars["Int"]>;
	width_gte?: Maybe<Scalars["Int"]>;
	width_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
	width_lt?: Maybe<Scalars["Int"]>;
	width_lte?: Maybe<Scalars["Int"]>;
	width_not?: Maybe<Scalars["Int"]>;
	width_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type AssetLinkingCollections = {
	__typename?: "AssetLinkingCollections";
	entryCollection?: Maybe<EntryCollection>;
	imageTextCollection?: Maybe<ImageTextCollection>;
	personCollection?: Maybe<PersonCollection>;
	seoCollection?: Maybe<SeoCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsImageTextCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsPersonCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsSeoCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export enum AssetOrder {
	ContentTypeAsc = "contentType_ASC",
	ContentTypeDesc = "contentType_DESC",
	FileNameAsc = "fileName_ASC",
	FileNameDesc = "fileName_DESC",
	HeightAsc = "height_ASC",
	HeightDesc = "height_DESC",
	SizeAsc = "size_ASC",
	SizeDesc = "size_DESC",
	SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
	SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
	SysIdAsc = "sys_id_ASC",
	SysIdDesc = "sys_id_DESC",
	SysPublishedAtAsc = "sys_publishedAt_ASC",
	SysPublishedAtDesc = "sys_publishedAt_DESC",
	SysPublishedVersionAsc = "sys_publishedVersion_ASC",
	SysPublishedVersionDesc = "sys_publishedVersion_DESC",
	UrlAsc = "url_ASC",
	UrlDesc = "url_DESC",
	WidthAsc = "width_ASC",
	WidthDesc = "width_DESC",
}

export type ContentfulMetadata = {
	__typename?: "ContentfulMetadata";
	tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
	tags?: Maybe<ContentfulMetadataTagsFilter>;
	tags_exists?: Maybe<Scalars["Boolean"]>;
};

export type ContentfulMetadataTagsFilter = {
	id_contains_all?: Maybe<Array<Maybe<Scalars["String"]>>>;
	id_contains_none?: Maybe<Array<Maybe<Scalars["String"]>>>;
	id_contains_some?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
	__typename?: "ContentfulTag";
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
};

export type Entry = {
	contentfulMetadata: ContentfulMetadata;
	sys: Sys;
};

export type EntryCollection = {
	__typename?: "EntryCollection";
	items: Array<Maybe<Entry>>;
	limit: Scalars["Int"];
	skip: Scalars["Int"];
	total: Scalars["Int"];
};

export type EntryFilter = {
	AND?: Maybe<Array<Maybe<EntryFilter>>>;
	OR?: Maybe<Array<Maybe<EntryFilter>>>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	sys?: Maybe<SysFilter>;
};

export enum EntryOrder {
	SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
	SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
	SysIdAsc = "sys_id_ASC",
	SysIdDesc = "sys_id_DESC",
	SysPublishedAtAsc = "sys_publishedAt_ASC",
	SysPublishedAtDesc = "sys_publishedAt_DESC",
	SysPublishedVersionAsc = "sys_publishedVersion_ASC",
	SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
	/** JPG image format. */
	Jpg = "JPG",
	/**
	 * Progressive JPG format stores multiple passes of an image in progressively higher detail.
	 *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
	 *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
	 *         early as possible to make the layout look as designed.
	 */
	JpgProgressive = "JPG_PROGRESSIVE",
	/** PNG image format */
	Png = "PNG",
	/**
	 * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
	 *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
	 */
	Png8 = "PNG8",
	/** WebP image format. */
	Webp = "WEBP",
}

export enum ImageResizeFocus {
	/** Focus the resizing on the bottom. */
	Bottom = "BOTTOM",
	/** Focus the resizing on the bottom left. */
	BottomLeft = "BOTTOM_LEFT",
	/** Focus the resizing on the bottom right. */
	BottomRight = "BOTTOM_RIGHT",
	/** Focus the resizing on the center. */
	Center = "CENTER",
	/** Focus the resizing on the largest face. */
	Face = "FACE",
	/** Focus the resizing on the area containing all the faces. */
	Faces = "FACES",
	/** Focus the resizing on the left. */
	Left = "LEFT",
	/** Focus the resizing on the right. */
	Right = "RIGHT",
	/** Focus the resizing on the top. */
	Top = "TOP",
	/** Focus the resizing on the top left. */
	TopLeft = "TOP_LEFT",
	/** Focus the resizing on the top right. */
	TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
	/** Crops a part of the original image to fit into the specified dimensions. */
	Crop = "CROP",
	/** Resizes the image to the specified dimensions, cropping the image if needed. */
	Fill = "FILL",
	/** Resizes the image to fit into the specified dimensions. */
	Fit = "FIT",
	/**
	 * Resizes the image to the specified dimensions, padding the image if needed.
	 *         Uses desired background color as padding color.
	 */
	Pad = "PAD",
	/** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
	Scale = "SCALE",
	/** Creates a thumbnail from the image. */
	Thumb = "THUMB",
}

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/imageText) */
export type ImageText = Entry & {
	__typename?: "ImageText";
	contentfulMetadata: ContentfulMetadata;
	imageCollection?: Maybe<AssetCollection>;
	linkedFrom?: Maybe<ImageTextLinkingCollections>;
	sys: Sys;
	text?: Maybe<ImageTextText>;
	title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/imageText) */
export type ImageTextImageCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/imageText) */
export type ImageTextLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/imageText) */
export type ImageTextTextArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/imageText) */
export type ImageTextTitleArgs = {
	locale?: Maybe<Scalars["String"]>;
};

export type ImageTextCollection = {
	__typename?: "ImageTextCollection";
	items: Array<Maybe<ImageText>>;
	limit: Scalars["Int"];
	skip: Scalars["Int"];
	total: Scalars["Int"];
};

export type ImageTextFilter = {
	AND?: Maybe<Array<Maybe<ImageTextFilter>>>;
	OR?: Maybe<Array<Maybe<ImageTextFilter>>>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	imageCollection_exists?: Maybe<Scalars["Boolean"]>;
	sys?: Maybe<SysFilter>;
	text_contains?: Maybe<Scalars["String"]>;
	text_exists?: Maybe<Scalars["Boolean"]>;
	text_not_contains?: Maybe<Scalars["String"]>;
	title?: Maybe<Scalars["String"]>;
	title_contains?: Maybe<Scalars["String"]>;
	title_exists?: Maybe<Scalars["Boolean"]>;
	title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	title_not?: Maybe<Scalars["String"]>;
	title_not_contains?: Maybe<Scalars["String"]>;
	title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type ImageTextLinkingCollections = {
	__typename?: "ImageTextLinkingCollections";
	entryCollection?: Maybe<EntryCollection>;
};

export type ImageTextLinkingCollectionsEntryCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export enum ImageTextOrder {
	SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
	SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
	SysIdAsc = "sys_id_ASC",
	SysIdDesc = "sys_id_DESC",
	SysPublishedAtAsc = "sys_publishedAt_ASC",
	SysPublishedAtDesc = "sys_publishedAt_DESC",
	SysPublishedVersionAsc = "sys_publishedVersion_ASC",
	SysPublishedVersionDesc = "sys_publishedVersion_DESC",
	TitleAsc = "title_ASC",
	TitleDesc = "title_DESC",
}

export type ImageTextText = {
	__typename?: "ImageTextText";
	json: Scalars["JSON"];
	links: ImageTextTextLinks;
};

export type ImageTextTextAssets = {
	__typename?: "ImageTextTextAssets";
	block: Array<Maybe<Asset>>;
	hyperlink: Array<Maybe<Asset>>;
};

export type ImageTextTextEntries = {
	__typename?: "ImageTextTextEntries";
	block: Array<Maybe<Entry>>;
	hyperlink: Array<Maybe<Entry>>;
	inline: Array<Maybe<Entry>>;
};

export type ImageTextTextLinks = {
	__typename?: "ImageTextTextLinks";
	assets: ImageTextTextAssets;
	entries: ImageTextTextEntries;
};

export type ImageTransformOptions = {
	/**
	 * Desired background color, used with corner radius or `PAD` resize strategy.
	 *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
	 */
	backgroundColor?: Maybe<Scalars["HexColor"]>;
	/**
	 * Desired corner radius in pixels.
	 *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
	 *         Defaults to `0`. Uses desired background color as padding color,
	 *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
	 */
	cornerRadius?: Maybe<Scalars["Int"]>;
	/** Desired image format. Defaults to the original image format. */
	format?: Maybe<ImageFormat>;
	/** Desired height in pixels. Defaults to the original image height. */
	height?: Maybe<Scalars["Dimension"]>;
	/**
	 * Desired quality of the image in percents.
	 *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
	 */
	quality?: Maybe<Scalars["Quality"]>;
	/** Desired resize focus area. Defaults to `CENTER`. */
	resizeFocus?: Maybe<ImageResizeFocus>;
	/** Desired resize strategy. Defaults to `FIT`. */
	resizeStrategy?: Maybe<ImageResizeStrategy>;
	/** Desired width in pixels. Defaults to the original image width. */
	width?: Maybe<Scalars["Dimension"]>;
};

/** Create content pages. [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/page) */
export type Page = Entry & {
	__typename?: "Page";
	body?: Maybe<PageBody>;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<PageLinkingCollections>;
	pageDirectory?: Maybe<Scalars["String"]>;
	seo?: Maybe<Seo>;
	sys: Sys;
	title?: Maybe<Scalars["String"]>;
};

/** Create content pages. [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/page) */
export type PageBodyArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** Create content pages. [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/page) */
export type PageLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Create content pages. [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/page) */
export type PagePageDirectoryArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** Create content pages. [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/page) */
export type PageSeoArgs = {
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

/** Create content pages. [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/page) */
export type PageTitleArgs = {
	locale?: Maybe<Scalars["String"]>;
};

export type PageBody = {
	__typename?: "PageBody";
	json: Scalars["JSON"];
	links: PageBodyLinks;
};

export type PageBodyAssets = {
	__typename?: "PageBodyAssets";
	block: Array<Maybe<Asset>>;
	hyperlink: Array<Maybe<Asset>>;
};

export type PageBodyEntries = {
	__typename?: "PageBodyEntries";
	block: Array<Maybe<Entry>>;
	hyperlink: Array<Maybe<Entry>>;
	inline: Array<Maybe<Entry>>;
};

export type PageBodyLinks = {
	__typename?: "PageBodyLinks";
	assets: PageBodyAssets;
	entries: PageBodyEntries;
};

export type PageCollection = {
	__typename?: "PageCollection";
	items: Array<Maybe<Page>>;
	limit: Scalars["Int"];
	skip: Scalars["Int"];
	total: Scalars["Int"];
};

export type PageFilter = {
	AND?: Maybe<Array<Maybe<PageFilter>>>;
	OR?: Maybe<Array<Maybe<PageFilter>>>;
	body_contains?: Maybe<Scalars["String"]>;
	body_exists?: Maybe<Scalars["Boolean"]>;
	body_not_contains?: Maybe<Scalars["String"]>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	pageDirectory?: Maybe<Scalars["String"]>;
	pageDirectory_contains?: Maybe<Scalars["String"]>;
	pageDirectory_exists?: Maybe<Scalars["Boolean"]>;
	pageDirectory_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	pageDirectory_not?: Maybe<Scalars["String"]>;
	pageDirectory_not_contains?: Maybe<Scalars["String"]>;
	pageDirectory_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	seo?: Maybe<CfSeoNestedFilter>;
	seo_exists?: Maybe<Scalars["Boolean"]>;
	sys?: Maybe<SysFilter>;
	title?: Maybe<Scalars["String"]>;
	title_contains?: Maybe<Scalars["String"]>;
	title_exists?: Maybe<Scalars["Boolean"]>;
	title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	title_not?: Maybe<Scalars["String"]>;
	title_not_contains?: Maybe<Scalars["String"]>;
	title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type PageLinkingCollections = {
	__typename?: "PageLinkingCollections";
	entryCollection?: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export enum PageOrder {
	PageDirectoryAsc = "pageDirectory_ASC",
	PageDirectoryDesc = "pageDirectory_DESC",
	SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
	SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
	SysIdAsc = "sys_id_ASC",
	SysIdDesc = "sys_id_DESC",
	SysPublishedAtAsc = "sys_publishedAt_ASC",
	SysPublishedAtDesc = "sys_publishedAt_DESC",
	SysPublishedVersionAsc = "sys_publishedVersion_ASC",
	SysPublishedVersionDesc = "sys_publishedVersion_DESC",
	TitleAsc = "title_ASC",
	TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/person) */
export type Person = Entry & {
	__typename?: "Person";
	biography?: Maybe<PersonBiography>;
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<PersonLinkingCollections>;
	name?: Maybe<Scalars["String"]>;
	picture?: Maybe<Asset>;
	sys: Sys;
	title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/person) */
export type PersonBiographyArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/person) */
export type PersonLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/person) */
export type PersonNameArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/person) */
export type PersonPictureArgs = {
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/person) */
export type PersonTitleArgs = {
	locale?: Maybe<Scalars["String"]>;
};

export type PersonBiography = {
	__typename?: "PersonBiography";
	json: Scalars["JSON"];
	links: PersonBiographyLinks;
};

export type PersonBiographyAssets = {
	__typename?: "PersonBiographyAssets";
	block: Array<Maybe<Asset>>;
	hyperlink: Array<Maybe<Asset>>;
};

export type PersonBiographyEntries = {
	__typename?: "PersonBiographyEntries";
	block: Array<Maybe<Entry>>;
	hyperlink: Array<Maybe<Entry>>;
	inline: Array<Maybe<Entry>>;
};

export type PersonBiographyLinks = {
	__typename?: "PersonBiographyLinks";
	assets: PersonBiographyAssets;
	entries: PersonBiographyEntries;
};

export type PersonCollection = {
	__typename?: "PersonCollection";
	items: Array<Maybe<Person>>;
	limit: Scalars["Int"];
	skip: Scalars["Int"];
	total: Scalars["Int"];
};

export type PersonFilter = {
	AND?: Maybe<Array<Maybe<PersonFilter>>>;
	OR?: Maybe<Array<Maybe<PersonFilter>>>;
	biography_contains?: Maybe<Scalars["String"]>;
	biography_exists?: Maybe<Scalars["Boolean"]>;
	biography_not_contains?: Maybe<Scalars["String"]>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	name?: Maybe<Scalars["String"]>;
	name_contains?: Maybe<Scalars["String"]>;
	name_exists?: Maybe<Scalars["Boolean"]>;
	name_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	name_not?: Maybe<Scalars["String"]>;
	name_not_contains?: Maybe<Scalars["String"]>;
	name_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	picture_exists?: Maybe<Scalars["Boolean"]>;
	sys?: Maybe<SysFilter>;
	title?: Maybe<Scalars["String"]>;
	title_contains?: Maybe<Scalars["String"]>;
	title_exists?: Maybe<Scalars["Boolean"]>;
	title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	title_not?: Maybe<Scalars["String"]>;
	title_not_contains?: Maybe<Scalars["String"]>;
	title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type PersonLinkingCollections = {
	__typename?: "PersonLinkingCollections";
	entryCollection?: Maybe<EntryCollection>;
};

export type PersonLinkingCollectionsEntryCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export enum PersonOrder {
	NameAsc = "name_ASC",
	NameDesc = "name_DESC",
	SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
	SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
	SysIdAsc = "sys_id_ASC",
	SysIdDesc = "sys_id_DESC",
	SysPublishedAtAsc = "sys_publishedAt_ASC",
	SysPublishedAtDesc = "sys_publishedAt_DESC",
	SysPublishedVersionAsc = "sys_publishedVersion_ASC",
	SysPublishedVersionDesc = "sys_publishedVersion_DESC",
	TitleAsc = "title_ASC",
	TitleDesc = "title_DESC",
}

export type Query = {
	__typename?: "Query";
	asset?: Maybe<Asset>;
	assetCollection?: Maybe<AssetCollection>;
	entryCollection?: Maybe<EntryCollection>;
	imageText?: Maybe<ImageText>;
	imageTextCollection?: Maybe<ImageTextCollection>;
	page?: Maybe<Page>;
	pageCollection?: Maybe<PageCollection>;
	person?: Maybe<Person>;
	personCollection?: Maybe<PersonCollection>;
	seo?: Maybe<Seo>;
	seoCollection?: Maybe<SeoCollection>;
	versionTracker?: Maybe<VersionTracker>;
	versionTrackerCollection?: Maybe<VersionTrackerCollection>;
};

export type QueryAssetArgs = {
	id: Scalars["String"];
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

export type QueryAssetCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	order?: Maybe<Array<Maybe<AssetOrder>>>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
	where?: Maybe<AssetFilter>;
};

export type QueryEntryCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	order?: Maybe<Array<Maybe<EntryOrder>>>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
	where?: Maybe<EntryFilter>;
};

export type QueryImageTextArgs = {
	id: Scalars["String"];
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

export type QueryImageTextCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	order?: Maybe<Array<Maybe<ImageTextOrder>>>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
	where?: Maybe<ImageTextFilter>;
};

export type QueryPageArgs = {
	id: Scalars["String"];
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

export type QueryPageCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	order?: Maybe<Array<Maybe<PageOrder>>>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
	where?: Maybe<PageFilter>;
};

export type QueryPersonArgs = {
	id: Scalars["String"];
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

export type QueryPersonCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	order?: Maybe<Array<Maybe<PersonOrder>>>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
	where?: Maybe<PersonFilter>;
};

export type QuerySeoArgs = {
	id: Scalars["String"];
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

export type QuerySeoCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	order?: Maybe<Array<Maybe<SeoOrder>>>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
	where?: Maybe<SeoFilter>;
};

export type QueryVersionTrackerArgs = {
	id: Scalars["String"];
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

export type QueryVersionTrackerCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	order?: Maybe<Array<Maybe<VersionTrackerOrder>>>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
	where?: Maybe<VersionTrackerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type Seo = Entry & {
	__typename?: "Seo";
	contentfulMetadata: ContentfulMetadata;
	description?: Maybe<Scalars["String"]>;
	keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
	linkedFrom?: Maybe<SeoLinkingCollections>;
	pageTitle?: Maybe<Scalars["String"]>;
	robots?: Maybe<Array<Maybe<Scalars["String"]>>>;
	schemaImage?: Maybe<Asset>;
	sys: Sys;
	title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type SeoDescriptionArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type SeoKeywordsArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type SeoLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type SeoPageTitleArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type SeoRobotsArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type SeoSchemaImageArgs = {
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/seo) */
export type SeoTitleArgs = {
	locale?: Maybe<Scalars["String"]>;
};

export type SeoCollection = {
	__typename?: "SeoCollection";
	items: Array<Maybe<Seo>>;
	limit: Scalars["Int"];
	skip: Scalars["Int"];
	total: Scalars["Int"];
};

export type SeoFilter = {
	AND?: Maybe<Array<Maybe<SeoFilter>>>;
	OR?: Maybe<Array<Maybe<SeoFilter>>>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	description?: Maybe<Scalars["String"]>;
	description_contains?: Maybe<Scalars["String"]>;
	description_exists?: Maybe<Scalars["Boolean"]>;
	description_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	description_not?: Maybe<Scalars["String"]>;
	description_not_contains?: Maybe<Scalars["String"]>;
	description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_contains_all?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_contains_none?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_contains_some?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_exists?: Maybe<Scalars["Boolean"]>;
	pageTitle?: Maybe<Scalars["String"]>;
	pageTitle_contains?: Maybe<Scalars["String"]>;
	pageTitle_exists?: Maybe<Scalars["Boolean"]>;
	pageTitle_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	pageTitle_not?: Maybe<Scalars["String"]>;
	pageTitle_not_contains?: Maybe<Scalars["String"]>;
	pageTitle_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_contains_all?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_contains_none?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_contains_some?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_exists?: Maybe<Scalars["Boolean"]>;
	schemaImage_exists?: Maybe<Scalars["Boolean"]>;
	sys?: Maybe<SysFilter>;
	title?: Maybe<Scalars["String"]>;
	title_contains?: Maybe<Scalars["String"]>;
	title_exists?: Maybe<Scalars["Boolean"]>;
	title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	title_not?: Maybe<Scalars["String"]>;
	title_not_contains?: Maybe<Scalars["String"]>;
	title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SeoLinkingCollections = {
	__typename?: "SeoLinkingCollections";
	entryCollection?: Maybe<EntryCollection>;
	pageCollection?: Maybe<PageCollection>;
};

export type SeoLinkingCollectionsEntryCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export type SeoLinkingCollectionsPageCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export enum SeoOrder {
	PageTitleAsc = "pageTitle_ASC",
	PageTitleDesc = "pageTitle_DESC",
	SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
	SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
	SysIdAsc = "sys_id_ASC",
	SysIdDesc = "sys_id_DESC",
	SysPublishedAtAsc = "sys_publishedAt_ASC",
	SysPublishedAtDesc = "sys_publishedAt_DESC",
	SysPublishedVersionAsc = "sys_publishedVersion_ASC",
	SysPublishedVersionDesc = "sys_publishedVersion_DESC",
	TitleAsc = "title_ASC",
	TitleDesc = "title_DESC",
}

export type Sys = {
	__typename?: "Sys";
	environmentId: Scalars["String"];
	firstPublishedAt?: Maybe<Scalars["DateTime"]>;
	id: Scalars["String"];
	publishedAt?: Maybe<Scalars["DateTime"]>;
	publishedVersion?: Maybe<Scalars["Int"]>;
	spaceId: Scalars["String"];
};

export type SysFilter = {
	firstPublishedAt?: Maybe<Scalars["DateTime"]>;
	firstPublishedAt_exists?: Maybe<Scalars["Boolean"]>;
	firstPublishedAt_gt?: Maybe<Scalars["DateTime"]>;
	firstPublishedAt_gte?: Maybe<Scalars["DateTime"]>;
	firstPublishedAt_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
	firstPublishedAt_lt?: Maybe<Scalars["DateTime"]>;
	firstPublishedAt_lte?: Maybe<Scalars["DateTime"]>;
	firstPublishedAt_not?: Maybe<Scalars["DateTime"]>;
	firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
	id?: Maybe<Scalars["String"]>;
	id_contains?: Maybe<Scalars["String"]>;
	id_exists?: Maybe<Scalars["Boolean"]>;
	id_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	id_not?: Maybe<Scalars["String"]>;
	id_not_contains?: Maybe<Scalars["String"]>;
	id_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	publishedAt?: Maybe<Scalars["DateTime"]>;
	publishedAt_exists?: Maybe<Scalars["Boolean"]>;
	publishedAt_gt?: Maybe<Scalars["DateTime"]>;
	publishedAt_gte?: Maybe<Scalars["DateTime"]>;
	publishedAt_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
	publishedAt_lt?: Maybe<Scalars["DateTime"]>;
	publishedAt_lte?: Maybe<Scalars["DateTime"]>;
	publishedAt_not?: Maybe<Scalars["DateTime"]>;
	publishedAt_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
	publishedVersion?: Maybe<Scalars["Float"]>;
	publishedVersion_exists?: Maybe<Scalars["Boolean"]>;
	publishedVersion_gt?: Maybe<Scalars["Float"]>;
	publishedVersion_gte?: Maybe<Scalars["Float"]>;
	publishedVersion_in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
	publishedVersion_lt?: Maybe<Scalars["Float"]>;
	publishedVersion_lte?: Maybe<Scalars["Float"]>;
	publishedVersion_not?: Maybe<Scalars["Float"]>;
	publishedVersion_not_in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

/** Version tracking for Contentful environments [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/versionTracker) */
export type VersionTracker = Entry & {
	__typename?: "VersionTracker";
	contentfulMetadata: ContentfulMetadata;
	linkedFrom?: Maybe<VersionTrackerLinkingCollections>;
	sys: Sys;
	title?: Maybe<Scalars["String"]>;
	version?: Maybe<Scalars["String"]>;
};

/** Version tracking for Contentful environments [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/versionTracker) */
export type VersionTrackerLinkedFromArgs = {
	allowedLocales?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Version tracking for Contentful environments [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/versionTracker) */
export type VersionTrackerTitleArgs = {
	locale?: Maybe<Scalars["String"]>;
};

/** Version tracking for Contentful environments [See type definition](https://app.contentful.com/spaces/3o9j2tarqfuq/content_types/versionTracker) */
export type VersionTrackerVersionArgs = {
	locale?: Maybe<Scalars["String"]>;
};

export type VersionTrackerCollection = {
	__typename?: "VersionTrackerCollection";
	items: Array<Maybe<VersionTracker>>;
	limit: Scalars["Int"];
	skip: Scalars["Int"];
	total: Scalars["Int"];
};

export type VersionTrackerFilter = {
	AND?: Maybe<Array<Maybe<VersionTrackerFilter>>>;
	OR?: Maybe<Array<Maybe<VersionTrackerFilter>>>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	sys?: Maybe<SysFilter>;
	title?: Maybe<Scalars["String"]>;
	title_contains?: Maybe<Scalars["String"]>;
	title_exists?: Maybe<Scalars["Boolean"]>;
	title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	title_not?: Maybe<Scalars["String"]>;
	title_not_contains?: Maybe<Scalars["String"]>;
	title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	version?: Maybe<Scalars["String"]>;
	version_contains?: Maybe<Scalars["String"]>;
	version_exists?: Maybe<Scalars["Boolean"]>;
	version_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	version_not?: Maybe<Scalars["String"]>;
	version_not_contains?: Maybe<Scalars["String"]>;
	version_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type VersionTrackerLinkingCollections = {
	__typename?: "VersionTrackerLinkingCollections";
	entryCollection?: Maybe<EntryCollection>;
};

export type VersionTrackerLinkingCollectionsEntryCollectionArgs = {
	limit?: Maybe<Scalars["Int"]>;
	locale?: Maybe<Scalars["String"]>;
	preview?: Maybe<Scalars["Boolean"]>;
	skip?: Maybe<Scalars["Int"]>;
};

export enum VersionTrackerOrder {
	SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
	SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
	SysIdAsc = "sys_id_ASC",
	SysIdDesc = "sys_id_DESC",
	SysPublishedAtAsc = "sys_publishedAt_ASC",
	SysPublishedAtDesc = "sys_publishedAt_DESC",
	SysPublishedVersionAsc = "sys_publishedVersion_ASC",
	SysPublishedVersionDesc = "sys_publishedVersion_DESC",
	TitleAsc = "title_ASC",
	TitleDesc = "title_DESC",
	VersionAsc = "version_ASC",
	VersionDesc = "version_DESC",
}

export type CfSeoNestedFilter = {
	AND?: Maybe<Array<Maybe<CfSeoNestedFilter>>>;
	OR?: Maybe<Array<Maybe<CfSeoNestedFilter>>>;
	contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
	description?: Maybe<Scalars["String"]>;
	description_contains?: Maybe<Scalars["String"]>;
	description_exists?: Maybe<Scalars["Boolean"]>;
	description_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	description_not?: Maybe<Scalars["String"]>;
	description_not_contains?: Maybe<Scalars["String"]>;
	description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_contains_all?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_contains_none?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_contains_some?: Maybe<Array<Maybe<Scalars["String"]>>>;
	keywords_exists?: Maybe<Scalars["Boolean"]>;
	pageTitle?: Maybe<Scalars["String"]>;
	pageTitle_contains?: Maybe<Scalars["String"]>;
	pageTitle_exists?: Maybe<Scalars["Boolean"]>;
	pageTitle_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	pageTitle_not?: Maybe<Scalars["String"]>;
	pageTitle_not_contains?: Maybe<Scalars["String"]>;
	pageTitle_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_contains_all?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_contains_none?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_contains_some?: Maybe<Array<Maybe<Scalars["String"]>>>;
	robots_exists?: Maybe<Scalars["Boolean"]>;
	schemaImage_exists?: Maybe<Scalars["Boolean"]>;
	sys?: Maybe<SysFilter>;
	title?: Maybe<Scalars["String"]>;
	title_contains?: Maybe<Scalars["String"]>;
	title_exists?: Maybe<Scalars["Boolean"]>;
	title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
	title_not?: Maybe<Scalars["String"]>;
	title_not_contains?: Maybe<Scalars["String"]>;
	title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
};
