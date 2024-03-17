import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog

    console.log(blog)

    return (
        <div className='mb-20'>
            <img className='w-full h-96 mb-8 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <img className='w-14 rounded-full h-14' src={author_img} alt="" />
                    <div className=''>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button><FaBeer></FaBeer></button>

                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hashtags} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;