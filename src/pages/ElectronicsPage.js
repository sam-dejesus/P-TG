import { electronicsIndex } from '../components/indexList';
import { Link } from 'react-router-dom';
import '../style/indexPages.css'
function ElectronicsPage() {
    return (
        <div className='col-12 d-flex flex-column justify-content-center align-items-center p-2'>
            <h1 className='title'>Electrical Index</h1>
            {electronicsIndex.map((item, index) => (
                <details key={index} className='border col-12 '>
                    <summary>{item.title}</summary>
                    <p className='p-3'>{item.description}</p>
                    <h4>Links</h4>
                    <ul>
                    {item.page.map((pageItem, pageIndex) => (
                <li key={pageIndex}>
                    <Link to="/Module" state={{
                        title: pageItem.title,
                        description: pageItem.description,
                        videos: pageItem.videos
                        }}>
                            {pageItem.title}
                    </Link>
                </li>
            ))}
                    </ul>

                </details>
            ))}
        </div>
    );
}

export default ElectronicsPage;