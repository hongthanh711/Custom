import { ImgItemType } from '@/types/Img.type'
import { useEffect, useRef } from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'

type Props = {
    img: ImgItemType
    isSelected?: boolean
    onSelect?: () => void
    // onChange
}

function ImageCanvas({ img, isSelected, onSelect }: Props) {
    const [image, status] = useImage(img.src)

    const shapeRef = useRef()
    const trRef = useRef()

    useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current])
            trRef.current.getLayer().batchDraw()
        }
    }, [isSelected])

    // let imageWidth = 300
    // let imageHeight = 0

    // if (image) {
    //     imageHeight = (imageWidth * image.naturalHeight) / image.naturalWidth
    // }

    return (
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
    )
}

export default ImageCanvas
