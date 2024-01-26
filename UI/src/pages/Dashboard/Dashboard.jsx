import Graph from "./Graph";
import Pie from "./Pie";
import Table from "./Table";
import UserCard from "./UserCard";

function Dashboard() {
  return (
    <div>
      <div className="flex flex-wrap  md:flex-row justify-between">
        <Graph />
        <Pie />
      </div>
      <div className="mx-auto flex flex-col items-center md:flex-row justify-between mt-8">
        <Table />
        <div className="flex justify-center w-full sm:w-fit">
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
