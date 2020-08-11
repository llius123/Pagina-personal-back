import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError };
export { PrismaClientUnknownRequestError };
export { PrismaClientRustPanicError };
export { PrismaClientInitializationError };
export { PrismaClientValidationError };

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw };

/**
 * Prisma Client JS version: 2.3.0
 * Query Engine version: e11114fa1ea826f9e7b4fa1ced34e78892fe8e0e
 */
export declare type PrismaVersion = {
  client: string;
};

export declare const prismaVersion: PrismaVersion;

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
 */
export declare type JsonObject = { [Key in string]?: JsonValue };

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray;

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = { [Key in string]?: JsonValue };

export declare interface InputJsonArray extends Array<JsonValue> {}

export declare type InputJsonValue =
  | undefined
  | string
  | number
  | boolean
  | null
  | InputJsonObject
  | InputJsonArray;

declare type SelectAndInclude = {
  select: any;
  include: any;
};

declare type HasSelect = {
  select: any;
};

declare type HasInclude = {
  include: any;
};

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S;

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<
  T extends PromiseLike<any>
> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<
  T extends (...args: any) => Promise<any>
> = PromiseType<ReturnType<T>>;

export declare type Enumerable<T> = T | Array<T>;

export declare type TrueKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key;
}[keyof T];

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(
    prisma: PrismaClient<any, any>,
    debug?: boolean,
    hooks?: Hooks | undefined
  );
  request<T>(
    document: any,
    dataPath?: string[],
    rootField?: string,
    typeName?: string,
    isList?: boolean,
    callsite?: string
  ): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(
    document: any,
    data: any,
    path: string[],
    rootField?: string,
    isList?: boolean
  ): any;
}

/**
 * Client
 **/

export declare type Datasource = {
  url?: string;
};

export type Datasources = {
  sqlite?: Datasource;
};

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources;

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat;

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   *
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>;
}

export type Hooks = {
  beforeRequest?: (options: {
    query: string;
    path: string[];
    rootField?: string;
    typeName?: string;
    document: any;
  }) => any;
};

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
  level: LogLevel;
  emit: 'stdout' | 'event';
};

export type GetLogType<
  T extends LogLevel | LogDefinition
> = T extends LogDefinition
  ? T['emit'] extends 'event'
    ? T['level']
    : never
  : never;
export type GetEvents<T extends Array<LogLevel | LogDefinition>> =
  | GetLogType<T[0]>
  | GetLogType<T[1]>
  | GetLogType<T[2]>
  | GetLogType<T[3]>;

export type QueryEvent = {
  timestamp: Date;
  query: string;
  params: string;
  duration: number;
  target: string;
};

export type LogEvent = {
  timestamp: Date;
  message: string;
  target: string;
};
/* End Types for Logging */

export type Action =
  | 'findOne'
  | 'findMany'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate';

/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: string;
  action: Action;
  args: any;
  dataPath: string[];
  runInTransaction: boolean;
};

/**
 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
 */
export type Middleware<T = any> = (
  params: MiddlewareParams,
  next: (params: MiddlewareParams) => Promise<T>
) => Promise<T>;

// tested in getLogLevel.test.ts
export declare function getLogLevel(
  log: Array<LogLevel | LogDefinition>
): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more USERS
 * const USER = await prisma.USER.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = keyof T extends 'log'
    ? T['log'] extends Array<LogLevel | LogDefinition>
      ? GetEvents<T['log']>
      : never
    : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more USERS
   * const USER = await prisma.USER.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md).
   */
  constructor(optionsArg?: T);
  on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void
  ): void;
  /**
   * Connect with the database
   */
  connect(): Promise<void>;
  /**
   * @private
   */
  private runDisconnect;
  /**
   * Disconnect from the database
   */
  disconnect(): Promise<any>;

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
   * ```
   *
   * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
   */
  executeRaw<T = any>(
    query: string | TemplateStringsArray,
    ...values: any[]
  ): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
   * ```
   *
   * Read more in our [docs](https://github.com/prisma/prisma/blob/master/docs/prisma-client-js/api.md#raw-database-access).
   */
  queryRaw<T = any>(
    query: string | TemplateStringsArray,
    ...values: any[]
  ): Promise<T>;

  /**
   * `prisma.USER`: Exposes CRUD operations for the **USER** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more USERS
   * const USER = await prisma.USER.findMany()
   * ```
   */
  get USER(): USERDelegate;
}

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const OrderByArg: {
  asc: 'asc';
  desc: 'desc';
};

export declare type OrderByArg = typeof OrderByArg[keyof typeof OrderByArg];

