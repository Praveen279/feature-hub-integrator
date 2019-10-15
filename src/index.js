import {createFeatureHub} from '@feature-hub/core';
import {defineExternals, loadAmdModule} from '@feature-hub/module-loader-amd';
import {FeatureAppLoader, FeatureHubContextProvider} from '@feature-hub/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const {featureAppManager} = createFeatureHub('consumer:integrator', {
  moduleLoader: loadAmdModule,
  providedExternals: {
    react: "16.7.0"
  }
});

defineExternals({react: React});

ReactDOM.render(
  <FeatureHubContextProvider value={{featureAppManager}}>
    <section className="integrator">
      <FeatureAppLoader
        featureAppId="consumer:index"
        baseUrl="https://featurehub.s3.amazonaws.com/consumer-app/feature-app-consumer.umd.js"
        src='feature-app-consumer.umd.js'
      />
    </section>
  </FeatureHubContextProvider>,
  document.querySelector('main')
);