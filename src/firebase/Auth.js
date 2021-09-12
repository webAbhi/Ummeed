import fire from './config';
const handleSocialLogin = (provider) =>{
    return fire.
    auth().
    signInWithPopup(provider).then((res)=>{
        return res.user;
    })
    .catch((err)=>{
        return err;
    })
}

export default handleSocialLogin;