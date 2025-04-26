'use client'

import { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss';
import { UploadCloud } from 'lucide-react'
import Image from 'next/image';

export function Form() {
    const [image, setImage] = useState<File>()
    const[previewImage, setPreviewImage] = useState('')


    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {

            const image = e.target.files[0]



            if(image.type !== 'image/png' && image.type !== 'image/png') {
            console.log('Formato de imagem inválido')
            return
        }

        setImage(image)
        setPreviewImage(URL.createObjectURL(image))
    }
    }



    return (
        <main className={styles.container}>

            <h1>Novo Produto</h1>

            <form className={styles.form}>

                <label className={styles.labelImage}>
                    <span>
                        <UploadCloud size={30} color='#fff' />
                    </span>
                    <input type="file"
                        accept='image/png, image/jpeg'
                        required
                        onChange={handleFile}
                    />

                    {previewImage && (
                        <Image
                         alt='Imagem do produto'
                            src={previewImage}
                            className={styles.imagePreview}
                            fill={true}
                            quality={100}
                            priority={true}
                        />
                    )}
                </label>

            </form>

        </main>

    )
}