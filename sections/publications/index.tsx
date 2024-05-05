"use client";

import { useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { HeadingDivider } from "../../components";
import { TimeLine } from "../../components/TimeLine";

export function PublicationsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id='publications' className='section'>
				<HeadingDivider title='Publications' />
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
							Throughout professional endeavors and academic pursuits, I actively engaged in various
							research initiatives and contributed to the development of scholarly publications:
						</p>
					</div>
				</div>

				<TimeLine timelineData={[
					{ year: 2020, text: "The Genesy Model for a Blockchain-Based Fair Ecosystem of Genomic Data" },
					{ year: 2021, text: "What is your Distributed (Hyper)Ledger?" },
					{
						year: 2022,
						text: "Integrating Heuristics and Learning in a Computational Architecture for Cognitive Trading"
					},
					{ year: 2022, text: "Listening to what the system tells us: innovative auditing for distributed systems" },
					{ year: 2022, text: "DELTA-Distributed Elastic Log Text Analyser" }
				]}
				/>

			</section>
		</LazyMotion>
	);
}
