import "./userInfo.css"

const Userinfo = () => {
    return (
        <div className='userInfo'>
            <div className='user'>
                <img src='./avatar.jpg' alt="" />
                <div className="user-text">
                    <h2>John Doe</h2>
                    <p>@john_doe</p>
                </div>
            </div>
            <div className='icons'>
                <img src='./more.png' alt="" />
                <img src='./video.png' alt="" />
                <img src='./edit.png' alt="" />
            </div>
        </div>
    )
}

export default Userinfo