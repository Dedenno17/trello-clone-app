import React from "react";

import { deleteBoard } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";
import { FormDelete } from "./form-delete";

interface DeleteBoardProps {
  id: string;
  title: string;
}

const DeleteBoard = ({ title, id }: DeleteBoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>Board title : {title}</p>
      <FormDelete />
    </form>
  );
};

export default DeleteBoard;
