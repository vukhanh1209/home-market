import InfoItem from '../InfoItem'


const ManageAccount = () => {
    const profile = JSON.parse(localStorage.getItem('profile'));

    return (
        <div className="flex flex-col col-span-3 px-10 py-8 bg-primary rounded-3xl ">
            <h1 className="text-lg font-semibold">Thông tin khách hàng</h1>
            <div className=""> 
                <InfoItem canEdit={true} name="Tên của bạn" value={`${profile.firstName} ${profile.lastName}`}/>
                <div className="border-t-2 border-primary">
                    <InfoItem canEdit={true} name="Địa chỉ" value={profile.address}/>
                </div>
                <div className="border-t-2 border-primary">
                    <InfoItem canEdit={true} name="Số điện thoại" value={profile.phoneNumber}/>
                </div>
                <div className="border-t-2 border-primary">
                    <InfoItem canEdit={false} name="Email" value={profile.email}/>
                </div>

            </div>
        </div>
    )
}

export default ManageAccount;