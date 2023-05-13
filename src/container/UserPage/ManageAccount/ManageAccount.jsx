import InfoItem from '../InfoItem'


const info = {
    firstName: 'Khanh',
    lastName: 'Nguyen',
    birthday: '12/09/2001',
    phone: '0986354614',
    address: '45D/25 D5, Bình Thạnh, Hồ Chí Minh'
}

const ManageAccount = () => {
    return (
        <div className="flex flex-col col-span-3 px-10 py-8 bg-primary rounded-3xl ">
            <h1 className="text-lg font-semibold">Thông tin khách hàng</h1>
            <div className=""> 
                <InfoItem canEdit={true} name="Tên của bạn" value="Khanh Nguyen"/>
                <div className="border-t-2 border-primary">
                    <InfoItem canEdit={true} name="Ngày sinh" value={info.birthday}/>
                </div>
                <div className="border-t-2 border-primary">
                    <InfoItem canEdit={true} name="Địa chỉ" value={info.address}/>
                </div>
                <div className="border-t-2 border-primary">
                    <InfoItem canEdit={false} name="Số điện thoại" value={info.phone}/>
                </div>

            </div>
        </div>
    )
}

export default ManageAccount;