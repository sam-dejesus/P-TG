import { useLocation } from 'react-router-dom';

function convertToEmbed(link) {
    const match = link.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

function ModPage() {
    const location = useLocation();
    const { title, description, videos } = location.state || {};

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className='title'>{title} Module</h1>
            <div className="d-flex flex-row flex-wrap col-12">
                <p className="mt-3 p-5 fs-4">{description}</p>
                {videos && videos.length > 0 && videos.map((video, index) => (
                    <div key={index} className=" mb-3 col-12 col-md-6 p-3">
                        <div className="ratio ratio-16x9">
                            <iframe
                            className='fs-1'
                                src={convertToEmbed(video.link)}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {video.title && <p className="mt-2 fs-3">{video.title}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ModPage;
