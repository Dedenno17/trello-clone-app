"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board/createBoard";
import { toast } from "sonner";

interface FormPopoverProps {
  children: ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "end" | "center";
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log({ data });
      toast.success("Board created!");
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-neutral-600 text-center pb-4">
          CreateBoard
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto p-2 absolute right-2 top-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4 " />
          </Button>
        </PopoverClose>
        <form className="space-y-4" action={onSubmit}>
          <div className="space-y-4">
            <FormInput
              id="title"
              label="Board title"
              type="text"
              errors={fieldErrors}
            />
            <FormSubmit className="w-full">Create</FormSubmit>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};