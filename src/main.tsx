import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  InMemoryCache,
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
} from "@apollo/client";
import { AnimeCollectionsProvider } from "./context/animeCollections.tsx";

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Page: {
          merge(_, incoming) {
            return incoming;
          },
        },
        Media: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AnimeCollectionsProvider>
        <App />
      </AnimeCollectionsProvider>
    </ApolloProvider>
  </React.StrictMode>
);
