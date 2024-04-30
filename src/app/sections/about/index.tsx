"use client";

import { useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { TimeLine } from "./TimeLine";
import { HeadingDivider } from "../../../components";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id='about' className='section'>
				<HeadingDivider title='About me' />
				<div className='pt-10 pb-16 max-w-5xl flex flex-col gap-3'>
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
							My name is Federico Zappone. I&lsquo;m a full-stack developer and the co-founder of
							two companies: <a href={"https://www.justanother.cloud/"}>Just Another S.R.L.</a> and
							<a href={"https://bb-smile.net/"}>BB-SMILE S.R.L.</a>.
						</p>
						<p>
							I achieved a Master&lsquo;s Degree in Software Systems Security with the highest
							valuation of 110/110 cum laude with distinction in 2022.
						</p>
						<p>However, my programming journey began during the studies in 2019 with a University project in
							collaboration with a Public Administration entity. This was a funny experience thanks to my
							teammates and here I started my first Machine Learning algorithm but nothing special.
						</p>
						<p className='my-3.5'>
							So, I seriously started working as a one-man IT team for a small company as a freelancer.
							I was responsible for the entire IT infrastructure, the backends, the frontends, the
							databases, and least but not last, the blockchains development that is the main core
							of the projects. I developed webapps using the MEAN stack: MongoDB, Express.js,
							Angular, Node.js and blockchains platforms using the Hyperledger frameworks like
							Hyperledger Fabric. All the project was also deployed using Docker and Kubernetes on
							many machines with different Linux distributions.
						</p>
						<p>
							After the first graduation in Computer Science in 2020, I also won a research grant at
							the University of Molise for the development of a project with the aim of designing
							and implementing a blockchain for food traceability.
						</p>
						<p className='my-3.5'>
							At the middle of the 2022 I achieved the second graduation in Software Systems Security
							and I decided to start my own business, firstly with BB-SMILE S.R.L. a university
							startup from the University of Sapienza and the University of Molise.
						</p>
						<p className='my-3.5'>
							But the greatest satisfaction was the creation of Just Another S.R.L. with my friend
							Luca Fulgenzi. Just Another is focused on finding and developing high-quality software
							solutions using Artificial Intelligence, Machine Learning, Blockchain and so on.
							From the beginning of my career, I faced with a lot of dab systems and applications,
							and no matter how much I tried to ask to refactor, the answers was always the same:
							&quot;There is no time&quot; or &quot;This is not needed&quot; or the worst &quot;But it works&quot;.
							That&lsquo;s why we decided to start a company that creates software with the highest
							quality standards.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
