import { GoArrowLeft } from "react-icons/go";
import {
  CollectionsDetailActions,
  CollectionsListBackButton,
  CollectionsListBody,
  CollectionsListBodyActionAdd,
  CollectionsListBodyActionEdit,
  CollectionsListBodyActionRemove,
  CollectionsListBodyList,
  CollectionsListBodyListItem,
  CollectionsListBodyListItemActions,
  CollectionsListBodyListItemImage,
  CollectionsListBodyListItemTitle,
  CollectionsListHeader,
  CollectionsListHeaderContent,
  CollectionsListHeaderContentDescription,
  CollectionsListHeaderContentTitle,
  CollectionsWrapper,
} from "./CollectionsStyle";
import { Link } from "react-router-dom";
import { useAnimeCollections } from "../../context/animeCollections";
import RemoveCollectionModal from "../../components/helpers/Modal/RemoveCollectionModal";
import EditCollectionModal from "../../components/helpers/Modal/EditCollectionModal";
import { CollectionType } from "../../types/types";
import AddCollectionModal from "../../components/helpers/Modal/AddCollectionModal";
import { FC } from "react";

const CollectionListPage: FC = () => {
  const { collections, addNewCollection } = useAnimeCollections();

  return (
    <CollectionsWrapper>
      <CollectionsListHeader>
        <CollectionsListBackButton>
          <GoArrowLeft size={24} fill="#FFF" />
          <Link to="/">Back</Link>
        </CollectionsListBackButton>
        <CollectionsListHeaderContent>
          <CollectionsListHeaderContentTitle>
            Collections List
          </CollectionsListHeaderContentTitle>
          <CollectionsListHeaderContentDescription>
            Your collections list
          </CollectionsListHeaderContentDescription>
          <AddCollectionModal
            onAddCollections={addNewCollection}
            collections={collections}
          >
            <CollectionsListBodyActionAdd>
              Add a collection
            </CollectionsListBodyActionAdd>
          </AddCollectionModal>
        </CollectionsListHeaderContent>
      </CollectionsListHeader>
      <CollectionsListBody>
        <CollectionsListBodyList>
          {collections.map((collection: CollectionType) => (
            <CollectionsListBodyListItem key={collection.id}>
              <Link to={`/collection/${collection.id}`}>
                <CollectionsListBodyListItemImage
                  src={
                    collection.animes.length !== 0
                      ? collection.animes[collection.animes.length - 1]
                          .coverImage
                      : "/default.png"
                  }
                  alt=""
                />
              </Link>
              <CollectionsListBodyListItemActions>
                <Link to={`/collection/${collection.id}`}>
                  <CollectionsListBodyListItemTitle>
                    {collection.name}
                  </CollectionsListBodyListItemTitle>
                </Link>
                <CollectionsDetailActions>
                  <EditCollectionModal collectionId={collection.id}>
                    <CollectionsListBodyActionEdit>
                      Edit collection
                    </CollectionsListBodyActionEdit>
                  </EditCollectionModal>
                  <RemoveCollectionModal collectionId={collection.id}>
                    <CollectionsListBodyActionRemove>
                      Remove collection
                    </CollectionsListBodyActionRemove>
                  </RemoveCollectionModal>
                </CollectionsDetailActions>
              </CollectionsListBodyListItemActions>
            </CollectionsListBodyListItem>
          ))}
        </CollectionsListBodyList>
      </CollectionsListBody>
    </CollectionsWrapper>
  );
};
export default CollectionListPage;
