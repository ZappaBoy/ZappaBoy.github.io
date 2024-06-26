import { ProjectModel } from "../models/project.model";
import { ProjectItem } from "../sections/projects/ProjectItem";

interface ProjectsProps {
	projects: ProjectModel[];
}

export function Projects(props: ProjectsProps) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
			{props.projects?.map((project: ProjectModel, index: number) => (
				<ProjectItem key={project.id} project={project} index={index} />
			))}
		</div>
	);
}
