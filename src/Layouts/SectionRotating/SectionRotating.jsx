import './SectionRotatingStyle.css'
import LogoBank from '../../Assets/Images/Card01.jpg'
import Gif from '../../Assets/Images/gifTeste.gif'


const SectionRotating = () => {
    return (
        <div className="SectionRotating bg-secondary no-select">


            {/* Object in the center: */}
            <div className="box">
                {/* itens: */}
                <span style={{ "--i": 1 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={LogoBank} alt="" /></span>
                <span style={{ "--i": 2 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={Gif} alt="" /></span>
                <span style={{ "--i": 3 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={LogoBank} alt="" /></span>
                <span style={{ "--i": 4 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={Gif} alt="" /></span>
                <span style={{ "--i": 5 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={LogoBank} alt="" /></span>
                <span style={{ "--i": 6 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={Gif} alt="" /></span>
                <span style={{ "--i": 7 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={LogoBank} alt="" /></span>
                <span style={{ "--i": 8 }} className='no-select bd-primary-bold bd-rd-2'><img className='bd-rd-2' src={Gif} alt="" /></span>
            </div>

        </div>
    )
}

export default SectionRotating