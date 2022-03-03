import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SetGetAPI } from '../js/SetGetAPI';
import { Context } from './Context';

export const UserPost = () => {
    const name = useParams()
    const { setUserPostData, userPostData, isLogin } = React.useContext(Context);
    // const [single, setSingle] = React.useState([]);
    const single = [];
    // console.log(name);   
    const { getAPi } = SetGetAPI();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        } else {
            getAPi(fetch("http://localhost:3000/posts"), setUserPostData);
            userPostData.map(post => post.a_name !== name.id ? console.log(post) : single.push(post));

            setUserPostData(single);
        }

    }, []);
    return (
        <div>UserPost
            {
                userPostData.map(post => (
                    <>
                        <h2>{post.post_ttile}</h2>
                        <img src={post.post_body} />
                    </>
                ))
            }
        </div>
    )
}
