type Props = {
  onClick: () => void;
};

export default function EditChartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-5 py-2 text-sm font-medium bg-slate-100 hover:bg-slate-200 transition"
    >
      Edit
    </button>
  );
}
