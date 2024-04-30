import React, { Suspense } from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import { HeadingDivider, Loader } from "../../../components";
import { Projects } from "../../../components/Projects";
import { PROJECTS } from "../../../constants";


export function ProjectsSection() {


	return (
		<LazyMotion features={domAnimation}>
			<section id='projects' className='section'>
				<HeadingDivider title='Latest projects' />
				<div className='h-10 md:h-14' />

				<div className='flex flex-col items-center gap-8 md:gap-14'>
					<Suspense
						fallback={
							<div className='flex-center'>
								<Loader />
							</div>
						}
					>
						<Projects projects={PROJECTS} />
					</Suspense>
				</div>
			</section>
		</LazyMotion>
	);
}
