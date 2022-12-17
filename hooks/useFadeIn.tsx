import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAnimationControls } from "framer-motion";

/* hook for fade-in effect on ontersection */

function useFadeIn() {
	// to detect route change
	const router = useRouter();
	// to start the animation
	const controls = useAnimationControls();
	// ref to store the observer
	const observer = useRef<IntersectionObserver>();
	// ref to the element itself
	const elemRef = useRef<HTMLDivElement>();

	useEffect(() => {
		// instantiate the observer
		observer.current = new IntersectionObserver(handleMount, {
			threshold: 0.5,
		});
		// start to observe on first mount and on route change
		observe();

		return () => {
			// clean up
			observer.current && observer.current.disconnect();
		};
	}, [router.pathname]);

	function observe() {
		observer.current.observe(elemRef.current);
		// role back to the begining
		controls.start("initial");
	}

	const handleMount: IntersectionObserverCallback = function (e) {
		if (e[0].isIntersecting) {
			// restart the animation
			controls.start("animate");
			// stop the observer
			observer.current.disconnect();
		}
	};

	return { elemRef, controls };
}

export default useFadeIn;
