import * as React from 'react'
import { Separator as SeparatorPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

function Separator({
	className,
	orientation = 'horizontal',
	decorative = true,
	...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator-root"
			decorative={decorative}
			orientation={orientation}
			style={{
				// Inline fallback colors to ensure immediate rendering
				backgroundColor: 'var(--border, #d6d3c9)',
				borderColor: 'var(--border, #d6d3c9)',
			}}
			className={cn(
				'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
				// Additional classes for enhanced robustness
				'[data-theme="dark"] &:bg-[#3f3c49] [&[data-theme="dark"]]:bg-[#3f3c49]',
				className,
			)}
			{...props}
		/>
	)
}

export { Separator }
