# GraphQL API with AWS AppSync and MongoDB Template

An example serverless app created with SST.

## Getting Started

[**Read the tutorial**](https://sst.dev/examples/how-to-create-a-serverless-graphql-api-with-aws-appsync.html)

Install the example.

```bash
git clone https://github.com/SonuKumar81800/AWS_Backend.git
```

```bash
cd AWS_Backend
```

```cmd
npm install || yarn install
```

Install and Configure AWS cli

- Download AWS Cli too from [AWS Official](https://aws.amazon.com/cli/)
- Install it in your local system.
- Once your local environment is ready, head over to the AppSync console and get your access key id and secret [here](https://console.aws.amazon.com/appsync).

Open Terminal and follow these steps.

```bash
aws configure
```

```bash
AWS Access Key ID: <your_access_key_id>
```

```bash
AWS Secret Access Key:  <your_access_key_secret>
```

```bash
Default region name:  <select_your_region>
```

```bash
Default output format: json
```

Start the Live Lambda Development environment.

```bash
$ npm sst start
```

These Key Value you need to add to [`.env`](./.env) file

```env
MONGO_USERNAME=<env_value>
MONGO_PASSWORD=<env_value>
DATABASE_NAME=<env_value>
DATABASE=<env_value>
GRAPHQL_API_URL=<env_value>
GRAPHQL_API_KEY=<env_value>
```

## Commands

### `npm run start`

Starts the local Lambda development environment.

### `npm run build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/` directory with the synthesized CloudFormation stacks.

### `npm run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy a specific stack.

### `npm run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally remove a specific stack.

### `npm run test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).

## Documentation

Learn more about SST.

- [Docs](https://docs.sst.dev)
- [@serverless-stack/cli](https://docs.sst.dev/packages/cli)
- [@serverless-stack/resources](https://docs.sst.dev/packages/resources)

## Community

[Follow us on Twitter](https://twitter.com/sst_dev) or [post on our forums](https://discourse.sst.dev).
