import * as React from 'react'
import { Avatar as AvatarPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

interface AvatarComponentProps {
	src?: string
	alt?: string
	fallback: string
	className?: string
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
	src,
	alt,
	fallback,
	className,
}) => {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			className={cn(
				'relative flex size-8 shrink-0 overflow-hidden rounded-full',
				className,
			)}
		>
			<AvatarPrimitive.Image
				data-slot="avatar-image"
				className="aspect-square size-full"
				src={src}
				alt={alt}
			/>
			<AvatarPrimitive.Fallback
				data-slot="avatar-fallback"
				className="bg-muted flex size-full items-center justify-center rounded-full"
			>
				{fallback}
			</AvatarPrimitive.Fallback>
		</AvatarPrimitive.Root>
	)
}

export default AvatarComponent
