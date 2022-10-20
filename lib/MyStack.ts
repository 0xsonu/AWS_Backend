import { StackContext, AppSyncApi, Cognito } from '@serverless-stack/resources';
import dataSources from './dataSources';
import resolvers from './resolvers';
import schema from './schema';
import { AuthorizationType, UserPoolDefaultAction } from '@aws-cdk/aws-appsync-alpha';
import { Duration, Expiration } from 'aws-cdk-lib';

export function MyStack({ stack }: StackContext) {
  // Create the AppSync GraphQL API
  // mongodb+srv://doju:Doju123@atlascluster.sr2q4hg.mongodb.net/
  const auth = new Cognito(stack, 'Auth');

  const api = new AppSyncApi(stack, 'AppSyncApi', {
    schema: schema,
    defaults: {
      function: {
        timeout: 20,
        environment: {
          DATABASE:
            process.env.DATABASE ||
            `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@atlascluster.sr2q4hg.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
          GRAPHQL_API_URL: process.env.GRAPHQL_API_URL || '',
          GRAPHQL_API_KEY: process.env.GRAPHQL_API_KEY || '',
        },
      },
    },
    cdk: {
      graphqlApi: {
        authorizationConfig: {
          defaultAuthorization: {
            authorizationType: AuthorizationType.USER_POOL,
            userPoolConfig: {
              userPool: auth.cdk.userPool,
              defaultAction: UserPoolDefaultAction.ALLOW,
            },
          },
          additionalAuthorizationModes: [
            {
              authorizationType: AuthorizationType.API_KEY,
              apiKeyConfig: {
                expires: Expiration.after(Duration.days(365)),
              },
            },
          ],
        },
      },
    },
    dataSources: dataSources,
    resolvers: { ...resolvers },
  });
  api.attachPermissions(['s3']);

  // Show the AppSync API Id in the output
  stack.addOutputs({
    ApiId: api.apiId,
    APiUrl: api.url,
    UserPoolId: auth.userPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });
}
