import Link from "next/link";
import { useRouter } from "next/router";

interface MenuType {
  title: string;
  to: string;
}

export default function Menu({ title, to }: MenuType) {
  const router = useRouter();

  if (router.pathname === to) {
    return (
      <Link href={to} className="mr-5 text-base text-[#EF9688]">
        {title}
      </Link>
    );
  }
  return (
    <Link href={to} className="mr-5 text-base  hover:text-[#EF9688]">
      {title}
    </Link>
  );
}
