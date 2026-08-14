
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model OrganizationMember
 * 
 */
export type OrganizationMember = $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketComment
 * 
 */
export type TicketComment = $Result.DefaultSelection<Prisma.$TicketCommentPayload>
/**
 * Model TicketAttachment
 * 
 */
export type TicketAttachment = $Result.DefaultSelection<Prisma.$TicketAttachmentPayload>
/**
 * Model TicketHistory
 * 
 */
export type TicketHistory = $Result.DefaultSelection<Prisma.$TicketHistoryPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TicketStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]

}

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMember.findMany()
    * ```
    */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketComment`: Exposes CRUD operations for the **TicketComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketComments
    * const ticketComments = await prisma.ticketComment.findMany()
    * ```
    */
  get ticketComment(): Prisma.TicketCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketAttachment`: Exposes CRUD operations for the **TicketAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketAttachments
    * const ticketAttachments = await prisma.ticketAttachment.findMany()
    * ```
    */
  get ticketAttachment(): Prisma.TicketAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketHistory`: Exposes CRUD operations for the **TicketHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketHistories
    * const ticketHistories = await prisma.ticketHistory.findMany()
    * ```
    */
  get ticketHistory(): Prisma.TicketHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    OrganizationMember: 'OrganizationMember',
    Organization: 'Organization',
    Business: 'Business',
    Ticket: 'Ticket',
    TicketComment: 'TicketComment',
    TicketAttachment: 'TicketAttachment',
    TicketHistory: 'TicketHistory',
    AuditLog: 'AuditLog',
    Otp: 'Otp',
    Invitation: 'Invitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "organizationMember" | "organization" | "business" | "ticket" | "ticketComment" | "ticketAttachment" | "ticketHistory" | "auditLog" | "otp" | "invitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>
        fields: Prisma.OrganizationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMember>
          }
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketComment: {
        payload: Prisma.$TicketCommentPayload<ExtArgs>
        fields: Prisma.TicketCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>
          }
          findFirst: {
            args: Prisma.TicketCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>
          }
          findMany: {
            args: Prisma.TicketCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>[]
          }
          create: {
            args: Prisma.TicketCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>
          }
          createMany: {
            args: Prisma.TicketCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>[]
          }
          delete: {
            args: Prisma.TicketCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>
          }
          update: {
            args: Prisma.TicketCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>
          }
          deleteMany: {
            args: Prisma.TicketCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>[]
          }
          upsert: {
            args: Prisma.TicketCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCommentPayload>
          }
          aggregate: {
            args: Prisma.TicketCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketComment>
          }
          groupBy: {
            args: Prisma.TicketCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCommentCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCommentCountAggregateOutputType> | number
          }
        }
      }
      TicketAttachment: {
        payload: Prisma.$TicketAttachmentPayload<ExtArgs>
        fields: Prisma.TicketAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          findFirst: {
            args: Prisma.TicketAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          findMany: {
            args: Prisma.TicketAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>[]
          }
          create: {
            args: Prisma.TicketAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          createMany: {
            args: Prisma.TicketAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>[]
          }
          delete: {
            args: Prisma.TicketAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          update: {
            args: Prisma.TicketAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.TicketAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.TicketAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAttachmentPayload>
          }
          aggregate: {
            args: Prisma.TicketAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketAttachment>
          }
          groupBy: {
            args: Prisma.TicketAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<TicketAttachmentCountAggregateOutputType> | number
          }
        }
      }
      TicketHistory: {
        payload: Prisma.$TicketHistoryPayload<ExtArgs>
        fields: Prisma.TicketHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          findFirst: {
            args: Prisma.TicketHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          findMany: {
            args: Prisma.TicketHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>[]
          }
          create: {
            args: Prisma.TicketHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          createMany: {
            args: Prisma.TicketHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>[]
          }
          delete: {
            args: Prisma.TicketHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          update: {
            args: Prisma.TicketHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TicketHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          aggregate: {
            args: Prisma.TicketHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketHistory>
          }
          groupBy: {
            args: Prisma.TicketHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketHistoryCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    organizationMember?: OrganizationMemberOmit
    organization?: OrganizationOmit
    business?: BusinessOmit
    ticket?: TicketOmit
    ticketComment?: TicketCommentOmit
    ticketAttachment?: TicketAttachmentOmit
    ticketHistory?: TicketHistoryOmit
    auditLog?: AuditLogOmit
    otp?: OtpOmit
    invitation?: InvitationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedUsers: number
    ownedOrganizations: number
    ownedBusinesses: number
    memberships: number
    createdTickets: number
    assignedTickets: number
    ticketComments: number
    ticketAttachments: number
    ticketHistories: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedUsers?: boolean | UserCountOutputTypeCountOwnedUsersArgs
    ownedOrganizations?: boolean | UserCountOutputTypeCountOwnedOrganizationsArgs
    ownedBusinesses?: boolean | UserCountOutputTypeCountOwnedBusinessesArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    createdTickets?: boolean | UserCountOutputTypeCountCreatedTicketsArgs
    assignedTickets?: boolean | UserCountOutputTypeCountAssignedTicketsArgs
    ticketComments?: boolean | UserCountOutputTypeCountTicketCommentsArgs
    ticketAttachments?: boolean | UserCountOutputTypeCountTicketAttachmentsArgs
    ticketHistories?: boolean | UserCountOutputTypeCountTicketHistoriesArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedBusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAttachmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    memberships: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | RoleCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    memberships: number
    tickets: number
    auditLogs: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | OrganizationCountOutputTypeCountMembershipsArgs
    tickets?: boolean | OrganizationCountOutputTypeCountTicketsArgs
    auditLogs?: boolean | OrganizationCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    memberships: number
    tickets: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | BusinessCountOutputTypeCountMembershipsArgs
    tickets?: boolean | BusinessCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    comments: number
    attachments: number
    histories: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TicketCountOutputTypeCountCommentsArgs
    attachments?: boolean | TicketCountOutputTypeCountAttachmentsArgs
    histories?: boolean | TicketCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCommentWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAttachmentWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    emailVerified: boolean | null
    isOwner: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    emailVerified: boolean | null
    isOwner: boolean | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    emailVerified: number
    isOwner: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    emailVerified?: true
    isOwner?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    emailVerified?: true
    isOwner?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    emailVerified?: true
    isOwner?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified: boolean
    isOwner: boolean
    ownerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | User$ownerArgs<ExtArgs>
    ownedUsers?: boolean | User$ownedUsersArgs<ExtArgs>
    ownedOrganizations?: boolean | User$ownedOrganizationsArgs<ExtArgs>
    ownedBusinesses?: boolean | User$ownedBusinessesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    createdTickets?: boolean | User$createdTicketsArgs<ExtArgs>
    assignedTickets?: boolean | User$assignedTicketsArgs<ExtArgs>
    ticketComments?: boolean | User$ticketCommentsArgs<ExtArgs>
    ticketAttachments?: boolean | User$ticketAttachmentsArgs<ExtArgs>
    ticketHistories?: boolean | User$ticketHistoriesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | User$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | User$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "emailVerified" | "isOwner" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | User$ownerArgs<ExtArgs>
    ownedUsers?: boolean | User$ownedUsersArgs<ExtArgs>
    ownedOrganizations?: boolean | User$ownedOrganizationsArgs<ExtArgs>
    ownedBusinesses?: boolean | User$ownedBusinessesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    createdTickets?: boolean | User$createdTicketsArgs<ExtArgs>
    assignedTickets?: boolean | User$assignedTicketsArgs<ExtArgs>
    ticketComments?: boolean | User$ticketCommentsArgs<ExtArgs>
    ticketAttachments?: boolean | User$ticketAttachmentsArgs<ExtArgs>
    ticketHistories?: boolean | User$ticketHistoriesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | User$ownerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | User$ownerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      ownedUsers: Prisma.$UserPayload<ExtArgs>[]
      ownedOrganizations: Prisma.$OrganizationPayload<ExtArgs>[]
      ownedBusinesses: Prisma.$BusinessPayload<ExtArgs>[]
      memberships: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      createdTickets: Prisma.$TicketPayload<ExtArgs>[]
      assignedTickets: Prisma.$TicketPayload<ExtArgs>[]
      ticketComments: Prisma.$TicketCommentPayload<ExtArgs>[]
      ticketAttachments: Prisma.$TicketAttachmentPayload<ExtArgs>[]
      ticketHistories: Prisma.$TicketHistoryPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      emailVerified: boolean
      isOwner: boolean
      ownerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends User$ownerArgs<ExtArgs> = {}>(args?: Subset<T, User$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ownedUsers<T extends User$ownedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedOrganizations<T extends User$ownedOrganizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedOrganizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedBusinesses<T extends User$ownedBusinessesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedBusinessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTickets<T extends User$createdTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTickets<T extends User$assignedTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketComments<T extends User$ticketCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketAttachments<T extends User$ticketAttachmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketAttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketHistories<T extends User$ticketHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly isOwner: FieldRef<"User", 'Boolean'>
    readonly ownerId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.owner
   */
  export type User$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.ownedUsers
   */
  export type User$ownedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.ownedOrganizations
   */
  export type User$ownedOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * User.ownedBusinesses
   */
  export type User$ownedBusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    cursor?: BusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * User.createdTickets
   */
  export type User$createdTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.assignedTickets
   */
  export type User$assignedTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.ticketComments
   */
  export type User$ticketCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    where?: TicketCommentWhereInput
    orderBy?: TicketCommentOrderByWithRelationInput | TicketCommentOrderByWithRelationInput[]
    cursor?: TicketCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCommentScalarFieldEnum | TicketCommentScalarFieldEnum[]
  }

  /**
   * User.ticketAttachments
   */
  export type User$ticketAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    where?: TicketAttachmentWhereInput
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    cursor?: TicketAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * User.ticketHistories
   */
  export type User$ticketHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    where?: TicketHistoryWhereInput
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    cursor?: TicketHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | Role$membershipsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Role$membershipsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      memberships: Prisma.$OrganizationMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends Role$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Role$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.memberships
   */
  export type Role$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  export type OrganizationMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    roleId: string | null
    businessId: string | null
    isActive: boolean | null
    deletedAt: Date | null
  }

  export type OrganizationMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    roleId: string | null
    businessId: string | null
    isActive: boolean | null
    deletedAt: Date | null
  }

  export type OrganizationMemberCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    roleId: number
    businessId: number
    isActive: number
    deletedAt: number
    _all: number
  }


  export type OrganizationMemberMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    roleId?: true
    businessId?: true
    isActive?: true
    deletedAt?: true
  }

  export type OrganizationMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    roleId?: true
    businessId?: true
    isActive?: true
    deletedAt?: true
  }

  export type OrganizationMemberCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    roleId?: true
    businessId?: true
    isActive?: true
    deletedAt?: true
    _all?: true
  }

  export type OrganizationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type GetOrganizationMemberAggregateType<T extends OrganizationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>
  }




  export type OrganizationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithAggregationInput | OrganizationMemberOrderByWithAggregationInput[]
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum
    having?: OrganizationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMemberCountAggregateInputType | true
    _min?: OrganizationMemberMinAggregateInputType
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type OrganizationMemberGroupByOutputType = {
    id: string
    userId: string
    organizationId: string
    roleId: string
    businessId: string | null
    isActive: boolean
    deletedAt: Date | null
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  type GetOrganizationMemberGroupByPayload<T extends OrganizationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    isActive?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    business?: boolean | OrganizationMember$businessArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    isActive?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    business?: boolean | OrganizationMember$businessArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    isActive?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    business?: boolean | OrganizationMember$businessArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    isActive?: boolean
    deletedAt?: boolean
  }

  export type OrganizationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "roleId" | "businessId" | "isActive" | "deletedAt", ExtArgs["result"]["organizationMember"]>
  export type OrganizationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    business?: boolean | OrganizationMember$businessArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    business?: boolean | OrganizationMember$businessArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    business?: boolean | OrganizationMember$businessArgs<ExtArgs>
  }

  export type $OrganizationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
      business: Prisma.$BusinessPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string
      roleId: string
      businessId: string | null
      isActive: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["organizationMember"]>
    composites: {}
  }

  type OrganizationMemberGetPayload<S extends boolean | null | undefined | OrganizationMemberDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>

  type OrganizationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMemberCountAggregateInputType | true
    }

  export interface OrganizationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'], meta: { name: 'OrganizationMember' } }
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMemberFindManyArgs>(args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     * 
     */
    create<T extends OrganizationMemberCreateArgs>(args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMemberDeleteArgs>(args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMemberUpdateArgs>(args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers and returns the data updated in the database.
     * @param {OrganizationMemberUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMembers.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMemberAggregateArgs>(args: Subset<T, OrganizationMemberAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMember model
   */
  readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    business<T extends OrganizationMember$businessArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationMember$businessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMember model
   */
  interface OrganizationMemberFieldRefs {
    readonly id: FieldRef<"OrganizationMember", 'String'>
    readonly userId: FieldRef<"OrganizationMember", 'String'>
    readonly organizationId: FieldRef<"OrganizationMember", 'String'>
    readonly roleId: FieldRef<"OrganizationMember", 'String'>
    readonly businessId: FieldRef<"OrganizationMember", 'String'>
    readonly isActive: FieldRef<"OrganizationMember", 'Boolean'>
    readonly deletedAt: FieldRef<"OrganizationMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
  }

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
  }

  /**
   * OrganizationMember updateManyAndReturn
   */
  export type OrganizationMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
  }

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMember.business
   */
  export type OrganizationMember$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    tickets?: boolean | Organization$ticketsArgs<ExtArgs>
    auditLogs?: boolean | Organization$auditLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    tickets?: boolean | Organization$ticketsArgs<ExtArgs>
    auditLogs?: boolean | Organization$auditLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      memberships: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberships<T extends Organization$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Organization$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Organization$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly ownerId: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly deletedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.memberships
   */
  export type Organization$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Organization.tickets
   */
  export type Organization$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Organization.auditLogs
   */
  export type Organization$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    name: string | null
    industry: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    name: string | null
    industry: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    industry: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    industry?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    name: string
    industry: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Business$membershipsArgs<ExtArgs>
    tickets?: boolean | Business$ticketsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    industry?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    industry?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "industry" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Business$membershipsArgs<ExtArgs>
    tickets?: boolean | Business$ticketsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      memberships: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      industry: string | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberships<T extends Business$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Business$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Business$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Business$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly industry: FieldRef<"Business", 'String'>
    readonly ownerId: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.memberships
   */
  export type Business$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Business.tickets
   */
  export type Business$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    priority: $Enums.TicketPriority | null
    createdById: string | null
    assignedToId: string | null
    organizationId: string | null
    businessId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    priority: $Enums.TicketPriority | null
    createdById: string | null
    assignedToId: string | null
    organizationId: string | null
    businessId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    createdById: number
    assignedToId: number
    organizationId: number
    businessId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdById?: true
    assignedToId?: true
    organizationId?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdById?: true
    assignedToId?: true
    organizationId?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    createdById?: true
    assignedToId?: true
    organizationId?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    createdById: string
    assignedToId: string | null
    organizationId: string
    businessId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdById?: boolean
    assignedToId?: boolean
    organizationId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    business?: boolean | Ticket$businessArgs<ExtArgs>
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    attachments?: boolean | Ticket$attachmentsArgs<ExtArgs>
    histories?: boolean | Ticket$historiesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdById?: boolean
    assignedToId?: boolean
    organizationId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    business?: boolean | Ticket$businessArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdById?: boolean
    assignedToId?: boolean
    organizationId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    business?: boolean | Ticket$businessArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdById?: boolean
    assignedToId?: boolean
    organizationId?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "createdById" | "assignedToId" | "organizationId" | "businessId" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    business?: boolean | Ticket$businessArgs<ExtArgs>
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    attachments?: boolean | Ticket$attachmentsArgs<ExtArgs>
    histories?: boolean | Ticket$historiesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    business?: boolean | Ticket$businessArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    business?: boolean | Ticket$businessArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      organization: Prisma.$OrganizationPayload<ExtArgs>
      business: Prisma.$BusinessPayload<ExtArgs> | null
      comments: Prisma.$TicketCommentPayload<ExtArgs>[]
      attachments: Prisma.$TicketAttachmentPayload<ExtArgs>[]
      histories: Prisma.$TicketHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.TicketStatus
      priority: $Enums.TicketPriority
      createdById: string
      assignedToId: string | null
      organizationId: string
      businessId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Ticket$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    business<T extends Ticket$businessArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$businessArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Ticket$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Ticket$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    histories<T extends Ticket$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly priority: FieldRef<"Ticket", 'TicketPriority'>
    readonly createdById: FieldRef<"Ticket", 'String'>
    readonly assignedToId: FieldRef<"Ticket", 'String'>
    readonly organizationId: FieldRef<"Ticket", 'String'>
    readonly businessId: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.assignedTo
   */
  export type Ticket$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket.business
   */
  export type Ticket$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
  }

  /**
   * Ticket.comments
   */
  export type Ticket$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    where?: TicketCommentWhereInput
    orderBy?: TicketCommentOrderByWithRelationInput | TicketCommentOrderByWithRelationInput[]
    cursor?: TicketCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCommentScalarFieldEnum | TicketCommentScalarFieldEnum[]
  }

  /**
   * Ticket.attachments
   */
  export type Ticket$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    where?: TicketAttachmentWhereInput
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    cursor?: TicketAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * Ticket.histories
   */
  export type Ticket$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    where?: TicketHistoryWhereInput
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    cursor?: TicketHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketComment
   */

  export type AggregateTicketComment = {
    _count: TicketCommentCountAggregateOutputType | null
    _min: TicketCommentMinAggregateOutputType | null
    _max: TicketCommentMaxAggregateOutputType | null
  }

  export type TicketCommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    isInternal: boolean | null
    ticketId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    isInternal: boolean | null
    ticketId: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCommentCountAggregateOutputType = {
    id: number
    content: number
    isInternal: number
    ticketId: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketCommentMinAggregateInputType = {
    id?: true
    content?: true
    isInternal?: true
    ticketId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCommentMaxAggregateInputType = {
    id?: true
    content?: true
    isInternal?: true
    ticketId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCommentCountAggregateInputType = {
    id?: true
    content?: true
    isInternal?: true
    ticketId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketComment to aggregate.
     */
    where?: TicketCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketComments to fetch.
     */
    orderBy?: TicketCommentOrderByWithRelationInput | TicketCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketComments
    **/
    _count?: true | TicketCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketCommentMaxAggregateInputType
  }

  export type GetTicketCommentAggregateType<T extends TicketCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketComment[P]>
      : GetScalarType<T[P], AggregateTicketComment[P]>
  }




  export type TicketCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCommentWhereInput
    orderBy?: TicketCommentOrderByWithAggregationInput | TicketCommentOrderByWithAggregationInput[]
    by: TicketCommentScalarFieldEnum[] | TicketCommentScalarFieldEnum
    having?: TicketCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCommentCountAggregateInputType | true
    _min?: TicketCommentMinAggregateInputType
    _max?: TicketCommentMaxAggregateInputType
  }

  export type TicketCommentGroupByOutputType = {
    id: string
    content: string
    isInternal: boolean
    ticketId: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    _count: TicketCommentCountAggregateOutputType | null
    _min: TicketCommentMinAggregateOutputType | null
    _max: TicketCommentMaxAggregateOutputType | null
  }

  type GetTicketCommentGroupByPayload<T extends TicketCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketCommentGroupByOutputType[P]>
            : GetScalarType<T[P], TicketCommentGroupByOutputType[P]>
        }
      >
    >


  export type TicketCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isInternal?: boolean
    ticketId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketComment"]>

  export type TicketCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isInternal?: boolean
    ticketId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketComment"]>

  export type TicketCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isInternal?: boolean
    ticketId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketComment"]>

  export type TicketCommentSelectScalar = {
    id?: boolean
    content?: boolean
    isInternal?: boolean
    ticketId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "isInternal" | "ticketId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketComment"]>
  export type TicketCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketComment"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      isInternal: boolean
      ticketId: string
      authorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketComment"]>
    composites: {}
  }

  type TicketCommentGetPayload<S extends boolean | null | undefined | TicketCommentDefaultArgs> = $Result.GetResult<Prisma.$TicketCommentPayload, S>

  type TicketCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCommentCountAggregateInputType | true
    }

  export interface TicketCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketComment'], meta: { name: 'TicketComment' } }
    /**
     * Find zero or one TicketComment that matches the filter.
     * @param {TicketCommentFindUniqueArgs} args - Arguments to find a TicketComment
     * @example
     * // Get one TicketComment
     * const ticketComment = await prisma.ticketComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketCommentFindUniqueArgs>(args: SelectSubset<T, TicketCommentFindUniqueArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketCommentFindUniqueOrThrowArgs} args - Arguments to find a TicketComment
     * @example
     * // Get one TicketComment
     * const ticketComment = await prisma.ticketComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCommentFindFirstArgs} args - Arguments to find a TicketComment
     * @example
     * // Get one TicketComment
     * const ticketComment = await prisma.ticketComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketCommentFindFirstArgs>(args?: SelectSubset<T, TicketCommentFindFirstArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCommentFindFirstOrThrowArgs} args - Arguments to find a TicketComment
     * @example
     * // Get one TicketComment
     * const ticketComment = await prisma.ticketComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketComments
     * const ticketComments = await prisma.ticketComment.findMany()
     * 
     * // Get first 10 TicketComments
     * const ticketComments = await prisma.ticketComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketCommentWithIdOnly = await prisma.ticketComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketCommentFindManyArgs>(args?: SelectSubset<T, TicketCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketComment.
     * @param {TicketCommentCreateArgs} args - Arguments to create a TicketComment.
     * @example
     * // Create one TicketComment
     * const TicketComment = await prisma.ticketComment.create({
     *   data: {
     *     // ... data to create a TicketComment
     *   }
     * })
     * 
     */
    create<T extends TicketCommentCreateArgs>(args: SelectSubset<T, TicketCommentCreateArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketComments.
     * @param {TicketCommentCreateManyArgs} args - Arguments to create many TicketComments.
     * @example
     * // Create many TicketComments
     * const ticketComment = await prisma.ticketComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCommentCreateManyArgs>(args?: SelectSubset<T, TicketCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketComments and returns the data saved in the database.
     * @param {TicketCommentCreateManyAndReturnArgs} args - Arguments to create many TicketComments.
     * @example
     * // Create many TicketComments
     * const ticketComment = await prisma.ticketComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketComments and only return the `id`
     * const ticketCommentWithIdOnly = await prisma.ticketComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketComment.
     * @param {TicketCommentDeleteArgs} args - Arguments to delete one TicketComment.
     * @example
     * // Delete one TicketComment
     * const TicketComment = await prisma.ticketComment.delete({
     *   where: {
     *     // ... filter to delete one TicketComment
     *   }
     * })
     * 
     */
    delete<T extends TicketCommentDeleteArgs>(args: SelectSubset<T, TicketCommentDeleteArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketComment.
     * @param {TicketCommentUpdateArgs} args - Arguments to update one TicketComment.
     * @example
     * // Update one TicketComment
     * const ticketComment = await prisma.ticketComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketCommentUpdateArgs>(args: SelectSubset<T, TicketCommentUpdateArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketComments.
     * @param {TicketCommentDeleteManyArgs} args - Arguments to filter TicketComments to delete.
     * @example
     * // Delete a few TicketComments
     * const { count } = await prisma.ticketComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketCommentDeleteManyArgs>(args?: SelectSubset<T, TicketCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketComments
     * const ticketComment = await prisma.ticketComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketCommentUpdateManyArgs>(args: SelectSubset<T, TicketCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketComments and returns the data updated in the database.
     * @param {TicketCommentUpdateManyAndReturnArgs} args - Arguments to update many TicketComments.
     * @example
     * // Update many TicketComments
     * const ticketComment = await prisma.ticketComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketComments and only return the `id`
     * const ticketCommentWithIdOnly = await prisma.ticketComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketComment.
     * @param {TicketCommentUpsertArgs} args - Arguments to update or create a TicketComment.
     * @example
     * // Update or create a TicketComment
     * const ticketComment = await prisma.ticketComment.upsert({
     *   create: {
     *     // ... data to create a TicketComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketComment we want to update
     *   }
     * })
     */
    upsert<T extends TicketCommentUpsertArgs>(args: SelectSubset<T, TicketCommentUpsertArgs<ExtArgs>>): Prisma__TicketCommentClient<$Result.GetResult<Prisma.$TicketCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCommentCountArgs} args - Arguments to filter TicketComments to count.
     * @example
     * // Count the number of TicketComments
     * const count = await prisma.ticketComment.count({
     *   where: {
     *     // ... the filter for the TicketComments we want to count
     *   }
     * })
    **/
    count<T extends TicketCommentCountArgs>(
      args?: Subset<T, TicketCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketCommentAggregateArgs>(args: Subset<T, TicketCommentAggregateArgs>): Prisma.PrismaPromise<GetTicketCommentAggregateType<T>>

    /**
     * Group by TicketComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketCommentGroupByArgs['orderBy'] }
        : { orderBy?: TicketCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketComment model
   */
  readonly fields: TicketCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketComment model
   */
  interface TicketCommentFieldRefs {
    readonly id: FieldRef<"TicketComment", 'String'>
    readonly content: FieldRef<"TicketComment", 'String'>
    readonly isInternal: FieldRef<"TicketComment", 'Boolean'>
    readonly ticketId: FieldRef<"TicketComment", 'String'>
    readonly authorId: FieldRef<"TicketComment", 'String'>
    readonly createdAt: FieldRef<"TicketComment", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketComment findUnique
   */
  export type TicketCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * Filter, which TicketComment to fetch.
     */
    where: TicketCommentWhereUniqueInput
  }

  /**
   * TicketComment findUniqueOrThrow
   */
  export type TicketCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * Filter, which TicketComment to fetch.
     */
    where: TicketCommentWhereUniqueInput
  }

  /**
   * TicketComment findFirst
   */
  export type TicketCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * Filter, which TicketComment to fetch.
     */
    where?: TicketCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketComments to fetch.
     */
    orderBy?: TicketCommentOrderByWithRelationInput | TicketCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketComments.
     */
    cursor?: TicketCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketComments.
     */
    distinct?: TicketCommentScalarFieldEnum | TicketCommentScalarFieldEnum[]
  }

  /**
   * TicketComment findFirstOrThrow
   */
  export type TicketCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * Filter, which TicketComment to fetch.
     */
    where?: TicketCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketComments to fetch.
     */
    orderBy?: TicketCommentOrderByWithRelationInput | TicketCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketComments.
     */
    cursor?: TicketCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketComments.
     */
    distinct?: TicketCommentScalarFieldEnum | TicketCommentScalarFieldEnum[]
  }

  /**
   * TicketComment findMany
   */
  export type TicketCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * Filter, which TicketComments to fetch.
     */
    where?: TicketCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketComments to fetch.
     */
    orderBy?: TicketCommentOrderByWithRelationInput | TicketCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketComments.
     */
    cursor?: TicketCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketComments.
     */
    distinct?: TicketCommentScalarFieldEnum | TicketCommentScalarFieldEnum[]
  }

  /**
   * TicketComment create
   */
  export type TicketCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketComment.
     */
    data: XOR<TicketCommentCreateInput, TicketCommentUncheckedCreateInput>
  }

  /**
   * TicketComment createMany
   */
  export type TicketCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketComments.
     */
    data: TicketCommentCreateManyInput | TicketCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketComment createManyAndReturn
   */
  export type TicketCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * The data used to create many TicketComments.
     */
    data: TicketCommentCreateManyInput | TicketCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketComment update
   */
  export type TicketCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketComment.
     */
    data: XOR<TicketCommentUpdateInput, TicketCommentUncheckedUpdateInput>
    /**
     * Choose, which TicketComment to update.
     */
    where: TicketCommentWhereUniqueInput
  }

  /**
   * TicketComment updateMany
   */
  export type TicketCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketComments.
     */
    data: XOR<TicketCommentUpdateManyMutationInput, TicketCommentUncheckedUpdateManyInput>
    /**
     * Filter which TicketComments to update
     */
    where?: TicketCommentWhereInput
    /**
     * Limit how many TicketComments to update.
     */
    limit?: number
  }

  /**
   * TicketComment updateManyAndReturn
   */
  export type TicketCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * The data used to update TicketComments.
     */
    data: XOR<TicketCommentUpdateManyMutationInput, TicketCommentUncheckedUpdateManyInput>
    /**
     * Filter which TicketComments to update
     */
    where?: TicketCommentWhereInput
    /**
     * Limit how many TicketComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketComment upsert
   */
  export type TicketCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketComment to update in case it exists.
     */
    where: TicketCommentWhereUniqueInput
    /**
     * In case the TicketComment found by the `where` argument doesn't exist, create a new TicketComment with this data.
     */
    create: XOR<TicketCommentCreateInput, TicketCommentUncheckedCreateInput>
    /**
     * In case the TicketComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketCommentUpdateInput, TicketCommentUncheckedUpdateInput>
  }

  /**
   * TicketComment delete
   */
  export type TicketCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
    /**
     * Filter which TicketComment to delete.
     */
    where: TicketCommentWhereUniqueInput
  }

  /**
   * TicketComment deleteMany
   */
  export type TicketCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketComments to delete
     */
    where?: TicketCommentWhereInput
    /**
     * Limit how many TicketComments to delete.
     */
    limit?: number
  }

  /**
   * TicketComment without action
   */
  export type TicketCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketComment
     */
    select?: TicketCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketComment
     */
    omit?: TicketCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCommentInclude<ExtArgs> | null
  }


  /**
   * Model TicketAttachment
   */

  export type AggregateTicketAttachment = {
    _count: TicketAttachmentCountAggregateOutputType | null
    _min: TicketAttachmentMinAggregateOutputType | null
    _max: TicketAttachmentMaxAggregateOutputType | null
  }

  export type TicketAttachmentMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    ticketId: string | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type TicketAttachmentMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    ticketId: string | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type TicketAttachmentCountAggregateOutputType = {
    id: number
    fileName: number
    fileUrl: number
    fileType: number
    ticketId: number
    uploadedById: number
    createdAt: number
    _all: number
  }


  export type TicketAttachmentMinAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    ticketId?: true
    uploadedById?: true
    createdAt?: true
  }

  export type TicketAttachmentMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    ticketId?: true
    uploadedById?: true
    createdAt?: true
  }

  export type TicketAttachmentCountAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    ticketId?: true
    uploadedById?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAttachment to aggregate.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketAttachments
    **/
    _count?: true | TicketAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketAttachmentMaxAggregateInputType
  }

  export type GetTicketAttachmentAggregateType<T extends TicketAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketAttachment[P]>
      : GetScalarType<T[P], AggregateTicketAttachment[P]>
  }




  export type TicketAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAttachmentWhereInput
    orderBy?: TicketAttachmentOrderByWithAggregationInput | TicketAttachmentOrderByWithAggregationInput[]
    by: TicketAttachmentScalarFieldEnum[] | TicketAttachmentScalarFieldEnum
    having?: TicketAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketAttachmentCountAggregateInputType | true
    _min?: TicketAttachmentMinAggregateInputType
    _max?: TicketAttachmentMaxAggregateInputType
  }

  export type TicketAttachmentGroupByOutputType = {
    id: string
    fileName: string
    fileUrl: string
    fileType: string | null
    ticketId: string
    uploadedById: string
    createdAt: Date
    _count: TicketAttachmentCountAggregateOutputType | null
    _min: TicketAttachmentMinAggregateOutputType | null
    _max: TicketAttachmentMaxAggregateOutputType | null
  }

  type GetTicketAttachmentGroupByPayload<T extends TicketAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], TicketAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type TicketAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    ticketId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAttachment"]>

  export type TicketAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    ticketId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAttachment"]>

  export type TicketAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    ticketId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAttachment"]>

  export type TicketAttachmentSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    ticketId?: boolean
    uploadedById?: boolean
    createdAt?: boolean
  }

  export type TicketAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileUrl" | "fileType" | "ticketId" | "uploadedById" | "createdAt", ExtArgs["result"]["ticketAttachment"]>
  export type TicketAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketAttachment"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileUrl: string
      fileType: string | null
      ticketId: string
      uploadedById: string
      createdAt: Date
    }, ExtArgs["result"]["ticketAttachment"]>
    composites: {}
  }

  type TicketAttachmentGetPayload<S extends boolean | null | undefined | TicketAttachmentDefaultArgs> = $Result.GetResult<Prisma.$TicketAttachmentPayload, S>

  type TicketAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketAttachmentCountAggregateInputType | true
    }

  export interface TicketAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketAttachment'], meta: { name: 'TicketAttachment' } }
    /**
     * Find zero or one TicketAttachment that matches the filter.
     * @param {TicketAttachmentFindUniqueArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketAttachmentFindUniqueArgs>(args: SelectSubset<T, TicketAttachmentFindUniqueArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketAttachmentFindUniqueOrThrowArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentFindFirstArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketAttachmentFindFirstArgs>(args?: SelectSubset<T, TicketAttachmentFindFirstArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentFindFirstOrThrowArgs} args - Arguments to find a TicketAttachment
     * @example
     * // Get one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketAttachments
     * const ticketAttachments = await prisma.ticketAttachment.findMany()
     * 
     * // Get first 10 TicketAttachments
     * const ticketAttachments = await prisma.ticketAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketAttachmentWithIdOnly = await prisma.ticketAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketAttachmentFindManyArgs>(args?: SelectSubset<T, TicketAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketAttachment.
     * @param {TicketAttachmentCreateArgs} args - Arguments to create a TicketAttachment.
     * @example
     * // Create one TicketAttachment
     * const TicketAttachment = await prisma.ticketAttachment.create({
     *   data: {
     *     // ... data to create a TicketAttachment
     *   }
     * })
     * 
     */
    create<T extends TicketAttachmentCreateArgs>(args: SelectSubset<T, TicketAttachmentCreateArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketAttachments.
     * @param {TicketAttachmentCreateManyArgs} args - Arguments to create many TicketAttachments.
     * @example
     * // Create many TicketAttachments
     * const ticketAttachment = await prisma.ticketAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketAttachmentCreateManyArgs>(args?: SelectSubset<T, TicketAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketAttachments and returns the data saved in the database.
     * @param {TicketAttachmentCreateManyAndReturnArgs} args - Arguments to create many TicketAttachments.
     * @example
     * // Create many TicketAttachments
     * const ticketAttachment = await prisma.ticketAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketAttachments and only return the `id`
     * const ticketAttachmentWithIdOnly = await prisma.ticketAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketAttachment.
     * @param {TicketAttachmentDeleteArgs} args - Arguments to delete one TicketAttachment.
     * @example
     * // Delete one TicketAttachment
     * const TicketAttachment = await prisma.ticketAttachment.delete({
     *   where: {
     *     // ... filter to delete one TicketAttachment
     *   }
     * })
     * 
     */
    delete<T extends TicketAttachmentDeleteArgs>(args: SelectSubset<T, TicketAttachmentDeleteArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketAttachment.
     * @param {TicketAttachmentUpdateArgs} args - Arguments to update one TicketAttachment.
     * @example
     * // Update one TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketAttachmentUpdateArgs>(args: SelectSubset<T, TicketAttachmentUpdateArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketAttachments.
     * @param {TicketAttachmentDeleteManyArgs} args - Arguments to filter TicketAttachments to delete.
     * @example
     * // Delete a few TicketAttachments
     * const { count } = await prisma.ticketAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketAttachmentDeleteManyArgs>(args?: SelectSubset<T, TicketAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketAttachments
     * const ticketAttachment = await prisma.ticketAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketAttachmentUpdateManyArgs>(args: SelectSubset<T, TicketAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAttachments and returns the data updated in the database.
     * @param {TicketAttachmentUpdateManyAndReturnArgs} args - Arguments to update many TicketAttachments.
     * @example
     * // Update many TicketAttachments
     * const ticketAttachment = await prisma.ticketAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketAttachments and only return the `id`
     * const ticketAttachmentWithIdOnly = await prisma.ticketAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketAttachment.
     * @param {TicketAttachmentUpsertArgs} args - Arguments to update or create a TicketAttachment.
     * @example
     * // Update or create a TicketAttachment
     * const ticketAttachment = await prisma.ticketAttachment.upsert({
     *   create: {
     *     // ... data to create a TicketAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketAttachment we want to update
     *   }
     * })
     */
    upsert<T extends TicketAttachmentUpsertArgs>(args: SelectSubset<T, TicketAttachmentUpsertArgs<ExtArgs>>): Prisma__TicketAttachmentClient<$Result.GetResult<Prisma.$TicketAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentCountArgs} args - Arguments to filter TicketAttachments to count.
     * @example
     * // Count the number of TicketAttachments
     * const count = await prisma.ticketAttachment.count({
     *   where: {
     *     // ... the filter for the TicketAttachments we want to count
     *   }
     * })
    **/
    count<T extends TicketAttachmentCountArgs>(
      args?: Subset<T, TicketAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAttachmentAggregateArgs>(args: Subset<T, TicketAttachmentAggregateArgs>): Prisma.PrismaPromise<GetTicketAttachmentAggregateType<T>>

    /**
     * Group by TicketAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: TicketAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketAttachment model
   */
  readonly fields: TicketAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketAttachment model
   */
  interface TicketAttachmentFieldRefs {
    readonly id: FieldRef<"TicketAttachment", 'String'>
    readonly fileName: FieldRef<"TicketAttachment", 'String'>
    readonly fileUrl: FieldRef<"TicketAttachment", 'String'>
    readonly fileType: FieldRef<"TicketAttachment", 'String'>
    readonly ticketId: FieldRef<"TicketAttachment", 'String'>
    readonly uploadedById: FieldRef<"TicketAttachment", 'String'>
    readonly createdAt: FieldRef<"TicketAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketAttachment findUnique
   */
  export type TicketAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment findUniqueOrThrow
   */
  export type TicketAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment findFirst
   */
  export type TicketAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAttachments.
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAttachments.
     */
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * TicketAttachment findFirstOrThrow
   */
  export type TicketAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachment to fetch.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAttachments.
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAttachments.
     */
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * TicketAttachment findMany
   */
  export type TicketAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TicketAttachments to fetch.
     */
    where?: TicketAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAttachments to fetch.
     */
    orderBy?: TicketAttachmentOrderByWithRelationInput | TicketAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketAttachments.
     */
    cursor?: TicketAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAttachments.
     */
    distinct?: TicketAttachmentScalarFieldEnum | TicketAttachmentScalarFieldEnum[]
  }

  /**
   * TicketAttachment create
   */
  export type TicketAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketAttachment.
     */
    data: XOR<TicketAttachmentCreateInput, TicketAttachmentUncheckedCreateInput>
  }

  /**
   * TicketAttachment createMany
   */
  export type TicketAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketAttachments.
     */
    data: TicketAttachmentCreateManyInput | TicketAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketAttachment createManyAndReturn
   */
  export type TicketAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many TicketAttachments.
     */
    data: TicketAttachmentCreateManyInput | TicketAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAttachment update
   */
  export type TicketAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketAttachment.
     */
    data: XOR<TicketAttachmentUpdateInput, TicketAttachmentUncheckedUpdateInput>
    /**
     * Choose, which TicketAttachment to update.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment updateMany
   */
  export type TicketAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketAttachments.
     */
    data: XOR<TicketAttachmentUpdateManyMutationInput, TicketAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which TicketAttachments to update
     */
    where?: TicketAttachmentWhereInput
    /**
     * Limit how many TicketAttachments to update.
     */
    limit?: number
  }

  /**
   * TicketAttachment updateManyAndReturn
   */
  export type TicketAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update TicketAttachments.
     */
    data: XOR<TicketAttachmentUpdateManyMutationInput, TicketAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which TicketAttachments to update
     */
    where?: TicketAttachmentWhereInput
    /**
     * Limit how many TicketAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAttachment upsert
   */
  export type TicketAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketAttachment to update in case it exists.
     */
    where: TicketAttachmentWhereUniqueInput
    /**
     * In case the TicketAttachment found by the `where` argument doesn't exist, create a new TicketAttachment with this data.
     */
    create: XOR<TicketAttachmentCreateInput, TicketAttachmentUncheckedCreateInput>
    /**
     * In case the TicketAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketAttachmentUpdateInput, TicketAttachmentUncheckedUpdateInput>
  }

  /**
   * TicketAttachment delete
   */
  export type TicketAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
    /**
     * Filter which TicketAttachment to delete.
     */
    where: TicketAttachmentWhereUniqueInput
  }

  /**
   * TicketAttachment deleteMany
   */
  export type TicketAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAttachments to delete
     */
    where?: TicketAttachmentWhereInput
    /**
     * Limit how many TicketAttachments to delete.
     */
    limit?: number
  }

  /**
   * TicketAttachment without action
   */
  export type TicketAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAttachment
     */
    select?: TicketAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAttachment
     */
    omit?: TicketAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model TicketHistory
   */

  export type AggregateTicketHistory = {
    _count: TicketHistoryCountAggregateOutputType | null
    _min: TicketHistoryMinAggregateOutputType | null
    _max: TicketHistoryMaxAggregateOutputType | null
  }

  export type TicketHistoryMinAggregateOutputType = {
    id: string | null
    fieldChanged: string | null
    oldValue: string | null
    newValue: string | null
    ticketId: string | null
    changedById: string | null
    createdAt: Date | null
  }

  export type TicketHistoryMaxAggregateOutputType = {
    id: string | null
    fieldChanged: string | null
    oldValue: string | null
    newValue: string | null
    ticketId: string | null
    changedById: string | null
    createdAt: Date | null
  }

  export type TicketHistoryCountAggregateOutputType = {
    id: number
    fieldChanged: number
    oldValue: number
    newValue: number
    ticketId: number
    changedById: number
    createdAt: number
    _all: number
  }


  export type TicketHistoryMinAggregateInputType = {
    id?: true
    fieldChanged?: true
    oldValue?: true
    newValue?: true
    ticketId?: true
    changedById?: true
    createdAt?: true
  }

  export type TicketHistoryMaxAggregateInputType = {
    id?: true
    fieldChanged?: true
    oldValue?: true
    newValue?: true
    ticketId?: true
    changedById?: true
    createdAt?: true
  }

  export type TicketHistoryCountAggregateInputType = {
    id?: true
    fieldChanged?: true
    oldValue?: true
    newValue?: true
    ticketId?: true
    changedById?: true
    createdAt?: true
    _all?: true
  }

  export type TicketHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketHistory to aggregate.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketHistories
    **/
    _count?: true | TicketHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketHistoryMaxAggregateInputType
  }

  export type GetTicketHistoryAggregateType<T extends TicketHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketHistory[P]>
      : GetScalarType<T[P], AggregateTicketHistory[P]>
  }




  export type TicketHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketHistoryWhereInput
    orderBy?: TicketHistoryOrderByWithAggregationInput | TicketHistoryOrderByWithAggregationInput[]
    by: TicketHistoryScalarFieldEnum[] | TicketHistoryScalarFieldEnum
    having?: TicketHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketHistoryCountAggregateInputType | true
    _min?: TicketHistoryMinAggregateInputType
    _max?: TicketHistoryMaxAggregateInputType
  }

  export type TicketHistoryGroupByOutputType = {
    id: string
    fieldChanged: string
    oldValue: string | null
    newValue: string | null
    ticketId: string
    changedById: string
    createdAt: Date
    _count: TicketHistoryCountAggregateOutputType | null
    _min: TicketHistoryMinAggregateOutputType | null
    _max: TicketHistoryMaxAggregateOutputType | null
  }

  type GetTicketHistoryGroupByPayload<T extends TicketHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldChanged?: boolean
    oldValue?: boolean
    newValue?: boolean
    ticketId?: boolean
    changedById?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketHistory"]>

  export type TicketHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldChanged?: boolean
    oldValue?: boolean
    newValue?: boolean
    ticketId?: boolean
    changedById?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketHistory"]>

  export type TicketHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldChanged?: boolean
    oldValue?: boolean
    newValue?: boolean
    ticketId?: boolean
    changedById?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketHistory"]>

  export type TicketHistorySelectScalar = {
    id?: boolean
    fieldChanged?: boolean
    oldValue?: boolean
    newValue?: boolean
    ticketId?: boolean
    changedById?: boolean
    createdAt?: boolean
  }

  export type TicketHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fieldChanged" | "oldValue" | "newValue" | "ticketId" | "changedById" | "createdAt", ExtArgs["result"]["ticketHistory"]>
  export type TicketHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketHistory"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      changedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fieldChanged: string
      oldValue: string | null
      newValue: string | null
      ticketId: string
      changedById: string
      createdAt: Date
    }, ExtArgs["result"]["ticketHistory"]>
    composites: {}
  }

  type TicketHistoryGetPayload<S extends boolean | null | undefined | TicketHistoryDefaultArgs> = $Result.GetResult<Prisma.$TicketHistoryPayload, S>

  type TicketHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketHistoryCountAggregateInputType | true
    }

  export interface TicketHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketHistory'], meta: { name: 'TicketHistory' } }
    /**
     * Find zero or one TicketHistory that matches the filter.
     * @param {TicketHistoryFindUniqueArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketHistoryFindUniqueArgs>(args: SelectSubset<T, TicketHistoryFindUniqueArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketHistoryFindUniqueOrThrowArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryFindFirstArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketHistoryFindFirstArgs>(args?: SelectSubset<T, TicketHistoryFindFirstArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryFindFirstOrThrowArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketHistories
     * const ticketHistories = await prisma.ticketHistory.findMany()
     * 
     * // Get first 10 TicketHistories
     * const ticketHistories = await prisma.ticketHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketHistoryWithIdOnly = await prisma.ticketHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketHistoryFindManyArgs>(args?: SelectSubset<T, TicketHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketHistory.
     * @param {TicketHistoryCreateArgs} args - Arguments to create a TicketHistory.
     * @example
     * // Create one TicketHistory
     * const TicketHistory = await prisma.ticketHistory.create({
     *   data: {
     *     // ... data to create a TicketHistory
     *   }
     * })
     * 
     */
    create<T extends TicketHistoryCreateArgs>(args: SelectSubset<T, TicketHistoryCreateArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketHistories.
     * @param {TicketHistoryCreateManyArgs} args - Arguments to create many TicketHistories.
     * @example
     * // Create many TicketHistories
     * const ticketHistory = await prisma.ticketHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketHistoryCreateManyArgs>(args?: SelectSubset<T, TicketHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketHistories and returns the data saved in the database.
     * @param {TicketHistoryCreateManyAndReturnArgs} args - Arguments to create many TicketHistories.
     * @example
     * // Create many TicketHistories
     * const ticketHistory = await prisma.ticketHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketHistories and only return the `id`
     * const ticketHistoryWithIdOnly = await prisma.ticketHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketHistory.
     * @param {TicketHistoryDeleteArgs} args - Arguments to delete one TicketHistory.
     * @example
     * // Delete one TicketHistory
     * const TicketHistory = await prisma.ticketHistory.delete({
     *   where: {
     *     // ... filter to delete one TicketHistory
     *   }
     * })
     * 
     */
    delete<T extends TicketHistoryDeleteArgs>(args: SelectSubset<T, TicketHistoryDeleteArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketHistory.
     * @param {TicketHistoryUpdateArgs} args - Arguments to update one TicketHistory.
     * @example
     * // Update one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketHistoryUpdateArgs>(args: SelectSubset<T, TicketHistoryUpdateArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketHistories.
     * @param {TicketHistoryDeleteManyArgs} args - Arguments to filter TicketHistories to delete.
     * @example
     * // Delete a few TicketHistories
     * const { count } = await prisma.ticketHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketHistoryDeleteManyArgs>(args?: SelectSubset<T, TicketHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketHistories
     * const ticketHistory = await prisma.ticketHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketHistoryUpdateManyArgs>(args: SelectSubset<T, TicketHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketHistories and returns the data updated in the database.
     * @param {TicketHistoryUpdateManyAndReturnArgs} args - Arguments to update many TicketHistories.
     * @example
     * // Update many TicketHistories
     * const ticketHistory = await prisma.ticketHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketHistories and only return the `id`
     * const ticketHistoryWithIdOnly = await prisma.ticketHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketHistory.
     * @param {TicketHistoryUpsertArgs} args - Arguments to update or create a TicketHistory.
     * @example
     * // Update or create a TicketHistory
     * const ticketHistory = await prisma.ticketHistory.upsert({
     *   create: {
     *     // ... data to create a TicketHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketHistory we want to update
     *   }
     * })
     */
    upsert<T extends TicketHistoryUpsertArgs>(args: SelectSubset<T, TicketHistoryUpsertArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryCountArgs} args - Arguments to filter TicketHistories to count.
     * @example
     * // Count the number of TicketHistories
     * const count = await prisma.ticketHistory.count({
     *   where: {
     *     // ... the filter for the TicketHistories we want to count
     *   }
     * })
    **/
    count<T extends TicketHistoryCountArgs>(
      args?: Subset<T, TicketHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketHistoryAggregateArgs>(args: Subset<T, TicketHistoryAggregateArgs>): Prisma.PrismaPromise<GetTicketHistoryAggregateType<T>>

    /**
     * Group by TicketHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketHistory model
   */
  readonly fields: TicketHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    changedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketHistory model
   */
  interface TicketHistoryFieldRefs {
    readonly id: FieldRef<"TicketHistory", 'String'>
    readonly fieldChanged: FieldRef<"TicketHistory", 'String'>
    readonly oldValue: FieldRef<"TicketHistory", 'String'>
    readonly newValue: FieldRef<"TicketHistory", 'String'>
    readonly ticketId: FieldRef<"TicketHistory", 'String'>
    readonly changedById: FieldRef<"TicketHistory", 'String'>
    readonly createdAt: FieldRef<"TicketHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketHistory findUnique
   */
  export type TicketHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory findUniqueOrThrow
   */
  export type TicketHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory findFirst
   */
  export type TicketHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketHistories.
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketHistories.
     */
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * TicketHistory findFirstOrThrow
   */
  export type TicketHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketHistories.
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketHistories.
     */
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * TicketHistory findMany
   */
  export type TicketHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistories to fetch.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketHistories.
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketHistories.
     */
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * TicketHistory create
   */
  export type TicketHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketHistory.
     */
    data: XOR<TicketHistoryCreateInput, TicketHistoryUncheckedCreateInput>
  }

  /**
   * TicketHistory createMany
   */
  export type TicketHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketHistories.
     */
    data: TicketHistoryCreateManyInput | TicketHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketHistory createManyAndReturn
   */
  export type TicketHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TicketHistories.
     */
    data: TicketHistoryCreateManyInput | TicketHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketHistory update
   */
  export type TicketHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketHistory.
     */
    data: XOR<TicketHistoryUpdateInput, TicketHistoryUncheckedUpdateInput>
    /**
     * Choose, which TicketHistory to update.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory updateMany
   */
  export type TicketHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketHistories.
     */
    data: XOR<TicketHistoryUpdateManyMutationInput, TicketHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketHistories to update
     */
    where?: TicketHistoryWhereInput
    /**
     * Limit how many TicketHistories to update.
     */
    limit?: number
  }

  /**
   * TicketHistory updateManyAndReturn
   */
  export type TicketHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TicketHistories.
     */
    data: XOR<TicketHistoryUpdateManyMutationInput, TicketHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketHistories to update
     */
    where?: TicketHistoryWhereInput
    /**
     * Limit how many TicketHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketHistory upsert
   */
  export type TicketHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketHistory to update in case it exists.
     */
    where: TicketHistoryWhereUniqueInput
    /**
     * In case the TicketHistory found by the `where` argument doesn't exist, create a new TicketHistory with this data.
     */
    create: XOR<TicketHistoryCreateInput, TicketHistoryUncheckedCreateInput>
    /**
     * In case the TicketHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketHistoryUpdateInput, TicketHistoryUncheckedUpdateInput>
  }

  /**
   * TicketHistory delete
   */
  export type TicketHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter which TicketHistory to delete.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory deleteMany
   */
  export type TicketHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketHistories to delete
     */
    where?: TicketHistoryWhereInput
    /**
     * Limit how many TicketHistories to delete.
     */
    limit?: number
  }

  /**
   * TicketHistory without action
   */
  export type TicketHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    actorId: string | null
    organizationId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    actorId: string | null
    organizationId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entityType: number
    entityId: number
    details: number
    actorId: number
    organizationId: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    actorId?: true
    organizationId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    actorId?: true
    organizationId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    actorId?: true
    organizationId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    entityType: string
    entityId: string
    details: JsonValue | null
    actorId: string
    organizationId: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    actorId?: boolean
    organizationId?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    actorId?: boolean
    organizationId?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    actorId?: boolean
    organizationId?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    actorId?: boolean
    organizationId?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "entityType" | "entityId" | "details" | "actorId" | "organizationId" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | AuditLog$organizationArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entityType: string
      entityId: string
      details: Prisma.JsonValue | null
      actorId: string
      organizationId: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends AuditLog$organizationArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'Json'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly organizationId: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.organization
   */
  export type AuditLog$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    type: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    type: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    code: number
    type: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    type?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    email: string
    code: string
    type: string
    expiresAt: Date
    createdAt: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "type" | "expiresAt" | "createdAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      code: string
      type: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly code: FieldRef<"Otp", 'String'>
    readonly type: FieldRef<"Otp", 'String'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    organizationId: string | null
    roleId: string | null
    businessId: string | null
    token: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    organizationId: string | null
    roleId: string | null
    businessId: string | null
    token: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    email: number
    organizationId: number
    roleId: number
    businessId: number
    token: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    roleId?: true
    businessId?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    roleId?: true
    businessId?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    email?: true
    organizationId?: true
    roleId?: true
    businessId?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    email: string
    organizationId: string
    roleId: string
    businessId: string | null
    token: string
    status: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    email?: boolean
    organizationId?: boolean
    roleId?: boolean
    businessId?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "organizationId" | "roleId" | "businessId" | "token" | "status" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      organizationId: string
      roleId: string
      businessId: string | null
      token: string
      status: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly email: FieldRef<"Invitation", 'String'>
    readonly organizationId: FieldRef<"Invitation", 'String'>
    readonly roleId: FieldRef<"Invitation", 'String'>
    readonly businessId: FieldRef<"Invitation", 'String'>
    readonly token: FieldRef<"Invitation", 'String'>
    readonly status: FieldRef<"Invitation", 'String'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    emailVerified: 'emailVerified',
    isOwner: 'isOwner',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const OrganizationMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    roleId: 'roleId',
    businessId: 'businessId',
    isActive: 'isActive',
    deletedAt: 'deletedAt'
  };

  export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    industry: 'industry',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    createdById: 'createdById',
    assignedToId: 'assignedToId',
    organizationId: 'organizationId',
    businessId: 'businessId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    isInternal: 'isInternal',
    ticketId: 'ticketId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketCommentScalarFieldEnum = (typeof TicketCommentScalarFieldEnum)[keyof typeof TicketCommentScalarFieldEnum]


  export const TicketAttachmentScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    ticketId: 'ticketId',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt'
  };

  export type TicketAttachmentScalarFieldEnum = (typeof TicketAttachmentScalarFieldEnum)[keyof typeof TicketAttachmentScalarFieldEnum]


  export const TicketHistoryScalarFieldEnum: {
    id: 'id',
    fieldChanged: 'fieldChanged',
    oldValue: 'oldValue',
    newValue: 'newValue',
    ticketId: 'ticketId',
    changedById: 'changedById',
    createdAt: 'createdAt'
  };

  export type TicketHistoryScalarFieldEnum = (typeof TicketHistoryScalarFieldEnum)[keyof typeof TicketHistoryScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    details: 'details',
    actorId: 'actorId',
    organizationId: 'organizationId',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    type: 'type',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    organizationId: 'organizationId',
    roleId: 'roleId',
    businessId: 'businessId',
    token: 'token',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    isOwner?: BoolFilter<"User"> | boolean
    ownerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    ownedUsers?: UserListRelationFilter
    ownedOrganizations?: OrganizationListRelationFilter
    ownedBusinesses?: BusinessListRelationFilter
    memberships?: OrganizationMemberListRelationFilter
    createdTickets?: TicketListRelationFilter
    assignedTickets?: TicketListRelationFilter
    ticketComments?: TicketCommentListRelationFilter
    ticketAttachments?: TicketAttachmentListRelationFilter
    ticketHistories?: TicketHistoryListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailVerified?: SortOrder
    isOwner?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    ownedUsers?: UserOrderByRelationAggregateInput
    ownedOrganizations?: OrganizationOrderByRelationAggregateInput
    ownedBusinesses?: BusinessOrderByRelationAggregateInput
    memberships?: OrganizationMemberOrderByRelationAggregateInput
    createdTickets?: TicketOrderByRelationAggregateInput
    assignedTickets?: TicketOrderByRelationAggregateInput
    ticketComments?: TicketCommentOrderByRelationAggregateInput
    ticketAttachments?: TicketAttachmentOrderByRelationAggregateInput
    ticketHistories?: TicketHistoryOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    isOwner?: BoolFilter<"User"> | boolean
    ownerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    ownedUsers?: UserListRelationFilter
    ownedOrganizations?: OrganizationListRelationFilter
    ownedBusinesses?: BusinessListRelationFilter
    memberships?: OrganizationMemberListRelationFilter
    createdTickets?: TicketListRelationFilter
    assignedTickets?: TicketListRelationFilter
    ticketComments?: TicketCommentListRelationFilter
    ticketAttachments?: TicketAttachmentListRelationFilter
    ticketHistories?: TicketHistoryListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailVerified?: SortOrder
    isOwner?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isOwner?: BoolWithAggregatesFilter<"User"> | boolean
    ownerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    memberships?: OrganizationMemberListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: OrganizationMemberOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    memberships?: OrganizationMemberListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    userId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    roleId?: StringFilter<"OrganizationMember"> | string
    businessId?: StringNullableFilter<"OrganizationMember"> | string | null
    isActive?: BoolFilter<"OrganizationMember"> | boolean
    deletedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
  }

  export type OrganizationMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    business?: BusinessOrderByWithRelationInput
  }

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_organizationId?: OrganizationMemberUserIdOrganizationIdCompoundUniqueInput
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    userId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    roleId?: StringFilter<"OrganizationMember"> | string
    businessId?: StringNullableFilter<"OrganizationMember"> | string | null
    isActive?: BoolFilter<"OrganizationMember"> | boolean
    deletedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
  }, "id" | "userId_organizationId">

  export type OrganizationMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrganizationMemberCountOrderByAggregateInput
    _max?: OrganizationMemberMaxOrderByAggregateInput
    _min?: OrganizationMemberMinOrderByAggregateInput
  }

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMember"> | string
    userId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    roleId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    businessId?: StringNullableWithAggregatesFilter<"OrganizationMember"> | string | null
    isActive?: BoolWithAggregatesFilter<"OrganizationMember"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"OrganizationMember"> | Date | string | null
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    ownerId?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: OrganizationMemberListRelationFilter
    tickets?: TicketListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    memberships?: OrganizationMemberOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_ownerId?: OrganizationNameOwnerIdCompoundUniqueInput
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    ownerId?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: OrganizationMemberListRelationFilter
    tickets?: TicketListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "name_ownerId">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    ownerId?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    industry?: StringNullableFilter<"Business"> | string | null
    ownerId?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: OrganizationMemberListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    memberships?: OrganizationMemberOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    industry?: StringNullableFilter<"Business"> | string | null
    ownerId?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: OrganizationMemberListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    name?: StringWithAggregatesFilter<"Business"> | string
    industry?: StringNullableWithAggregatesFilter<"Business"> | string | null
    ownerId?: StringWithAggregatesFilter<"Business"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    createdById?: StringFilter<"Ticket"> | string
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    organizationId?: StringFilter<"Ticket"> | string
    businessId?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    comments?: TicketCommentListRelationFilter
    attachments?: TicketAttachmentListRelationFilter
    histories?: TicketHistoryListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    businessId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    business?: BusinessOrderByWithRelationInput
    comments?: TicketCommentOrderByRelationAggregateInput
    attachments?: TicketAttachmentOrderByRelationAggregateInput
    histories?: TicketHistoryOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    createdById?: StringFilter<"Ticket"> | string
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    organizationId?: StringFilter<"Ticket"> | string
    businessId?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    business?: XOR<BusinessNullableScalarRelationFilter, BusinessWhereInput> | null
    comments?: TicketCommentListRelationFilter
    attachments?: TicketAttachmentListRelationFilter
    histories?: TicketHistoryListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    businessId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    title?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringWithAggregatesFilter<"Ticket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority
    createdById?: StringWithAggregatesFilter<"Ticket"> | string
    assignedToId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    organizationId?: StringWithAggregatesFilter<"Ticket"> | string
    businessId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type TicketCommentWhereInput = {
    AND?: TicketCommentWhereInput | TicketCommentWhereInput[]
    OR?: TicketCommentWhereInput[]
    NOT?: TicketCommentWhereInput | TicketCommentWhereInput[]
    id?: StringFilter<"TicketComment"> | string
    content?: StringFilter<"TicketComment"> | string
    isInternal?: BoolFilter<"TicketComment"> | boolean
    ticketId?: StringFilter<"TicketComment"> | string
    authorId?: StringFilter<"TicketComment"> | string
    createdAt?: DateTimeFilter<"TicketComment"> | Date | string
    updatedAt?: DateTimeFilter<"TicketComment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    isInternal?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type TicketCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketCommentWhereInput | TicketCommentWhereInput[]
    OR?: TicketCommentWhereInput[]
    NOT?: TicketCommentWhereInput | TicketCommentWhereInput[]
    content?: StringFilter<"TicketComment"> | string
    isInternal?: BoolFilter<"TicketComment"> | boolean
    ticketId?: StringFilter<"TicketComment"> | string
    authorId?: StringFilter<"TicketComment"> | string
    createdAt?: DateTimeFilter<"TicketComment"> | Date | string
    updatedAt?: DateTimeFilter<"TicketComment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TicketCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    isInternal?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCommentCountOrderByAggregateInput
    _max?: TicketCommentMaxOrderByAggregateInput
    _min?: TicketCommentMinOrderByAggregateInput
  }

  export type TicketCommentScalarWhereWithAggregatesInput = {
    AND?: TicketCommentScalarWhereWithAggregatesInput | TicketCommentScalarWhereWithAggregatesInput[]
    OR?: TicketCommentScalarWhereWithAggregatesInput[]
    NOT?: TicketCommentScalarWhereWithAggregatesInput | TicketCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketComment"> | string
    content?: StringWithAggregatesFilter<"TicketComment"> | string
    isInternal?: BoolWithAggregatesFilter<"TicketComment"> | boolean
    ticketId?: StringWithAggregatesFilter<"TicketComment"> | string
    authorId?: StringWithAggregatesFilter<"TicketComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketComment"> | Date | string
  }

  export type TicketAttachmentWhereInput = {
    AND?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    OR?: TicketAttachmentWhereInput[]
    NOT?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    id?: StringFilter<"TicketAttachment"> | string
    fileName?: StringFilter<"TicketAttachment"> | string
    fileUrl?: StringFilter<"TicketAttachment"> | string
    fileType?: StringNullableFilter<"TicketAttachment"> | string | null
    ticketId?: StringFilter<"TicketAttachment"> | string
    uploadedById?: StringFilter<"TicketAttachment"> | string
    createdAt?: DateTimeFilter<"TicketAttachment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
  }

  export type TicketAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    OR?: TicketAttachmentWhereInput[]
    NOT?: TicketAttachmentWhereInput | TicketAttachmentWhereInput[]
    fileName?: StringFilter<"TicketAttachment"> | string
    fileUrl?: StringFilter<"TicketAttachment"> | string
    fileType?: StringNullableFilter<"TicketAttachment"> | string | null
    ticketId?: StringFilter<"TicketAttachment"> | string
    uploadedById?: StringFilter<"TicketAttachment"> | string
    createdAt?: DateTimeFilter<"TicketAttachment"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TicketAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    _count?: TicketAttachmentCountOrderByAggregateInput
    _max?: TicketAttachmentMaxOrderByAggregateInput
    _min?: TicketAttachmentMinOrderByAggregateInput
  }

  export type TicketAttachmentScalarWhereWithAggregatesInput = {
    AND?: TicketAttachmentScalarWhereWithAggregatesInput | TicketAttachmentScalarWhereWithAggregatesInput[]
    OR?: TicketAttachmentScalarWhereWithAggregatesInput[]
    NOT?: TicketAttachmentScalarWhereWithAggregatesInput | TicketAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketAttachment"> | string
    fileName?: StringWithAggregatesFilter<"TicketAttachment"> | string
    fileUrl?: StringWithAggregatesFilter<"TicketAttachment"> | string
    fileType?: StringNullableWithAggregatesFilter<"TicketAttachment"> | string | null
    ticketId?: StringWithAggregatesFilter<"TicketAttachment"> | string
    uploadedById?: StringWithAggregatesFilter<"TicketAttachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketAttachment"> | Date | string
  }

  export type TicketHistoryWhereInput = {
    AND?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    OR?: TicketHistoryWhereInput[]
    NOT?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    id?: StringFilter<"TicketHistory"> | string
    fieldChanged?: StringFilter<"TicketHistory"> | string
    oldValue?: StringNullableFilter<"TicketHistory"> | string | null
    newValue?: StringNullableFilter<"TicketHistory"> | string | null
    ticketId?: StringFilter<"TicketHistory"> | string
    changedById?: StringFilter<"TicketHistory"> | string
    createdAt?: DateTimeFilter<"TicketHistory"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketHistoryOrderByWithRelationInput = {
    id?: SortOrder
    fieldChanged?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    changedById?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    changedBy?: UserOrderByWithRelationInput
  }

  export type TicketHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    OR?: TicketHistoryWhereInput[]
    NOT?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    fieldChanged?: StringFilter<"TicketHistory"> | string
    oldValue?: StringNullableFilter<"TicketHistory"> | string | null
    newValue?: StringNullableFilter<"TicketHistory"> | string | null
    ticketId?: StringFilter<"TicketHistory"> | string
    changedById?: StringFilter<"TicketHistory"> | string
    createdAt?: DateTimeFilter<"TicketHistory"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    changedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TicketHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    fieldChanged?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    changedById?: SortOrder
    createdAt?: SortOrder
    _count?: TicketHistoryCountOrderByAggregateInput
    _max?: TicketHistoryMaxOrderByAggregateInput
    _min?: TicketHistoryMinOrderByAggregateInput
  }

  export type TicketHistoryScalarWhereWithAggregatesInput = {
    AND?: TicketHistoryScalarWhereWithAggregatesInput | TicketHistoryScalarWhereWithAggregatesInput[]
    OR?: TicketHistoryScalarWhereWithAggregatesInput[]
    NOT?: TicketHistoryScalarWhereWithAggregatesInput | TicketHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketHistory"> | string
    fieldChanged?: StringWithAggregatesFilter<"TicketHistory"> | string
    oldValue?: StringNullableWithAggregatesFilter<"TicketHistory"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"TicketHistory"> | string | null
    ticketId?: StringWithAggregatesFilter<"TicketHistory"> | string
    changedById?: StringWithAggregatesFilter<"TicketHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketHistory"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    actorId?: StringFilter<"AuditLog"> | string
    organizationId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    actorId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    actorId?: StringFilter<"AuditLog"> | string
    organizationId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    actorId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    organizationId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    email?: StringFilter<"Otp"> | string
    code?: StringFilter<"Otp"> | string
    type?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    email?: StringFilter<"Otp"> | string
    code?: StringFilter<"Otp"> | string
    type?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    email?: StringWithAggregatesFilter<"Otp"> | string
    code?: StringWithAggregatesFilter<"Otp"> | string
    type?: StringWithAggregatesFilter<"Otp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    organizationId?: StringFilter<"Invitation"> | string
    roleId?: StringFilter<"Invitation"> | string
    businessId?: StringNullableFilter<"Invitation"> | string | null
    token?: StringFilter<"Invitation"> | string
    status?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrderInput | SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    email?: StringFilter<"Invitation"> | string
    organizationId?: StringFilter<"Invitation"> | string
    roleId?: StringFilter<"Invitation"> | string
    businessId?: StringNullableFilter<"Invitation"> | string | null
    status?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }, "id" | "token">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrderInput | SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    email?: StringWithAggregatesFilter<"Invitation"> | string
    organizationId?: StringWithAggregatesFilter<"Invitation"> | string
    roleId?: StringWithAggregatesFilter<"Invitation"> | string
    businessId?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    token?: StringWithAggregatesFilter<"Invitation"> | string
    status?: StringWithAggregatesFilter<"Invitation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMemberCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMemberUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateInput = {
    id?: string
    isActive?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutMembershipsInput
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
    role: RoleCreateNestedOneWithoutMembershipsInput
    business?: BusinessCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMemberUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId: string
    roleId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type OrganizationMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
    role?: RoleUpdateOneRequiredWithoutMembershipsNestedInput
    business?: BusinessUpdateOneWithoutMembershipsNestedInput
  }

  export type OrganizationMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberCreateManyInput = {
    id?: string
    userId: string
    organizationId: string
    roleId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type OrganizationMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutOwnedOrganizationsInput
    memberships?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusinessCreateInput = {
    id?: string
    name: string
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedBusinessesInput
    memberships?: OrganizationMemberCreateNestedManyWithoutBusinessInput
    tickets?: TicketCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    name: string
    industry?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutBusinessInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedBusinessesNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutBusinessNestedInput
    tickets?: TicketUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutBusinessNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    name: string
    industry?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    organization: OrganizationCreateNestedOneWithoutTicketsInput
    business?: BusinessCreateNestedOneWithoutTicketsInput
    comments?: TicketCommentCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TicketCommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutTicketsNestedInput
    business?: BusinessUpdateOneWithoutTicketsNestedInput
    comments?: TicketCommentUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TicketCommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCommentCreateInput = {
    id?: string
    content: string
    isInternal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutTicketCommentsInput
  }

  export type TicketCommentUncheckedCreateInput = {
    id?: string
    content: string
    isInternal?: boolean
    ticketId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutTicketCommentsNestedInput
  }

  export type TicketCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCommentCreateManyInput = {
    id?: string
    content: string
    isInternal?: boolean
    ticketId: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutAttachmentsInput
    uploadedBy: UserCreateNestedOneWithoutTicketAttachmentsInput
  }

  export type TicketAttachmentUncheckedCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    ticketId: string
    uploadedById: string
    createdAt?: Date | string
  }

  export type TicketAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutAttachmentsNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutTicketAttachmentsNestedInput
  }

  export type TicketAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentCreateManyInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    ticketId: string
    uploadedById: string
    createdAt?: Date | string
  }

  export type TicketAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryCreateInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutHistoriesInput
    changedBy: UserCreateNestedOneWithoutTicketHistoriesInput
  }

  export type TicketHistoryUncheckedCreateInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    ticketId: string
    changedById: string
    createdAt?: Date | string
  }

  export type TicketHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutHistoriesNestedInput
    changedBy?: UserUpdateOneRequiredWithoutTicketHistoriesNestedInput
  }

  export type TicketHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    changedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryCreateManyInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    ticketId: string
    changedById: string
    createdAt?: Date | string
  }

  export type TicketHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    changedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutAuditLogsInput
    organization?: OrganizationCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId: string
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
    organization?: OrganizationUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId: string
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    id?: string
    email: string
    code: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    email: string
    code: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    email: string
    organizationId: string
    roleId: string
    businessId?: string | null
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    email: string
    organizationId: string
    roleId: string
    businessId?: string | null
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    email: string
    organizationId: string
    roleId: string
    businessId?: string | null
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type BusinessListRelationFilter = {
    every?: BusinessWhereInput
    some?: BusinessWhereInput
    none?: BusinessWhereInput
  }

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput
    some?: OrganizationMemberWhereInput
    none?: OrganizationMemberWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketCommentListRelationFilter = {
    every?: TicketCommentWhereInput
    some?: TicketCommentWhereInput
    none?: TicketCommentWhereInput
  }

  export type TicketAttachmentListRelationFilter = {
    every?: TicketAttachmentWhereInput
    some?: TicketAttachmentWhereInput
    none?: TicketAttachmentWhereInput
  }

  export type TicketHistoryListRelationFilter = {
    every?: TicketHistoryWhereInput
    some?: TicketHistoryWhereInput
    none?: TicketHistoryWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailVerified?: SortOrder
    isOwner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailVerified?: SortOrder
    isOwner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailVerified?: SortOrder
    isOwner?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type BusinessNullableScalarRelationFilter = {
    is?: BusinessWhereInput | null
    isNot?: BusinessWhereInput | null
  }

  export type OrganizationMemberUserIdOrganizationIdCompoundUniqueInput = {
    userId: string
    organizationId: string
  }

  export type OrganizationMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrganizationNameOwnerIdCompoundUniqueInput = {
    name: string
    ownerId: string
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    organizationId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    organizationId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    organizationId?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isInternal?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isInternal?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isInternal?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    ticketId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    ticketId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    ticketId?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    fieldChanged?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    ticketId?: SortOrder
    changedById?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    fieldChanged?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    ticketId?: SortOrder
    changedById?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    fieldChanged?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    ticketId?: SortOrder
    changedById?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    actorId?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    actorId?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    actorId?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    organizationId?: SortOrder
    roleId?: SortOrder
    businessId?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutOwnedUsersInput = {
    create?: XOR<UserCreateWithoutOwnedUsersInput, UserUncheckedCreateWithoutOwnedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrganizationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type BusinessCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type OrganizationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TicketCommentCreateWithoutAuthorInput, TicketCommentUncheckedCreateWithoutAuthorInput> | TicketCommentCreateWithoutAuthorInput[] | TicketCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutAuthorInput | TicketCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: TicketCommentCreateManyAuthorInputEnvelope
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
  }

  export type TicketAttachmentCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<TicketAttachmentCreateWithoutUploadedByInput, TicketAttachmentUncheckedCreateWithoutUploadedByInput> | TicketAttachmentCreateWithoutUploadedByInput[] | TicketAttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutUploadedByInput | TicketAttachmentCreateOrConnectWithoutUploadedByInput[]
    createMany?: TicketAttachmentCreateManyUploadedByInputEnvelope
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
  }

  export type TicketHistoryCreateNestedManyWithoutChangedByInput = {
    create?: XOR<TicketHistoryCreateWithoutChangedByInput, TicketHistoryUncheckedCreateWithoutChangedByInput> | TicketHistoryCreateWithoutChangedByInput[] | TicketHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutChangedByInput | TicketHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: TicketHistoryCreateManyChangedByInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type BusinessUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TicketCommentCreateWithoutAuthorInput, TicketCommentUncheckedCreateWithoutAuthorInput> | TicketCommentCreateWithoutAuthorInput[] | TicketCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutAuthorInput | TicketCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: TicketCommentCreateManyAuthorInputEnvelope
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
  }

  export type TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<TicketAttachmentCreateWithoutUploadedByInput, TicketAttachmentUncheckedCreateWithoutUploadedByInput> | TicketAttachmentCreateWithoutUploadedByInput[] | TicketAttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutUploadedByInput | TicketAttachmentCreateOrConnectWithoutUploadedByInput[]
    createMany?: TicketAttachmentCreateManyUploadedByInputEnvelope
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
  }

  export type TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: XOR<TicketHistoryCreateWithoutChangedByInput, TicketHistoryUncheckedCreateWithoutChangedByInput> | TicketHistoryCreateWithoutChangedByInput[] | TicketHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutChangedByInput | TicketHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: TicketHistoryCreateManyChangedByInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutOwnedUsersNestedInput = {
    create?: XOR<UserCreateWithoutOwnedUsersInput, UserUncheckedCreateWithoutOwnedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedUsersInput
    upsert?: UserUpsertWithoutOwnedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedUsersInput, UserUpdateWithoutOwnedUsersInput>, UserUncheckedUpdateWithoutOwnedUsersInput>
  }

  export type UserUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOwnerInput | UserUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOwnerInput | UserUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOwnerInput | UserUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type BusinessUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutOwnerInput | BusinessUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutOwnerInput | BusinessUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutOwnerInput | BusinessUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type OrganizationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TicketCommentCreateWithoutAuthorInput, TicketCommentUncheckedCreateWithoutAuthorInput> | TicketCommentCreateWithoutAuthorInput[] | TicketCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutAuthorInput | TicketCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: TicketCommentUpsertWithWhereUniqueWithoutAuthorInput | TicketCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TicketCommentCreateManyAuthorInputEnvelope
    set?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    disconnect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    delete?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    update?: TicketCommentUpdateWithWhereUniqueWithoutAuthorInput | TicketCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TicketCommentUpdateManyWithWhereWithoutAuthorInput | TicketCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TicketCommentScalarWhereInput | TicketCommentScalarWhereInput[]
  }

  export type TicketAttachmentUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<TicketAttachmentCreateWithoutUploadedByInput, TicketAttachmentUncheckedCreateWithoutUploadedByInput> | TicketAttachmentCreateWithoutUploadedByInput[] | TicketAttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutUploadedByInput | TicketAttachmentCreateOrConnectWithoutUploadedByInput[]
    upsert?: TicketAttachmentUpsertWithWhereUniqueWithoutUploadedByInput | TicketAttachmentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: TicketAttachmentCreateManyUploadedByInputEnvelope
    set?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    disconnect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    delete?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    update?: TicketAttachmentUpdateWithWhereUniqueWithoutUploadedByInput | TicketAttachmentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: TicketAttachmentUpdateManyWithWhereWithoutUploadedByInput | TicketAttachmentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
  }

  export type TicketHistoryUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutChangedByInput, TicketHistoryUncheckedCreateWithoutChangedByInput> | TicketHistoryCreateWithoutChangedByInput[] | TicketHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutChangedByInput | TicketHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutChangedByInput | TicketHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: TicketHistoryCreateManyChangedByInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutChangedByInput | TicketHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutChangedByInput | TicketHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput> | UserCreateWithoutOwnerInput[] | UserUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOwnerInput | UserCreateOrConnectWithoutOwnerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOwnerInput | UserUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserCreateManyOwnerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOwnerInput | UserUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOwnerInput | UserUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type BusinessUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput> | BusinessCreateWithoutOwnerInput[] | BusinessUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutOwnerInput | BusinessCreateOrConnectWithoutOwnerInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutOwnerInput | BusinessUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BusinessCreateManyOwnerInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutOwnerInput | BusinessUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutOwnerInput | BusinessUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TicketCommentCreateWithoutAuthorInput, TicketCommentUncheckedCreateWithoutAuthorInput> | TicketCommentCreateWithoutAuthorInput[] | TicketCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutAuthorInput | TicketCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: TicketCommentUpsertWithWhereUniqueWithoutAuthorInput | TicketCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TicketCommentCreateManyAuthorInputEnvelope
    set?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    disconnect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    delete?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    update?: TicketCommentUpdateWithWhereUniqueWithoutAuthorInput | TicketCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TicketCommentUpdateManyWithWhereWithoutAuthorInput | TicketCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TicketCommentScalarWhereInput | TicketCommentScalarWhereInput[]
  }

  export type TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<TicketAttachmentCreateWithoutUploadedByInput, TicketAttachmentUncheckedCreateWithoutUploadedByInput> | TicketAttachmentCreateWithoutUploadedByInput[] | TicketAttachmentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutUploadedByInput | TicketAttachmentCreateOrConnectWithoutUploadedByInput[]
    upsert?: TicketAttachmentUpsertWithWhereUniqueWithoutUploadedByInput | TicketAttachmentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: TicketAttachmentCreateManyUploadedByInputEnvelope
    set?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    disconnect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    delete?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    update?: TicketAttachmentUpdateWithWhereUniqueWithoutUploadedByInput | TicketAttachmentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: TicketAttachmentUpdateManyWithWhereWithoutUploadedByInput | TicketAttachmentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
  }

  export type TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutChangedByInput, TicketHistoryUncheckedCreateWithoutChangedByInput> | TicketHistoryCreateWithoutChangedByInput[] | TicketHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutChangedByInput | TicketHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutChangedByInput | TicketHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: TicketHistoryCreateManyChangedByInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutChangedByInput | TicketHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutChangedByInput | TicketHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type OrganizationMemberCreateNestedManyWithoutRoleInput = {
    create?: XOR<OrganizationMemberCreateWithoutRoleInput, OrganizationMemberUncheckedCreateWithoutRoleInput> | OrganizationMemberCreateWithoutRoleInput[] | OrganizationMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutRoleInput | OrganizationMemberCreateOrConnectWithoutRoleInput[]
    createMany?: OrganizationMemberCreateManyRoleInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<OrganizationMemberCreateWithoutRoleInput, OrganizationMemberUncheckedCreateWithoutRoleInput> | OrganizationMemberCreateWithoutRoleInput[] | OrganizationMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutRoleInput | OrganizationMemberCreateOrConnectWithoutRoleInput[]
    createMany?: OrganizationMemberCreateManyRoleInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type OrganizationMemberUpdateManyWithoutRoleNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutRoleInput, OrganizationMemberUncheckedCreateWithoutRoleInput> | OrganizationMemberCreateWithoutRoleInput[] | OrganizationMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutRoleInput | OrganizationMemberCreateOrConnectWithoutRoleInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutRoleInput | OrganizationMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: OrganizationMemberCreateManyRoleInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutRoleInput | OrganizationMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutRoleInput | OrganizationMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutRoleInput, OrganizationMemberUncheckedCreateWithoutRoleInput> | OrganizationMemberCreateWithoutRoleInput[] | OrganizationMemberUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutRoleInput | OrganizationMemberCreateOrConnectWithoutRoleInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutRoleInput | OrganizationMemberUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: OrganizationMemberCreateManyRoleInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutRoleInput | OrganizationMemberUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutRoleInput | OrganizationMemberUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<RoleCreateWithoutMembershipsInput, RoleUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutMembershipsInput
    connect?: RoleWhereUniqueInput
  }

  export type BusinessCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<BusinessCreateWithoutMembershipsInput, BusinessUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutMembershipsInput
    connect?: BusinessWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipsInput
    upsert?: OrganizationUpsertWithoutMembershipsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembershipsInput, OrganizationUpdateWithoutMembershipsInput>, OrganizationUncheckedUpdateWithoutMembershipsInput>
  }

  export type RoleUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<RoleCreateWithoutMembershipsInput, RoleUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutMembershipsInput
    upsert?: RoleUpsertWithoutMembershipsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutMembershipsInput, RoleUpdateWithoutMembershipsInput>, RoleUncheckedUpdateWithoutMembershipsInput>
  }

  export type BusinessUpdateOneWithoutMembershipsNestedInput = {
    create?: XOR<BusinessCreateWithoutMembershipsInput, BusinessUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutMembershipsInput
    upsert?: BusinessUpsertWithoutMembershipsInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutMembershipsInput, BusinessUpdateWithoutMembershipsInput>, BusinessUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserCreateNestedOneWithoutOwnedOrganizationsInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AuditLogCreateWithoutOrganizationInput, AuditLogUncheckedCreateWithoutOrganizationInput> | AuditLogCreateWithoutOrganizationInput[] | AuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrganizationInput | AuditLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: AuditLogCreateManyOrganizationInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AuditLogCreateWithoutOrganizationInput, AuditLogUncheckedCreateWithoutOrganizationInput> | AuditLogCreateWithoutOrganizationInput[] | AuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrganizationInput | AuditLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: AuditLogCreateManyOrganizationInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationsInput
    upsert?: UserUpsertWithoutOwnedOrganizationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedOrganizationsInput, UserUpdateWithoutOwnedOrganizationsInput>, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
  }

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrganizationInput | TicketUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrganizationInput | TicketUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrganizationInput | TicketUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AuditLogCreateWithoutOrganizationInput, AuditLogUncheckedCreateWithoutOrganizationInput> | AuditLogCreateWithoutOrganizationInput[] | AuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrganizationInput | AuditLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutOrganizationInput | AuditLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AuditLogCreateManyOrganizationInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutOrganizationInput | AuditLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutOrganizationInput | AuditLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrganizationInput | TicketUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrganizationInput | TicketUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrganizationInput | TicketUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AuditLogCreateWithoutOrganizationInput, AuditLogUncheckedCreateWithoutOrganizationInput> | AuditLogCreateWithoutOrganizationInput[] | AuditLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrganizationInput | AuditLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutOrganizationInput | AuditLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AuditLogCreateManyOrganizationInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutOrganizationInput | AuditLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutOrganizationInput | AuditLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedBusinessesInput = {
    create?: XOR<UserCreateWithoutOwnedBusinessesInput, UserUncheckedCreateWithoutOwnedBusinessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedBusinessesInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationMemberCreateNestedManyWithoutBusinessInput = {
    create?: XOR<OrganizationMemberCreateWithoutBusinessInput, OrganizationMemberUncheckedCreateWithoutBusinessInput> | OrganizationMemberCreateWithoutBusinessInput[] | OrganizationMemberUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutBusinessInput | OrganizationMemberCreateOrConnectWithoutBusinessInput[]
    createMany?: OrganizationMemberCreateManyBusinessInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutBusinessInput = {
    create?: XOR<TicketCreateWithoutBusinessInput, TicketUncheckedCreateWithoutBusinessInput> | TicketCreateWithoutBusinessInput[] | TicketUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusinessInput | TicketCreateOrConnectWithoutBusinessInput[]
    createMany?: TicketCreateManyBusinessInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<OrganizationMemberCreateWithoutBusinessInput, OrganizationMemberUncheckedCreateWithoutBusinessInput> | OrganizationMemberCreateWithoutBusinessInput[] | OrganizationMemberUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutBusinessInput | OrganizationMemberCreateOrConnectWithoutBusinessInput[]
    createMany?: OrganizationMemberCreateManyBusinessInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<TicketCreateWithoutBusinessInput, TicketUncheckedCreateWithoutBusinessInput> | TicketCreateWithoutBusinessInput[] | TicketUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusinessInput | TicketCreateOrConnectWithoutBusinessInput[]
    createMany?: TicketCreateManyBusinessInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedBusinessesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedBusinessesInput, UserUncheckedCreateWithoutOwnedBusinessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedBusinessesInput
    upsert?: UserUpsertWithoutOwnedBusinessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedBusinessesInput, UserUpdateWithoutOwnedBusinessesInput>, UserUncheckedUpdateWithoutOwnedBusinessesInput>
  }

  export type OrganizationMemberUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutBusinessInput, OrganizationMemberUncheckedCreateWithoutBusinessInput> | OrganizationMemberCreateWithoutBusinessInput[] | OrganizationMemberUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutBusinessInput | OrganizationMemberCreateOrConnectWithoutBusinessInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutBusinessInput | OrganizationMemberUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: OrganizationMemberCreateManyBusinessInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutBusinessInput | OrganizationMemberUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutBusinessInput | OrganizationMemberUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<TicketCreateWithoutBusinessInput, TicketUncheckedCreateWithoutBusinessInput> | TicketCreateWithoutBusinessInput[] | TicketUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusinessInput | TicketCreateOrConnectWithoutBusinessInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusinessInput | TicketUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: TicketCreateManyBusinessInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusinessInput | TicketUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusinessInput | TicketUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutBusinessInput, OrganizationMemberUncheckedCreateWithoutBusinessInput> | OrganizationMemberCreateWithoutBusinessInput[] | OrganizationMemberUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutBusinessInput | OrganizationMemberCreateOrConnectWithoutBusinessInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutBusinessInput | OrganizationMemberUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: OrganizationMemberCreateManyBusinessInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutBusinessInput | OrganizationMemberUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutBusinessInput | OrganizationMemberUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<TicketCreateWithoutBusinessInput, TicketUncheckedCreateWithoutBusinessInput> | TicketCreateWithoutBusinessInput[] | TicketUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusinessInput | TicketCreateOrConnectWithoutBusinessInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusinessInput | TicketUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: TicketCreateManyBusinessInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusinessInput | TicketUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusinessInput | TicketUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedTicketsInput = {
    create?: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTicketsInput = {
    create?: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutTicketsInput = {
    create?: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTicketsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type BusinessCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BusinessCreateWithoutTicketsInput, BusinessUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutTicketsInput
    connect?: BusinessWhereUniqueInput
  }

  export type TicketCommentCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketCommentCreateWithoutTicketInput, TicketCommentUncheckedCreateWithoutTicketInput> | TicketCommentCreateWithoutTicketInput[] | TicketCommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutTicketInput | TicketCommentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketCommentCreateManyTicketInputEnvelope
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
  }

  export type TicketAttachmentCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
  }

  export type TicketHistoryCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type TicketCommentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketCommentCreateWithoutTicketInput, TicketCommentUncheckedCreateWithoutTicketInput> | TicketCommentCreateWithoutTicketInput[] | TicketCommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutTicketInput | TicketCommentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketCommentCreateManyTicketInputEnvelope
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
  }

  export type TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
  }

  export type TicketHistoryUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type UserUpdateOneRequiredWithoutCreatedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTicketsInput
    upsert?: UserUpsertWithoutCreatedTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTicketsInput, UserUpdateWithoutCreatedTicketsInput>, UserUncheckedUpdateWithoutCreatedTicketsInput>
  }

  export type UserUpdateOneWithoutAssignedTicketsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTicketsInput
    upsert?: UserUpsertWithoutAssignedTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTicketsInput, UserUpdateWithoutAssignedTicketsInput>, UserUncheckedUpdateWithoutAssignedTicketsInput>
  }

  export type OrganizationUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTicketsInput
    upsert?: OrganizationUpsertWithoutTicketsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTicketsInput, OrganizationUpdateWithoutTicketsInput>, OrganizationUncheckedUpdateWithoutTicketsInput>
  }

  export type BusinessUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<BusinessCreateWithoutTicketsInput, BusinessUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutTicketsInput
    upsert?: BusinessUpsertWithoutTicketsInput
    disconnect?: BusinessWhereInput | boolean
    delete?: BusinessWhereInput | boolean
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutTicketsInput, BusinessUpdateWithoutTicketsInput>, BusinessUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketCommentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketCommentCreateWithoutTicketInput, TicketCommentUncheckedCreateWithoutTicketInput> | TicketCommentCreateWithoutTicketInput[] | TicketCommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutTicketInput | TicketCommentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketCommentUpsertWithWhereUniqueWithoutTicketInput | TicketCommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketCommentCreateManyTicketInputEnvelope
    set?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    disconnect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    delete?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    update?: TicketCommentUpdateWithWhereUniqueWithoutTicketInput | TicketCommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketCommentUpdateManyWithWhereWithoutTicketInput | TicketCommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketCommentScalarWhereInput | TicketCommentScalarWhereInput[]
  }

  export type TicketAttachmentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput | TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    set?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    disconnect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    delete?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    update?: TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput | TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAttachmentUpdateManyWithWhereWithoutTicketInput | TicketAttachmentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
  }

  export type TicketHistoryUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutTicketInput | TicketHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type TicketCommentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketCommentCreateWithoutTicketInput, TicketCommentUncheckedCreateWithoutTicketInput> | TicketCommentCreateWithoutTicketInput[] | TicketCommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketCommentCreateOrConnectWithoutTicketInput | TicketCommentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketCommentUpsertWithWhereUniqueWithoutTicketInput | TicketCommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketCommentCreateManyTicketInputEnvelope
    set?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    disconnect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    delete?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    connect?: TicketCommentWhereUniqueInput | TicketCommentWhereUniqueInput[]
    update?: TicketCommentUpdateWithWhereUniqueWithoutTicketInput | TicketCommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketCommentUpdateManyWithWhereWithoutTicketInput | TicketCommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketCommentScalarWhereInput | TicketCommentScalarWhereInput[]
  }

  export type TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput> | TicketAttachmentCreateWithoutTicketInput[] | TicketAttachmentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAttachmentCreateOrConnectWithoutTicketInput | TicketAttachmentCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput | TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAttachmentCreateManyTicketInputEnvelope
    set?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    disconnect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    delete?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    connect?: TicketAttachmentWhereUniqueInput | TicketAttachmentWhereUniqueInput[]
    update?: TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput | TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAttachmentUpdateManyWithWhereWithoutTicketInput | TicketAttachmentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
  }

  export type TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutTicketInput | TicketHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketCommentsInput = {
    create?: XOR<UserCreateWithoutTicketCommentsInput, UserUncheckedCreateWithoutTicketCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    upsert?: TicketUpsertWithoutCommentsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutCommentsInput, TicketUpdateWithoutCommentsInput>, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutTicketCommentsNestedInput = {
    create?: XOR<UserCreateWithoutTicketCommentsInput, UserUncheckedCreateWithoutTicketCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketCommentsInput
    upsert?: UserUpsertWithoutTicketCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketCommentsInput, UserUpdateWithoutTicketCommentsInput>, UserUncheckedUpdateWithoutTicketCommentsInput>
  }

  export type TicketCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttachmentsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketAttachmentsInput = {
    create?: XOR<UserCreateWithoutTicketAttachmentsInput, UserUncheckedCreateWithoutTicketAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketAttachmentsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutAttachmentsInput
    upsert?: TicketUpsertWithoutAttachmentsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutAttachmentsInput, TicketUpdateWithoutAttachmentsInput>, TicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type UserUpdateOneRequiredWithoutTicketAttachmentsNestedInput = {
    create?: XOR<UserCreateWithoutTicketAttachmentsInput, UserUncheckedCreateWithoutTicketAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketAttachmentsInput
    upsert?: UserUpsertWithoutTicketAttachmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketAttachmentsInput, UserUpdateWithoutTicketAttachmentsInput>, UserUncheckedUpdateWithoutTicketAttachmentsInput>
  }

  export type TicketCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<TicketCreateWithoutHistoriesInput, TicketUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutHistoriesInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketHistoriesInput = {
    create?: XOR<UserCreateWithoutTicketHistoriesInput, UserUncheckedCreateWithoutTicketHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<TicketCreateWithoutHistoriesInput, TicketUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutHistoriesInput
    upsert?: TicketUpsertWithoutHistoriesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutHistoriesInput, TicketUpdateWithoutHistoriesInput>, TicketUncheckedUpdateWithoutHistoriesInput>
  }

  export type UserUpdateOneRequiredWithoutTicketHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutTicketHistoriesInput, UserUncheckedCreateWithoutTicketHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketHistoriesInput
    upsert?: UserUpsertWithoutTicketHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketHistoriesInput, UserUpdateWithoutTicketHistoriesInput>, UserUncheckedUpdateWithoutTicketHistoriesInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditLogsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type OrganizationUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditLogsInput
    upsert?: OrganizationUpsertWithoutAuditLogsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAuditLogsInput, OrganizationUpdateWithoutAuditLogsInput>, OrganizationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutOwnedUsersInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutOwnedUsersInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutOwnedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedUsersInput, UserUncheckedCreateWithoutOwnedUsersInput>
  }

  export type UserCreateWithoutOwnerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutOwnerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutOwnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput>
  }

  export type UserCreateManyOwnerInputEnvelope = {
    data: UserCreateManyOwnerInput | UserCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    memberships?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationCreateManyOwnerInputEnvelope = {
    data: OrganizationCreateManyOwnerInput | OrganizationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCreateWithoutOwnerInput = {
    id?: string
    name: string
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMemberCreateNestedManyWithoutBusinessInput
    tickets?: TicketCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutBusinessInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutOwnerInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput>
  }

  export type BusinessCreateManyOwnerInputEnvelope = {
    data: BusinessCreateManyOwnerInput | BusinessCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationMemberCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    deletedAt?: Date | string | null
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
    role: RoleCreateNestedOneWithoutMembershipsInput
    business?: BusinessCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMemberUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    roleId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type OrganizationMemberCreateOrConnectWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberCreateManyUserInputEnvelope = {
    data: OrganizationMemberCreateManyUserInput | OrganizationMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    organization: OrganizationCreateNestedOneWithoutTicketsInput
    business?: BusinessCreateNestedOneWithoutTicketsInput
    comments?: TicketCommentCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    assignedToId?: string | null
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TicketCommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketCreateManyCreatedByInputEnvelope = {
    data: TicketCreateManyCreatedByInput | TicketCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTicketsInput
    organization: OrganizationCreateNestedOneWithoutTicketsInput
    business?: BusinessCreateNestedOneWithoutTicketsInput
    comments?: TicketCommentCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TicketCommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketCreateManyAssignedToInputEnvelope = {
    data: TicketCreateManyAssignedToInput | TicketCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type TicketCommentCreateWithoutAuthorInput = {
    id?: string
    content: string
    isInternal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutCommentsInput
  }

  export type TicketCommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    isInternal?: boolean
    ticketId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCommentCreateOrConnectWithoutAuthorInput = {
    where: TicketCommentWhereUniqueInput
    create: XOR<TicketCommentCreateWithoutAuthorInput, TicketCommentUncheckedCreateWithoutAuthorInput>
  }

  export type TicketCommentCreateManyAuthorInputEnvelope = {
    data: TicketCommentCreateManyAuthorInput | TicketCommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TicketAttachmentCreateWithoutUploadedByInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutAttachmentsInput
  }

  export type TicketAttachmentUncheckedCreateWithoutUploadedByInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    ticketId: string
    createdAt?: Date | string
  }

  export type TicketAttachmentCreateOrConnectWithoutUploadedByInput = {
    where: TicketAttachmentWhereUniqueInput
    create: XOR<TicketAttachmentCreateWithoutUploadedByInput, TicketAttachmentUncheckedCreateWithoutUploadedByInput>
  }

  export type TicketAttachmentCreateManyUploadedByInputEnvelope = {
    data: TicketAttachmentCreateManyUploadedByInput | TicketAttachmentCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type TicketHistoryCreateWithoutChangedByInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutHistoriesInput
  }

  export type TicketHistoryUncheckedCreateWithoutChangedByInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    ticketId: string
    createdAt?: Date | string
  }

  export type TicketHistoryCreateOrConnectWithoutChangedByInput = {
    where: TicketHistoryWhereUniqueInput
    create: XOR<TicketHistoryCreateWithoutChangedByInput, TicketHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type TicketHistoryCreateManyChangedByInputEnvelope = {
    data: TicketHistoryCreateManyChangedByInput | TicketHistoryCreateManyChangedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedUsersInput = {
    update: XOR<UserUpdateWithoutOwnedUsersInput, UserUncheckedUpdateWithoutOwnedUsersInput>
    create: XOR<UserCreateWithoutOwnedUsersInput, UserUncheckedCreateWithoutOwnedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedUsersInput, UserUncheckedUpdateWithoutOwnedUsersInput>
  }

  export type UserUpdateWithoutOwnedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutOwnerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOwnerInput, UserUncheckedUpdateWithoutOwnerInput>
    create: XOR<UserCreateWithoutOwnerInput, UserUncheckedCreateWithoutOwnerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOwnerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOwnerInput, UserUncheckedUpdateWithoutOwnerInput>
  }

  export type UserUpdateManyWithWhereWithoutOwnerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    isOwner?: BoolFilter<"User"> | boolean
    ownerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    ownerId?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
  }

  export type BusinessUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutOwnerInput, BusinessUncheckedUpdateWithoutOwnerInput>
    create: XOR<BusinessCreateWithoutOwnerInput, BusinessUncheckedCreateWithoutOwnerInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutOwnerInput, BusinessUncheckedUpdateWithoutOwnerInput>
  }

  export type BusinessUpdateManyWithWhereWithoutOwnerInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutOwnerInput>
  }

  export type BusinessScalarWhereInput = {
    AND?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    OR?: BusinessScalarWhereInput[]
    NOT?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    id?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    industry?: StringNullableFilter<"Business"> | string | null
    ownerId?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMemberScalarWhereInput = {
    AND?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    OR?: OrganizationMemberScalarWhereInput[]
    NOT?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    userId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    roleId?: StringFilter<"OrganizationMember"> | string
    businessId?: StringNullableFilter<"OrganizationMember"> | string | null
    isActive?: BoolFilter<"OrganizationMember"> | boolean
    deletedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
  }

  export type TicketUpdateManyWithWhereWithoutCreatedByInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    createdById?: StringFilter<"Ticket"> | string
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    organizationId?: StringFilter<"Ticket"> | string
    businessId?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
  }

  export type TicketUpdateManyWithWhereWithoutAssignedToInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TicketCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TicketCommentWhereUniqueInput
    update: XOR<TicketCommentUpdateWithoutAuthorInput, TicketCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<TicketCommentCreateWithoutAuthorInput, TicketCommentUncheckedCreateWithoutAuthorInput>
  }

  export type TicketCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TicketCommentWhereUniqueInput
    data: XOR<TicketCommentUpdateWithoutAuthorInput, TicketCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type TicketCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: TicketCommentScalarWhereInput
    data: XOR<TicketCommentUpdateManyMutationInput, TicketCommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TicketCommentScalarWhereInput = {
    AND?: TicketCommentScalarWhereInput | TicketCommentScalarWhereInput[]
    OR?: TicketCommentScalarWhereInput[]
    NOT?: TicketCommentScalarWhereInput | TicketCommentScalarWhereInput[]
    id?: StringFilter<"TicketComment"> | string
    content?: StringFilter<"TicketComment"> | string
    isInternal?: BoolFilter<"TicketComment"> | boolean
    ticketId?: StringFilter<"TicketComment"> | string
    authorId?: StringFilter<"TicketComment"> | string
    createdAt?: DateTimeFilter<"TicketComment"> | Date | string
    updatedAt?: DateTimeFilter<"TicketComment"> | Date | string
  }

  export type TicketAttachmentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: TicketAttachmentWhereUniqueInput
    update: XOR<TicketAttachmentUpdateWithoutUploadedByInput, TicketAttachmentUncheckedUpdateWithoutUploadedByInput>
    create: XOR<TicketAttachmentCreateWithoutUploadedByInput, TicketAttachmentUncheckedCreateWithoutUploadedByInput>
  }

  export type TicketAttachmentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: TicketAttachmentWhereUniqueInput
    data: XOR<TicketAttachmentUpdateWithoutUploadedByInput, TicketAttachmentUncheckedUpdateWithoutUploadedByInput>
  }

  export type TicketAttachmentUpdateManyWithWhereWithoutUploadedByInput = {
    where: TicketAttachmentScalarWhereInput
    data: XOR<TicketAttachmentUpdateManyMutationInput, TicketAttachmentUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type TicketAttachmentScalarWhereInput = {
    AND?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
    OR?: TicketAttachmentScalarWhereInput[]
    NOT?: TicketAttachmentScalarWhereInput | TicketAttachmentScalarWhereInput[]
    id?: StringFilter<"TicketAttachment"> | string
    fileName?: StringFilter<"TicketAttachment"> | string
    fileUrl?: StringFilter<"TicketAttachment"> | string
    fileType?: StringNullableFilter<"TicketAttachment"> | string | null
    ticketId?: StringFilter<"TicketAttachment"> | string
    uploadedById?: StringFilter<"TicketAttachment"> | string
    createdAt?: DateTimeFilter<"TicketAttachment"> | Date | string
  }

  export type TicketHistoryUpsertWithWhereUniqueWithoutChangedByInput = {
    where: TicketHistoryWhereUniqueInput
    update: XOR<TicketHistoryUpdateWithoutChangedByInput, TicketHistoryUncheckedUpdateWithoutChangedByInput>
    create: XOR<TicketHistoryCreateWithoutChangedByInput, TicketHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type TicketHistoryUpdateWithWhereUniqueWithoutChangedByInput = {
    where: TicketHistoryWhereUniqueInput
    data: XOR<TicketHistoryUpdateWithoutChangedByInput, TicketHistoryUncheckedUpdateWithoutChangedByInput>
  }

  export type TicketHistoryUpdateManyWithWhereWithoutChangedByInput = {
    where: TicketHistoryScalarWhereInput
    data: XOR<TicketHistoryUpdateManyMutationInput, TicketHistoryUncheckedUpdateManyWithoutChangedByInput>
  }

  export type TicketHistoryScalarWhereInput = {
    AND?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
    OR?: TicketHistoryScalarWhereInput[]
    NOT?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
    id?: StringFilter<"TicketHistory"> | string
    fieldChanged?: StringFilter<"TicketHistory"> | string
    oldValue?: StringNullableFilter<"TicketHistory"> | string | null
    newValue?: StringNullableFilter<"TicketHistory"> | string | null
    ticketId?: StringFilter<"TicketHistory"> | string
    changedById?: StringFilter<"TicketHistory"> | string
    createdAt?: DateTimeFilter<"TicketHistory"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    actorId?: StringFilter<"AuditLog"> | string
    organizationId?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type OrganizationMemberCreateWithoutRoleInput = {
    id?: string
    isActive?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutMembershipsInput
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
    business?: BusinessCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMemberUncheckedCreateWithoutRoleInput = {
    id?: string
    userId: string
    organizationId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type OrganizationMemberCreateOrConnectWithoutRoleInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutRoleInput, OrganizationMemberUncheckedCreateWithoutRoleInput>
  }

  export type OrganizationMemberCreateManyRoleInputEnvelope = {
    data: OrganizationMemberCreateManyRoleInput | OrganizationMemberCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutRoleInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutRoleInput, OrganizationMemberUncheckedUpdateWithoutRoleInput>
    create: XOR<OrganizationMemberCreateWithoutRoleInput, OrganizationMemberUncheckedCreateWithoutRoleInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutRoleInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutRoleInput, OrganizationMemberUncheckedUpdateWithoutRoleInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutRoleInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type OrganizationCreateWithoutMembershipsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutOwnedOrganizationsInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembershipsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
  }

  export type RoleCreateWithoutMembershipsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutMembershipsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutMembershipsInput, RoleUncheckedCreateWithoutMembershipsInput>
  }

  export type BusinessCreateWithoutMembershipsInput = {
    id?: string
    name: string
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedBusinessesInput
    tickets?: TicketCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    industry?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutMembershipsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutMembershipsInput, BusinessUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type OrganizationUpsertWithoutMembershipsInput = {
    update: XOR<OrganizationUpdateWithoutMembershipsInput, OrganizationUncheckedUpdateWithoutMembershipsInput>
    create: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembershipsInput, OrganizationUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type RoleUpsertWithoutMembershipsInput = {
    update: XOR<RoleUpdateWithoutMembershipsInput, RoleUncheckedUpdateWithoutMembershipsInput>
    create: XOR<RoleCreateWithoutMembershipsInput, RoleUncheckedCreateWithoutMembershipsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutMembershipsInput, RoleUncheckedUpdateWithoutMembershipsInput>
  }

  export type RoleUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUpsertWithoutMembershipsInput = {
    update: XOR<BusinessUpdateWithoutMembershipsInput, BusinessUncheckedUpdateWithoutMembershipsInput>
    create: XOR<BusinessCreateWithoutMembershipsInput, BusinessUncheckedCreateWithoutMembershipsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutMembershipsInput, BusinessUncheckedUpdateWithoutMembershipsInput>
  }

  export type BusinessUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedBusinessesNestedInput
    tickets?: TicketUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UserCreateWithoutOwnedOrganizationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutOwnedOrganizationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutOwnedOrganizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
  }

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    id?: string
    isActive?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutMembershipsInput
    role: RoleCreateNestedOneWithoutMembershipsInput
    business?: BusinessCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    roleId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data: OrganizationMemberCreateManyOrganizationInput | OrganizationMemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    business?: BusinessCreateNestedOneWithoutTicketsInput
    comments?: TicketCommentCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TicketCommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput>
  }

  export type TicketCreateManyOrganizationInputEnvelope = {
    data: TicketCreateManyOrganizationInput | TicketCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutOrganizationInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutOrganizationInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId: string
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutOrganizationInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutOrganizationInput, AuditLogUncheckedCreateWithoutOrganizationInput>
  }

  export type AuditLogCreateManyOrganizationInputEnvelope = {
    data: AuditLogCreateManyOrganizationInput | AuditLogCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedOrganizationsInput = {
    update: XOR<UserUpdateWithoutOwnedOrganizationsInput, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
    create: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedOrganizationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedOrganizationsInput, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
  }

  export type UserUpdateWithoutOwnedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutOrganizationInput, TicketUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutOrganizationInput, TicketUncheckedUpdateWithoutOrganizationInput>
  }

  export type TicketUpdateManyWithWhereWithoutOrganizationInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutOrganizationInput, AuditLogUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AuditLogCreateWithoutOrganizationInput, AuditLogUncheckedCreateWithoutOrganizationInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutOrganizationInput, AuditLogUncheckedUpdateWithoutOrganizationInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutOrganizationInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserCreateWithoutOwnedBusinessesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutOwnedBusinessesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutOwnedBusinessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedBusinessesInput, UserUncheckedCreateWithoutOwnedBusinessesInput>
  }

  export type OrganizationMemberCreateWithoutBusinessInput = {
    id?: string
    isActive?: boolean
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutMembershipsInput
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
    role: RoleCreateNestedOneWithoutMembershipsInput
  }

  export type OrganizationMemberUncheckedCreateWithoutBusinessInput = {
    id?: string
    userId: string
    organizationId: string
    roleId: string
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type OrganizationMemberCreateOrConnectWithoutBusinessInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutBusinessInput, OrganizationMemberUncheckedCreateWithoutBusinessInput>
  }

  export type OrganizationMemberCreateManyBusinessInputEnvelope = {
    data: OrganizationMemberCreateManyBusinessInput | OrganizationMemberCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutBusinessInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    organization: OrganizationCreateNestedOneWithoutTicketsInput
    comments?: TicketCommentCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutBusinessInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TicketCommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutBusinessInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBusinessInput, TicketUncheckedCreateWithoutBusinessInput>
  }

  export type TicketCreateManyBusinessInputEnvelope = {
    data: TicketCreateManyBusinessInput | TicketCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedBusinessesInput = {
    update: XOR<UserUpdateWithoutOwnedBusinessesInput, UserUncheckedUpdateWithoutOwnedBusinessesInput>
    create: XOR<UserCreateWithoutOwnedBusinessesInput, UserUncheckedCreateWithoutOwnedBusinessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedBusinessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedBusinessesInput, UserUncheckedUpdateWithoutOwnedBusinessesInput>
  }

  export type UserUpdateWithoutOwnedBusinessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedBusinessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutBusinessInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutBusinessInput, OrganizationMemberUncheckedUpdateWithoutBusinessInput>
    create: XOR<OrganizationMemberCreateWithoutBusinessInput, OrganizationMemberUncheckedCreateWithoutBusinessInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutBusinessInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutBusinessInput, OrganizationMemberUncheckedUpdateWithoutBusinessInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutBusinessInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutBusinessInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutBusinessInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBusinessInput, TicketUncheckedUpdateWithoutBusinessInput>
    create: XOR<TicketCreateWithoutBusinessInput, TicketUncheckedCreateWithoutBusinessInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBusinessInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBusinessInput, TicketUncheckedUpdateWithoutBusinessInput>
  }

  export type TicketUpdateManyWithWhereWithoutBusinessInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBusinessInput>
  }

  export type UserCreateWithoutCreatedTicketsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutCreatedTicketsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutCreatedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
  }

  export type UserCreateWithoutAssignedTicketsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutAssignedTicketsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutAssignedTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
  }

  export type OrganizationCreateWithoutTicketsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutOwnedOrganizationsInput
    memberships?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTicketsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
  }

  export type BusinessCreateWithoutTicketsInput = {
    id?: string
    name: string
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedBusinessesInput
    memberships?: OrganizationMemberCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    industry?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutTicketsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutTicketsInput, BusinessUncheckedCreateWithoutTicketsInput>
  }

  export type TicketCommentCreateWithoutTicketInput = {
    id?: string
    content: string
    isInternal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutTicketCommentsInput
  }

  export type TicketCommentUncheckedCreateWithoutTicketInput = {
    id?: string
    content: string
    isInternal?: boolean
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCommentCreateOrConnectWithoutTicketInput = {
    where: TicketCommentWhereUniqueInput
    create: XOR<TicketCommentCreateWithoutTicketInput, TicketCommentUncheckedCreateWithoutTicketInput>
  }

  export type TicketCommentCreateManyTicketInputEnvelope = {
    data: TicketCommentCreateManyTicketInput | TicketCommentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketAttachmentCreateWithoutTicketInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutTicketAttachmentsInput
  }

  export type TicketAttachmentUncheckedCreateWithoutTicketInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    uploadedById: string
    createdAt?: Date | string
  }

  export type TicketAttachmentCreateOrConnectWithoutTicketInput = {
    where: TicketAttachmentWhereUniqueInput
    create: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput>
  }

  export type TicketAttachmentCreateManyTicketInputEnvelope = {
    data: TicketAttachmentCreateManyTicketInput | TicketAttachmentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketHistoryCreateWithoutTicketInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    changedBy: UserCreateNestedOneWithoutTicketHistoriesInput
  }

  export type TicketHistoryUncheckedCreateWithoutTicketInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    changedById: string
    createdAt?: Date | string
  }

  export type TicketHistoryCreateOrConnectWithoutTicketInput = {
    where: TicketHistoryWhereUniqueInput
    create: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketHistoryCreateManyTicketInputEnvelope = {
    data: TicketHistoryCreateManyTicketInput | TicketHistoryCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedTicketsInput = {
    update: XOR<UserUpdateWithoutCreatedTicketsInput, UserUncheckedUpdateWithoutCreatedTicketsInput>
    create: XOR<UserCreateWithoutCreatedTicketsInput, UserUncheckedCreateWithoutCreatedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTicketsInput, UserUncheckedUpdateWithoutCreatedTicketsInput>
  }

  export type UserUpdateWithoutCreatedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithoutAssignedTicketsInput = {
    update: XOR<UserUpdateWithoutAssignedTicketsInput, UserUncheckedUpdateWithoutAssignedTicketsInput>
    create: XOR<UserCreateWithoutAssignedTicketsInput, UserUncheckedCreateWithoutAssignedTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTicketsInput, UserUncheckedUpdateWithoutAssignedTicketsInput>
  }

  export type UserUpdateWithoutAssignedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type OrganizationUpsertWithoutTicketsInput = {
    update: XOR<OrganizationUpdateWithoutTicketsInput, OrganizationUncheckedUpdateWithoutTicketsInput>
    create: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTicketsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTicketsInput, OrganizationUncheckedUpdateWithoutTicketsInput>
  }

  export type OrganizationUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type BusinessUpsertWithoutTicketsInput = {
    update: XOR<BusinessUpdateWithoutTicketsInput, BusinessUncheckedUpdateWithoutTicketsInput>
    create: XOR<BusinessCreateWithoutTicketsInput, BusinessUncheckedCreateWithoutTicketsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutTicketsInput, BusinessUncheckedUpdateWithoutTicketsInput>
  }

  export type BusinessUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedBusinessesNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type TicketCommentUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketCommentWhereUniqueInput
    update: XOR<TicketCommentUpdateWithoutTicketInput, TicketCommentUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketCommentCreateWithoutTicketInput, TicketCommentUncheckedCreateWithoutTicketInput>
  }

  export type TicketCommentUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketCommentWhereUniqueInput
    data: XOR<TicketCommentUpdateWithoutTicketInput, TicketCommentUncheckedUpdateWithoutTicketInput>
  }

  export type TicketCommentUpdateManyWithWhereWithoutTicketInput = {
    where: TicketCommentScalarWhereInput
    data: XOR<TicketCommentUpdateManyMutationInput, TicketCommentUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketAttachmentUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketAttachmentWhereUniqueInput
    update: XOR<TicketAttachmentUpdateWithoutTicketInput, TicketAttachmentUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketAttachmentCreateWithoutTicketInput, TicketAttachmentUncheckedCreateWithoutTicketInput>
  }

  export type TicketAttachmentUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketAttachmentWhereUniqueInput
    data: XOR<TicketAttachmentUpdateWithoutTicketInput, TicketAttachmentUncheckedUpdateWithoutTicketInput>
  }

  export type TicketAttachmentUpdateManyWithWhereWithoutTicketInput = {
    where: TicketAttachmentScalarWhereInput
    data: XOR<TicketAttachmentUpdateManyMutationInput, TicketAttachmentUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketHistoryUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketHistoryWhereUniqueInput
    update: XOR<TicketHistoryUpdateWithoutTicketInput, TicketHistoryUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketHistoryUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketHistoryWhereUniqueInput
    data: XOR<TicketHistoryUpdateWithoutTicketInput, TicketHistoryUncheckedUpdateWithoutTicketInput>
  }

  export type TicketHistoryUpdateManyWithWhereWithoutTicketInput = {
    where: TicketHistoryScalarWhereInput
    data: XOR<TicketHistoryUpdateManyMutationInput, TicketHistoryUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    organization: OrganizationCreateNestedOneWithoutTicketsInput
    business?: BusinessCreateNestedOneWithoutTicketsInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCommentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutTicketCommentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutTicketCommentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutTicketCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketCommentsInput, UserUncheckedCreateWithoutTicketCommentsInput>
  }

  export type TicketUpsertWithoutCommentsInput = {
    update: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type TicketUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutTicketsNestedInput
    business?: BusinessUpdateOneWithoutTicketsNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutTicketCommentsInput = {
    update: XOR<UserUpdateWithoutTicketCommentsInput, UserUncheckedUpdateWithoutTicketCommentsInput>
    create: XOR<UserCreateWithoutTicketCommentsInput, UserUncheckedCreateWithoutTicketCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketCommentsInput, UserUncheckedUpdateWithoutTicketCommentsInput>
  }

  export type UserUpdateWithoutTicketCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type TicketCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    organization: OrganizationCreateNestedOneWithoutTicketsInput
    business?: BusinessCreateNestedOneWithoutTicketsInput
    comments?: TicketCommentCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TicketCommentUncheckedCreateNestedManyWithoutTicketInput
    histories?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAttachmentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
  }

  export type UserCreateWithoutTicketAttachmentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutTicketAttachmentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutTicketAttachmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketAttachmentsInput, UserUncheckedCreateWithoutTicketAttachmentsInput>
  }

  export type TicketUpsertWithoutAttachmentsInput = {
    update: XOR<TicketUpdateWithoutAttachmentsInput, TicketUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TicketCreateWithoutAttachmentsInput, TicketUncheckedCreateWithoutAttachmentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutAttachmentsInput, TicketUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TicketUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutTicketsNestedInput
    business?: BusinessUpdateOneWithoutTicketsNestedInput
    comments?: TicketCommentUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TicketCommentUncheckedUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutTicketAttachmentsInput = {
    update: XOR<UserUpdateWithoutTicketAttachmentsInput, UserUncheckedUpdateWithoutTicketAttachmentsInput>
    create: XOR<UserCreateWithoutTicketAttachmentsInput, UserUncheckedCreateWithoutTicketAttachmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketAttachmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketAttachmentsInput, UserUncheckedUpdateWithoutTicketAttachmentsInput>
  }

  export type UserUpdateWithoutTicketAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type TicketCreateWithoutHistoriesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTicketsInput
    organization: OrganizationCreateNestedOneWithoutTicketsInput
    business?: BusinessCreateNestedOneWithoutTicketsInput
    comments?: TicketCommentCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutHistoriesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: TicketCommentUncheckedCreateNestedManyWithoutTicketInput
    attachments?: TicketAttachmentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutHistoriesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutHistoriesInput, TicketUncheckedCreateWithoutHistoriesInput>
  }

  export type UserCreateWithoutTicketHistoriesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutTicketHistoriesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutTicketHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketHistoriesInput, UserUncheckedCreateWithoutTicketHistoriesInput>
  }

  export type TicketUpsertWithoutHistoriesInput = {
    update: XOR<TicketUpdateWithoutHistoriesInput, TicketUncheckedUpdateWithoutHistoriesInput>
    create: XOR<TicketCreateWithoutHistoriesInput, TicketUncheckedCreateWithoutHistoriesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutHistoriesInput, TicketUncheckedUpdateWithoutHistoriesInput>
  }

  export type TicketUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutTicketsNestedInput
    business?: BusinessUpdateOneWithoutTicketsNestedInput
    comments?: TicketCommentUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TicketCommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutTicketHistoriesInput = {
    update: XOR<UserUpdateWithoutTicketHistoriesInput, UserUncheckedUpdateWithoutTicketHistoriesInput>
    create: XOR<UserCreateWithoutTicketHistoriesInput, UserUncheckedCreateWithoutTicketHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketHistoriesInput, UserUncheckedUpdateWithoutTicketHistoriesInput>
  }

  export type UserUpdateWithoutTicketHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedUsersInput
    ownedUsers?: UserCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdTickets?: TicketCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryCreateNestedManyWithoutChangedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUsers?: UserUncheckedCreateNestedManyWithoutOwnerInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedBusinesses?: BusinessUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdTickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    ticketComments?: TicketCommentUncheckedCreateNestedManyWithoutAuthorInput
    ticketAttachments?: TicketAttachmentUncheckedCreateNestedManyWithoutUploadedByInput
    ticketHistories?: TicketHistoryUncheckedCreateNestedManyWithoutChangedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type OrganizationCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: UserCreateNestedOneWithoutOwnedOrganizationsInput
    memberships?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    memberships?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAuditLogsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedUsersNestedInput
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
  }

  export type OrganizationUpsertWithoutAuditLogsInput = {
    update: XOR<OrganizationUpdateWithoutAuditLogsInput, OrganizationUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<OrganizationCreateWithoutAuditLogsInput, OrganizationUncheckedCreateWithoutAuditLogsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAuditLogsInput, OrganizationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type OrganizationUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateManyOwnerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    emailVerified?: boolean
    isOwner?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateManyOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BusinessCreateManyOwnerInput = {
    id?: string
    name: string
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberCreateManyUserInput = {
    id?: string
    organizationId: string
    roleId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type TicketCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    assignedToId?: string | null
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    organizationId: string
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCommentCreateManyAuthorInput = {
    id?: string
    content: string
    isInternal?: boolean
    ticketId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketAttachmentCreateManyUploadedByInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    ticketId: string
    createdAt?: Date | string
  }

  export type TicketHistoryCreateManyChangedByInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    ticketId: string
    createdAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUsers?: UserUncheckedUpdateManyWithoutOwnerNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedBusinesses?: BusinessUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdTickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTickets?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    ticketComments?: TicketCommentUncheckedUpdateManyWithoutAuthorNestedInput
    ticketAttachments?: TicketAttachmentUncheckedUpdateManyWithoutUploadedByNestedInput
    ticketHistories?: TicketHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusinessUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMemberUpdateManyWithoutBusinessNestedInput
    tickets?: TicketUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: OrganizationMemberUncheckedUpdateManyWithoutBusinessNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
    role?: RoleUpdateOneRequiredWithoutMembershipsNestedInput
    business?: BusinessUpdateOneWithoutMembershipsNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutTicketsNestedInput
    business?: BusinessUpdateOneWithoutTicketsNestedInput
    comments?: TicketCommentUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TicketCommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutTicketsNestedInput
    business?: BusinessUpdateOneWithoutTicketsNestedInput
    comments?: TicketCommentUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TicketCommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type TicketCommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type TicketAttachmentUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type TicketHistoryUncheckedUpdateWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryUncheckedUpdateManyWithoutChangedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyRoleInput = {
    id?: string
    userId: string
    organizationId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type OrganizationMemberUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
    business?: BusinessUpdateOneWithoutMembershipsNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberCreateManyOrganizationInput = {
    id?: string
    userId: string
    roleId: string
    businessId?: string | null
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type TicketCreateManyOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    businessId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyOrganizationInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId: string
    createdAt?: Date | string
  }

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    role?: RoleUpdateOneRequiredWithoutMembershipsNestedInput
    business?: BusinessUpdateOneWithoutMembershipsNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    business?: BusinessUpdateOneWithoutTicketsNestedInput
    comments?: TicketCommentUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TicketCommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    actorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyBusinessInput = {
    id?: string
    userId: string
    organizationId: string
    roleId: string
    isActive?: boolean
    deletedAt?: Date | string | null
  }

  export type TicketCreateManyBusinessInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdById: string
    assignedToId?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMemberUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
    role?: RoleUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTicketsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutTicketsNestedInput
    comments?: TicketCommentUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: TicketCommentUncheckedUpdateManyWithoutTicketNestedInput
    attachments?: TicketAttachmentUncheckedUpdateManyWithoutTicketNestedInput
    histories?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCommentCreateManyTicketInput = {
    id?: string
    content: string
    isInternal?: boolean
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketAttachmentCreateManyTicketInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileType?: string | null
    uploadedById: string
    createdAt?: Date | string
  }

  export type TicketHistoryCreateManyTicketInput = {
    id?: string
    fieldChanged: string
    oldValue?: string | null
    newValue?: string | null
    changedById: string
    createdAt?: Date | string
  }

  export type TicketCommentUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTicketCommentsNestedInput
  }

  export type TicketCommentUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCommentUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutTicketAttachmentsNestedInput
  }

  export type TicketAttachmentUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketAttachmentUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: UserUpdateOneRequiredWithoutTicketHistoriesNestedInput
  }

  export type TicketHistoryUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    changedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldChanged?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    changedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}