type Props = {
  isOpen: boolean;
  onUsePrevious: () => void;
  onOverwrite: () => void;
};

export default function OverwriteConfirmModal({
  isOpen,
  onUsePrevious,
  onOverwrite,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-medium text-slate-800 mb-2">
          Existing data found
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          We found previously saved call duration data for this email.
          What would you like to do?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onUsePrevious}
            className="px-4 py-2 text-sm border rounded hover:bg-slate-50"
          >
            Use Previous
          </button>

          <button
            onClick={onOverwrite}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Overwrite
          </button>
        </div>
      </div>
    </div>
  );
}