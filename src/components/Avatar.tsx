import Image from 'next/image';

type AvatarProps = {
	source: string;
};

// TODO: Create dynamic status color
export const Avatar = ({ source }: AvatarProps) => (
	<div className="relative h-8 w-8 rounded-full bg-gray-300">
		<Image src={source} alt={'avatar'} width={32} height={32} />
		<div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500" />
	</div>
);
