import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PostDetail.module.css';

const PostDetail = ({ onBack }) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://seaport.dolceamaro.bg/wp-json/wp/v2/posts/${id}?_embed`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    if (loading) {
        return <div className={styles.loader}>Зареждане...</div>;
    }

    return (
        <div className={styles.postDetail}>
            <button onClick={onBack} className={styles.btn}>Назад</button>
            <h2 className={styles.title}>{post.title.rendered}</h2>
            {post._embedded && post._embedded['wp:featuredmedia'] && (
                <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    className={styles.image}
                />
            )}
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
};

export default PostDetail;

