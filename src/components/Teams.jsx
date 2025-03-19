import argen from '../assets/argen.png'
import nob from '../assets/nob.png'
import barca from '../assets/barca.png'
import psg from '../assets/psg.png'
import miami from '../assets/miami.png'

const Teams = () => {
    return (
        <div className='pb-20'>
            <h2 className='text-4xl my-10 text-center'>Teams Played For</h2>
            <div className='flex justify-center items-center gap-8'>
                <div>
                    <img src={argen} alt="" width={50} height={50}/>
                </div>
                <div>
                    <img src={nob} alt="" width={50} height={50}/>
                </div>
                <div>
                    <img src={barca} alt="" width={50} height={50}/>
                </div>
                <div>
                    <img src={psg} alt="" width={50} height={50}/>
                </div>
                <div>
                    <img src={miami} alt="" width={50} height={50}/>
                </div>
            </div>
        </div>
    )
}

export default Teams
