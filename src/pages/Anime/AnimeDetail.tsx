import { useQuery } from "@apollo/client";
import { GET_ANIME_DETAIL } from "../../query/queries";
import { useParams, Link } from "react-router-dom";
import { useStripTags } from "../../hooks/useStripTags";
import {
  AnimeDetailBackButton,
  AnimeDetailCoverImage,
  AnimeDetailDescription,
  AnimeDetailHeader,
  AnimeDetailHeaderContent,
  AnimeDetailHeaderInfo,
  AnimeDetailMediaInfo,
  AnimeDetailMediaInfoEpisodes,
  AnimeDetailMediaInfoGenres,
  AnimeDetailMediaInfoStatus,
  AnimeDetailTitle,
  AnimeDetailTitleNative,
  AnimeDetailTitleRomaji,
  AnimeWrapper,
} from "./AnimeStyle";
import { GoArrowLeft } from "react-icons/go";
import TruncateText from "../../components/helpers/TruncateText";
import AddToCollection from "../../components/helpers/DropdownMenu/AddToCollection";

const AnimeDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ANIME_DETAIL, {
    variables: { id },
  });

  return (
    <>
      {!loading && !error && (
        <AnimeWrapper>
          <AnimeDetailHeader>
            <AnimeDetailBackButton>
              <GoArrowLeft size={24} fill="#FFF" />
              <Link to="/">Back</Link>
            </AnimeDetailBackButton>
            <AnimeDetailHeaderContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <AnimeDetailCoverImage
                  src={data.Media.coverImage.large}
                  alt="Cover Image"
                />
                <AddToCollection
                  coverImage={data.Media.coverImage.large}
                  anime={data.Media.title.romaji}
                  idAnime={data.Media.id}
                />
              </div>
              <AnimeDetailHeaderInfo>
                <AnimeDetailTitle>
                  <AnimeDetailTitleRomaji>
                    {data.Media.title.romaji}
                  </AnimeDetailTitleRomaji>
                  <AnimeDetailTitleNative>
                    {data.Media.title.native}
                  </AnimeDetailTitleNative>
                </AnimeDetailTitle>
                <AnimeDetailDescription>
                  <TruncateText
                    text={
                      data.Media.description === null
                        ? "N/A"
                        : useStripTags(data.Media.description)
                    }
                    maxLength={500}
                  />
                </AnimeDetailDescription>
                <AnimeDetailMediaInfo>
                  <AnimeDetailMediaInfoEpisodes>
                    <span>Episodes</span>
                    <p>
                      {data.Media.episodes === null
                        ? "N/A"
                        : data.Media.episodes}
                    </p>
                  </AnimeDetailMediaInfoEpisodes>
                  <AnimeDetailMediaInfoGenres>
                    <span>Genres</span>
                    <p>
                      {data.Media.genres.length === 0
                        ? "N/A"
                        : data.Media.genres.join(", ")}
                    </p>
                  </AnimeDetailMediaInfoGenres>
                  <AnimeDetailMediaInfoStatus>
                    <span>Status</span>
                    <p>
                      {data.Media.status === null ? "N/A" : data.Media.status}
                    </p>
                  </AnimeDetailMediaInfoStatus>
                </AnimeDetailMediaInfo>
              </AnimeDetailHeaderInfo>
            </AnimeDetailHeaderContent>
          </AnimeDetailHeader>
        </AnimeWrapper>
      )}
    </>
  );
};
export default AnimeDetail;
