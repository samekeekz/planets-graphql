/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies';
  ceo?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  founded_year: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "companies" */
export type CompaniesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  __typename?: 'companies_aggregate';
  aggregate?: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'companies_aggregate_fields';
  avg?: Maybe<Companies_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Companies_Max_Fields>;
  min?: Maybe<Companies_Min_Fields>;
  stddev?: Maybe<Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Companies_Sum_Fields>;
  var_pop?: Maybe<Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Companies_Var_Samp_Fields>;
  variance?: Maybe<Companies_Variance_Fields>;
};


/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'companies_avg_fields';
  founded_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Companies_Bool_Exp>>;
  _not?: InputMaybe<Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Companies_Bool_Exp>>;
  ceo?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  founded_year?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint on columns "name" */
  CompaniesNameKey = 'companies_name_key',
  /** unique or primary key constraint on columns "id" */
  CompaniesPkey = 'companies_pkey'
}

/** input type for incrementing numeric columns in table "companies" */
export type Companies_Inc_Input = {
  founded_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  ceo?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  founded_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'companies_max_fields';
  ceo?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  founded_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'companies_min_fields';
  ceo?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  founded_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  __typename?: 'companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};

/** on_conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns?: Array<Companies_Update_Column>;
  where?: InputMaybe<Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "companies". */
export type Companies_Order_By = {
  ceo?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  founded_year?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: companies */
export type Companies_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  Ceo = 'ceo',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FoundedYear = 'founded_year',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  ceo?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  founded_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'companies_stddev_fields';
  founded_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'companies_stddev_pop_fields';
  founded_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'companies_stddev_samp_fields';
  founded_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "companies" */
export type Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Companies_Stream_Cursor_Value_Input = {
  ceo?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  founded_year?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'companies_sum_fields';
  founded_year?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  Ceo = 'ceo',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FoundedYear = 'founded_year',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Companies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Companies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Companies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'companies_var_pop_fields';
  founded_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'companies_var_samp_fields';
  founded_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'companies_variance_fields';
  founded_year?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "moons" */
export type Moons = {
  __typename?: 'moons';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  planet_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "moons" */
export type Moons_Aggregate = {
  __typename?: 'moons_aggregate';
  aggregate?: Maybe<Moons_Aggregate_Fields>;
  nodes: Array<Moons>;
};

/** aggregate fields of "moons" */
export type Moons_Aggregate_Fields = {
  __typename?: 'moons_aggregate_fields';
  avg?: Maybe<Moons_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Moons_Max_Fields>;
  min?: Maybe<Moons_Min_Fields>;
  stddev?: Maybe<Moons_Stddev_Fields>;
  stddev_pop?: Maybe<Moons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Moons_Stddev_Samp_Fields>;
  sum?: Maybe<Moons_Sum_Fields>;
  var_pop?: Maybe<Moons_Var_Pop_Fields>;
  var_samp?: Maybe<Moons_Var_Samp_Fields>;
  variance?: Maybe<Moons_Variance_Fields>;
};


/** aggregate fields of "moons" */
export type Moons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Moons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Moons_Avg_Fields = {
  __typename?: 'moons_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  planet_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "moons". All fields are combined with a logical 'AND'. */
export type Moons_Bool_Exp = {
  _and?: InputMaybe<Array<Moons_Bool_Exp>>;
  _not?: InputMaybe<Moons_Bool_Exp>;
  _or?: InputMaybe<Array<Moons_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  planet_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "moons" */
export enum Moons_Constraint {
  /** unique or primary key constraint on columns "name" */
  MoonsNameKey = 'moons_name_key',
  /** unique or primary key constraint on columns "id" */
  MoonsPkey = 'moons_pkey'
}

/** input type for incrementing numeric columns in table "moons" */
export type Moons_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  planet_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "moons" */
export type Moons_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planet_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Moons_Max_Fields = {
  __typename?: 'moons_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planet_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Moons_Min_Fields = {
  __typename?: 'moons_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planet_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "moons" */
export type Moons_Mutation_Response = {
  __typename?: 'moons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Moons>;
};

/** on_conflict condition type for table "moons" */
export type Moons_On_Conflict = {
  constraint: Moons_Constraint;
  update_columns?: Array<Moons_Update_Column>;
  where?: InputMaybe<Moons_Bool_Exp>;
};

/** Ordering options when selecting data from "moons". */
export type Moons_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  planet_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: moons */
export type Moons_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "moons" */
export enum Moons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PlanetId = 'planet_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "moons" */
export type Moons_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planet_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Moons_Stddev_Fields = {
  __typename?: 'moons_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  planet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Moons_Stddev_Pop_Fields = {
  __typename?: 'moons_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  planet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Moons_Stddev_Samp_Fields = {
  __typename?: 'moons_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  planet_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "moons" */
export type Moons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Moons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Moons_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  planet_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Moons_Sum_Fields = {
  __typename?: 'moons_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  planet_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "moons" */
export enum Moons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PlanetId = 'planet_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Moons_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Moons_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Moons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Moons_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Moons_Var_Pop_Fields = {
  __typename?: 'moons_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  planet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Moons_Var_Samp_Fields = {
  __typename?: 'moons_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  planet_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Moons_Variance_Fields = {
  __typename?: 'moons_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  planet_id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "moons" */
  delete_moons?: Maybe<Moons_Mutation_Response>;
  /** delete single row from the table: "moons" */
  delete_moons_by_pk?: Maybe<Moons>;
  /** delete data from the table: "planets" */
  delete_planets?: Maybe<Planets_Mutation_Response>;
  /** delete single row from the table: "planets" */
  delete_planets_by_pk?: Maybe<Planets>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>;
  /** insert data into the table: "moons" */
  insert_moons?: Maybe<Moons_Mutation_Response>;
  /** insert a single row into the table: "moons" */
  insert_moons_one?: Maybe<Moons>;
  /** insert data into the table: "planets" */
  insert_planets?: Maybe<Planets_Mutation_Response>;
  /** insert a single row into the table: "planets" */
  insert_planets_one?: Maybe<Planets>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** update data of the table: "companies" */
  update_companies?: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>;
  /** update multiples rows of table: "companies" */
  update_companies_many?: Maybe<Array<Maybe<Companies_Mutation_Response>>>;
  /** update data of the table: "moons" */
  update_moons?: Maybe<Moons_Mutation_Response>;
  /** update single row of the table: "moons" */
  update_moons_by_pk?: Maybe<Moons>;
  /** update multiples rows of table: "moons" */
  update_moons_many?: Maybe<Array<Maybe<Moons_Mutation_Response>>>;
  /** update data of the table: "planets" */
  update_planets?: Maybe<Planets_Mutation_Response>;
  /** update single row of the table: "planets" */
  update_planets_by_pk?: Maybe<Planets>;
  /** update multiples rows of table: "planets" */
  update_planets_many?: Maybe<Array<Maybe<Planets_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MoonsArgs = {
  where: Moons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Moons_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PlanetsArgs = {
  where: Planets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Planets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict?: InputMaybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MoonsArgs = {
  objects: Array<Moons_Insert_Input>;
  on_conflict?: InputMaybe<Moons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Moons_OneArgs = {
  object: Moons_Insert_Input;
  on_conflict?: InputMaybe<Moons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlanetsArgs = {
  objects: Array<Planets_Insert_Input>;
  on_conflict?: InputMaybe<Planets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Planets_OneArgs = {
  object: Planets_Insert_Input;
  on_conflict?: InputMaybe<Planets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: InputMaybe<Companies_Inc_Input>;
  _set?: InputMaybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: InputMaybe<Companies_Inc_Input>;
  _set?: InputMaybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_ManyArgs = {
  updates: Array<Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MoonsArgs = {
  _inc?: InputMaybe<Moons_Inc_Input>;
  _set?: InputMaybe<Moons_Set_Input>;
  where: Moons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Moons_By_PkArgs = {
  _inc?: InputMaybe<Moons_Inc_Input>;
  _set?: InputMaybe<Moons_Set_Input>;
  pk_columns: Moons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Moons_ManyArgs = {
  updates: Array<Moons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlanetsArgs = {
  _inc?: InputMaybe<Planets_Inc_Input>;
  _set?: InputMaybe<Planets_Set_Input>;
  where: Planets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Planets_By_PkArgs = {
  _inc?: InputMaybe<Planets_Inc_Input>;
  _set?: InputMaybe<Planets_Set_Input>;
  pk_columns: Planets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Planets_ManyArgs = {
  updates: Array<Planets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "planets" */
export type Planets = {
  __typename?: 'planets';
  created_at: Scalars['timestamptz']['output'];
  geology_content: Scalars['String']['output'];
  geology_source: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  overview_content: Scalars['String']['output'];
  overview_source: Scalars['String']['output'];
  radius: Scalars['bigint']['output'];
  revolution: Scalars['bigint']['output'];
  rotation: Scalars['bigint']['output'];
  structure_content: Scalars['String']['output'];
  structure_source: Scalars['String']['output'];
  temperature: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "planets" */
export type Planets_Aggregate = {
  __typename?: 'planets_aggregate';
  aggregate?: Maybe<Planets_Aggregate_Fields>;
  nodes: Array<Planets>;
};

/** aggregate fields of "planets" */
export type Planets_Aggregate_Fields = {
  __typename?: 'planets_aggregate_fields';
  avg?: Maybe<Planets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Planets_Max_Fields>;
  min?: Maybe<Planets_Min_Fields>;
  stddev?: Maybe<Planets_Stddev_Fields>;
  stddev_pop?: Maybe<Planets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Planets_Stddev_Samp_Fields>;
  sum?: Maybe<Planets_Sum_Fields>;
  var_pop?: Maybe<Planets_Var_Pop_Fields>;
  var_samp?: Maybe<Planets_Var_Samp_Fields>;
  variance?: Maybe<Planets_Variance_Fields>;
};


/** aggregate fields of "planets" */
export type Planets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Planets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Planets_Avg_Fields = {
  __typename?: 'planets_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  revolution?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "planets". All fields are combined with a logical 'AND'. */
export type Planets_Bool_Exp = {
  _and?: InputMaybe<Array<Planets_Bool_Exp>>;
  _not?: InputMaybe<Planets_Bool_Exp>;
  _or?: InputMaybe<Array<Planets_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  geology_content?: InputMaybe<String_Comparison_Exp>;
  geology_source?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  overview_content?: InputMaybe<String_Comparison_Exp>;
  overview_source?: InputMaybe<String_Comparison_Exp>;
  radius?: InputMaybe<Bigint_Comparison_Exp>;
  revolution?: InputMaybe<Bigint_Comparison_Exp>;
  rotation?: InputMaybe<Bigint_Comparison_Exp>;
  structure_content?: InputMaybe<String_Comparison_Exp>;
  structure_source?: InputMaybe<String_Comparison_Exp>;
  temperature?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "planets" */
export enum Planets_Constraint {
  /** unique or primary key constraint on columns "name" */
  PlanetsNameKey = 'planets_name_key',
  /** unique or primary key constraint on columns "id" */
  PlanetsPkey = 'planets_pkey'
}

/** input type for incrementing numeric columns in table "planets" */
export type Planets_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  radius?: InputMaybe<Scalars['bigint']['input']>;
  revolution?: InputMaybe<Scalars['bigint']['input']>;
  rotation?: InputMaybe<Scalars['bigint']['input']>;
  temperature?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "planets" */
export type Planets_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  geology_content?: InputMaybe<Scalars['String']['input']>;
  geology_source?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview_content?: InputMaybe<Scalars['String']['input']>;
  overview_source?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['bigint']['input']>;
  revolution?: InputMaybe<Scalars['bigint']['input']>;
  rotation?: InputMaybe<Scalars['bigint']['input']>;
  structure_content?: InputMaybe<Scalars['String']['input']>;
  structure_source?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Planets_Max_Fields = {
  __typename?: 'planets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  geology_content?: Maybe<Scalars['String']['output']>;
  geology_source?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview_content?: Maybe<Scalars['String']['output']>;
  overview_source?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['bigint']['output']>;
  revolution?: Maybe<Scalars['bigint']['output']>;
  rotation?: Maybe<Scalars['bigint']['output']>;
  structure_content?: Maybe<Scalars['String']['output']>;
  structure_source?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Planets_Min_Fields = {
  __typename?: 'planets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  geology_content?: Maybe<Scalars['String']['output']>;
  geology_source?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview_content?: Maybe<Scalars['String']['output']>;
  overview_source?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['bigint']['output']>;
  revolution?: Maybe<Scalars['bigint']['output']>;
  rotation?: Maybe<Scalars['bigint']['output']>;
  structure_content?: Maybe<Scalars['String']['output']>;
  structure_source?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "planets" */
export type Planets_Mutation_Response = {
  __typename?: 'planets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Planets>;
};

/** on_conflict condition type for table "planets" */
export type Planets_On_Conflict = {
  constraint: Planets_Constraint;
  update_columns?: Array<Planets_Update_Column>;
  where?: InputMaybe<Planets_Bool_Exp>;
};

/** Ordering options when selecting data from "planets". */
export type Planets_Order_By = {
  created_at?: InputMaybe<Order_By>;
  geology_content?: InputMaybe<Order_By>;
  geology_source?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  overview_content?: InputMaybe<Order_By>;
  overview_source?: InputMaybe<Order_By>;
  radius?: InputMaybe<Order_By>;
  revolution?: InputMaybe<Order_By>;
  rotation?: InputMaybe<Order_By>;
  structure_content?: InputMaybe<Order_By>;
  structure_source?: InputMaybe<Order_By>;
  temperature?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: planets */
export type Planets_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "planets" */
export enum Planets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GeologyContent = 'geology_content',
  /** column name */
  GeologySource = 'geology_source',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OverviewContent = 'overview_content',
  /** column name */
  OverviewSource = 'overview_source',
  /** column name */
  Radius = 'radius',
  /** column name */
  Revolution = 'revolution',
  /** column name */
  Rotation = 'rotation',
  /** column name */
  StructureContent = 'structure_content',
  /** column name */
  StructureSource = 'structure_source',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "planets" */
export type Planets_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  geology_content?: InputMaybe<Scalars['String']['input']>;
  geology_source?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview_content?: InputMaybe<Scalars['String']['input']>;
  overview_source?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['bigint']['input']>;
  revolution?: InputMaybe<Scalars['bigint']['input']>;
  rotation?: InputMaybe<Scalars['bigint']['input']>;
  structure_content?: InputMaybe<Scalars['String']['input']>;
  structure_source?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Planets_Stddev_Fields = {
  __typename?: 'planets_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  revolution?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Planets_Stddev_Pop_Fields = {
  __typename?: 'planets_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  revolution?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Planets_Stddev_Samp_Fields = {
  __typename?: 'planets_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  revolution?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "planets" */
export type Planets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Planets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Planets_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  geology_content?: InputMaybe<Scalars['String']['input']>;
  geology_source?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview_content?: InputMaybe<Scalars['String']['input']>;
  overview_source?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['bigint']['input']>;
  revolution?: InputMaybe<Scalars['bigint']['input']>;
  rotation?: InputMaybe<Scalars['bigint']['input']>;
  structure_content?: InputMaybe<Scalars['String']['input']>;
  structure_source?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Planets_Sum_Fields = {
  __typename?: 'planets_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  radius?: Maybe<Scalars['bigint']['output']>;
  revolution?: Maybe<Scalars['bigint']['output']>;
  rotation?: Maybe<Scalars['bigint']['output']>;
  temperature?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "planets" */
export enum Planets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GeologyContent = 'geology_content',
  /** column name */
  GeologySource = 'geology_source',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OverviewContent = 'overview_content',
  /** column name */
  OverviewSource = 'overview_source',
  /** column name */
  Radius = 'radius',
  /** column name */
  Revolution = 'revolution',
  /** column name */
  Rotation = 'rotation',
  /** column name */
  StructureContent = 'structure_content',
  /** column name */
  StructureSource = 'structure_source',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Planets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Planets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Planets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Planets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Planets_Var_Pop_Fields = {
  __typename?: 'planets_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  revolution?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Planets_Var_Samp_Fields = {
  __typename?: 'planets_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  revolution?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Planets_Variance_Fields = {
  __typename?: 'planets_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  revolution?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  company: Companies;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  manufacturer_id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manufacturer_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  company?: InputMaybe<Companies_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  manufacturer_id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  manufacturer_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  company?: InputMaybe<Companies_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  manufacturer_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  manufacturer_id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  manufacturer_id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  company?: InputMaybe<Companies_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ManufacturerId = 'manufacturer_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  manufacturer_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manufacturer_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manufacturer_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manufacturer_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  manufacturer_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  manufacturer_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ManufacturerId = 'manufacturer_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manufacturer_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manufacturer_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manufacturer_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  manufacturer_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "moons" */
  moons: Array<Moons>;
  /** fetch aggregated fields from the table: "moons" */
  moons_aggregate: Moons_Aggregate;
  /** fetch data from the table: "moons" using primary key columns */
  moons_by_pk?: Maybe<Moons>;
  /** fetch data from the table: "planets" */
  planets: Array<Planets>;
  /** fetch aggregated fields from the table: "planets" */
  planets_aggregate: Planets_Aggregate;
  /** fetch data from the table: "planets" using primary key columns */
  planets_by_pk?: Maybe<Planets>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
};


export type Query_RootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMoonsArgs = {
  distinct_on?: InputMaybe<Array<Moons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Moons_Order_By>>;
  where?: InputMaybe<Moons_Bool_Exp>;
};


export type Query_RootMoons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Moons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Moons_Order_By>>;
  where?: InputMaybe<Moons_Bool_Exp>;
};


export type Query_RootMoons_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPlanetsArgs = {
  distinct_on?: InputMaybe<Array<Planets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Planets_Order_By>>;
  where?: InputMaybe<Planets_Bool_Exp>;
};


export type Query_RootPlanets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Planets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Planets_Order_By>>;
  where?: InputMaybe<Planets_Bool_Exp>;
};


export type Query_RootPlanets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table in a streaming manner: "companies" */
  companies_stream: Array<Companies>;
  /** fetch data from the table: "moons" */
  moons: Array<Moons>;
  /** fetch aggregated fields from the table: "moons" */
  moons_aggregate: Moons_Aggregate;
  /** fetch data from the table: "moons" using primary key columns */
  moons_by_pk?: Maybe<Moons>;
  /** fetch data from the table in a streaming manner: "moons" */
  moons_stream: Array<Moons>;
  /** fetch data from the table: "planets" */
  planets: Array<Planets>;
  /** fetch aggregated fields from the table: "planets" */
  planets_aggregate: Planets_Aggregate;
  /** fetch data from the table: "planets" using primary key columns */
  planets_by_pk?: Maybe<Planets>;
  /** fetch data from the table in a streaming manner: "planets" */
  planets_stream: Array<Planets>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
};


export type Subscription_RootCompaniesArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Companies_Order_By>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCompanies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Companies_Bool_Exp>;
};


export type Subscription_RootMoonsArgs = {
  distinct_on?: InputMaybe<Array<Moons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Moons_Order_By>>;
  where?: InputMaybe<Moons_Bool_Exp>;
};


export type Subscription_RootMoons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Moons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Moons_Order_By>>;
  where?: InputMaybe<Moons_Bool_Exp>;
};


export type Subscription_RootMoons_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMoons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Moons_Stream_Cursor_Input>>;
  where?: InputMaybe<Moons_Bool_Exp>;
};


export type Subscription_RootPlanetsArgs = {
  distinct_on?: InputMaybe<Array<Planets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Planets_Order_By>>;
  where?: InputMaybe<Planets_Bool_Exp>;
};


export type Subscription_RootPlanets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Planets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Planets_Order_By>>;
  where?: InputMaybe<Planets_Bool_Exp>;
};


export type Subscription_RootPlanets_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPlanets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Planets_Stream_Cursor_Input>>;
  where?: InputMaybe<Planets_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type PlanetQueryVariables = Exact<{
  planetId: Scalars['Int']['input'];
}>;


export type PlanetQuery = { __typename?: 'query_root', planets_by_pk?: { __typename?: 'planets', id: number, name: string, radius: any, revolution: any, rotation: any, overview_content: string, overview_source: string, structure_content: string, structure_source: string, temperature: number, geology_source: string, geology_content: string } | null };

export type PlanetsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlanetsQuery = { __typename?: 'query_root', planets: Array<{ __typename?: 'planets', id: number, name: string, rotation: any, temperature: number }> };


export const PlanetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Planet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"planetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planets_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"planetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"radius"}},{"kind":"Field","name":{"kind":"Name","value":"revolution"}},{"kind":"Field","name":{"kind":"Name","value":"rotation"}},{"kind":"Field","name":{"kind":"Name","value":"overview_content"}},{"kind":"Field","name":{"kind":"Name","value":"overview_source"}},{"kind":"Field","name":{"kind":"Name","value":"structure_content"}},{"kind":"Field","name":{"kind":"Name","value":"structure_source"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"geology_source"}},{"kind":"Field","name":{"kind":"Name","value":"geology_content"}}]}}]}}]} as unknown as DocumentNode<PlanetQuery, PlanetQueryVariables>;
export const PlanetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Planets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rotation"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}}]}}]}}]} as unknown as DocumentNode<PlanetsQuery, PlanetsQueryVariables>;