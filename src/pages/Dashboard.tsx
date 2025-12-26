import { useState } from "react";
import CallDurationChart from "../components/CallDurationChart";
import SadPathChart from "../components/SadPathChart";
import EmailModal from "../components/EmailModal";
import EditCallDurationModal from "../components/EditCallDurationModal";
import KpiRow from "../components/KpiRow";
import OverwriteConfirmModal from "../components/OverwriteConfirmModal";
import { supabase } from "../services/supabaseClient";

const defaultData = [
  { time: "00", value: 15 },
  { time: "05", value: 18 },
  { time: "10", value: 28 },
  { time: "15", value: 42 },
  { time: "20", value: 30 },
  { time: "25", value: 22 },
  { time: "30", value: 18 },
];

type CallDurationDataPoint = {
  time: string;
  value: number;
};

export default function Dashboard() {
  const [data, setData] = useState<CallDurationDataPoint[]>(defaultData);
  const [email, setEmail] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showOverwriteConfirm, setShowOverwriteConfirm] = useState(false);
  const [pendingData, setPendingData] = useState<CallDurationDataPoint[] | null>(null);

  const startEdit = () => setShowEmail(true);

  const handleEmail = async (email: string) => {
    setEmail(email);
    setShowEmail(false);

    const { data: existing } = await supabase
      .from("call_duration_data")
      .select("data")
      .eq("email", email)
      .single();

    if (existing) {
      setPendingData(existing.data);
      setShowOverwriteConfirm(true);
      return;
    }

    setEditing(true);
  };

  const usePreviousData = () => {
    if (!pendingData) return;
    setData(pendingData);
    setPendingData(null);
    setShowOverwriteConfirm(false);
  };

  const overwriteData = () => {
    setPendingData(null);
    setShowOverwriteConfirm(false);
    setEditing(true);
  };

  const avgDuration = Math.round(
    data.reduce((a, b) => a + b.value, 0) / data.length
  );

  const peakDuration = Math.max(...data.map((d) => d.value));

  const topSadPath = "Unsupported Language";

  const saveUpdatedData = async (updated: typeof data) => {
    setData(updated);
    setEditing(false);

    if (email) {
      await supabase.from("call_duration_data").upsert({
        email,
        data: updated,
        updated_at: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#e9eff5] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* KPI ROW */}
        <KpiRow avg={avgDuration} peak={peakDuration} topSadPath={topSadPath} />
        {/* Call Duration */}
        <div className="bg-[#edf2f7] px-6 py-4">
          <div className="flex justify-between mb-3">
            <h2 className="text-sm text-slate-700">Call Duration Analysis</h2>
            <button onClick={startEdit} className="text-xs text-blue-600">
              Edit
            </button>
          </div>

          <CallDurationChart data={data} />
        </div>

        {/* Bottom row */}
        {/* Sad Path Analysis — Full Width */}
        <div className="bg-[#edf2f7] px-8 py-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
          <h2 className="text-sm text-slate-700 mb-4">Sad Path Analysis</h2>
          <SadPathChart />
        </div>
      </div>

      {/* Email gate */}
      <EmailModal isOpen={showEmail} onSubmit={handleEmail} />

      {/* FULL-SCREEN EDIT MODAL */}
      <EditCallDurationModal
        isOpen={editing}
        data={data}
        onSave={saveUpdatedData}
        onClose={() => setEditing(false)}
      />

      <OverwriteConfirmModal
        isOpen={showOverwriteConfirm}
        onUsePrevious={usePreviousData}
        onOverwrite={overwriteData}
      />
    </div>
  );
}
