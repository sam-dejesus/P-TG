import { electronicsIndex } from '../components/indexList';
function ElectronicsPage() {
    return (
        <div>
           
            <div className='col-12 d-flex flex-column justify-content-center align-items-center p-2'>
            <h1 className='title'>Electronics Index</h1>
            {electronicsIndex.map((item, index) => (
                <details key={index} className='border col-12 '>
                    <summary>{item.title}</summary>
                    <p className='p-3'>{item.description}</p>

                </details>
            ))}
        </div>
        </div>
    );
}

export default ElectronicsPage;