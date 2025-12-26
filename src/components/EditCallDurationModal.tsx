import { useEffect, useState } from "react";

type DataPoint = {
  time: string;
  value: number;
};

type Props = {
  isOpen: boolean;
  data: DataPoint[];
  onSave: (updated: DataPoint[]) => void;
  onClose: () => void;
};

export default function EditCallDurationModal({
  isOpen,
  data,
  onSave,
  onClose,
}: Props) {
  const [localData, setLocalData] = useState<DataPoint[]>([]);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  if (!isOpen) return null;

  const updateLocalValue = (index: number, value: number) => {
    const updated = [...localData];
    updated[index] = { ...updated[index], value };
    setLocalData(updated);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-medium text-slate-800">
            Edit Call Duration Values
          </h2>
          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Close
          </button>
        </div>
        <div className="space-y-5">
          {localData.map((item, idx) => (
            <div
              key={item.time}
              className="flex items-center justify-between"
            >
              <span className="text-slate-600">
                {item.time} min
              </span>
              <input
                type="number"
                value={item.value}
                onChange={(e) =>
                  updateLocalValue(idx, Number(e.target.value))
                }
                className="w-32 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(localData)}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}