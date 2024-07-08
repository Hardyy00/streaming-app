import { Payment, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default async function CommunityPage() {
  const data = await getData();
  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Community Settings</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
