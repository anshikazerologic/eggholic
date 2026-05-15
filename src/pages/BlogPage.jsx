import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios'; // You can use fetch if you prefer
import NavBar from '../components/Navbar';
import './BlogPage.css';

const BlogPage = () => {
  const { slug } = useParams(); // Grabs the slug from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API Call to your PHP backend
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.get(`/news.php?slug=${slug}`);
        
        if (response.data) {
          setBlog(response.data);
        } else {
          setError("Blog post not found.");
        }
      } catch (err) {
        setError("Failed to fetch blog content.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!blog) return null;

  return (
    <HelmetProvider>
      <NavBar />

      <Helmet>
        <title>{blog.meta_title || blog.title}</title>
        <meta name="description" content={blog.meta_description} />
        <link rel="canonical" href={`https://eggholic.com/news/${slug}`} />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image */}
        <img 
          src={blog.cover_image} 
          alt={blog.title} 
          className="pop-cover-image"
        />

        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">{blog.title}</h1>
            {blog.sub_title && <h2 className="pop-sub-title">{blog.sub_title}</h2>}
          </header>

          <article className="pop-content-section">
            {/* If your admin panel sends HTML content (rich text), 
              use dangerouslySetInnerHTML. Otherwise, map through sections.
            */}
            <div 
              className="pop-dynamic-content"
              dangerouslySetInnerHTML={{ __html: blog.content_html }} 
            />
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default BlogPage;