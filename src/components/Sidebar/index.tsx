import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Brand,
  CollectionList,
  CollectionTitle,
  SidebarMenu,
  Menu,
  Collections,
  CollectionItem,
  CollectionItemImage,
  CollectionItemTitle,
  SidebarWrapper,
  CollectionHeader,
} from "./SidebarStyle";
import { GoHomeFill, GoPlus, GoRows } from "react-icons/go";
import AddCollectionModal from "../helpers/Modal/AddCollectionModal";
import { useAnimeCollections } from "../../context/animeCollections";
import { CollectionType } from "../../types/types";

const Sidebar: FC = () => {
  const { addNewCollection, collections } = useAnimeCollections();

  return (
    <SidebarWrapper>
      <SidebarMenu>
        <Brand>
          <img src="/logo.svg" alt="Logo" />
          <Link to="/">
            <p>YourAnimeList.</p>
          </Link>
        </Brand>
        <Link to="/">
          <Menu>
            <GoHomeFill size={28} />
            <p>Anime</p>
          </Menu>
        </Link>
      </SidebarMenu>
      <Collections>
        <CollectionHeader>
          <Link to={"/collections"}>
            <CollectionTitle>
              <GoRows size={18} />
              <p>Your Collection</p>
            </CollectionTitle>
          </Link>

          <AddCollectionModal
            collections={collections}
            onAddCollections={addNewCollection}
          >
            <GoPlus fill="#fff" size={28} />
          </AddCollectionModal>
        </CollectionHeader>
        <CollectionList>
          {collections.map((collection: CollectionType) => (
            <Link to={`/collection/${collection.id}`}>
              <CollectionItem key={collection.id}>
                <CollectionItemImage
                  src={
                    collection.animes.length !== 0
                      ? collection.animes[collection.animes.length - 1]
                          .coverImage
                      : "/default.png"
                  }
                  alt="Default"
                />

                <CollectionItemTitle>{collection.name}</CollectionItemTitle>
              </CollectionItem>
            </Link>
          ))}
        </CollectionList>
      </Collections>
    </SidebarWrapper>
  );
};
export default Sidebar;
