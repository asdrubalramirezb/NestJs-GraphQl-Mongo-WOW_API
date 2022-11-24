import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          /* cors:{
                origin:'*',
                credentials: true
          },*/
          sortSchema: true,
         /* schemaDirectives: {
            upperCaseDirective: UpperCaseDirective
          },*/
          playground: true,  // swaguer de apollo
          //introspection: true,
          debug: true
        }),
      ],
      providers: [],
      exports: [GraphQLModule]
})
export class GraphqlModule {}
