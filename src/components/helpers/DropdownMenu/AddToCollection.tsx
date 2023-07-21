import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GoPlus } from "react-icons/go";
import AddCollectionModal from "../Modal/AddCollectionModal";
import { useAnimeCollections } from "../../../context/animeCollections";
import "./RadixDropdown.css";
import {
  AddToCollectionType,
  CollectionAnimesType,
  CollectionType,
} from "../../../types/types";

const AddToCollection = ({
  anime,
  coverImage,
  idAnime,
}: AddToCollectionType) => {
  const { addAnimeToCollection, addNewCollection, collections } =
    useAnimeCollections();

  const handleAddAnime = (collectionId: string) => {
    addAnimeToCollection(collectionId, anime, idAnime, coverImage);
  };

  const animeAlreadyInCollection = (collectionId: string, anime: string) => {
    const targetCollection = collections.find(
      (collection: CollectionType) => collection.id === collectionId
    );

    if (!targetCollection) {
      return false;
    }

    return targetCollection.animes.some(
      (collectionAnime: CollectionAnimesType) => collectionAnime.title === anime
    );
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          Add to collection
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <AddCollectionModal
            collections={collections}
            onAddCollections={addNewCollection}
          >
            <p className="DropdownMenuItem">
              <GoPlus size={14} />
              New collection
            </p>
          </AddCollectionModal>
          {collections.map((collection: CollectionType) => {
            return !animeAlreadyInCollection(collection.id, anime) ? (
              <DropdownMenu.Item className="DropdownMenuItem">
                <button onClick={() => handleAddAnime(collection.id)}>
                  {collection.name}
                </button>
              </DropdownMenu.Item>
            ) : (
              <DropdownMenu.Item disabled className="DropdownMenuItem">
                <button onClick={() => handleAddAnime(collection.id)}>
                  {collection.name}
                </button>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default AddToCollection;
