import Graph from "./Graph";
import Pie from "./Pie";
import Table from "./Table";
import UserCard from "./UserCard";

function Dashboard() {
  return (
    <div>
      <div className="flex flex-wrap flex-col md:flex-row">
        <Graph />
        <Pie />
      </div>
      <div className="flex flex-wrap justify-between">
        <Table />
        <UserCard />
      </div>
    </div>
  );
}

export default Dashboard;
