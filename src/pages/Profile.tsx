import {Input} from "../components/elements/Input/Input"

const Profile = () => {
  return (
    <section className='profile-content'>
        <div className='profile-flex-container'>
            <Input
            label='FIRST NAME'
            placeholder='Julliet'
            />
            <Input
            label='LAST NAME'
            placeholder='Johnson'
            />
        </div>
        <div className='profile-flex-container'>
            <Input
            label='Email'
            placeholder='Jullietjohnson@crado.com'
            />
            <Input
            label='Password'
            placeholder='........'
            />
        </div>
        <div className='profile-flex-container'>
            <Input
            label='Country | Phone Number'
            placeholder='080123456789'
            />
            <Input
            label='Address'
            placeholder='Dublin '
            />
        </div>
        <div className='profile-flex-container'>
            <Input
            label='Brand name'
            placeholder='e.g annycakes, tundesalon'
            />
            <Input
            label='Industry'
            placeholder='Select industry'
            />
        </div>
        <div className='profile-flex-container'>
            <Input
            label='Post Code'
            placeholder='D04 X2Z'
            />
        </div>
    </section>
  )
}

export default Profile