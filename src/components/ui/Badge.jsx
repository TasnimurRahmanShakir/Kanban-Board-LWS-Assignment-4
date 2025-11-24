import { TAG_STYLES } from "../../context/initialData";

export default function Badge({ text }) {
  const colorClass = TAG_STYLES[text] || "bg-gray-100 text-gray-600";

  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-medium rounded ${colorClass}`}
    >
      {text}
    </span>
  );
}
