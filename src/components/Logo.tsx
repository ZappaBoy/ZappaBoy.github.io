"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";
import { animate, exit, initial, transition } from "../utils";
import { SITE_STRINGS } from "../constants";

export function Logo() {

	return (
		<LazyMotion features={domAnimation}>
			<m.h3
				className='text-xl md:text-2xl font-bold'
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				<>{SITE_STRINGS.textLogo}</>
			</m.h3>
		</LazyMotion>
	);
}
