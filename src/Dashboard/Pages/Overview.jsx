
import useRole from '../../Hooks/useRole';
import AdminOverview from './AdminOverview';
import UserOverview from './UserOverview';



const Overview = () => {
    const { role } = useRole()

    return (
        <>
            <div>
              {role == "admin" ? <><AdminOverview></AdminOverview></> : <><UserOverview></UserOverview></>}
            </div>
        </>
    );
};

export default Overview;