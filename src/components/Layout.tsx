import { Navbar, FriendsNavbar } from './';

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
};

export const Layout = ({ children, className }: LayoutProps) => (
	<div className="flex h-screen w-screen">
		<Navbar />
		<main className={`w-4/6 ${className}`}>{children}</main>
		<FriendsNavbar />
	</div>
);
