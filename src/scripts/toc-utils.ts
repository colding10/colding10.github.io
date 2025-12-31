/**
 * Shared utilities for Table of Contents components
 */

export interface HeadingRegion {
	id: string
	start: number
	end: number
}

/**
 * Builds an array of heading regions for scroll tracking
 */
export function buildHeadingRegions(
	headings: HTMLElement[],
): HeadingRegion[] {
	if (headings.length === 0) return []

	return headings.map((heading, index) => {
		const nextHeading = headings[index + 1]
		return {
			id: heading.id,
			start: heading.offsetTop,
			end: nextHeading ? nextHeading.offsetTop : document.body.scrollHeight,
		}
	})
}

/**
 * Gets IDs of headings currently visible in the viewport
 */
export function getVisibleHeadingIds(
	headings: HTMLElement[],
	regions: HeadingRegion[],
	headerOffset: number,
): string[] {
	if (headings.length === 0) return []

	const viewportTop = window.scrollY + headerOffset
	const viewportBottom = window.scrollY + window.innerHeight
	const visibleIds = new Set<string>()

	const isInViewport = (top: number, bottom: number) =>
		(top >= viewportTop && top <= viewportBottom) ||
		(bottom >= viewportTop && bottom <= viewportBottom) ||
		(top <= viewportTop && bottom >= viewportBottom)

	headings.forEach((heading) => {
		const headingBottom = heading.offsetTop + heading.offsetHeight
		if (isInViewport(heading.offsetTop, headingBottom)) {
			visibleIds.add(heading.id)
		}
	})

	regions.forEach((region) => {
		if (region.start <= viewportBottom && region.end >= viewportTop) {
			const heading = document.getElementById(region.id)
			if (heading) {
				const headingBottom = heading.offsetTop + heading.offsetHeight
				if (
					region.end > headingBottom &&
					(headingBottom < viewportBottom || viewportTop < region.end)
				) {
					visibleIds.add(region.id)
				}
			}
		}
	})

	return Array.from(visibleIds)
}

/**
 * Gets all prose headings from the document
 */
export function getProseHeadings(): HTMLElement[] {
	return Array.from(
		document.querySelectorAll<HTMLElement>(
			'.prose h2, .prose h3, .prose h4, .prose h5, .prose h6',
		),
	)
}

/**
 * Updates scroll area mask classes based on scroll position
 */
export function updateScrollMask(
	scrollArea: HTMLElement,
	maskTarget: HTMLElement,
	topClass: string,
	bottomClass: string,
	threshold = 5,
): void {
	const { scrollTop, scrollHeight, clientHeight } = scrollArea
	const isAtTop = scrollTop <= threshold
	const isAtBottom = scrollTop >= scrollHeight - clientHeight - threshold

	maskTarget.classList.toggle(topClass, !isAtTop)
	maskTarget.classList.toggle(bottomClass, !isAtBottom)
}

/**
 * Scrolls a container to center an active item
 */
export function scrollToCenter(
	container: HTMLElement,
	activeItem: Element,
): void {
	const { top: containerTop, height: containerHeight } =
		container.getBoundingClientRect()
	const { top: itemTop, height: itemHeight } =
		activeItem.getBoundingClientRect()

	const currentItemTop = itemTop - containerTop + container.scrollTop
	const targetScroll = Math.max(
		0,
		Math.min(
			currentItemTop - (containerHeight - itemHeight) / 2,
			container.scrollHeight - container.clientHeight,
		),
	)

	if (Math.abs(targetScroll - container.scrollTop) > 5) {
		container.scrollTop = targetScroll
	}
}

/**
 * Creates an Astro lifecycle controller for components
 */
export function createLifecycleController(
	init: () => void,
	cleanup: () => void,
): void {
	document.addEventListener('astro:page-load', init)
	document.addEventListener('astro:after-swap', () => {
		cleanup()
		init()
	})
	document.addEventListener('astro:before-swap', cleanup)
}
