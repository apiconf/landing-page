interface BulletListProps {
  items: string[];
  bulletColor?: string;
  description?: string;
}

export const BulletList = ({ 
  items, 
  bulletColor = "text-purple-400", 
  description 
}: BulletListProps) => (
  <div>
    {description && (
      <p className="text-gray-200 text-lg mb-6">{description}</p>
    )}
    <ul className="space-y-3 text-gray-200" role="list">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className={`${bulletColor} font-bold mt-1 flex-shrink-0`}>•</span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);