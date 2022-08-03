import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Aws from './components/Aws'
import ImgNDetails from './components/ImgNDetails';
import ImgNoDetails from './components/ImgNoDetails';
import WaitingImg from './components/WaitingImg';

function App() {
  const [image, setImage] = useState<File | null>(null)
  const [imgSource, setImgSource] = useState<any>(null)
  const [faceDetails, setFaceDetails] = useState<any>(null)

  useEffect(() => {
    const reader01: FileReader = new FileReader();
    const reader: FileReader = new FileReader();

    image && reader01.readAsDataURL(image)

    reader01.addEventListener("load", (): void => {
      setImgSource(reader01.result)
    })

    image && reader.readAsArrayBuffer(image)

    reader.addEventListener("load", (): void => {
      reader.result && Aws(reader.result, setFaceDetails)
    })
  }, [image])

  useEffect(() => {
    faceDetails !== null && console.log(faceDetails)
    faceDetails !== null && faceDetails.length!=0 && console.log(Object.keys(faceDetails[0]))
  }, [faceDetails])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files![0])
  }

  return (
    <div className="App">
      <Container maxWidth="lg">
        <input id="</Container>fileToUpload" className='inputFile' type="file" accept="image/*" onChange={(e) => {handleChange(e)}} />
        {!imgSource && <WaitingImg />}
        {faceDetails!==null && faceDetails.length!=0 && <ImgNDetails imgSource={imgSource} data={faceDetails[0]}/>}
        {faceDetails!==null && faceDetails.length==0 && <ImgNoDetails imgSource={imgSource} />}

        {/* <Grid container spacing={1} justifyContent='center'>
          <Grid item md={5}>
            <Paper>
              {imgSource && <img src={imgSource} alt="image" />}
            </Paper>
          </Grid>
          <Grid item md={5}>
            <Paper>
              test
            </Paper>
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
}

export default App;
