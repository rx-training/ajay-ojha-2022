function test(a,b)
{
    return new Promise((resolve,reject)=>{

        if(a>0 && b>0)
        {
            var success={success:200,data:{"A":a,"B":b},message:"inserted"}
            resolve(success)
        }
        else
        {
            var fail={success:503,data:{"A":a,"B":b},message:"not inserted"}
            reject(fail);
            return;
        }

    })
   
}


    test(-2,5).then(resolve=>{console.log(resolve)}).catch(reject=>{
        console.log(reject)
    })



//handle with call back

//handle with promises


