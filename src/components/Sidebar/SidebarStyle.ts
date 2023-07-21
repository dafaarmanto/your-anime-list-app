import styled from "@emotion/styled";

export const SidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: Inter, sans-serif;
  width: 24%;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 28%;
  background-color: #0f0f0f;
  color: #fff;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 576px) {
    min-height: 24%;
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  p {
    font-size: 18px;
    letter-spacing: 0.025em;
    font-weight: 800;
  }

  @media (max-width: 576px) {
    p {
      display: none;
    }
  }
`;

export const Brand = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  p {
    font-weight: 800;
    font-size: 18px;
  }

  @media (max-width: 576px) {
    gap: 0px;

    p {
      display: none;
    }
  }
`;

export const Collections = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 66%;
  background-color: #0f0f0f;
  color: #b1a7a6;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 576px) {
    padding: 28px;
  }
`;

export const CollectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    margin-left: 6px;
    gap: 28px;

    p {
      display: none;
    }
  }
`;

export const CollectionTitle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 600;
  color: #b1a7a6;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const CollectionList = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: scroll;
  padding-bottom: 18px;
`;

export const CollectionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CollectionItemImage = styled.img`
  max-width: 48px;
  max-height: 48px;
  width: 48px
  height: 48px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 576px) {
    min-width: 38px;
    width: 38px;
    height: 38px;
  }
`;

export const CollectionItemTitle = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 576px) {
    display: none;
  }
`;
