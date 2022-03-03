import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SetGetAPI } from '../js/SetGetAPI';
import { Context } from './Context'

export const Post = () => {
    const { isLogin, postData, setPostData } = React.useContext(Context);
    const { getAPi } = SetGetAPI();

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLogin) {
            navigate("/login")
        } else {
            getAPi(fetch("http://localhost:3000/posts"), setPostData);
        }
    })
    return (
        <div >
            {postData.map(post => (
                <>
                    <h2>{post.post_ttile}</h2>
                    <img src={post.post_body} />

                </>
            ))}
        </div>
    )
}
