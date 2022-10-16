import { MyStack } from './MyStack';
import { App } from '@serverless-stack/resources';

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
  });
  app.stack(MyStack);
}
