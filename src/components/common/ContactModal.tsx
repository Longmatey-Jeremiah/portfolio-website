import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
      <div className="bg-white dark:bg-accent dark: rounded-2xl shadow-2xl p-8 max-w-md w-full relative m-6 dark:bg-secondary">
        <Button
          variant="outline"
          className="absolute top-3 right-3 text-gray-400 hover:text-cyan-600 text-2xl hover:cursor-pointer hover:bg-gray-100 p-0 rounded-full size-8 shadow-none"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="text-base p-0 m-0">&times;</span>
        </Button>
        <h4 className="text-2xl font-bold text-primary mb-4 text-center">
          Contact Me
        </h4>
        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/jeremiah-longmatey/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg bg-cyan-50 dark:bg-card/50 dark:border-white/8 dark:border-2 hover:bg-cyan-100 border border-cyan-200 text-cyan-600 transition w-full justify-center text-base"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href="mailto:longmateyjeremiah1@gmail.com"
            className="flex items-center gap-2 p-3 rounded-lg bg-cyan-50 dark:bg-card/50 dark:border-white/8 dark:border-2 hover:bg-cyan-100 border border-cyan-200 text-cyan-600 transition w-full justify-center text-base"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
          <a
            href="tel:+233543427199"
            className="flex items-center gap-2 p-3 rounded-lg bg-cyan-50 dark:bg-card/50 dark:border-white/8 dark:border-2 hover:bg-cyan-100 border border-cyan-200 text-cyan-600 transition w-full justify-center text-base"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
            +233 54 342 7199
          </a>
          <a
            href="https://wa.me/233543427199"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-card/50 dark:border-white/8 dark:border-2 hover:bg-green-100 border border-green-200 text-green-600 transition w-full justify-center text-base"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
