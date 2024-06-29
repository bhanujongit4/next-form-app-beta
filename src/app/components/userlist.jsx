
const getUsers = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
 
        return res.json();
    } catch (error) {
        console.log("Error loading products: ", error);
    }
};
 
export default async function Userlist() {
    const { users } = await getUsers();
 
    return (
        <><table className="table w-full rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-600 font-medium">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Number</th>
            <th className="py-4 px-6">Stream</th>
            <th className="py-4 px-6" />
          </tr>
        </thead>
        <tbody>
          {users.slice().reverse().map((rs) => (
            <tr key={rs._id} className="hover bg-white border-b border-gray-200">
              
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                 
                  <div>
                    <div className="font-bold">{rs.name}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">{rs.phoneNumber}</td>
              <td className="py-4 px-6">{rs.stream}</td>
              <td className="py-4 px-6" />
            </tr>
          ))}
        </tbody>
      </table>
      
        </>
    );
}
