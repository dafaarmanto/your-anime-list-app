import { gql } from "@apollo/client";

export const GET_TRENDING_ANIME = gql`
  query ($page: Int!, $perPage: Int!, $type: MediaType!, $sort: [MediaSort!]) {
    Page(page: $page, perPage: $perPage) {
      media(type: $type, sort: $sort) {
        id
        title {
          romaji
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

export const GET_ANIME_DETAIL = gql`
  query ($id: Int!) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
      }
      description(asHtml: false)
      coverImage {
        extraLarge
        large
        color
      }
      episodes
      genres
      status
    }
  }
`;
