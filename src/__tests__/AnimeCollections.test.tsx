import { renderHook, act } from "@testing-library/react";
import {
  AnimeCollectionsProvider,
  useAnimeCollections,
} from "../context/animeCollections";

describe("proper useAnimeCollections context", () => {
  test("should add a new collection", () => {
    const { result } = renderHook(() => useAnimeCollections(), {
      wrapper: AnimeCollectionsProvider,
    });

    const newCollectionData = {
      id: "collection_123",
      name: "Testing Collection",
      description: "This is testing collection",
      animes: [],
    };

    act(() => {
      result.current.addNewCollection(newCollectionData);
    });

    expect(result.current.collections).toContainEqual(newCollectionData);
  });

  test("should remove a collection", () => {
    const { result } = renderHook(() => useAnimeCollections(), {
      wrapper: AnimeCollectionsProvider,
    });

    const newCollectionToRemove = {
      id: "collection_collection123",
      name: "Testing Collection to Remove",
      description: "This is testing collection to remove",
      animes: [],
    };

    act(() => {
      result.current.addNewCollection(newCollectionToRemove);
    });

    expect(result.current.collections).toContainEqual(newCollectionToRemove);

    act(() => {
      result.current.removeCollection("collection_collection123");
    });

    expect(result.current.collections).not.toContainEqual(
      newCollectionToRemove
    );
  });

  test("should add anime to a collection", () => {
    const now = Date.now();
    jest.spyOn(Date, "now").mockImplementation(() => now);

    const { result } = renderHook(() => useAnimeCollections(), {
      wrapper: AnimeCollectionsProvider,
    });

    const collectionId = "collection_123";
    const animeName = "Shingeki no Test";
    const idAnime = "anime_test_1";
    const coverImage = "shingeki_no_test.jpg";

    act(() => {
      result.current.addAnimeToCollection(
        collectionId,
        animeName,
        idAnime,
        coverImage
      );
    });

    expect(result.current.collections).toEqual([
      {
        id: collectionId,
        name: "Testing Collection",
        description: "This is testing collection",
        animes: [
          {
            id: `${now}`,
            id_anime: "anime_test_1",
            title: "Shingeki no Test",
            coverImage: "shingeki_no_test.jpg",
          },
        ],
      },
    ]);
  });

  test("should edit a collection", () => {
    const { result } = renderHook(() => useAnimeCollections(), {
      wrapper: AnimeCollectionsProvider,
    });

    const collectionId = "collection_123";
    const newName = "Edited Collection";
    const newDesc = "Edited Description";

    act(() => {
      result.current.editCollection(collectionId, newName, newDesc);
    });

    const updateCollection = result.current.collections.find(
      (collection) => collection.id === collectionId
    );

    expect(updateCollection).toBeDefined();
    expect(updateCollection?.name).toBe(newName);
    expect(updateCollection?.description).toBe(newDesc);
  });

  test("should remove anime from a collection", () => {
    const { result } = renderHook(() => useAnimeCollections(), {
      wrapper: AnimeCollectionsProvider,
    });

    const collectionId = "collection_123";
    const idAnime = "anime_test_1";

    act(() => {
      result.current.removeAnimeFromCollection(collectionId, idAnime);
    });

    const updateCollection = result.current.collections.find(
      (collection) => collection.id === collectionId
    );

    expect(updateCollection).toBeDefined();
    expect(updateCollection?.animes.some((anime) => anime.id === idAnime)).toBe(
      false
    );
  });

  test("should remove a collection", () => {
    const { result } = renderHook(() => useAnimeCollections(), {
      wrapper: AnimeCollectionsProvider,
    });

    const collectionId = "collection_123";

    act(() => {
      result.current.removeCollection(collectionId);
    });

    const updateCollection = result.current.collections.find(
      (collection) => collection.id === collectionId
    );

    expect(updateCollection).toBeUndefined();
    expect(result.current.collections.length).toBe(0);
  });
});
