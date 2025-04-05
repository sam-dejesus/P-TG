import { mechanicalIndex } from '../components/indexList';
import '../style/indexPages.css'

function MechanicalPage() {
    
    return (
        <div className='col-12 d-flex flex-column justify-content-center align-items-center p-2'>
            <h1>Mechanical Index</h1>
            {mechanicalIndex.map((item, index) => (
                <details key={index} className='border col-12 '>
                    <summary>{item.title}</summary>
                    <p className='p-3'>{item.description}</p>

                </details>
            ))}
        </div>
    );
}

export default MechanicalPage;