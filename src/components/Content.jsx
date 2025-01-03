export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start w-[300px] h-[320px]">
      <div className="relative w-full h-[200px]">
        <img 
          src={content.img} 
          alt={content.title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 mt-3 w-full">
        <div className="flex items-center h-8">
          <span className="text-xs text-[#d7fa00] border border-[#d7fa00] px-2 py-1 rounded">
            모집중
          </span>
        </div>
        <div className="text-lg font-semibold line-clamp-2">
          {content.title}
        </div>
        <p className="text-xs text-gray-400 line-clamp-2">
          {content.subtitle}
        </p>
      </div>
    </div>
  );
}
