import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  CollectionDetailAnimeListItem,
  CollectionDetailAnimeListItemTitle,
  CollectionDetailBodyAnimeList,
  CollectionDetailBodyTitle,
  CollectionsDetailActionEdit,
  CollectionsDetailActionRemove,
  CollectionsDetailActions,
  CollectionsDetailBackButton,
  CollectionsDetailBody,
  CollectionsDetailCoverImage,
  CollectionsDetailDescription,
  CollectionsDetailHeader,
  CollectionsDetailHeaderContent,
  CollectionsDetailHeaderInfo,
  CollectionsDetailHeaderNotFound,
  CollectionsDetailTitle,
  CollectionsWrapper,
} from "./CollectionsStyle";
import { GoArrowLeft, GoPencil, GoTrash, GoAlert } from "react-icons/go";
import EditCollectionModal from "../../components/helpers/Modal/EditCollectionModal";
import { useAnimeCollections } from "../../context/animeCollections";
import RemoveAnimeFromCollection from "../../components/helpers/Modal/RemoveAnimeFromCollection";
import RemoveCollectionModal from "../../components/helpers/Modal/RemoveCollectionModal";
import { CollectionAnimesType, CollectionType } from "../../types/types";
const CollectionDetailPage = () => {
  const { id } = useParams();

  const [onHover, setOnHover] = useState(false);

  const { collections } = useAnimeCollections();

  const collection = collections.find(
    (collection: CollectionType) => collection.id === id
  );

  if (!collection) {
    return (
      <CollectionsWrapper>
        <CollectionsDetailHeader>
          <CollectionsDetailHeaderNotFound>
            <GoAlert /> Collection not found or deleted.
          </CollectionsDetailHeaderNotFound>
        </CollectionsDetailHeader>
      </CollectionsWrapper>
    );
  }

  return (
    <CollectionsWrapper>
      <CollectionsDetailHeader>
        <CollectionsDetailBackButton>
          <GoArrowLeft size={24} fill="#FFF" />
          <Link to="/">Back</Link>
        </CollectionsDetailBackButton>
        <CollectionsDetailHeaderContent>
          <CollectionsDetailCoverImage
            src={
              collection.animes.length !== 0
                ? collection.animes[collection.animes.length - 1].coverImage
                : "/default.png"
            }
            alt="Cover Image"
          />
          <CollectionsDetailHeaderInfo>
            <small>Your Collections</small>
            <EditCollectionModal collectionId={collection.id}>
              <CollectionsDetailTitle
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
              >
                {collection.name}
                <GoPencil fill={onHover ? "#fff" : "none"} size={14} />
              </CollectionsDetailTitle>
            </EditCollectionModal>
            <CollectionsDetailDescription>
              {collection.description}
            </CollectionsDetailDescription>
          </CollectionsDetailHeaderInfo>
        </CollectionsDetailHeaderContent>
      </CollectionsDetailHeader>
      <CollectionsDetailBody>
        <CollectionsDetailActions>
          <EditCollectionModal collectionId={collection.id}>
            <CollectionsDetailActionEdit>
              Edit collection
            </CollectionsDetailActionEdit>
          </EditCollectionModal>
          <RemoveCollectionModal collectionId={collection.id}>
            <CollectionsDetailActionRemove>
              Remove collection
            </CollectionsDetailActionRemove>
          </RemoveCollectionModal>
        </CollectionsDetailActions>
        <CollectionDetailBodyTitle>Anime list</CollectionDetailBodyTitle>
        <CollectionDetailBodyAnimeList>
          {collection.animes.map((anime: CollectionAnimesType) => (
            <CollectionDetailAnimeListItem>
              <img src={anime.coverImage} alt="Cover Image" />
              <CollectionDetailAnimeListItemTitle>
                <Link to={`/anime/${anime.id_anime}`}>{anime.title}</Link>
                <RemoveAnimeFromCollection animeId={anime.id}>
                  <GoTrash fill="red" size={24} />
                </RemoveAnimeFromCollection>
              </CollectionDetailAnimeListItemTitle>
            </CollectionDetailAnimeListItem>
          ))}
        </CollectionDetailBodyAnimeList>
      </CollectionsDetailBody>
    </CollectionsWrapper>
  );
};
export default CollectionDetailPage;
