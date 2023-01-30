type BadgeProps = {
	value: number;
};

export const Badge = ({ value }: BadgeProps) => (
	<div className="rounded-2xl bg-slate-600/20 px-2">
		<span className="text-sm">{value}</span>
	</div>
);
