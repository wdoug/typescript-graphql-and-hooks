import React, { Suspense } from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { MockLink, MockedResponse } from 'apollo-link-mock';
import { ApolloProvider } from 'react-apollo-hooks';
import {
  render,
  within,
  fireEvent,
  wait,
  waitForElement,
} from 'react-testing-library';
import { Observable } from 'rxjs';
import ErrorBoundary from './ErrorBoundary';
import mergeResolvers from './utils/mergeResolvers';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';
import faker from 'faker';
import fs from 'fs';
import path from 'path';

const schemaString = fs.readFileSync(
  path.resolve(__dirname, '../../server/src/generated/schema.graphql'),
  'utf-8',
);

interface CreateClientOptions {
  readonly addTypename?: boolean;

  readonly link?: ApolloLink;
  readonly mocks?: ReadonlyArray<MockedResponse>;
}

export function createClient({
  link,
  mocks = [],
  addTypename = true,
}: CreateClientOptions = {}) {
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename }),
    link: link ? link : new MockLink(mocks),
  });
}

export const suspenseFallbackText = 'Suspense Text';

export function renderWithContext(ui: React.ReactElement<any>) {
  return render(
    <ErrorBoundary>
      <Suspense fallback={<div>{suspenseFallbackText}</div>}>{ui}</Suspense>
    </ErrorBoundary>,
  );
}

export function getQueries(container = document.body) {
  return within(container);
}

export function delay(ms: number = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export const LoadingProvider: React.FC = ({ children }) => {
  // @ts-ignore
  const link = new ApolloLink(operation => {
    return new Observable(() => {});
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

type ErrorType = { message: string };
type ErrorProviderProps = {
  graphQLErrors?: ErrorType[];
};

// This is just a link that swallows all operations and returns the same thing
// for every request: The specified error.
export const ErrorProvider: React.FC<ErrorProviderProps> = ({
  graphQLErrors,
  children,
}) => {
  // @ts-ignore
  const link = new ApolloLink(operation => {
    return new Observable(observer => {
      observer.next({
        errors: graphQLErrors || [
          { message: 'Unspecified error from ErrorProvider.' },
        ],
      });
      observer.complete();
    });
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const schema = makeExecutableSchema({ typeDefs: schemaString });
const globalMocks = {
  Todo: () => ({
    text: () => faker.lorem.sentence(),
    completed: () => faker.random.boolean(),
  }),
};

type ApolloMockingProviderProps = {
  customResolvers: any;
};

export const ApolloMockingProvider: React.FC<ApolloMockingProviderProps> = ({
  customResolvers,
  children,
}) => {
  const mocks = mergeResolvers(globalMocks, customResolvers);

  addMockFunctionsToSchema({ schema, mocks });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { fireEvent, wait, waitForElement };
