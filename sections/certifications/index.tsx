"use client";

import { useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { HeadingDivider } from "../../components";
import { TimeLine } from "../../components/TimeLine";

export function CertificationsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id='certifications' className='section'>
				<HeadingDivider title='Certifications and Achievements' />
				<div className='pt-10 pb-16 max-w-7xl flex flex-col gap-3'>
					<div
						tabIndex={0}
						ref={ref}
						className='text-xl font-light leading-relaxed'
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							Throughout my career, I've acquired certifications in both information engineering and education,
							augmenting my knowledge in these domains. Additionally, I participated in some competitions and
							hackathons,
							where I was able to obtain good results with my teams.
						</p>

					</div>
				</div>

				<TimeLine timelineData={[
					{ year: 2020, text: "CyberChallenge CTF - 3rd place at University of Molise" },
					{ year: 2020, text: "GlobalGameJam - 2nd place at University of Molise" },
					{ year: 2022, text: "24-CFU Teaching qualification" },
					{ year: 2022, text: "Information Engineer qualification" }
				]}
				/>

			</section>
		</LazyMotion>
	);
}
