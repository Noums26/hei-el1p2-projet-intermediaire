import AWS from 'aws-sdk'

const AnonLog: () => void = () => {
    AWS.config.region = process.env.REACT_APP_AWS_REGION;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: `${process.env.REACT_APP_AWS_CREDENTIALS}`,
    })
}


const Aws = (imageData: ArrayBuffer | string, setFaceDetails: React.Dispatch<any>) => {
    let result: any;
    
    AnonLog();
    console.log("Appel...")

    let rekognition: AWS.Rekognition = new AWS.Rekognition();
    let params = {
        Image: {Bytes: imageData},
        Attributes: ['ALL']
    }

    rekognition.detectFaces(params, (err, res) => {
        if(err){
            console.log(err)
        } else {
            setFaceDetails(res.FaceDetails)
        }
    })
};

export default Aws;