import React, { Suspense } from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { MockLink, MockedResponse } from 'apollo-link-mock';
import { ApolloProvider } from 'react-apollo-hooks';
import {
  render,
  getByText,
  getByLabelText,
  within,
  fireEvent,
  wait,
  waitForElement,
} from 'react-testing-library';

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

export function renderWithContext(
  ui: React.ReactElement<any>,
  { mocks = [], addTypename = true } = {},
) {
  const client = createClient({ mocks, addTypename });
  return render(
    <Suspense fallback={<div>Loading</div>}>
      <ApolloProvider client={client}>{ui}</ApolloProvider>
    </Suspense>,
  );
}

export function getQueries(container = document.body) {
  return within(container);
}

export function delay(ms: number = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export { fireEvent, wait, waitForElement };
