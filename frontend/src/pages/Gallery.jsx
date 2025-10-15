import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./Academic.css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Static gallery data
  const galleryItems = [
    {
      _id: '1',
      title: 'Beauty & Wellness Course',
      imageUrl: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400',
      description: 'Students practicing professional beauty techniques in our state-of-the-art beauty lab.',
      category: 'courses',
      createdAt: '2024-01-15'
    },
    {
      _id: '2',
      title: 'Modern Campus Building',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
      description: 'Our beautiful campus with modern architecture and excellent facilities.',
      category: 'facilities',
      createdAt: '2024-01-20'
    },
    {
      _id: '3',
      title: 'Graduation Ceremony 2024',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: 'Celebrating the success of our graduates at the annual convocation ceremony.',
      category: 'events',
      createdAt: '2024-02-10'
    },
    {
      _id: '4',
      title: 'Hair Styling Workshop',
      imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      description: 'Advanced hair styling techniques being taught by industry professionals.',
      category: 'courses',
      createdAt: '2024-02-15'
    },
    {
      _id: '5',
      title: 'Library & Study Area',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: 'Our well-equipped library providing a peaceful environment for study and research.',
      category: 'facilities',
      createdAt: '2024-02-20'
    },
    {
      _id: '6',
      title: 'Cultural Festival',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400',
      description: 'Students showcasing their talents at our annual cultural festival.',
      category: 'events',
      createdAt: '2024-03-01'
    },
    {
      _id: '7',
      title: 'Skincare & Spa Course',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      description: 'Professional skincare and spa therapy training with latest equipment.',
      category: 'courses',
      createdAt: '2024-03-10'
    },
    {
      _id: '8',
      title: 'Computer Lab',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
      description: 'Modern computer lab with latest software for digital beauty courses.',
      category: 'facilities',
      createdAt: '2024-03-15'
    },
    {
      _id: '9',
      title: 'Student Activities',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400',
      description: 'Students engaged in various extracurricular activities and team building.',
      category: 'general',
      createdAt: '2024-03-20'
    }
  ];

  // 🟢 Helper: Convert Google Drive link (keeping for future use)
  const convertDriveLink = (url) => {
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
    return url; // if not a Drive link, keep it same
  };

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'courses', label: 'Courses' },
    { value: 'events', label: 'Events' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'general', label: 'General' }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <Layout>
      <section className="academics-section">
        {/* Hero Section */}
        <div className="section-block" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#8b5e3c', marginBottom: '15px' }}>
            Gallery
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5c4a3d', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Explore our vibrant campus life, state-of-the-art facilities, and memorable moments from courses and events at AngelLife International Institute.
          </p>
        </div>

        {/* Category Filter */}
        <div className="section-block" style={{ background: '#fff', padding: '30px', borderRadius: '12px', marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '20px', color: '#8b5e3c' }}>Filter by Category</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  background: selectedCategory === category.value ? '#8b5e3c' : '#f9f6f2',
                  color: selectedCategory === category.value ? 'white' : '#8b5e3c',
                  transition: 'all 0.3s ease'
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ fontSize: '1.2rem', color: '#8b5e3c' }}>No images found in this category.</p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '25px',
            marginBottom: '50px'
          }}>
            {filteredItems.map(item => (
              <div key={item._id} className="faculty-card" style={{ overflow: 'hidden', padding: '0' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    style={{ 
                      width: '100%', 
                      height: '250px', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#8b5e3c',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    textTransform: 'capitalize'
                  }}>
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    color: '#8b5e3c', 
                    marginBottom: '10px', 
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p style={{ 
                      color: '#5c4a3d', 
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      {item.description}
                    </p>
                  )}
                  <p style={{ 
                    color: '#999', 
                    fontSize: '0.8rem', 
                    marginTop: '10px',
                    fontStyle: 'italic'
                  }}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Statistics Section */}
        <div className="section-block" style={{ background: '#8b5e3c', color: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Gallery Statistics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
            <div>
              <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '5px' }}>
                {galleryItems.length}
              </h3>
              <p style={{ color: '#f9f6f2' }}>Total Images</p>
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '5px' }}>
                {galleryItems.filter(item => item.category === 'courses').length}
              </h3>
              <p style={{ color: '#f9f6f2' }}>Course Images</p>
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '5px' }}>
                {galleryItems.filter(item => item.category === 'events').length}
              </h3>
              <p style={{ color: '#f9f6f2' }}>Event Images</p>
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '5px' }}>
                {galleryItems.filter(item => item.category === 'facilities').length}
              </h3>
              <p style={{ color: '#f9f6f2' }}>Facility Images</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;