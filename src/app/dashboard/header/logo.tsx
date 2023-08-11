import Image from 'next/image'
import logo from '../../assets/images/prontera_logo.png'

const Logo = () => {
   
    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <Image src = {logo}
            width = {150}
            height = {100}
            alt = 'prontera_logo'
            />
        </div>
    )
}

export default Logo