import Link from "next/link";
import { FC } from "react";
import React from "react";
import styles from "./ListItem.module.css";

interface ListItemProps {
  href: string;
  children: React.ReactNode;
}
const ListItem: FC<ListItemProps> = ({ href, children }): JSX.Element => {
  return (
    <li className={styles.listItem}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
export default ListItem;
