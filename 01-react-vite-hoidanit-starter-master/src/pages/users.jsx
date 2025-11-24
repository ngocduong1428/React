import UserTable from "../component/user/user-table"
import UserForm from "../component/user/user_form"
const UsersPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />
        </div>
    )

}

export default UsersPage    