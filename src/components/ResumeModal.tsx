import React from "react";
import { Dialog } from "@headlessui/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded bg-white">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 p-4">
            Resume
          </Dialog.Title>
          <div className="mt-2 p-4">
            <iframe
              src="/portfolio/resume.pdf"
              width="100%"
              height="500px"
              title="Resume"
            />
          </div>
          <div className="mt-4 p-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ResumeModal;