/**
 * Model USER
 */

export type USER = {
  ID: number;
  USERNAME: string;
  PASSWORD: string;
};

export type USERSelect = {
  ID?: boolean;
  USERNAME?: boolean;
  PASSWORD?: boolean;
};

export type USERGetPayload<
  S extends boolean | null | undefined | USERArgs,
  U = keyof S
> = S extends true
  ? USER
  : S extends undefined
  ? never
  : S extends USERArgs | FindManyUSERArgs
  ? 'include' extends U
    ? USER
    : 'select' extends U
    ? {
        [P in TrueKeys<S['select']>]: P extends keyof USER ? USER[P] : never;
      }
    : USER
  : USER;

export interface USERDelegate {
  /**
   * Find zero or one USER.
   * @param {FindOneUSERArgs} args - Arguments to find a USER
   * @example
   * // Get one USER
   * const USER = await prisma.USER.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   **/
  findOne<T extends FindOneUSERArgs>(
    args: Subset<T, FindOneUSERArgs>
  ): CheckSelect<
    T,
    Prisma__USERClient<USER | null>,
    Prisma__USERClient<USERGetPayload<T> | null>
  >;
  /**
   * Find zero or more USERS.
   * @param {FindManyUSERArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all USERS
   * const USER = await prisma.USER.findMany()
   *
   * // Get first 10 USERS
   * const USER = await prisma.USER.findMany({ take: 10 })
   *
   * // Only select the `ID`
   * const USERWithIDOnly = await prisma.USER.findMany({ select: { ID: true } })
   *
   **/
  findMany<T extends FindManyUSERArgs>(
    args?: Subset<T, FindManyUSERArgs>
  ): CheckSelect<T, Promise<Array<USER>>, Promise<Array<USERGetPayload<T>>>>;
  /**
   * Create a USER.
   * @param {USERCreateArgs} args - Arguments to create a USER.
   * @example
   * // Create one USER
   * const USER = await prisma.USER.create({
   *   data: {
   *     // ... data to create a USER
   *   }
   * })
   *
   **/
  create<T extends USERCreateArgs>(
    args: Subset<T, USERCreateArgs>
  ): CheckSelect<
    T,
    Prisma__USERClient<USER>,
    Prisma__USERClient<USERGetPayload<T>>
  >;
  /**
   * Delete a USER.
   * @param {USERDeleteArgs} args - Arguments to delete one USER.
   * @example
   * // Delete one USER
   * const USER = await prisma.USER.delete({
   *   where: {
   *     // ... filter to delete one USER
   *   }
   * })
   *
   **/
  delete<T extends USERDeleteArgs>(
    args: Subset<T, USERDeleteArgs>
  ): CheckSelect<
    T,
    Prisma__USERClient<USER>,
    Prisma__USERClient<USERGetPayload<T>>
  >;
  /**
   * Update one USER.
   * @param {USERUpdateArgs} args - Arguments to update one USER.
   * @example
   * // Update one USER
   * const USER = await prisma.USER.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   *
   **/
  update<T extends USERUpdateArgs>(
    args: Subset<T, USERUpdateArgs>
  ): CheckSelect<
    T,
    Prisma__USERClient<USER>,
    Prisma__USERClient<USERGetPayload<T>>
  >;
  /**
   * Delete zero or more USERS.
   * @param {USERDeleteManyArgs} args - Arguments to filter USERS to delete.
   * @example
   * // Delete a few USERS
   * const { count } = await prisma.USER.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   *
   **/
  deleteMany<T extends USERDeleteManyArgs>(
    args: Subset<T, USERDeleteManyArgs>
  ): Promise<BatchPayload>;
  /**
   * Update zero or more USERS.
   * @param {USERUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many USERS
   * const USER = await prisma.USER.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   *
   **/
  updateMany<T extends USERUpdateManyArgs>(
    args: Subset<T, USERUpdateManyArgs>
  ): Promise<BatchPayload>;
  /**
   * Create or update one USER.
   * @param {USERUpsertArgs} args - Arguments to update or create a USER.
   * @example
   * // Update or create a USER
   * const USER = await prisma.USER.upsert({
   *   create: {
   *     // ... data to create a USER
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the USER we want to update
   *   }
   * })
   **/
  upsert<T extends USERUpsertArgs>(
    args: Subset<T, USERUpsertArgs>
  ): CheckSelect<
    T,
    Prisma__USERClient<USER>,
    Prisma__USERClient<USERGetPayload<T>>
  >;
  /**
   * Count
   */
  count(args?: Omit<FindManyUSERArgs, 'select' | 'include'>): Promise<number>;
}

