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
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-7xl flex flex-col gap-3">
					<div
						tabIndex={0}
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<img
							src="/assets/avatar.jpg"
							alt="avatar"
							className="m-auto md:float-right md:ml-6 md:mr-10 md:mt-1 object-cover rounded-sm w-56 h-56 md:w-72 md:h-72 lg:w-86 lg:h-86"
						/>
						<p>
							My name is Federico Zappone, also known as <strong>ZappaBoy</strong>. I am a{" "}
							<strong>Tech Lead</strong> @{" "}
							<a className="text-blue-light" href="https://www.artificialy.com/">
								Artificialy SA
							</a>
							, and the co-founder of two innovative tech companies:
							<a className="text-blue-light" href="https://www.justanother.cloud/">
								Just Another S.R.L.
							</a>{" "}
							and
							<a className="text-blue-light" href="https://bb-smile.net/">
								BB-SMILE S.R.L.
							</a>
							.
						</p>

						<p className="my-3.5">
							I earned a <strong>Master’s Degree in Software Systems Security</strong> with the
							highest honors (110/110 cum laude) in 2022, demonstrating my expertise in advanced
							cybersecurity and software engineering.
						</p>

						<p className="my-3.5">
							My programming journey began in 2019 during a university project in collaboration with
							a Public Administration entity, where I developed my first{" "}
							<strong>Machine Learning algorithms</strong> and gained hands-on experience in
							real-world software solutions.
						</p>

						<p className="my-3.5">
							Following this, I started working as a <strong>freelance software developer</strong>{" "}
							for a small company, managing the full IT infrastructure and developing{" "}
							<strong>web applications</strong> and <strong>blockchain solutions</strong>, which
							became the core of the projects I handled.
						</p>

						<p className="my-3.5">
							In 2020, I received a <strong>research grant</strong> from the University of Molise to
							design and develop a blockchain system for the <i>Nova Tellus</i> project, further
							solidifying my expertise in innovative decentralized technologies.
						</p>

						<p className="my-3.5">
							After graduating in mid-2022, I co-founded <strong>BB-SMILE S.R.L.</strong>, a spinoff
							of Sapienza and Molise Universities, and later focused on{" "}
							<strong>Just Another S.R.L.</strong>, delivering high-quality, elegant software
							solutions using cutting-edge technologies such as{" "}
							<strong>Artificial Intelligence (AI)</strong> and <strong>Blockchain</strong>.
						</p>

						<p className="my-3.5">
							To expand my expertise, I joined Storm Reply, diving into{" "}
							<strong>cloud computing</strong> and working with major Italian enterprises, including
							Generali S.p.A., Enel S.p.A., InfoCamere, Terna S.p.A., and Intel, enhancing my skills
							in enterprise-level software architecture.
						</p>

						<p className="my-3.5">
							Most recently, I relocated to Lugano, Switzerland, to work at{" "}
							<strong>Artificialy SA</strong> as a <strong>Software Engineer</strong> and later{" "}
							<strong>Tech Lead</strong>. There, thanks to the talented teams I worked with, we
							develop AI-driven solutions across multiple industries, primarily serving Swiss
							companies.
						</p>

						<p className="my-3.5">Check out my CV for more details:</p>

						<div className="flex gap-3">
							<Link
								target="_blank"
								href="/assets/cv/Federico_Zappone_en.pdf"
								className="btn"
								aria-label="English"
							>
								English
							</Link>

							<Link
								target="_blank"
								href="/assets/cv/Federico_Zappone_it.pdf"
								className="btn"
								aria-label="Italian"
							>
								Italian
							</Link>
						</div>
					</div>
				</div>

				<TimeLine
					timelineData={[
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
