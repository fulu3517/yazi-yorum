import React, {useEffect, useState} from 'react'
import axios from 'axios';
const YaziDetay = (props) => {
    const {id} = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([])
    useEffect(() => {
        axios
            .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
            .then(response => {
                setYaziDetayi(response.data)
            });
        axios
            .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
            .then(response => {
                console.log(response.data);
                setYorumlar(response.data)
            })
        // fetch(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        // .then(response => response.json())
        // .then(data => setYaziDetayi(data))
    },[])
    return <>
        <h2 className="ui header">{yaziDetayi.title}</h2>
        <p>{yaziDetayi.created_at}</p>
        <p>{yaziDetayi.content}</p>
        {yorumlar.map((yorum) => {
            
            return (
                <div>
                    <div>
                        <p>{yorum.display_name}</p>
                        <p>{yorum.body}</p>
                        <p>{yorum.created_at}</p>
                    </div>
                    <hr/>
                </div>
                
            )
        })}
    </>
}
export default YaziDetay;
