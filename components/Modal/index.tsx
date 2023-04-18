import React from "react";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export function ModalLayout({ isOpen, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-[#777777] opacity-80"></div>
          <div className="fixed z-50 min-h-screen top-0 w-[45vw] flex items-center justify-center mx-auto">
            <div className="relative w-full my-6 mx-auto z-50">
              <div className="border border-[#999999] rounded-2xl flex flex-col w-full bg-white outline-none focus:outline-none p-6">
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
