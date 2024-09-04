type TechStackProps = {
	techs: Array<string>
};

export default function TechStack({ techs=[""] }: TechStackProps) {

	return (
		<div className="flex gap-3">
			{techs.map(tech => (
				<img className="w-auto h-6" src={`/techs/${tech.toLocaleLowerCase()}.png`} alt={tech} title={tech.replaceAll("-", " ")} />
			))}
		</div>
	);
};