/**
 * The delegate class that acts as a "Promise-like" for USER.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__USERClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(
    _dmmf: DMMFClass,
    _fetcher: PrismaClientFetcher,
    _queryType: 'query' | 'mutation',
    _rootField: string,
    _clientMethod: string,
    _args: any,
    _dataPath: string[],
    _errorFormat: ErrorFormat,
    _measurePerformance?: boolean | undefined,
    _isList?: boolean
  );
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | Promise<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | Promise<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | Promise<TResult>)
      | undefined
      | null
  ): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * USER findOne
 */
export type FindOneUSERArgs = {
  /**
   * Select specific fields to fetch from the USER
   **/
  select?: USERSelect | null;
  /**
   * Filter, which USER to fetch.
   **/
  where: USERWhereUniqueInput;
};

/**
 * USER findMany
 */
export type FindManyUSERArgs = {
  /**
   * Select specific fields to fetch from the USER
   **/
  select?: USERSelect | null;
  /**
   * Filter, which USERS to fetch.
   **/
  where?: USERWhereInput;
  /**
   * Determine the order of the USERS to fetch.
   **/
  orderBy?: USEROrderByInput;
  /**
   * Sets the position for listing USERS.
   **/
  cursor?: USERWhereUniqueInput;
  /**
   * The number of USERS to fetch. If negative number, it will take USERS before the `cursor`.
   **/
  take?: number;
  /**
   * Skip the first `n` USERS.
   **/
  skip?: number;
};

/**
 * USER create
 */
export type USERCreateArgs = {
  /**
   * Select specific fields to fetch from the USER
   **/
  select?: USERSelect | null;
  /**
   * The data needed to create a USER.
   **/
  data: USERCreateInput;
};

/**
 * USER update
 */
export type USERUpdateArgs = {
  /**
   * Select specific fields to fetch from the USER
   **/
  select?: USERSelect | null;
  /**
   * The data needed to update a USER.
   **/
  data: USERUpdateInput;
  /**
   * Choose, which USER to update.
   **/
  where: USERWhereUniqueInput;
};

/**
 * USER updateMany
 */
export type USERUpdateManyArgs = {
  data: USERUpdateManyMutationInput;
  where?: USERWhereInput;
};

/**
 * USER upsert
 */
export type USERUpsertArgs = {
  /**
   * Select specific fields to fetch from the USER
   **/
  select?: USERSelect | null;
  /**
   * The filter to search for the USER to update in case it exists.
   **/
  where: USERWhereUniqueInput;
  /**
   * In case the USER found by the `where` argument doesn't exist, create a new USER with this data.
   **/
  create: USERCreateInput;
  /**
   * In case the USER was found with the provided `where` argument, update it with this data.
   **/
  update: USERUpdateInput;
};

/**
 * USER delete
 */
export type USERDeleteArgs = {
  /**
   * Select specific fields to fetch from the USER
   **/
  select?: USERSelect | null;
  /**
   * Filter which USER to delete.
   **/
  where: USERWhereUniqueInput;
};

/**
 * USER deleteMany
 */
export type USERDeleteManyArgs = {
  where?: USERWhereInput;
};

/**
 * USER without action
 */
export type USERArgs = {
  /**
   * Select specific fields to fetch from the USER
   **/
  select?: USERSelect | null;
};

/**
 * Deep Input Types
 */

export type USERWhereInput = {
  ID?: number | IntFilter;
  USERNAME?: string | StringFilter;
  PASSWORD?: string | StringFilter;
  AND?: Enumerable<USERWhereInput>;
  OR?: Array<USERWhereInput>;
  NOT?: Enumerable<USERWhereInput>;
};

export type USERWhereUniqueInput = {
  ID?: number;
};

export type USERCreateInput = {
  USERNAME: string;
  PASSWORD: string;
};

export type USERUpdateInput = {
  USERNAME?: string;
  PASSWORD?: string;
};

export type USERUpdateManyMutationInput = {
  USERNAME?: string;
  PASSWORD?: string;
};

export type IntFilter = {
  equals?: number;
  not?: number | IntFilter;
  in?: Enumerable<number>;
  notIn?: Enumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
};

export type StringFilter = {
  equals?: string;
  not?: string | StringFilter;
  in?: Enumerable<string>;
  notIn?: Enumerable<string>;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
};

export type USEROrderByInput = {
  ID?: OrderByArg | null;
  USERNAME?: OrderByArg | null;
  PASSWORD?: OrderByArg | null;
};

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number;
};

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
