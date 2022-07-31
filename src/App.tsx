import React, { useEffect, useState } from 'react';
import './App.css';
import Aws from './components/Aws'
import AWS from 'aws-sdk'

function App() {
  const [image, setImage] = useState<File | null>(null)
  const [imgSource, setImgSource] = useState<any>(null)
  const [faceDetails, setFaceDetails] = useState<AWS.Rekognition.FaceDetailList>()

  useEffect(() => {
    const reader01: FileReader = new FileReader();
    const reader: FileReader = new FileReader();

    image && reader01.readAsDataURL(image)

    reader01.addEventListener("load", (): void => {
      setImgSource(reader01.result)
    })

    image && reader.readAsArrayBuffer(image)

    reader.addEventListener("load", (): void => {
      reader.result && setFaceDetails(Aws(reader.result))
    })
  }, [image])

  useEffect(() => {
    console.log(faceDetails)
  }, [faceDetails])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files![0])
  }

  return (
    <div className="App">
      <input id="fileToUpload" type="file" accept="image/*" onChange={(e) => {handleChange(e)}} />
      {imgSource && <img src={imgSource} alt="image" />}
    </div>
  );
}

export default App;
