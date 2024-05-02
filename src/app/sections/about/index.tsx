"use client";

import { useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { TimeLine } from "./TimeLine";
import { HeadingDivider } from "../../../components";
import Link from "next/link";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id='about' className='section'>
				<HeadingDivider title='About me' />
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
						<img
							src='/assets/avatar.jpg'
							alt='avatar'
							className='m-auto md:float-right md:ml-6 md:mr-10 md:mt-1 object-cover rounded-md w-56 h-56 md:w-72 md:h-72 lg:w-86 lg:h-86'
						/>
						<p>
							My name is Federico Zappone aka ZappaBoy. I&lsquo;m a software engineer and the co-founder of
							two companies: <a className='text-blue-light' href={"https://www.justanother.cloud/"}>Just Another
							S.R.L.</a> and
							<a className='text-blue-light' href={"https://bb-smile.net/"}> BB-SMILE S.R.L.</a>
						</p>

						<p className='my-3.5'>
							I achieved a Master&lsquo;s Degree in <b>Software Systems Security</b> with the highest valuation of
							110/110 cum laude with distinction in 2022.
						</p>
						<p className='my-3.5'>
							However, my programming journey began during my studies in 2019 with a university project in
							collaboration with a Public Administration entity. This was a great experience thanks to my teammates
							and here I started my first Machine Learning algorithm even if it wasn&lsquo;t anything special.
						</p>
						<p className='my-3.5'>
							So, I seriously started working as a one-man IT team for a small company as a freelancer. I was
							responsible for the entire IT infrastructure, the backends, the frontends, the databases, and last but
							not least, the development of the blockchain which is the main core of the projects.
							I developed web apps using the MEAN stack: MongoDB, Express.js, Angular, Node.js, and blockchain
							platforms using frameworks like Hyperledger Fabric. All the project was also deployed using Docker and
							Kubernetes on many machines with different Linux distributions.
						</p>
						<p className='my-3.5'>
							After my first graduation in Computer Science in 2020, I won a research grant at the University of
							Molise for the development of a project to design and implement a blockchain for food traceability.
						</p>
						<p className='my-3.5'>
							In the middle of 2022, I achieved my second graduation in Software Systems Security and I decided to
							start my own companies, firstly with <b>BB-SMILE S.R.L.</b> a university startup from the University of
							Sapienza and the University of Molise.
						</p>
						<p className='my-3.5'>
							But the greatest satisfaction was the creation of <b>Just Another S.R.L.</b> with my friend
							<a className='text-blue-light' href='https://it.linkedin.com/in/luca-fulgenzi-6a269b20b'> Luca
								Fulgenzi</a>.
							Just Another is focused on finding and developing high-quality software solutions using <b>Artificial
							Intelligence</b>, <b>Machine Learning</b>, <b>Blockchain</b>, and so on. From the beginning of my
							career, I faced a lot
							of bad systems and applications, and no matter how much I tried to ask to refactor, the answers were
							always the same: <i>"There is no time"</i> or <i>"This is not needed"</i> or the worst <i>"But it
							works"</i>.
							<br></br>
							That‘s why we decided to start a company that creates elegant software with very high-quality standards.
						</p>

						<p className='my-3.5'>
							Check out my CV for more details:
						</p>

						<div className='flex gap-3'>
							<Link
								target='_blank'
								href='/assets/cv/Federico_Zappone_en.pdf'
								className='btn bg-gray-600'
								aria-label='English'
							>
								English
							</Link>

							<Link
								target='_blank'
								href='/assets/cv/Federico_Zappone_it.pdf'
								className='btn bg-gray-600'
								aria-label='Italian'
							>
								Italian
							</Link>
						</div>

					</div>

				</div>


				<TimeLine />
			</section>
		</LazyMotion>
	)
		;
}
