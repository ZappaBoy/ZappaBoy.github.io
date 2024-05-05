"use client";

import {
	AboutSection,
	CertificationsSection,
	ProjectsSection,
	PublicationsSection,
	TechnologiesSection,
	WelcomeSection
} from "../sections";
import React from "react";

export default function Page() {
	return (
		<div className='container-md'>
			<WelcomeSection />
			<AboutSection />
			<TechnologiesSection />
			<PublicationsSection />
			<CertificationsSection />
			<ProjectsSection />
		</div>
	);
}
