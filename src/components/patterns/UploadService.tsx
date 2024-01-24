import {useState, useRef} from 'react'
import { Wrapper } from "../../assets/wrappers/UploadService.styles"
import image from '../../assets/images/image.svg'
import x from '../../assets/images/x.svg'

interface Image {
    name: string;
    url: string;
  }
const UploadService = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const SelectFiles = () => {
        fileInputRef.current!.click();
      }
    const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;
      
        for (let i = 0; i < files.length; i++) {
          if (files[i].type.split('/')[0] !== 'image') continue;
          if (!images.some((e) => e.name === files[i].name)) {
            setImages((prevImages) => [
              ...prevImages,
              {
                name: files[i].name,
                url: URL.createObjectURL(files[i]),
              },
            ]);
          }
        }
      };
    const deleteImage = (index: number) =>{
        setImages((prevImages)=>
            prevImages.filter((_,i)=> i!== index)
        )
    }
    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDragging(!isDragging)
        event.dataTransfer.dropEffect = 'copy'
    }
    const  onDragLeave= (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDragging(false)
        event.dataTransfer.dropEffect = 'copy'
    }
    const  onDrop= (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDragging(false)
        const files = event.dataTransfer.files
        console.log(files);
        
    }
  return (
    <Wrapper>
        <p className='upload-label'>Image</p>
        <main onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
            <p>Drop files here or</p>
            <div className='upload-button'>
                <button onClick={SelectFiles} className='upload-service-button'>
                    <img src={image}/>
                    <p>Upload Image</p>
                </button>
                <input type="file" multiple ref={fileInputRef} onChange={onFileSelect} className='file' style={{ display: 'none' }}/>
            </div>
        </main>
        <div className="container">
            {
                images.map((images, index)=>{
                    return(
                        <div className="image" key={index}>
                            <span className="delete" onClick={()=> deleteImage(index)}>
                                <img src={x}/>
                            </span>
                            <img src={images.url} alt={images.name}/>
                        </div>
                        
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

export default UploadService