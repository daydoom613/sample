import { MenuType } from "@/types/header";
import Link from "next/link";

type Props = {
  item: MenuType;
  level?: number;
};

export default function MenuItem({ item, level = 0 }: Props) {
  const hasSub = item.subMenu && item.subMenu.length > 0;

  return (
    <div className="relative">
      <div className="group relative">
        <Link
          href={item.href}
          className="flex items-center justify-between px-2 py-1 text-sm text-gray-600 hover:text-red-500 whitespace-nowrap hover:border-red-500 border-2 border-transparent rounded-md transition-all duration-300 ease-in-out hover:scale-110"
        >
          {item.title.toUpperCase()}
          {hasSub && <span className="ml-2">›</span>}
        </Link>

        {hasSub && (
          <div
            className={`
              absolute ${
                level === 0
                  ? "top-full left-0 bg-white"
                  : `top-[110%] left-1 bg-gray-50`
              }
              px-5 py-3 shadow-lg rounded-md
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
            `}
          >
            <div className="flex flex-col py-2">
              {item.subMenu!.map((sub) => (
                <MenuItem key={sub.title} item={sub} level={level + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
