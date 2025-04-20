import { useState } from 'react';

function LazyVidLoading({ videoId, title }) {
    const [isLoaded, setIsLoaded] = useState(false);

    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div
            className="position-relative w-100 ratio ratio-16x9"
            style={{ cursor: 'pointer', backgroundColor: '#000' }}
            onClick={() => setIsLoaded(true)}
        >
            {isLoaded ? (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-100 h-100"
                ></iframe>
            ) : (
                <>
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-100 h-100 object-fit-cover"
                    />
                    <div
                        className="position-absolute top-50 start-50 translate-middle text-white fs-1"
                        style={{  pointerEvents: 'none',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                         }}
                    >
                        ▶
                    </div>
                </>
            )}
        </div>
    );
}

export default LazyVidLoading
