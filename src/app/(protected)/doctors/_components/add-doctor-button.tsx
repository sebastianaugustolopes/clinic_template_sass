"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


const AddDoctorButton = () => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Adicionar médico
        </Button>
      </DialogTrigger>
      <DialogContent>
        <h1>Teste</h1>
      </DialogContent>
    </Dialog>
  );
};

export default AddDoctorButton;