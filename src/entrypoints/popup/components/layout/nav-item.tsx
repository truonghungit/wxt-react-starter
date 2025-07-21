import { Link } from "react-router-dom";

export function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <Link to="/" className="flex items-center space-x-2">
      {children}
    </Link>
  );
}
