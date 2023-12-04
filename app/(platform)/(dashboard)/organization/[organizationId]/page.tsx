import React from "react";

import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import DeleteBoard from "./board";
import { Form } from "./form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-2">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <DeleteBoard id={board.id} key={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
