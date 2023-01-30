import { Avatar } from './Avatar';

export const FriendsNavbar = () => (
	<nav className="h-screen w-1/6 space-y-4 bg-slate-200/25 p-4">
		<h3 className="uppercase">Gog</h3>
		<ul className="space-y-2">
			{[...Array(5)].map((item) => (
				<li className="flex space-x-2" key={item}>
					<Avatar source="https://xsgames.co/randomusers/avatar.php?g=pixel" />
					<div className="flex flex-col">
						<div className="flex space-x-1">
							<h3>ArthurSlay</h3>{' '}
							<span className="text-gray-800/75">- GoG</span>
						</div>
						<p className="text-xs">Playing The Witcher 3: Wild Hunt</p>
					</div>
				</li>
			))}
		</ul>
	</nav>
);
