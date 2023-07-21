import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  AnimeCollectionsContextType,
  CollectionAnimesType,
  CollectionType,
} from "../types/types";

const AnimeCollectionsContext = createContext<AnimeCollectionsContextType>({
  collections: [],
  setCollections: () => {},
  addNewCollection: () => {},
  addAnimeToCollection: () => {},
  editCollection: () => {},
  removeAnimeFromCollection: () => {},
  removeCollection: () => {},
});

const AnimeCollectionsProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState(() => {
    const storedCollections =
      JSON.parse(localStorage.getItem("myAnimeCollections")!) || [];
    return storedCollections;
  });

  const addNewCollection = (newCollection: CollectionType) => {
    setCollections((prev: any) => [...prev, newCollection]);
  };

  const addAnimeToCollection = (
    collectionId: string,
    anime: string,
    idAnime: string,
    coverImage: string
  ) => {
    const addAnime = {
      id: `${Date.now()}`,
      id_anime: idAnime,
      title: anime,
      coverImage,
    };

    setCollections((prevCollections: CollectionType[]) =>
      prevCollections.map((collection: CollectionType) =>
        collection.id === collectionId
          ? { ...collection, animes: [...collection.animes, addAnime] }
          : collection
      )
    );
  };

  const editCollection = (
    collectionId: string,
    newName: string,
    newDescription: string
  ) => {
    setCollections((prevCollections: CollectionType[]) =>
      prevCollections.map((collection: CollectionType) =>
        collection.id === collectionId
          ? { ...collection, name: newName, description: newDescription }
          : collection
      )
    );
  };

  const removeAnimeFromCollection = (collectionId: string, animeId: string) => {
    setCollections((prevCollections: CollectionType[]) =>
      prevCollections.map((collection: CollectionType) =>
        collection.id === collectionId
          ? {
              ...collection,
              animes: collection.animes.filter(
                (anime: CollectionAnimesType) => anime.id !== animeId
              ),
            }
          : collection
      )
    );
  };

  const removeCollection = (collectionId: string) => {
    setCollections((prevCollection: CollectionType[]) =>
      prevCollection.filter(
        (collection: CollectionType) => collection.id !== collectionId
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("myAnimeCollections", JSON.stringify(collections));
  }, [collections]);

  return (
    <AnimeCollectionsContext.Provider
      value={{
        collections,
        setCollections,
        addNewCollection,
        addAnimeToCollection,
        editCollection,
        removeAnimeFromCollection,
        removeCollection,
      }}
    >
      {children}
    </AnimeCollectionsContext.Provider>
  );
};

const useAnimeCollections = () => {
  const context = useContext(AnimeCollectionsContext);

  if (!context)
    throw new Error("useAnimeCollections must be used inside provider!");

  return context;
};

export { AnimeCollectionsProvider, useAnimeCollections };
