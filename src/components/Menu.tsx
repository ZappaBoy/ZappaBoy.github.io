"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";
import { useScrollTo } from "../hooks";
import { animate, exit, initial, transition } from "../utils";
import { MENU_OPTIONS } from "../constants";

export function Menu({
											 onClick = () => {
											 }
										 }) {
	let content;
	const { scrollToEl } = useScrollTo();

	const sortAscending = (a: any, b: any) => a.id - b.id;

	const handleOnClick = (e: any) => {
		scrollToEl(e);
		window.setTimeout(() => onClick(), 350);
	};

	content = (
		<m.nav initial={initial} animate={animate} exit={exit} transition={transition} role='menu'>
			<ul className='flex justify-center gap-5 flex-col md:flex-row items-start md:items-center'>
				{MENU_OPTIONS.sort(sortAscending).map((menuItem) => (
					<li key={menuItem.id}>
						<a
							href={menuItem.url}
							title={menuItem.name}
							onClick={handleOnClick}
							className='relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full'
						>
							{menuItem.name}
						</a>
					</li>
				))}
			</ul>
		</m.nav>
	);

	if (MENU_OPTIONS.length === 0) {
		return null;
	}

	return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}
