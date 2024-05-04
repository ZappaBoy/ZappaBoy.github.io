"use client";

import { AboutSection, ProjectsSection, TechnologiesSection, WelcomeSection } from "./sections";

export default function Page() {
	return (
		<div className='container-md'>
			<WelcomeSection />
			<AboutSection />
			<TechnologiesSection />
			<ProjectsSection />
		</div>
	);
}
