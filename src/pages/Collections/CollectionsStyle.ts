import styled from "@emotion/styled";

export const CollectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow-y: scroll;
  padding-bottom: 30px;
  padding-right: 10px;
`;

export const CollectionsListHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  width: 100%;
  padding: 24px;
  gap: 24px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CollectionsListBackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  a {
    font-weight: 600;
  }
`;

export const CollectionsListHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const CollectionsListHeaderContentTitle = styled.p`
  font-size: 32px;
  font-weight: 800;

  @media (max-width: 576px) {
  }
`;

export const CollectionsListHeaderContentDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.625;
  letter-spacing: 0em;
  color: #b1a7a6;

  @media (max-width: 576px) {
  }
`;

export const CollectionsListBody = styled.div``;

export const CollectionsListBodyList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 24px;
  gap: 24px;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const CollectionsListBodyListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 18px;
  cursor: pointer;

  @media (max-width: 567px) {
    gap: 12px;
  }
`;

export const CollectionsListBodyListItemImage = styled.img`
  width: 100px;
  max-width: 100px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 576px) {
    max-width: 38px;
    height: 38px;
  }
`;

export const CollectionsListBodyListItemActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionsListBodyListItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  cursor: pointer;

  @media (max-width: 576px) {
    a {
      width: 150px;
    }
  }
`;

export const CollectionsListBodyActionAdd = styled.button`
  text-align: center;
  background-color: #fff;
  color: #000;
  max-width: 140px;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

export const CollectionsListBodyActionEdit = styled.button`
  border: 1px solid #fff;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
`;

export const CollectionsListBodyActionRemove = styled.button`
  border: 1px solid #fff;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    border: 1px solid red;
  }
`;

export const CollectionsDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  width: 100%;
  padding: 24px;
  gap: 24px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CollectionsDetailHeaderNotFound = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const CollectionsDetailBackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  a {
    font-weight: 600;
  }
`;

export const CollectionsDetailHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const CollectionsDetailCoverImage = styled.img`
  border-radius: 15px;
  width: 200px;
  height: 250px;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
`;

export const CollectionsDetailBody = styled.div``;

export const CollectionsDetailHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  small {
    color: #b1a7a6;
  }
`;

export const CollectionsDetailTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 52px;
  font-weight: 800;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 567px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const CollectionsDetailDescription = styled.p`
  color: #b1a7a6;
  font-weight: 300;
  line-height: 1.625;
`;

export const CollectionsDetailActions = styled.div`
  display: flex;
  margin: 24px 0px;
  gap: 12px;
`;

export const CollectionsDetailActionEdit = styled.button`
  border: 1px solid #fff;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
`;

export const CollectionsDetailActionRemove = styled.button`
  border: 1px solid #fff;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid red;
  }
`;

export const CollectionDetailBodyTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export const CollectionDetailBodyAnimeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 24px;
`;

export const CollectionDetailAnimeListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 18px;
  cursor: pointer;

  img {
    min-width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (max-width: 567px) {
    gap: 12px;
  }
`;

export const CollectionDetailAnimeListItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  cursor: pointer;

  @media (max-width: 576px) {
    a {
      width: 150px;
      font-size: 14px;
    }
  }
`;
