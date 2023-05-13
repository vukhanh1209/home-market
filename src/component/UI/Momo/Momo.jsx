import momo1 from '../../../assets/momo1.png'
import momo2 from '../../../assets/momo2.png'


const Momo = (props) => {
    const {width, height} = props
    return (
        <a href="https://momo.vn/">
            <img src={momo1} alt="" style={{width:  `${width}px`, height: `${height}px`}}/>
        </a>
    )
}

export default Momo;