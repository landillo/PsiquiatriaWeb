import { useState } from "react";
import "./Styles.css";
import { blogPosts } from "../../helpers/data/dataBlog";
import { ServiceModal } from "../../components/ServiceModal/ServiceModal"; // Reutilizamos el modal 😉

export const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const openModal = (post: any) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  return (
    <section className="blog-section">
      <h2 className="blog-title">Artículos y Reflexiones</h2>
      <p className="blog-subtitle">
        Lecturas breves sobre salud mental, bienestar y desarrollo personal.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button
                className="blog-button"
                onClick={() => openModal(post)}
              >
                Leer más
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <ServiceModal
          isOpen={!!selectedPost}
          onClose={closeModal}
          title={selectedPost.title}
          description={selectedPost.description}
          image={selectedPost.image}
        />
      )}
    </section>
  );
};
