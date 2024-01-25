import Pie from "./Pie";
import Table from "./Table";
import UserCard from "./UserCard";

function Dashboard() {
  return (
    <div>
      <Pie />
      <div className="flex flex-wrap justify-between">
        <Table />
        <UserCard />
      </div>
    </div>
  );
}

export default Dashboard;
