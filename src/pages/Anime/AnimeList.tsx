import {
  AnimeCard,
  AnimeCardImage,
  AnimeCardTitle,
  AnimeContainer,
  AnimeWrapper,
  Pagination,
  TrendingList,
  TrendingListTitle,
} from "./AnimeStyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { GET_TRENDING_ANIME } from "../../query/queries";
import { AnimeType } from "../../types/types";

const AnimeList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const animePerPage: number = 10;
  const totalPages: number = 50;

  const { loading, error, data } = useQuery(GET_TRENDING_ANIME, {
    variables: {
      page: currentPage,
      perPage: animePerPage,
      type: "ANIME",
      sort: "TRENDING_DESC",
    },
  });

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  if (loading) console.log("Loading ...");
  if (error) console.log("Error ...");

  if (!error && !loading) {
    return (
      <AnimeWrapper>
        <TrendingList>
          <TrendingListTitle>Trending Anime</TrendingListTitle>
          <AnimeContainer>
            {data?.Page?.media?.map((anime: AnimeType, index: number) => (
              <Link to={`/anime/${anime.id}`}>
                <AnimeCard key={index}>
                  <AnimeCardImage
                    src={anime.coverImage.extraLarge}
                    alt="Cover Image"
                    loading="lazy"
                  />
                  <AnimeCardTitle>{anime.title.romaji}</AnimeCardTitle>
                </AnimeCard>
              </Link>
            ))}
          </AnimeContainer>
        </TrendingList>
        <Pagination>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <GoChevronLeft fill={currentPage === 1 ? "#5A5A5A" : "#fff"} />
          </button>
          <p>{`Page ${currentPage} of ${totalPages}`}</p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <GoChevronRight
              fill={currentPage === totalPages ? "#5A5A5A" : "#fff"}
            />
          </button>
        </Pagination>
      </AnimeWrapper>
    );
  }
};
export default AnimeList;
