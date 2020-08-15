
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  debugLib,
  sqltag
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')

/**
 * Prisma Client JS version: 2.3.0
 * Query Engine version: e11114fa1ea826f9e7b4fa1ced34e78892fe8e0e
 */
exports.prismaVersion = {
  client: "2.3.0",
  engine: "e11114fa1ea826f9e7b4fa1ced34e78892fe8e0e"
}

exports.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = PrismaClientRustPanicError;
exports.PrismaClientInitializationError = PrismaClientInitializationError;
exports.PrismaClientValidationError = PrismaClientValidationError;

/**
 * Re-export of sql-template-tag
 */

exports.sql = sqltag.sqltag
exports.empty = sqltag.empty
exports.join = sqltag.join
exports.raw = sqltag.raw


/**
 * Build tool annotations
 * In order to make `ncc` and `node-file-trace` happy.
**/

path.join(__dirname, 'query-engine-windows');

/**
 * Annotation for `node-file-trace`
**/
path.join(__dirname, 'schema.prisma');

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.OrderByArg = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"USER\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"type\":\"Int\",\"hasDefaultValue\":true,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USERNAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PASSWORD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"mappings\":[{\"model\":\"USER\",\"plural\":\"uSERS\",\"findOne\":\"findOneUSER\",\"findMany\":\"findManyUSER\",\"create\":\"createOneUSER\",\"delete\":\"deleteOneUSER\",\"update\":\"updateOneUSER\",\"deleteMany\":\"deleteManyUSER\",\"updateMany\":\"updateManyUSER\",\"upsert\":\"upsertOneUSER\",\"aggregate\":\"aggregateUSER\"}],\"schema\":{\"enums\":[{\"name\":\"OrderByArg\",\"values\":[\"asc\",\"desc\"]}],\"outputTypes\":[{\"name\":\"USER\",\"fields\":[{\"name\":\"ID\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"USERNAME\",\"args\":[],\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"PASSWORD\",\"args\":[],\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"USERAvgAggregateOutputType\",\"fields\":[{\"name\":\"ID\",\"args\":[],\"outputType\":{\"type\":\"Float\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"USERSumAggregateOutputType\",\"fields\":[{\"name\":\"ID\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"USERMinAggregateOutputType\",\"fields\":[{\"name\":\"ID\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"USERMaxAggregateOutputType\",\"fields\":[{\"name\":\"ID\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"AggregateUSER\",\"fields\":[{\"name\":\"count\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"avg\",\"args\":[],\"outputType\":{\"type\":\"USERAvgAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"sum\",\"args\":[],\"outputType\":{\"type\":\"USERSumAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"min\",\"args\":[],\"outputType\":{\"type\":\"USERMinAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"max\",\"args\":[],\"outputType\":{\"type\":\"USERMaxAggregateOutputType\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Query\",\"fields\":[{\"name\":\"findManyUSER\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"USEROrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"USERWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"USER\",\"kind\":\"object\",\"isRequired\":true,\"isList\":true,\"isNullable\":false}},{\"name\":\"aggregateUSER\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"USEROrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"USERWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"AggregateUSER\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"findOneUSER\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"USER\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"BatchPayload\",\"fields\":[{\"name\":\"count\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneUSER\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"USERCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"USER\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteOneUSER\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"USER\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateOneUSER\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"USERUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"USER\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"upsertOneUSER\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"create\",\"inputType\":[{\"type\":\"USERCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"update\",\"inputType\":[{\"type\":\"USERUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"USER\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateManyUSER\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"USERUpdateManyMutationInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteManyUSER\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"USERWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]}],\"inputTypes\":[{\"name\":\"USERWhereInput\",\"fields\":[{\"name\":\"ID\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"type\":\"IntFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"USERNAME\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"type\":\"StringFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"PASSWORD\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"type\":\"StringFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"AND\",\"inputType\":[{\"type\":\"USERWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"OR\",\"inputType\":[{\"type\":\"USERWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"NOT\",\"inputType\":[{\"type\":\"USERWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true}],\"isWhereType\":true,\"atLeastOne\":false},{\"name\":\"USERWhereUniqueInput\",\"isOneOf\":true,\"fields\":[{\"name\":\"ID\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"atLeastOne\":true},{\"name\":\"USERCreateInput\",\"isOneOf\":false,\"fields\":[{\"name\":\"USERNAME\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"PASSWORD\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"USERUpdateInput\",\"isOneOf\":false,\"fields\":[{\"name\":\"USERNAME\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"PASSWORD\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"USERUpdateManyMutationInput\",\"isOneOf\":false,\"fields\":[{\"name\":\"USERNAME\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"PASSWORD\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"IntFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"IntFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]}],\"atLeastOne\":false},{\"name\":\"StringFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"StringFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"contains\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"startsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"endsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]}],\"atLeastOne\":false},{\"name\":\"USEROrderByInput\",\"atLeastOne\":true,\"atMostOne\":true,\"isOrderType\":true,\"fields\":[{\"name\":\"ID\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"USERNAME\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"PASSWORD\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false}]}]}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "binaryTargets": [],
    "experimentalFeatures": [],
    "config": {
      "copyRuntime": "true"
    },
    "name": "photon",
    "provider": "prisma-client-js",
    "output": "D:\\Proyectos\\Pagina_personal\\Pagina-personal-back\\db\\Prisma\\Studio\\-Proyectos-Pagina_personal-Pagina-personal-back-db",
    "isCustomOutput": true
  },
  "sqliteDatasourceOverrides": [
    {
      "name": "sqlite",
      "url": "..\\..\\..\\db.db"
    }
  ],
  "relativePath": "..\\..\\..",
  "clientVersion": "2.3.0",
  "engineVersion": "e11114fa1ea826f9e7b4fa1ced34e78892fe8e0e"
}
config.document = dmmf
config.dirname = __dirname

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient