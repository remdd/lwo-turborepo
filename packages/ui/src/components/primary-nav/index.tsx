import { Web } from "@lwo/types";
import { Link } from "@lwo/ui/components";
import { type ReactNode } from "react";

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
    <nav className="bg-lwo-blue-700 sticky top-0 flex w-full justify-center">
      <div className="w-full max-w-screen-lg">
        <ul>
          {links.map((link) => (
            <li className="inline-block" key={link.href}>
              <Link
                className="hover:bg-lwo-blue-600 hover:text-lwo-yellow block p-4 text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
