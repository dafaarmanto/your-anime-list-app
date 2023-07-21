import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./RadixModal.css";
import { FC, ReactNode, SyntheticEvent, useState } from "react";
import {
  CancelButton,
  CreateButton,
  FormDescriptionField,
  FormErrorText,
  FormInput,
  FormLabel,
  FormNameField,
  FormTextArea,
} from "./ModalStyle";
import { CollectionType } from "../../../types/types";

const AddCollectionModal: FC<{
  children: ReactNode;
  collections: CollectionType[];
  onAddCollections: (newCollection: CollectionType) => void;
}> = ({ children, collections, onAddCollections }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
  }>({
    name: "",
    description: "",
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

  const handleAddCollection = (e: SyntheticEvent) => {
    e.preventDefault();

    const { name, description } = formData;

    if (!name.trim() || !checkDuplicate(name.trim())) {
      setError("This name already exists.");
      return;
    }

    const collectionId = `collection_${Date.now()}`;
    const newCollection = {
      id: collectionId,
      name: name.trim(),
      description,
      animes: [],
    };

    onAddCollections(newCollection);

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
            Create a new collection
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            Save your favourite anime to a collection.
          </AlertDialog.Description>
          <form onSubmit={handleAddCollection}>
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
              <CreateButton type="submit">Create</CreateButton>
            </div>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
export default AddCollectionModal;
