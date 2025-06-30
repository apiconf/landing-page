interface ValueItemProps {
  title: string;
  description: string;
}

export const ValueItem = ({ title, description }: ValueItemProps) => (
  <div className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
    <h3 className="font-semibold text-white mb-3 text-lg">{title}</h3>
    <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
  </div>
);