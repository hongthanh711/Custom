import { ImgItemType } from '@/types/Img.type'
import { KonvaEventObject } from 'konva/lib/Node'
import { MutableRefObject } from 'react'
import { Image, Layer, Transformer } from 'react-konva'
import useImage from 'use-image'

type Props = {
    img: ImgItemType
    onSelect: (e: KonvaEventObject<MouseEvent>) => void
    transformerRef: MutableRefObject<any>
}

function ImageCanvas({ img, onSelect, transformerRef }: Props) {
    const [image, status] = useImage(img.src)

    return (
        <Layer>
            <Image
                onClick={onSelect}
                onTap={onSelect}
                key={img.id}
                width={img.width}
                x={img.x}
                y={img.y}
                height={img.height}
                alt="img"
                image={image}
                draggable
            />
            <Transformer ref={transformerRef} />
        </Layer>
    )
}

export default ImageCanvas
