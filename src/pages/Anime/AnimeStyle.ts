import styled from "@emotion/styled";

export const AnimeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow-y: scroll;
  padding-bottom: 30px;
  padding-right: 10px;
`;

export const TrendingList = styled.div`
  color: #fff;
  margin-top: 38px;
`;

export const TrendingListTitle = styled.p`
  font-weight: 800;
  font-size: 32px;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const AnimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 24px;
`;

export const AnimeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 300px;
`;

export const AnimeCardTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
`;

export const AnimeCardImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 576px) {
    max-width: 250px;
  }
`;

export const AnimeDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  width: 100%;
  padding: 24px;
  gap: 24px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const AnimeDetailBackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  a {
    font-weight: 600;
  }
`;

export const AnimeDetailHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 567px) {
    flex-direction: column;
  }
`;

export const AnimeDetailHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const AnimeDetailCoverImage = styled.img`
  border-radius: 15px;
  max-width: 300px;
  max-height: 300px;
`;

export const AnimeDetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 567px) {
    flex-direction: column;
  }
`;

export const AnimeDetailTitleRomaji = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: #fff;
`;

export const AnimeDetailTitleNative = styled.p`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
`;

export const AnimeDetailDescription = styled.p`
  color: #b1a7a6;
  font-weight: 300;
  line-height: 1.625;
`;

export const AnimeDetailMediaInfo = styled.div`
  display: flex;
  gap: 48px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  height: 100%;
  color: #fff;

  @media (max-width: 567px) {
    flex-direction: column;
  }
`;

export const AnimeDetailMediaInfoEpisodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-weight: 600;
    font-size: 14px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const AnimeDetailMediaInfoGenres = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-weight: 600;
    font-size: 14px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const AnimeDetailMediaInfoStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-weight: 600;
    font-size: 14px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  p {
    color: white;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    margin-top: 24px;
  }
`;
