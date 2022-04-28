import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** This field accepts both ISODateString and ISODateTimeStringexample: 1992-08-14 or 1992-08-14T03:42:00.000Z */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AbTestingCampaigns = {
  __typename?: 'AbTestingCampaigns';
  campaign?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type AbTestingCampaignsWhere = {
  campaign?: InputMaybe<Scalars['String']>;
  campaign_exists?: InputMaybe<Scalars['Boolean']>;
  campaign_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaign_ne?: InputMaybe<Scalars['String']>;
  campaign_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_ne?: InputMaybe<Scalars['String']>;
  variant_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AllBannerVariation = {
  __typename?: 'AllBannerVariation';
  items?: Maybe<Array<Maybe<BannerVariation>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllCategory = {
  __typename?: 'AllCategory';
  items?: Maybe<Array<Maybe<Category>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllComposition = {
  __typename?: 'AllComposition';
  items?: Maybe<Array<Maybe<Composition>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllEmailSubscription = {
  __typename?: 'AllEmailSubscription';
  items?: Maybe<Array<Maybe<EmailSubscription>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllErrorPages = {
  __typename?: 'AllErrorPages';
  items?: Maybe<Array<Maybe<ErrorPages>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllFooter = {
  __typename?: 'AllFooter';
  items?: Maybe<Array<Maybe<Footer>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllHeaderBanner = {
  __typename?: 'AllHeaderBanner';
  items?: Maybe<Array<Maybe<HeaderBanner>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllNavigation = {
  __typename?: 'AllNavigation';
  items?: Maybe<Array<Maybe<Navigation>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllStaticComposition = {
  __typename?: 'AllStaticComposition';
  items?: Maybe<Array<Maybe<StaticComposition>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllSysAsset = {
  __typename?: 'AllSysAsset';
  items?: Maybe<Array<Maybe<SysAsset>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllValidationTest = {
  __typename?: 'AllValidationTest';
  items?: Maybe<Array<Maybe<ValidationTest>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Banner = {
  __typename?: 'Banner';
  imageConnection?: Maybe<SysAssetConnection>;
  link?: Maybe<Link>;
};

export type BannerVariation = {
  __typename?: 'BannerVariation';
  banner?: Maybe<Banner>;
  campaign?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum BannerVariationOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type BannerVariationWhere = {
  AND?: InputMaybe<Array<InputMaybe<BannerVariationWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<BannerVariationWhere>>>;
  banner?: InputMaybe<BannerWhere>;
  banner_exists?: InputMaybe<Scalars['Boolean']>;
  campaign?: InputMaybe<Scalars['String']>;
  campaign_exists?: InputMaybe<Scalars['Boolean']>;
  campaign_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaign_ne?: InputMaybe<Scalars['String']>;
  campaign_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type BannerWhere = {
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  categoriesConnection?: Maybe<CategoryCategoriesConnection>;
  link?: Maybe<Link>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  whatever?: Maybe<Scalars['String']>;
};


export type CategoryCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type CategoryCategoriesConnection = {
  __typename?: 'CategoryCategoriesConnection';
  edges?: Maybe<Array<Maybe<CategoryCategoriesEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryCategoriesEdge = {
  __typename?: 'CategoryCategoriesEdge';
  node?: Maybe<CategoryCategoriesNode>;
};

export type CategoryCategoriesNode = Category;

export type CategoryCategoriesWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  category?: InputMaybe<CategoryWhere>;
};

export enum CategoryOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CategoryWhere = {
  AND?: InputMaybe<Array<InputMaybe<CategoryWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryWhere>>>;
  categories?: InputMaybe<CategoryCategoriesWhere>;
  categories_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatever?: InputMaybe<Scalars['String']>;
  whatever_exists?: InputMaybe<Scalars['Boolean']>;
  whatever_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whatever_ne?: InputMaybe<Scalars['String']>;
  whatever_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Composition = {
  __typename?: 'Composition';
  a_b_testing?: Maybe<CompositionAbTesting>;
  personalization?: Maybe<CompositionPersonalization>;
  sliding_banner?: Maybe<CompositionSlidingBanner>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  top_banner?: Maybe<CompositionTopBanner>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CompositionAbTesting = {
  __typename?: 'CompositionABTesting';
  campaign?: Maybe<Scalars['String']>;
  default?: Maybe<Banner>;
  variant_a?: Maybe<Banner>;
  variant_b?: Maybe<Banner>;
};

export type CompositionAbTestingWhere = {
  campaign?: InputMaybe<Scalars['String']>;
  campaign_exists?: InputMaybe<Scalars['Boolean']>;
  campaign_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  campaign_ne?: InputMaybe<Scalars['String']>;
  campaign_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  default?: InputMaybe<BannerWhere>;
  default_exists?: InputMaybe<Scalars['Boolean']>;
  variant_a?: InputMaybe<BannerWhere>;
  variant_a_exists?: InputMaybe<Scalars['Boolean']>;
  variant_b?: InputMaybe<BannerWhere>;
  variant_b_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum CompositionOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type CompositionPersonalization = {
  __typename?: 'CompositionPersonalization';
  personalization_options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CompositionPersonalizationWhere = {
  personalization_options?: InputMaybe<Scalars['String']>;
  personalization_options_exists?: InputMaybe<Scalars['Boolean']>;
  personalization_options_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  personalization_options_ne?: InputMaybe<Scalars['String']>;
  personalization_options_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CompositionSlidingBanner = {
  __typename?: 'CompositionSlidingBanner';
  banners?: Maybe<Array<Maybe<Banner>>>;
};

export type CompositionSlidingBannerWhere = {
  banners?: InputMaybe<BannerWhere>;
  banners_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CompositionTopBanner = {
  __typename?: 'CompositionTopBanner';
  rectangular_blocks?: Maybe<Array<Maybe<Banner>>>;
  square_blocks?: Maybe<Array<Maybe<Banner>>>;
};

export type CompositionTopBannerWhere = {
  rectangular_blocks?: InputMaybe<BannerWhere>;
  rectangular_blocks_exists?: InputMaybe<Scalars['Boolean']>;
  square_blocks?: InputMaybe<BannerWhere>;
  square_blocks_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CompositionWhere = {
  AND?: InputMaybe<Array<InputMaybe<CompositionWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<CompositionWhere>>>;
  a_b_testing?: InputMaybe<CompositionAbTestingWhere>;
  a_b_testing_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  personalization?: InputMaybe<CompositionPersonalizationWhere>;
  personalization_exists?: InputMaybe<Scalars['Boolean']>;
  sliding_banner?: InputMaybe<CompositionSlidingBannerWhere>;
  sliding_banner_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  top_banner?: InputMaybe<CompositionTopBannerWhere>;
  top_banner_exists?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmailSubscription = {
  __typename?: 'EmailSubscription';
  button_label?: Maybe<Scalars['String']>;
  input_placeholder?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum EmailSubscriptionOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type EmailSubscriptionWhere = {
  AND?: InputMaybe<Array<InputMaybe<EmailSubscriptionWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<EmailSubscriptionWhere>>>;
  button_label?: InputMaybe<Scalars['String']>;
  button_label_exists?: InputMaybe<Scalars['Boolean']>;
  button_label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  button_label_ne?: InputMaybe<Scalars['String']>;
  button_label_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  input_placeholder?: InputMaybe<Scalars['String']>;
  input_placeholder_exists?: InputMaybe<Scalars['Boolean']>;
  input_placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  input_placeholder_ne?: InputMaybe<Scalars['String']>;
  input_placeholder_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_ne?: InputMaybe<Scalars['String']>;
  subtitle_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type EntrySystemField = {
  __typename?: 'EntrySystemField';
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type ErrorPages = {
  __typename?: 'ErrorPages';
  error_message?: Maybe<Scalars['String']>;
  error_number?: Maybe<Scalars['Float']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum ErrorPagesOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ErrorPagesWhere = {
  AND?: InputMaybe<Array<InputMaybe<ErrorPagesWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ErrorPagesWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  error_message?: InputMaybe<Scalars['String']>;
  error_message_exists?: InputMaybe<Scalars['Boolean']>;
  error_message_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_message_ne?: InputMaybe<Scalars['String']>;
  error_message_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  error_number?: InputMaybe<Scalars['Float']>;
  error_number_exists?: InputMaybe<Scalars['Boolean']>;
  error_number_gt?: InputMaybe<Scalars['Float']>;
  error_number_gte?: InputMaybe<Scalars['Float']>;
  error_number_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  error_number_lt?: InputMaybe<Scalars['Float']>;
  error_number_lte?: InputMaybe<Scalars['Float']>;
  error_number_ne?: InputMaybe<Scalars['Float']>;
  error_number_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum EvalReferenceEnum {
  All = 'ALL',
  Any = 'ANY'
}

export type Faq = {
  __typename?: 'Faq';
  questions?: Maybe<Array<Maybe<FaqQuestions>>>;
};

export type FaqQuestions = {
  __typename?: 'FaqQuestions';
  answers?: Maybe<Array<Maybe<Scalars['String']>>>;
  question?: Maybe<Scalars['String']>;
};

export type FaqQuestionsWhere = {
  answers?: InputMaybe<Scalars['String']>;
  answers_exists?: InputMaybe<Scalars['Boolean']>;
  answers_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  answers_ne?: InputMaybe<Scalars['String']>;
  answers_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question?: InputMaybe<Scalars['String']>;
  question_exists?: InputMaybe<Scalars['Boolean']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_ne?: InputMaybe<Scalars['String']>;
  question_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Footer = {
  __typename?: 'Footer';
  copyright?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<Links>>>;
  payment_methods?: Maybe<Links>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum FooterOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type FooterWhere = {
  AND?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterWhere>>>;
  copyright?: InputMaybe<Scalars['String']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  copyright_ne?: InputMaybe<Scalars['String']>;
  copyright_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  links?: InputMaybe<LinksWhere>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  payment_methods?: InputMaybe<LinksWhere>;
  payment_methods_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeaderBanner = {
  __typename?: 'HeaderBanner';
  banner?: Maybe<Banner>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum HeaderBannerOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type HeaderBannerWhere = {
  AND?: InputMaybe<Array<InputMaybe<HeaderBannerWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderBannerWhere>>>;
  banner?: InputMaybe<BannerWhere>;
  banner_exists?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LinkWhere = {
  href?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_ne?: InputMaybe<Scalars['String']>;
  href_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Links = {
  __typename?: 'Links';
  links?: Maybe<Array<Maybe<LinksLinks>>>;
  list_title?: Maybe<Scalars['String']>;
};

export type LinksLinks = {
  __typename?: 'LinksLinks';
  categoryConnection?: Maybe<LinksLinksCategoryConnection>;
  icon?: Maybe<Scalars['String']>;
  imageConnection?: Maybe<SysAssetConnection>;
  link?: Maybe<Link>;
};

export type LinksLinksCategoryConnection = {
  __typename?: 'LinksLinksCategoryConnection';
  edges?: Maybe<Array<Maybe<LinksLinksCategoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LinksLinksCategoryEdge = {
  __typename?: 'LinksLinksCategoryEdge';
  node?: Maybe<LinksLinksCategoryNode>;
};

export type LinksLinksCategoryNode = Category;

export type LinksLinksCategoryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  category?: InputMaybe<CategoryWhere>;
};

export type LinksLinksWhere = {
  category?: InputMaybe<LinksLinksCategoryWhere>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_ne?: InputMaybe<Scalars['String']>;
  icon_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image?: InputMaybe<SysAssetWhere>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
};

export type LinksWhere = {
  links?: InputMaybe<LinksLinksWhere>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  list_title?: InputMaybe<Scalars['String']>;
  list_title_exists?: InputMaybe<Scalars['Boolean']>;
  list_title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  list_title_ne?: InputMaybe<Scalars['String']>;
  list_title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Locale = {
  __typename?: 'Locale';
  select_locale?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LocaleWhere = {
  select_locale?: InputMaybe<Scalars['String']>;
  select_locale_exists?: InputMaybe<Scalars['Boolean']>;
  select_locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  select_locale_ne?: InputMaybe<Scalars['String']>;
  select_locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ManagementFieldsWhere = {
  unpublish_at?: InputMaybe<Scalars['DateTime']>;
  unpublish_at_exists?: InputMaybe<Scalars['Boolean']>;
  unpublish_at_gt?: InputMaybe<Scalars['DateTime']>;
  unpublish_at_gte?: InputMaybe<Scalars['DateTime']>;
  unpublish_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  unpublish_at_lt?: InputMaybe<Scalars['DateTime']>;
  unpublish_at_lte?: InputMaybe<Scalars['DateTime']>;
  unpublish_at_ne?: InputMaybe<Scalars['DateTime']>;
  unpublish_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Navigation = {
  __typename?: 'Navigation';
  links?: Maybe<Array<Maybe<NavigationLinks>>>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NavigationLinks = {
  __typename?: 'NavigationLinks';
  categoryConnection?: Maybe<NavigationLinksCategoryConnection>;
  link?: Maybe<Link>;
  nested_links?: Maybe<Array<Maybe<NavigationLinksNestedLinks>>>;
};

export type NavigationLinksCategoryConnection = {
  __typename?: 'NavigationLinksCategoryConnection';
  edges?: Maybe<Array<Maybe<NavigationLinksCategoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NavigationLinksCategoryEdge = {
  __typename?: 'NavigationLinksCategoryEdge';
  node?: Maybe<NavigationLinksCategoryNode>;
};

export type NavigationLinksCategoryNode = Category;

export type NavigationLinksCategoryWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  category?: InputMaybe<CategoryWhere>;
};

export type NavigationLinksNestedLinks = {
  __typename?: 'NavigationLinksNestedLinks';
  link?: Maybe<Link>;
  nested_links?: Maybe<Array<Maybe<NavigationLinksNestedLinksNestedLinks>>>;
};

export type NavigationLinksNestedLinksNestedLinks = {
  __typename?: 'NavigationLinksNestedLinksNestedLinks';
  link?: Maybe<Link>;
};

export type NavigationLinksNestedLinksNestedLinksWhere = {
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationLinksNestedLinksWhere = {
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  nested_links?: InputMaybe<NavigationLinksNestedLinksNestedLinksWhere>;
  nested_links_exists?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationLinksWhere = {
  category?: InputMaybe<NavigationLinksCategoryWhere>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  nested_links?: InputMaybe<NavigationLinksNestedLinksWhere>;
  nested_links_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum NavigationOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type NavigationWhere = {
  AND?: InputMaybe<Array<InputMaybe<NavigationWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  links?: InputMaybe<NavigationLinksWhere>;
  links_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  all_assets?: Maybe<AllSysAsset>;
  all_banner_variation?: Maybe<AllBannerVariation>;
  all_category?: Maybe<AllCategory>;
  all_composition?: Maybe<AllComposition>;
  all_email_subscription?: Maybe<AllEmailSubscription>;
  all_error_pages?: Maybe<AllErrorPages>;
  all_footer?: Maybe<AllFooter>;
  all_header_banner?: Maybe<AllHeaderBanner>;
  all_navigation?: Maybe<AllNavigation>;
  all_static_composition?: Maybe<AllStaticComposition>;
  all_validation_test?: Maybe<AllValidationTest>;
  assets?: Maybe<SysAsset>;
  banner_variation?: Maybe<BannerVariation>;
  category?: Maybe<Category>;
  composition?: Maybe<Composition>;
  email_subscription?: Maybe<EmailSubscription>;
  error_pages?: Maybe<ErrorPages>;
  footer?: Maybe<Footer>;
  header_banner?: Maybe<HeaderBanner>;
  navigation?: Maybe<Navigation>;
  static_composition?: Maybe<StaticComposition>;
  validation_test?: Maybe<ValidationTest>;
};


export type QueryAll_AssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<SysAssetOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SysAssetWhere>;
};


export type QueryAll_Banner_VariationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<BannerVariationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BannerVariationWhere>;
};


export type QueryAll_CategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<CategoryOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryAll_CompositionArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<CompositionOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompositionWhere>;
};


export type QueryAll_Email_SubscriptionArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<EmailSubscriptionOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EmailSubscriptionWhere>;
};


export type QueryAll_Error_PagesArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<ErrorPagesOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ErrorPagesWhere>;
};


export type QueryAll_FooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<FooterOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterWhere>;
};


export type QueryAll_Header_BannerArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<HeaderBannerOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeaderBannerWhere>;
};


export type QueryAll_NavigationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<NavigationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationWhere>;
};


export type QueryAll_Static_CompositionArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<StaticCompositionOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StaticCompositionWhere>;
};


export type QueryAll_Validation_TestArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order_by?: InputMaybe<Array<InputMaybe<ValidationTestOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ValidationTestWhere>;
};


export type QueryAssetsArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};


export type QueryBanner_VariationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryCategoryArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryCompositionArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryEmail_SubscriptionArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryError_PagesArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFooterArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHeader_BannerArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryNavigationArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryStatic_CompositionArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryValidation_TestArgs = {
  fallback_locale?: InputMaybe<Scalars['Boolean']>;
  locale?: Scalars['String'];
  uid: Scalars['String'];
};

export type StaticComposition = {
  __typename?: 'StaticComposition';
  boolean?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['Float']>;
  custom?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  dynamic_blocks?: Maybe<Array<Maybe<StaticCompositionDynamicBlocks>>>;
  fileConnection?: Maybe<SysAssetConnection>;
  global_field?: Maybe<AbTestingCampaigns>;
  group?: Maybe<StaticCompositionGroup>;
  header?: Maybe<StaticCompositionHeader>;
  link?: Maybe<Link>;
  locale_field?: Maybe<Locale>;
  markdown?: Maybe<Scalars['String']>;
  multi_line?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
  referenceConnection?: Maybe<StaticCompositionReferenceConnection>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StaticCompositionDynamicBlocks = StaticCompositionDynamicBlocksFaq | StaticCompositionDynamicBlocksMailListSubscription | StaticCompositionDynamicBlocksParagraphsWithLinks;

export type StaticCompositionDynamicBlocksFaq = {
  __typename?: 'StaticCompositionDynamicBlocksFaq';
  faq?: Maybe<Faq>;
};

export type StaticCompositionDynamicBlocksFaqWhere = {
  questions?: InputMaybe<FaqQuestionsWhere>;
  questions_exists?: InputMaybe<Scalars['Boolean']>;
};

export type StaticCompositionDynamicBlocksMailListSubscription = {
  __typename?: 'StaticCompositionDynamicBlocksMailListSubscription';
  mail_list_subscription?: Maybe<StaticCompositionDynamicBlocksMailListSubscriptionBlock>;
};

export type StaticCompositionDynamicBlocksMailListSubscriptionBlock = {
  __typename?: 'StaticCompositionDynamicBlocksMailListSubscriptionBlock';
  email_subscriptionConnection?: Maybe<StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionConnection>;
};

export type StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionConnection = {
  __typename?: 'StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionConnection';
  edges?: Maybe<Array<Maybe<StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionEdge = {
  __typename?: 'StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionEdge';
  node?: Maybe<StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionNode>;
};

export type StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionNode = EmailSubscription;

export type StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  email_subscription?: InputMaybe<EmailSubscriptionWhere>;
};

export type StaticCompositionDynamicBlocksMailListSubscriptionBlockWhere = {
  email_subscription?: InputMaybe<StaticCompositionDynamicBlocksMailListSubscriptionBlockEmailSubscriptionWhere>;
  email_subscription_exists?: InputMaybe<Scalars['Boolean']>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinks = {
  __typename?: 'StaticCompositionDynamicBlocksParagraphsWithLinks';
  paragraphs_with_links?: Maybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlock>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlock = {
  __typename?: 'StaticCompositionDynamicBlocksParagraphsWithLinksBlock';
  paragraphs?: Maybe<Array<Maybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphs>>>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphs = {
  __typename?: 'StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphs';
  paragraph?: Maybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraph>;
  title?: Maybe<Scalars['String']>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraph = {
  __typename?: 'StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraph';
  embedded_itemsConnection?: Maybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsConnection = {
  __typename?: 'StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsEdge = {
  __typename?: 'StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsEdge';
  node?: Maybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsNode>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsParagraphEmbeddedItemsNode = SysAsset;

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsWhere = {
  paragraph?: InputMaybe<Scalars['JSON']>;
  paragraph_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StaticCompositionDynamicBlocksParagraphsWithLinksBlockWhere = {
  paragraphs?: InputMaybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlockParagraphsWhere>;
  paragraphs_exists?: InputMaybe<Scalars['Boolean']>;
};

export type StaticCompositionDynamicBlocksWhere = {
  faq?: InputMaybe<StaticCompositionDynamicBlocksFaqWhere>;
  faq_exists?: InputMaybe<Scalars['Boolean']>;
  mail_list_subscription?: InputMaybe<StaticCompositionDynamicBlocksMailListSubscriptionBlockWhere>;
  mail_list_subscription_exists?: InputMaybe<Scalars['Boolean']>;
  paragraphs_with_links?: InputMaybe<StaticCompositionDynamicBlocksParagraphsWithLinksBlockWhere>;
  paragraphs_with_links_exists?: InputMaybe<Scalars['Boolean']>;
};

export type StaticCompositionGroup = {
  __typename?: 'StaticCompositionGroup';
  single_line?: Maybe<Array<Maybe<Scalars['String']>>>;
  single_line_textbox2?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StaticCompositionGroupWhere = {
  single_line?: InputMaybe<Scalars['String']>;
  single_line_exists?: InputMaybe<Scalars['Boolean']>;
  single_line_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  single_line_ne?: InputMaybe<Scalars['String']>;
  single_line_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  single_line_textbox2?: InputMaybe<Scalars['String']>;
  single_line_textbox2_exists?: InputMaybe<Scalars['Boolean']>;
  single_line_textbox2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  single_line_textbox2_ne?: InputMaybe<Scalars['String']>;
  single_line_textbox2_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StaticCompositionHeader = {
  __typename?: 'StaticCompositionHeader';
  bannerConnection?: Maybe<StaticCompositionHeaderBannerConnection>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StaticCompositionHeaderBannerConnection = {
  __typename?: 'StaticCompositionHeaderBannerConnection';
  edges?: Maybe<Array<Maybe<StaticCompositionHeaderBannerEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StaticCompositionHeaderBannerEdge = {
  __typename?: 'StaticCompositionHeaderBannerEdge';
  node?: Maybe<StaticCompositionHeaderBannerNode>;
};

export type StaticCompositionHeaderBannerNode = HeaderBanner;

export type StaticCompositionHeaderBannerWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  header_banner?: InputMaybe<HeaderBannerWhere>;
};

export type StaticCompositionHeaderWhere = {
  banner?: InputMaybe<StaticCompositionHeaderBannerWhere>;
  banner_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_ne?: InputMaybe<Scalars['String']>;
  subtitle_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StaticCompositionOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type StaticCompositionReferenceConnection = {
  __typename?: 'StaticCompositionReferenceConnection';
  edges?: Maybe<Array<Maybe<StaticCompositionReferenceEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StaticCompositionReferenceEdge = {
  __typename?: 'StaticCompositionReferenceEdge';
  node?: Maybe<StaticCompositionReferenceNode>;
};

export type StaticCompositionReferenceNode = Navigation;

export type StaticCompositionReferenceWhere = {
  MATCH?: InputMaybe<EvalReferenceEnum>;
  navigation?: InputMaybe<NavigationWhere>;
};

export type StaticCompositionWhere = {
  AND?: InputMaybe<Array<InputMaybe<StaticCompositionWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<StaticCompositionWhere>>>;
  boolean?: InputMaybe<Scalars['Boolean']>;
  boolean_exists?: InputMaybe<Scalars['Boolean']>;
  boolean_ne?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  currency?: InputMaybe<Scalars['Float']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_gt?: InputMaybe<Scalars['Float']>;
  currency_gte?: InputMaybe<Scalars['Float']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  currency_lt?: InputMaybe<Scalars['Float']>;
  currency_lte?: InputMaybe<Scalars['Float']>;
  currency_ne?: InputMaybe<Scalars['Float']>;
  currency_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  custom?: InputMaybe<Scalars['String']>;
  custom_exists?: InputMaybe<Scalars['Boolean']>;
  custom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  custom_ne?: InputMaybe<Scalars['String']>;
  custom_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_ne?: InputMaybe<Scalars['DateTime']>;
  date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dynamic_blocks?: InputMaybe<StaticCompositionDynamicBlocksWhere>;
  dynamic_blocks_exists?: InputMaybe<Scalars['Boolean']>;
  file?: InputMaybe<SysAssetWhere>;
  file_exists?: InputMaybe<Scalars['Boolean']>;
  global_field?: InputMaybe<AbTestingCampaignsWhere>;
  global_field_exists?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<StaticCompositionGroupWhere>;
  group_exists?: InputMaybe<Scalars['Boolean']>;
  header?: InputMaybe<StaticCompositionHeaderWhere>;
  header_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<LinkWhere>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_field?: InputMaybe<LocaleWhere>;
  locale_field_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  markdown?: InputMaybe<Scalars['String']>;
  markdown_exists?: InputMaybe<Scalars['Boolean']>;
  markdown_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  markdown_ne?: InputMaybe<Scalars['String']>;
  markdown_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  multi_line?: InputMaybe<Scalars['String']>;
  multi_line_exists?: InputMaybe<Scalars['Boolean']>;
  multi_line_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  multi_line_ne?: InputMaybe<Scalars['String']>;
  multi_line_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  number?: InputMaybe<Scalars['Float']>;
  number_exists?: InputMaybe<Scalars['Boolean']>;
  number_gt?: InputMaybe<Scalars['Float']>;
  number_gte?: InputMaybe<Scalars['Float']>;
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  number_lt?: InputMaybe<Scalars['Float']>;
  number_lte?: InputMaybe<Scalars['Float']>;
  number_ne?: InputMaybe<Scalars['Float']>;
  number_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  reference?: InputMaybe<StaticCompositionReferenceWhere>;
  reference_exists?: InputMaybe<Scalars['Boolean']>;
  system?: InputMaybe<ManagementFieldsWhere>;
  system_exists?: InputMaybe<Scalars['Boolean']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SysAsset = {
  __typename?: 'SysAsset';
  content_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimension?: Maybe<SysAssetDimension>;
  file_size?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  system?: Maybe<SysAssetSystemField>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type SysAssetUrlArgs = {
  transform?: InputMaybe<SysAssetTransformUrl>;
};

/** WEBP images are usually lower in size and have good quality. */
export enum SysAssetAutoValues {
  Webp = 'WEBP'
}

export type SysAssetConnection = {
  __typename?: 'SysAssetConnection';
  edges?: Maybe<Array<Maybe<SysAssetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SysAssetDimension = {
  __typename?: 'SysAssetDimension';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type SysAssetDimensionWhere = {
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_ne?: InputMaybe<Scalars['Int']>;
  height_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_ne?: InputMaybe<Scalars['Int']>;
  width_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum SysAssetDisableValues {
  /** UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image */
  Upscale = 'UPSCALE'
}

/** This parameter allows an image to be downloaded or rendered on page */
export enum SysAssetDispositionValues {
  /** Allows to download an image */
  Attachment = 'ATTACHMENT',
  /** Allows an image to be rendered on page */
  Inline = 'INLINE'
}

export type SysAssetEdge = {
  __typename?: 'SysAssetEdge';
  node?: Maybe<SysAsset>;
};

export enum SysAssetFitValues {
  Bounds = 'BOUNDS',
  Crop = 'CROP'
}

export enum SysAssetImageFormats {
  /** Convert an image to GIF format */
  Gif = 'GIF',
  /** Convert an image to JPEG format */
  Jpg = 'JPG',
  /** A Progressive JPEG is an image file created using a compression method that displays higher detail in progression */
  Pjpg = 'PJPG',
  /** Convert an image to PNG format */
  Png = 'PNG',
  /** WEBP images are usually lower in size and have good quality */
  Webp = 'WEBP',
  /** WEBP Lossless format */
  Webpll = 'WEBPLL',
  /** WEBP Lossy format */
  Webply = 'WEBPLY'
}

export enum SysAssetOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export enum SysAssetOrientValues {
  /** Flip image horizontally and vertically */
  Both = 'BOTH',
  /** Set image to default */
  Default = 'DEFAULT',
  /** Flip image horizontally */
  Horizontally = 'HORIZONTALLY',
  /** Flip image horizontally and then rotate 90 degrees towards left */
  Rotate90Left = 'ROTATE90LEFT',
  /** Rotate image 90 degrees towards right */
  Rotate90Right = 'ROTATE90RIGHT',
  /** Flip image vertically */
  Vertically = 'VERTICALLY'
}

/** The overlay_align parameter allows you to put one image on top of another */
export enum SysAssetOverlayAlignValues {
  /** Align the overlay image to the bottom of the actual image */
  Bottom = 'BOTTOM',
  /** Align the overlay image to the center (horizontally) of the actual image */
  Center = 'CENTER',
  /** Align the overlay image to the left of the actual image */
  Left = 'LEFT',
  /** Align the overlay image to the middle (vertically) of the actual image */
  Middle = 'MIDDLE',
  /** Align the overlay image to the right of the actual image */
  Right = 'RIGHT',
  /** Align the overlay image to the top of the actual image */
  Top = 'TOP'
}

export enum SysAssetOverlayRepeatValues {
  /** Horizontal and vertical repetition */
  Both = 'BOTH',
  /** Horizontal repetition */
  X = 'X',
  /** Vertical repetition */
  Y = 'Y'
}

export type SysAssetSystemField = {
  __typename?: 'SysAssetSystemField';
  content_type_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  publish_details?: Maybe<SystemPublishDetails>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type SysAssetTransformUrl = {
  /** When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality. */
  auto?: InputMaybe<SysAssetAutoValues>;
  /** The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image */
  bg_color?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  /** The disable parameter disables the functionality that is enabled by default */
  disable?: InputMaybe<SysAssetDisableValues>;
  /** The disposition parameter lets you allow image to download or render.  */
  disposition?: InputMaybe<SysAssetDispositionValues>;
  /** The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret */
  dpr?: InputMaybe<Scalars['String']>;
  /** Fit parameter enables you to fit the given image properly within the specified height and width */
  fit?: InputMaybe<SysAssetFitValues>;
  /** Format parameter lets you converts a given image from one format to another */
  format?: InputMaybe<SysAssetImageFormats>;
  height?: InputMaybe<Scalars['String']>;
  /** The orient parameter lets you control the cardinal orientation of the given image */
  orient?: InputMaybe<SysAssetOrientValues>;
  overlay?: InputMaybe<Scalars['String']>;
  overlay_align?: InputMaybe<SysAssetOverlayAlignValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image */
  overlay_height?: InputMaybe<Scalars['String']>;
  /** The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image */
  overlay_repeat?: InputMaybe<SysAssetOverlayRepeatValues>;
  /** The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image */
  overlay_width?: InputMaybe<Scalars['String']>;
  /** This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image */
  pad?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

export type SysAssetWhere = {
  AND?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<SysAssetWhere>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dimension?: InputMaybe<SysAssetDimensionWhere>;
  dimension_exists?: InputMaybe<Scalars['Boolean']>;
  file_size?: InputMaybe<Scalars['Int']>;
  file_size_exists?: InputMaybe<Scalars['Boolean']>;
  file_size_gt?: InputMaybe<Scalars['Int']>;
  file_size_gte?: InputMaybe<Scalars['Int']>;
  file_size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  file_size_lt?: InputMaybe<Scalars['Int']>;
  file_size_lte?: InputMaybe<Scalars['Int']>;
  file_size_ne?: InputMaybe<Scalars['Int']>;
  file_size_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filename?: InputMaybe<Scalars['String']>;
  filename_exists?: InputMaybe<Scalars['Boolean']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename_ne?: InputMaybe<Scalars['String']>;
  filename_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags?: InputMaybe<Scalars['String']>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_ne?: InputMaybe<Scalars['String']>;
  url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SystemPublishDetails = {
  __typename?: 'SystemPublishDetails';
  environment?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

export type ValidationTest = {
  __typename?: 'ValidationTest';
  custom?: Maybe<Scalars['String']>;
  custom_field_example?: Maybe<Scalars['String']>;
  rte_content?: Maybe<ValidationTestRteContent>;
  single_line?: Maybe<Scalars['String']>;
  system?: Maybe<EntrySystemField>;
  title?: Maybe<Scalars['String']>;
};

export enum ValidationTestOrderBy {
  CreatedAtAsc = 'created_at_ASC',
  CreatedAtDesc = 'created_at_DESC',
  UpdatedAtAsc = 'updated_at_ASC',
  UpdatedAtDesc = 'updated_at_DESC'
}

export type ValidationTestRteContent = {
  __typename?: 'ValidationTestRteContent';
  embedded_itemsConnection?: Maybe<ValidationTestRteContentEmbeddedItemsConnection>;
  json?: Maybe<Scalars['JSON']>;
};


export type ValidationTestRteContentEmbedded_ItemsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ValidationTestRteContentEmbeddedItemsConnection = {
  __typename?: 'ValidationTestRteContentEmbeddedItemsConnection';
  edges?: Maybe<Array<Maybe<ValidationTestRteContentEmbeddedItemsEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ValidationTestRteContentEmbeddedItemsEdge = {
  __typename?: 'ValidationTestRteContentEmbeddedItemsEdge';
  node?: Maybe<ValidationTestRteContentEmbeddedItemsNode>;
};

export type ValidationTestRteContentEmbeddedItemsNode = SysAsset;

export type ValidationTestWhere = {
  AND?: InputMaybe<Array<InputMaybe<ValidationTestWhere>>>;
  OR?: InputMaybe<Array<InputMaybe<ValidationTestWhere>>>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  created_at_gt?: InputMaybe<Scalars['DateTime']>;
  created_at_gte?: InputMaybe<Scalars['DateTime']>;
  created_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  created_at_lt?: InputMaybe<Scalars['DateTime']>;
  created_at_lte?: InputMaybe<Scalars['DateTime']>;
  created_at_ne?: InputMaybe<Scalars['DateTime']>;
  created_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  custom?: InputMaybe<Scalars['String']>;
  custom_exists?: InputMaybe<Scalars['Boolean']>;
  custom_field_example?: InputMaybe<Scalars['String']>;
  custom_field_example_exists?: InputMaybe<Scalars['Boolean']>;
  custom_field_example_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  custom_field_example_ne?: InputMaybe<Scalars['String']>;
  custom_field_example_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  custom_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  custom_ne?: InputMaybe<Scalars['String']>;
  custom_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_ne?: InputMaybe<Scalars['String']>;
  locale_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rte_content?: InputMaybe<Scalars['JSON']>;
  rte_content_exists?: InputMaybe<Scalars['Boolean']>;
  single_line?: InputMaybe<Scalars['String']>;
  single_line_exists?: InputMaybe<Scalars['Boolean']>;
  single_line_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  single_line_ne?: InputMaybe<Scalars['String']>;
  single_line_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_ne?: InputMaybe<Scalars['String']>;
  title_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  updated_at_gt?: InputMaybe<Scalars['DateTime']>;
  updated_at_gte?: InputMaybe<Scalars['DateTime']>;
  updated_at_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updated_at_lt?: InputMaybe<Scalars['DateTime']>;
  updated_at_lte?: InputMaybe<Scalars['DateTime']>;
  updated_at_ne?: InputMaybe<Scalars['DateTime']>;
  updated_at_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type AllStaticPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStaticPagesQuery = { __typename?: 'Query', all_static_composition?: { __typename?: 'AllStaticComposition', items?: Array<{ __typename?: 'StaticComposition', title?: string | null, url?: string | null } | null> | null } | null };

export type StaticPageByUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type StaticPageByUrlQuery = { __typename?: 'Query', all_static_composition?: { __typename?: 'AllStaticComposition', items?: Array<{ __typename?: 'StaticComposition', title?: string | null, url?: string | null } | null> | null } | null };


export const AllStaticPagesDocument = gql`
    query AllStaticPages {
  all_static_composition {
    items {
      title
      url
    }
  }
}
    `;
export const StaticPageByUrlDocument = gql`
    query StaticPageByUrl($url: String!) {
  all_static_composition(where: {url: $url}) {
    items {
      title
      url
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllStaticPages(variables?: AllStaticPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllStaticPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllStaticPagesQuery>(AllStaticPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllStaticPages', 'query');
    },
    StaticPageByUrl(variables: StaticPageByUrlQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StaticPageByUrlQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StaticPageByUrlQuery>(StaticPageByUrlDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StaticPageByUrl', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;