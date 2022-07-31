import AWS from 'aws-sdk'

const AnonLog: () => void = () => {
    AWS.config.region = process.env.REACT_APP_AWS_REGION;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: `${process.env.REACT_APP_AWS_CREDENTIALS}`,
    })
}


const Aws = (imageData: ArrayBuffer | string): any => {
    
    AnonLog();

    let rekognition: AWS.Rekognition = new AWS.Rekognition();
    let params = {
        Image: {Bytes: imageData},
        Attributes: ['ALL']
    }

    rekognition.detectFaces(params, (err, res) => {
        if(err){
            console.log(err)
        } else {
            return res.FaceDetails
        }
    })
};

export default Aws;