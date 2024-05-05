"use client";

import { useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { TimeLine } from "../../components/TimeLine";
import { HeadingDivider } from "../../components";
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
							className='m-auto md:float-right md:ml-6 md:mr-10 md:mt-1 object-cover rounded-sm w-56 h-56 md:w-72 md:h-72 lg:w-86 lg:h-86'
						/>
						<p>
							My name is Federico Zappone aka ZappaBoy. I&lsquo;m a software engineer and the
							co-founder of two companies:{" "}
							<a className='text-blue-light' href={"https://www.justanother.cloud/"}>
								Just Another S.R.L.
							</a>{" "}
							and
							<a className='text-blue-light' href={"https://bb-smile.net/"}>
								{" "}
								BB-SMILE S.R.L.
							</a>
						</p>

						<p className='my-3.5'>
							I achieved a Master&lsquo;s Degree in <b>Software Systems Security</b> with the
							highest valuation of 110/110 cum laude with distinction in 2022.
						</p>
						<p className='my-3.5'>
							However, my programming journey began during my studies in 2019 with a university
							project in collaboration with a Public Administration entity. This was a great
							experience thanks to my teammates and here I started my first Machine Learning
							algorithm.
						</p>
						<p className='my-3.5'>
							So, I seriously started working for a small company as a freelancer. I was responsible
							for the entire IT infrastructure and development of web applications and blockchains
							which is the main core of the projects.
						</p>
						<p className='my-3.5'>
							In 2020, I won a research grant at the University of Molise for the design and
							development of a blockchain for the <i> Nova Tellus</i> project.
						</p>
						<p className='my-3.5'>
							After graduation In the middle of 2022, I decided to start my own companies, firstly
							with <b>BB-SMILE S.R.L.</b> a spinoff from both Sapienza and Molise Universities.
						</p>
						<p className='my-3.5'>
							But the greatest satisfaction was the creation of <b>Just Another S.R.L.</b> with my
							friend
							<a
								className='text-blue-light'
								href='https://it.linkedin.com/in/luca-fulgenzi-6a269b20b'
							>
								{" "}
								Luca Fulgenzi
							</a>
							. Having acquired expertise over the years, I therefore decided to start a company that
							creates elegant software with very high-quality standards using software solutions
							for innovation (<b>AI</b>, <b>Blockchain</b>, etc.).
						</p>

						<p className='my-3.5'>Check out my CV for more details:</p>

						<div className='flex gap-3'>
							<Link
								target='_blank'
								href='/assets/cv/Federico_Zappone_en.pdf'
								className='btn'
								aria-label='English'
							>
								English
							</Link>

							<Link
								target='_blank'
								href='/assets/cv/Federico_Zappone_it.pdf'
								className='btn'
								aria-label='Italian'
							>
								Italian
							</Link>
						</div>
					</div>
				</div>

				<TimeLine timelineData={[
					{ year: 2019, text: "Site for Public Administration" },
					{ year: 2019, text: "Blockchain, web developer and sysadmin" },
					{ year: 2021, text: "Research grant on blockchain development" },
					{ year: 2022, text: "Co-founded BB-SMILE S.R.L." },
					{ year: 2022, text: "Co-founded Just Another S.R.L." }
				]}
				/>
			</section>
		</LazyMotion>
	);
}
