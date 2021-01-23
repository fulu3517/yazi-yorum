import React, {useEffect, useState} from 'react'
import axios from 'axios';
const YaziDetay = (props) => {
    const {id} = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    useEffect(() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then(response => setYaziDetayi(response.data))
        // fetch(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        // .then(response => response.json())
        // .then(data => setYaziDetayi(data))
    })
    return <>
    <h2 className="ui header">{yaziDetayi.title}</h2>
    <p>{yaziDetayi.created_at}</p>
    <p>{yaziDetayi.content}</p>
    </>   
}
export default YaziDetay;
