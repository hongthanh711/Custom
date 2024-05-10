import { useAppSelector } from '@/store/hook'
import { Rect, Stage } from 'react-konva'
import ImageCanvas from './imageCanvas'
import { KonvaEventObject } from 'konva/lib/Node'
import { useRef } from 'react'

function Canvas() {
    const imgs = useAppSelector((state) => state.items.img)

    const transformerRef = useRef<any>(null)

    const onSelect = (e: KonvaEventObject<MouseEvent>) => {
        const currentTarget = e.currentTarget
        transformerRef?.current?.node(currentTarget)
    }

    return (
        <Stage drawBorder width={700} height={500} className="bg-white">
            {imgs.map((img) => {
                return (
                    <ImageCanvas
                        onSelect={onSelect}
                        transformerRef={transformerRef}
                        key={img.id}
                        img={img}
                    />
                )
            })}
        </Stage>
    )
}

export default Canvas
