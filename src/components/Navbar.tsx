import {
	Cog6ToothIcon,
	MagnifyingGlassIcon,
	CalendarIcon,
	ComputerDesktopIcon,
	Square2StackIcon,
	BookmarkIcon,
	ShoppingCartIcon,
	CheckIcon,
	CursorArrowRippleIcon,
	ListBulletIcon,
} from '@heroicons/react/24/solid';

import { Avatar, Badge } from './';

const SidebarData = [
	{
		title: 'Games',
		list: [
			{
				icon: CalendarIcon,
				title: 'Recent',
			},
			{
				icon: Square2StackIcon,
				title: 'All Games',
				value: 478,
			},
			{
				icon: ComputerDesktopIcon,
				title: 'Installed',
				value: 95,
			},
			// {
			// 	icon: BookmarkIcon,
			// 	title: 'Recent',
			// },
			// {
			// 	icon: BookmarkIcon,
			// 	title: 'Recent',
			// },
			// {
			// 	icon: BookmarkIcon,
			// 	title: 'Recent',
			// },
		],
	},
	{
		title: 'Friends',
		list: [
			{
				icon: CursorArrowRippleIcon,
				title: 'Activity',
			},
			{
				icon: CheckIcon,
				title: 'Invites',
				value: 37,
			},
			{
				icon: ListBulletIcon,
				title: 'Friends online',
				value: 7,
			},
		],
	},
	{
		title: 'Store',
		list: [
			{
				icon: ShoppingCartIcon,
				title: 'Recent',
			},
		],
	},
];

export const Navbar = () => (
	<nav className="h-screen w-1/6 bg-slate-200/25 p-4">
		<header className="py flex justify-between py-4">
			<Cog6ToothIcon className="h-6 w-6" />
			<Avatar source={'https://tauri.app/img/index/header_dark.svg'} />
			<MagnifyingGlassIcon className="h-6 w-6" />
		</header>
		<div className="space-y-6">
			{SidebarData.map(({ title, list }) => (
				<div>
					<h3 className="mb-2 font-semibold">{title}</h3>
					<ul className="space-y-2">
						{list.map((item) =>
							item.value ? (
								<li className="flex justify-between">
									<div className="flex space-x-2">
										<item.icon className="h-6 w-6" /> <span>{item.title}</span>
									</div>
									<Badge value={item.value} />
								</li>
							) : (
								<li className="flex space-x-2">
									<item.icon className="h-6 w-6" /> <span>{item.title}</span>
								</li>
							)
						)}
					</ul>
				</div>
			))}
		</div>
	</nav>
);
