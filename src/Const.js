function API_URL(){
    if (process.env.NODE_ENV === 'production') 
        {
            return 'http://eurosapi-prod.eu-west-3.elasticbeanstalk.com/api/'
        }
    else 
        {
            return 'http://localhost:65020/api/'
        }
}

export default API_URL;