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
import ErrorBoundary from './ErrorBoundary';

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

export function renderWithContext(
  ui: React.ReactElement<any>,
  { mocks = [], addTypename = true }: CreateClientOptions = {},
) {
  const client = createClient({ mocks, addTypename });
  return render(
    <ErrorBoundary>
      <Suspense fallback={<div>{suspenseFallbackText}</div>}>
        <ApolloProvider client={client}>{ui}</ApolloProvider>
      </Suspense>
    </ErrorBoundary>,
  );
}

export function getQueries(container = document.body) {
  return within(container);
}

export function delay(ms: number = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export { fireEvent, wait, waitForElement };
