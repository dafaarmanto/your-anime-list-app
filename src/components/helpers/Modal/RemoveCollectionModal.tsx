import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { FC, ReactNode, SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { CancelButton, RemoveButton } from "./ModalStyle";
import { useAnimeCollections } from "../../../context/animeCollections";
import "./RadixModal.css";

const RemoveCollectionModal: FC<{
  children: ReactNode;
  collectionId: string;
}> = ({ children, collectionId }) => {
  const { id } = useParams();

  const { removeCollection } = useAnimeCollections();

  const [open, setOpen] = useState<boolean>(false);

  const handleRemoveCollection = (e: SyntheticEvent) => {
    e.preventDefault();

    removeCollection(id! || collectionId);

    setOpen(false);
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Remove collection
          </AlertDialog.Title>
          <AlertDialog.Description>
            This will remove the collection.
          </AlertDialog.Description>
          <form onSubmit={handleRemoveCollection}>
            <div
              style={{
                display: "flex",
                gap: 25,
                justifyContent: "flex-end",
                marginTop: "28px",
              }}
            >
              <AlertDialog.Cancel asChild>
                <CancelButton>Cancel</CancelButton>
              </AlertDialog.Cancel>
              <RemoveButton type="submit">Remove</RemoveButton>
            </div>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default RemoveCollectionModal;
