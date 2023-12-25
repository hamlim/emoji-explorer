import "./tailwind.css";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 min-h-screen">
      {children}
    </div>
  );
}
