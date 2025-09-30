"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { INavItems } from "@/interfaces";
import style from "./ActiveLink.module.css";

export const ActiveLink = ({ path, text }: INavItems) => {
  const pathName = usePathname();
  return (
    <Link className={`${style.link} ${pathName === path && style["active-link"]}`} href={path}>
      {text}
    </Link>
  );
};
