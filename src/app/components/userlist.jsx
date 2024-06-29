
const getUsers = async () => {
  try {
    const res = await fetch('https://next-form-app-beta-96va-pcfxvq8bo-bhanujongit4s-projects.vercel.app/api/users', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data.users || [];
  } catch (error) {
    console.error('Error loading users:', error);
    throw error; // Rethrow the error to handle it further up the call stack
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
