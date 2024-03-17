import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog

    console.log(blog)

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full h-96 mb-8 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-5'>
                    <img className='w-14 rounded-full h-14' src={author_img} alt="" />
                    <div className=''>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex justify-between items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl '><CiBookmark></CiBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hashtags} </a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;