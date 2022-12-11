import { useRef } from "react";

/* to hide the ghost of the element being dragged */
const EMPTY_IMAGE =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function useGrabScroll() {
	/* ref to store position */
	const dragRef = useRef<number>(0);
	/* ref for the image container */
	const containerRef = useRef<HTMLDivElement>();

	/* scroll the container based on mouse movement */
	function handleMouseMove(event: React.DragEvent<HTMLDivElement>) {
		const { clientX, type } = event;
		const emptyImage = new Image(0, 0);
		emptyImage.src = EMPTY_IMAGE;

		event.dataTransfer?.setDragImage(emptyImage, 0, 0);

		if (type === "dragstart") {
			dragRef.current = clientX;
		} else {
			const move = clientX - dragRef.current;
			containerRef.current.scrollBy({ left: move * -1 });
			dragRef.current = clientX;
		}
	}

	return { handleMouseMove, containerRef };
}

export default useGrabScroll;
