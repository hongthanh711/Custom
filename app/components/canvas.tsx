import { useAppSelector } from '@/store/hook'
import { Stage, Layer } from 'react-konva'
import ImageCanvas from './imageCanvas'

function Canvas() {
    const imgs = useAppSelector((state) => state.items.img)

    return (
        <Stage drawBorder width={700} height={500} className="bg-white">
            <Layer>
                {imgs.map((img) => {
                    return <ImageCanvas key={img.id} img={img} />
                })}
            </Layer>
        </Stage>
    )
}

export default Canvas
