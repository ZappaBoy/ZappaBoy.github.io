"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { WelcomeAnimation } from "./IntroAnimation";
import { useScrollTo } from "../../hooks";
import { useMediaQuery } from "../../utils";

export function WelcomeSection() {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollToEl } = useScrollTo();
	const isTabletUp = useMediaQuery("min-width: 768px");

	let [count, setCount] = useState(0);
	const [text] = useState([
		"graduated in Software Systems Security",
		"am a full-stack software engineer",
		"code blockchains and AI models",
		"trade automatically with my systems"
	]);

	const onClick = (e: MouseEvent) => scrollToEl(e);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1);

			if (count === 3) {
				setCount(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [count]);

	return (
		<LazyMotion features={domAnimation}>
			<section id='intro' className='section' ref={introRef}>
				<div className='grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center'>
					<div className='py-5 md:py-10'>
						<h1
							tabIndex={0}
							ref={ref}
							className='text-3xl md:text-5xl xl:text-6xl font-bold'
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<p>
								Hi, I&apos;m <mark>ZappaBoy</mark> a software engineer.
							</p>
						</h1>

						<div className='mt-3 relative flex flex-col overflow-hidden'>
							<p
								ref={ref}
								className='text-[17px] md:text-2xl transform-none opacity-100'
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
							>
								I
								<span
									className='absolute flex flex-col transition-all duration-500 ease-in-expo'
									style={{
										top:
											count === 0
												? "0"
												: count === 1
													? "-100%"
													: count === 2
														? "-200%"
														: count === 3
															? "-300%"
															: "0",
										left: "13px"
									}}
								>
									{text.map((element) => (
										<TextElement key={element} element={element} />
									))}
								</span>
							</p>
						</div>

						<p
							tabIndex={0}
							ref={ref}
							className='mt-3 mb-10 text-gray-500 text-xl'
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Would you like to know more about me?
						</p>
						<div
							ref={ref}
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<Link
								href='#about'
								onClick={onClick}
								tabIndex={0}
								className='btn'
								aria-label='Know me better'
							>
								Know me better
							</Link>
						</div>
					</div>

					{isTabletUp && <WelcomeAnimation />}
				</div>
			</section>
		</LazyMotion>
	);
}

type TextElementProps = {
	element: string;
};

function TextElement(props: TextElementProps) {
	const firstWord = <b>{props.element.split(" ").at(0)}</b>;
	const restWords = props.element.split(" ").slice(1).join(" ");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<span
			tabIndex={0}
			ref={ref}
			className='text-[17px] md:text-2xl'
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{firstWord} {restWords}
		</span>
	);
}
