import Link from "next/link";

const GoToCatalog = () => {
  return (
    <Link
      title="Перейти в каталог"
      aria-label="Перейти в каталог"
      href="/catalog"
      replace
      className="px-2 py-1 bg-[pink] rounded-sm hover:scale-105 hover:shadow-md transition-all"
    >
      Перейти в каталог
    </Link>
  );
};

export default GoToCatalog;
