function API_URL(){
    if (process.env.NODE_ENV === 'production') 
        {
            return 'http://eurosapi-prod.eu-west-3.elasticbeanstalk.com/api/'
        }
    else 
        {
            return 'http://192.168.1.13:8088/api/'//http://localhost:65020/api/'
        }
}

export default API_URL;