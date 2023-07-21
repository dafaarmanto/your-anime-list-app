import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ReactNode, SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { CancelButton, RemoveButton } from "./ModalStyle";
import { useAnimeCollections } from "../../../context/animeCollections";
import "./RadixModal.css";

const RemoveAnimeFromCollection = ({
  children,
  animeId,
}: {
  children: ReactNode;
  animeId: string;
}) => {
  const { id } = useParams();

  const { removeAnimeFromCollection } = useAnimeCollections();

  const [open, setOpen] = useState<boolean>(false);

  const handleDeleteAnimeFromCollection = (e: SyntheticEvent) => {
    e.preventDefault();

    removeAnimeFromCollection(id!, animeId);

    setOpen(false);
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Remove anime from
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            Save your favourite anime to a collection.
          </AlertDialog.Description>
          <form onSubmit={handleDeleteAnimeFromCollection}>
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
              <RemoveButton type="submit">Delete</RemoveButton>
            </div>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default RemoveAnimeFromCollection;
