
import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { useState } from 'react';
const UserForm = () => {
    const [FullName, setFullName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const HandleSubmit = () => {
        console.log({ FullName, Email, Password, PhoneNumber })
    }
    return (
        <div className="user-form" style={{ margin: "20px 0 " }} >
            <div style={{ display: "flex", gap: "20px", flexDirection: "column    " }}>
                <div>
                    <span>FullName</span>
                    <Input value={FullName} onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={Email} onChange={(event) => { setEmail(event.target.value) }} />

                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={Password} onChange={(event) => { setPassword(event.target.value) }} />

                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input value={PhoneNumber} onChange={(event) => { setPhoneNumber(event.target.value) }} />

                </div>
                <div>
                    <Button type="primary" onClick={HandleSubmit}>create user</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm