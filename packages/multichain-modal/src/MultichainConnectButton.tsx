import React, { useState } from "react";
import { Button } from "@civic/ui";
import { useMultichainModal } from "./MultichainModalContext.js";
import { MultichainModal } from "./MultichainModal.js";

export const MultichainConnectButton: React.FC = () => {
  const { isConnected } = useMultichainModal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  if (isConnected) {
    return null;
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Connect Wallet</Button>
      <MultichainModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};
