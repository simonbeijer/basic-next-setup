"use client";
import { useState } from "react";
import Modal from "@/app/components/modal";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex min-h-screen p-8">
        <Modal isOpen={isOpen} onClose={closeModal}>
          <p className="text-black">Welcome to your dashboard! 🎉</p>
        </Modal>
        <div className="flex flex-1 items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Dashboard 📊
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to your clean template! 🚀
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to build something amazing? ✨
              </h2>
              <p className="text-gray-600">
                This is your starting point. Add your own features and make it yours! 💪
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
