import { useState } from "react";

type Props = {
  isOpen: boolean;
  onSubmit: (email: string) => void;
};

export default function EmailModal({ isOpen, onSubmit }: Props) {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-80 rounded-md shadow">
        <h3 className="text-sm font-medium mb-4">
          Enter your email
        </h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 text-sm"
          placeholder="you@example.com"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 w-full text-sm"
          onClick={() => onSubmit(email)}
          disabled={!email}
        >
          Continue
        </button>
      </div>
    </div>
  );
}