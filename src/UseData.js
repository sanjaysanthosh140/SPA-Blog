import { useState, useEffect } from "react"
const UseData = (url) => {
    let [blog, setblog] = useState(null)

    let [load, setload] = useState(true)

    let [err, seterr] = useState(null)
    useEffect(() => {
        
        console.log('use effect is runing')
        setTimeout(() => {
            fetch(url).then((data) => {
                if (!data.ok) {
                    setload(false)
                    console.log(data)
                    throw Error('data cant fetch status 404')

                }
                data.json().then((result) => {
                    seterr(null)
                    console.log(result)
                    setblog(result)
                    setload(false)
                })
            }).catch(err => {
                seterr(err.message)
            })
        }, 1000)
       

    }, [url])

    return { blog, load, err }
}

export default UseData;