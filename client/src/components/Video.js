import React, { useState } from 'react'
import moment from 'moment'

export default function Video({ form, setVideolist, videolist }) {
    const [addvideo, setAddvideo] = useState({
        'title': '',
        'url': ''
         uploadDate: moment().format('YYYY-MM-DD'),

        uploadTime: ''
    })
    const handelAdd = (e) => {
        e.preventDefault();
        setVideolist([...videolist, addvideo])

        if (addvideo.url.includes('https://www.youtube.com/')) { setVideolist([...videolist, addvideo]) }

        else {

            alert('Please enter vaild address')
        }



        fetch("/videos", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then(res => res.json())
            .then(res => console.log(res))



    }


    const handlechange = (event) => {
        setAddvideo({ ...addvideo, [event.target.name]: event.target.value, uploadTime: moment().format('hh:mm:ss') })
        console.log(addvideo);
    }

    return (
        <div>
            <form onSubmit={handelAdd} style={{ display: form ? 'inline' : 'none' }}>
                <label>Title</label>
                <input name='title' onChange={handlechange} value={addvideo.title} ></input><br />
                <label>URL</label>
                <input name='url' onChange={handlechange} value={addvideo.url}></input><br />
                <button >Add</button>
                <button>Cancle</button>
            </form>

        </div>
    )
}