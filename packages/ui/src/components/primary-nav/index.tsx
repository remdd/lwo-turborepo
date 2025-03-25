import { Web } from "@lwo/types";
import { type ReactNode } from "react";
import { Link } from "../link";

type Link = {
  label: ReactNode;
  href: Web.Page["path"];
};

type Props = {
  links: Link[];
  basket: Link;
};

export function PrimaryNav(props: Props) {
  const { links, basket } = props;

  return (
    <nav className="bg-lwo-blue-darker text-lwo-yellow sticky top-0 flex w-full justify-center">
      <div className="w-full max-w-screen-lg">
        <ul>
          {links.map((link) => (
            <li className="inline-block p-4" key={link.href}>
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
