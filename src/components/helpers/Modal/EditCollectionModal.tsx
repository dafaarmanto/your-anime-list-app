import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./RadixModal.css";
import { FC, ReactNode, SyntheticEvent, useState } from "react";
import {
  CancelButton,
  EditButton,
  FormDescriptionField,
  FormErrorText,
  FormInput,
  FormLabel,
  FormNameField,
  FormTextArea,
} from "./ModalStyle";
import { useAnimeCollections } from "../../../context/animeCollections";
import { CollectionType } from "../../../types/types";

const EditCollectionModal: FC<{
  children: ReactNode;
  collectionId: string;
}> = ({ children, collectionId }) => {
  const { collections, editCollection } = useAnimeCollections();

  const collectionIndex = collections.findIndex(
    (collection: CollectionType) => collection.id === collectionId
  );

  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
  }>({
    name: collections[collectionIndex].name,
    description: collections[collectionIndex].description,
  });

  const handleInputChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    const filteredValue = value.replace(/[^a-zA-Z0-9\s]/g, "");

    setFormData((prev) => ({
      ...prev,
      [name]: filteredValue,
    }));
  };

  const checkDuplicate = (name: string) => {
    return collections.every(
      (collection: CollectionType) => collection.name !== name
    );
  };

  const handleEditCollection = (e: SyntheticEvent) => {
    e.preventDefault();

    const { name, description } = formData;

    if (!name.trim() || !checkDuplicate(name.trim())) {
      setError("This name already exists.");
      return;
    }

    if (collectionIndex !== -1) {
      editCollection(collectionId, name, description);
    }

    setFormData({
      name: "",
      description: "",
    });

    setOpen(false);
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Edit collection
          </AlertDialog.Title>
          <form onSubmit={handleEditCollection}>
            <FormNameField>
              <FormLabel>Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <FormErrorText>{error}</FormErrorText>
            </FormNameField>
            <FormDescriptionField>
              <FormLabel>Description</FormLabel>
              <FormTextArea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></FormTextArea>
            </FormDescriptionField>
            <div
              style={{
                display: "flex",
                gap: 25,
                justifyContent: "flex-end",
              }}
            >
              <AlertDialog.Cancel asChild>
                <CancelButton>Cancel</CancelButton>
              </AlertDialog.Cancel>
              <EditButton type="submit">Edit</EditButton>
            </div>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
export default EditCollectionModal;
