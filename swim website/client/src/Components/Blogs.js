import React from 'react';
import Navbar from './Navbar';

const Blogs = () => {
    const blogs = [
        {
            title: "Updates",
            description: "Stay informed with the latest updates and news about our swimming classes. We regularly post about new class schedules, special events, and exciting offers. Don't miss out on any important information!"
        },
        {
            title: "Holidays and Day Offs",
            description: "Learn about our holiday schedules and planned day-offs. We want to ensure you have a smooth swimming experience, and this blog keeps you informed about any changes to our regular class timings during holidays and vacations."
        }
    ];

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: "24px", padding: '14px' }}>
                {blogs.map((blog, index) => (
                    <div className="blog-container" key={index}>
                        <div className="box one">
                            <div className="details">
                                <div className="topic">{blog.title}</div>
                                <p>{blog.description}</p>
                            </div>
                            <div className="button1">
                                <button>View more</button>
                            </div>
                        </div>
                        <div className="box two">
                            <div className="image-box">
                                <div className="image">
                                    {/* <img src={CameraImage} alt="" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
