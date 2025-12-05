import React, { useState, useMemo, useRef, useEffect } from "react";
import { FixedSizeList as List } from 'react-window';
import Layout from "../layout/Layout";
import "./Academic.css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Static gallery data (images only — videos removed)
  const galleryItems = [
    { _id: '46', title: 'Event Highlight', mediaUrl: 'gallery/IMG_6266.webp', type: 'image', category: 'events' },
    { _id: '15', title: 'Celebration', mediaUrl: 'gallery/IMG_6271.webp', type: 'image', category: 'events' },
    { _id: '16', title: 'Celebration', mediaUrl: 'gallery/IMG_6272.webp', type: 'image', category: 'events' },
    { _id: '17', title: 'Celebration', mediaUrl: 'gallery/IMG_6281.webp', type: 'image', category: 'events' },
    { _id: '18', title: 'Celebration', mediaUrl: 'gallery/IMG_6287.webp', type: 'image', category: 'events' },
    { _id: '19', title: 'Event Crowd', mediaUrl: 'gallery/IMG_6299.webp', type: 'image', category: 'events' },
    { _id: '20', title: 'Event Crowd', mediaUrl: 'gallery/IMG_6317.webp', type: 'image', category: 'events' },
    { _id: '22', title: 'Celebration', mediaUrl: 'gallery/IMG_6326.webp', type: 'image', category: 'events' },
    { _id: '23', title: 'Celebration', mediaUrl: 'gallery/IMG_6335.webp', type: 'image', category: 'events' },
    { _id: '24', title: 'Celebration', mediaUrl: 'gallery/IMG_6337.webp', type: 'image', category: 'events' },
    { _id: '26', title: 'Celebration', mediaUrl: 'gallery/IMG_6348.webp', type: 'image', category: 'events' },
    { _id: '29', title: 'Celebration', mediaUrl: 'gallery/IMG_6355.webp', type: 'image', category: 'events' },
    { _id: '31', title: 'Celebration', mediaUrl: 'gallery/IMG_6361.webp', type: 'image', category: 'events' },
    { _id: '32', title: 'Celebration', mediaUrl: 'gallery/IMG_6365.webp', type: 'image', category: 'events' },
    { _id: '33', title: 'Celebration', mediaUrl: 'gallery/IMG_6370.webp', type: 'image', category: 'events' },
{
  _id: '35',
  title: 'Events Highlight',
  googleId: '1ezA8VDA97B0yf57K2lnN3dZjDIGBZiRi',
  type: 'gdrive',
  category: 'Courses'
},
{
  _id: '36',
  title: 'Events Highlight',
  googleId: '1P_wvA-6PbGoaLhguQG9lwiHlD85ApAIj',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '37',
  title: 'Events Highlight',
  googleId: '1Lmvo63yaHINF5OpwBsP5DqQXBSJ9EI67',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '38',
  title: 'Events Highlight',
  googleId: '1pNiyUscMmYI8HswQpUTgPWHHRgcZzKbF',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '39',
  title: 'Events Highlight',
  googleId: '1K3sCYrdqprQRLPBgVRqX2i7703b9CGkR',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '40',
  title: 'Events Highlight',
  googleId: '1VwlXGOv8oOB0_iFBSv7r7hFx6MvNzmEy',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '41',
  title: 'Events Highlight',
  googleId: '147EnS_bjjTIjOsmoG7dXF6EkjVZsaDFg',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '42',
  title: 'Events Highlight',
  googleId: '1eREErgcb7mYiHjrZ8_PJXpevhIxu3r7U',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '43',
  title: 'Events Highlight',
  googleId: '1Ivy0XRSyfU1J1cOVLeuyyJCiCXw7xEZR',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '44',
  title: 'Events Highlight',
  googleId: '1mhOT_1XWx3IUzc3uNeIKlQDJu6LcLpKK',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '45',
  title: 'Events Highlight',
  googleId: '1lI0I0gsf35ukZPy3vwPBPXfKkE3QvCpd',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '47',
  title: 'Events Highlight',
  googleId: '1JFK5wKiwIMgSlpRmifAa7NvA5WLJDIUZ',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '48',
  title: 'Events Highlight',
  googleId: '1yztflE6bvCB1Ol2V5extequs2qWubqFV',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '49',
  title: 'Events Highlight',
  googleId: '1v9EabGUZCJ6p1xFJj-dV6McpBrdSJ2HX',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '50',
  title: 'Events Highlight',
  googleId: '1n9cnvmQ9bJyMkbfpRXP2D-0bpoX4gtFP',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '51',
  title: 'Events Highlight',
  googleId: '1v9EabGUZCJ6p1xFJj-dV6McpBrdSJ2HX',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '52',
  title: 'Events Highlight',
  googleId: '1n9cnvmQ9bJyMkbfpRXP2D-0bpoX4gtFP',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '53',
  title: 'Events Highlight',
  googleId: '1OBymwJ6RTDWsqtqNnXkjQXbBoWgdSp6E',
  type: 'gdrive',
  category: 'Events'
},

{
  _id: '54',
  title: 'Events Highlight',
  googleId: '1Lmvo63yaHINF5OpwBsP5DqQXBSJ9EI67',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '55',
  title: 'Events Highlight',
  googleId: '1MT-_C6znrsCxJ64Aw0Qw_t4p3HDMb8t5',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '56',
  title: 'Events Highlight',
  googleId: '1tZGIqMClb12bcJL8xyyCLUNQkwe5zpKf',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '57',
  title: 'Events Highlight',
  googleId: '1jxUH6UpWILCnKD0QiX0eLUpMV5T8F1lW',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '58',
  title: 'Events Highlight',
  googleId: '1_DLFnrZcNKKpt-Pha7oUU-8DcTQU1mXe',
  type: 'gdrive',
  category: 'Events'
},
{
  _id: '59',
  title: 'Events Highlight',
  googleId: '161S6bHVSCNTRZPZF_DxzpGtNhz8Sd96m',
  type: 'gdrive',
  category: 'Events'
},

];

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'courses', label: 'Courses' },
    { value: 'events', label: 'Events' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'general', label: 'General' }
  ];

  // We'll use virtualization to render only visible rows. Keep sentinel/pagination as fallback in case virtualization is disabled.
  const useVirtualization = true;

  // Memoized filtering to avoid recalculation on scroll
  const filteredItems = useMemo(() => {
    return galleryItems.filter(item =>
      selectedCategory === 'all' || item.category === selectedCategory
    );
  }, [selectedCategory]);

  // When not virtualizing we use a displayed slice. When virtualizing we render via react-window.
  const displayedItems = filteredItems; // full list (react-window will control rendering)

  // (legacy) sentinel observer left in place for non-virtualized mode. Virtualized mode doesn't need it.

  // GalleryItem component: mounts media only when in viewport
  const GalleryItem = React.memo(function GalleryItem({ item }) {
  const mediaSourceBase = item.mediaUrl;
  const resolvedSrc = mediaSourceBase && mediaSourceBase.startsWith('gallery/') ? '/' + mediaSourceBase : mediaSourceBase;
  const gdrivePreviewUrl = item.type === 'gdrive' && item.googleId
    ? `https://drive.google.com/file/d/${item.googleId}/preview`
    : null;
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  const handleActivateVideo = () => {
    setMounted(true);
    // start playback shortly after mounting — user's click should allow play()
    setTimeout(() => {
      if (videoRef.current && typeof videoRef.current.play === 'function') {
        videoRef.current.play().catch(() => {
          /* play may be blocked on some platforms; ignore */
        });
      }
    }, 50);
  };
    return (
  <div className="faculty-card" style={{ overflow: 'hidden', padding: '0', position: 'relative', background: '#fff' }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          
          
            {item.type === 'video' || item.type === 'gdrive' ? (
              // Render a lightweight placeholder with a play button. Only mount the real player after click.
              mounted ? (
                item.type === 'gdrive' ? (
                  gdrivePreviewUrl ? (
                    <iframe
                      src={gdrivePreviewUrl}
                      title={item.title || 'Video'}
                      style={{ width: '100%', height: '250px', border: 0, background: '#000' }}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'250px',background:'#ddd',color:'#555',fontSize:'14px'}}>Video Not Found</div>
                  )
                ) : (
                  <video
                    ref={videoRef}
                    src={resolvedSrc}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', background: '#000' }}
                    preload="metadata"
                    playsInline
                    controls
                    onError={(e) => {
                      e.target.outerHTML =
                        '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:250px;background:#ddd;color:#555;font-size:14px;">Video Not Found</div>';
                    }}
                  />
                )
              ) : (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleActivateVideo}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleActivateVideo(); } }}
                  style={{
                    width: '100%',
                    height: '250px',
                    background: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: '36px', lineHeight: '1', marginBottom: '6px' }}>▶</div>
                    <div style={{ fontSize: '14px', opacity: 0.9 }}>Play</div>
                  </div>
                </div>
              )
            ) : (
              <img
                className="gallery-image"
                src={resolvedSrc}
                alt={item.title}
                style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center 40%' }}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4K                    ICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+';
                }}
              />
            )
          }
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
          <h3 style={{ color: '#8b5e3c', marginBottom: '10px', fontSize: '1.2rem', fontWeight: '600' }}>
            {item.title}
          </h3>
          {item.description && (
            <p style={{ color: '#5c4a3d', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {item.description}
            </p>
          )}
          {/* createdAt removed per request */}
        </div>
      </div>
    );
  });

  /*
    AutoVirtualizedGrid
    - Responsive grid virtualization using react-window FixedSizeList.
    - Computes columns based on container width and a target column width.
    - Renders only visible rows; each row contains N columns.
  */
  function AutoVirtualizedGrid({ items, ItemComponent }) {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(1200);
    // Move sizing constants up so the resize-measure function can use them
    const columnMin = 380; // increase min column width to reduce number of columns (fewer items per row)
    const gap = 25;
    const rowHeight = 360; // slightly reduced estimated height for faster virtualization

    // compute columns/rows from current width
    const columns = Math.max(1, Math.floor((width + gap) / (columnMin + gap)));
    const rowCount = Math.ceil(items.length / columns);

    // height is stored in state so we can update it from the resize listener
    const initialHeight = Math.max(rowHeight, Math.min(window.innerHeight * 0.75, rowCount * rowHeight));
    const [height, setHeight] = useState(initialHeight);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      const measure = () => {
        const w = el.clientWidth || 800;
        const cols = Math.max(1, Math.floor((w + gap) / (columnMin + gap)));
        const rCount = Math.ceil(items.length / cols);
        const h = Math.max(rowHeight, Math.min(window.innerHeight * 0.75, rCount * rowHeight));
        setWidth(w);
        setHeight(h);
      };
      measure();
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }, [items.length]);
    // Row renderer - each row contains `columns` items
    const Row = ({ index, style }) => {
      const start = index * columns;
      const slice = items.slice(start, start + columns);
      return (
        <div style={{ ...style, display: 'flex', gap: `${gap}px`, padding: '10px 10px', boxSizing: 'border-box' }}>
          {slice.map((it) => (
            <div key={it._id} style={{ flex: 1 }}>
              <ItemComponent item={it} />
            </div>
          ))}
          {/* Fill empty columns to keep consistent spacing */}
          {slice.length < columns && Array.from({ length: columns - slice.length }).map((_, i) => (
            <div key={'empty-' + i} style={{ flex: 1 }} />
          ))}
        </div>
      );
    };

    return (
      <div ref={containerRef} style={{ width: '100%' }}>
        <List
          height={height}
          itemCount={rowCount}
          itemSize={rowHeight}
          width={width}
          overscanCount={2}
        >
          {Row}
        </List>
      </div>
    );
  }

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
          // Virtualized responsive grid: compute columns based on container width and render rows via react-window
          <div style={{ width: '100%', marginBottom: '50px' }}>
            {useVirtualization ? (
              <AutoVirtualizedGrid items={displayedItems} ItemComponent={GalleryItem} />
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '25px'
              }}>
                {displayedItems.map(item => (
                  <GalleryItem key={item._id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
  {/* Removed legacy sentinel: virtualization handles rendering */}

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