import { useEffect, useState } from 'react';
import { getUserDetails } from '../services/githubService';

const UserList = ({ users, onLoadMore, hasMore }) => {
  const [userDetails, setUserDetails] = useState({});
  const [loadingDetails, setLoadingDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const newDetails = {};
      const newLoading = {};
      
      for (const user of users) {
        if (!userDetails[user.login]) {
          newLoading[user.login] = true;
          try {
            const details = await getUserDetails(user.login);
            newDetails[user.login] = details;
          } catch (error) {
            newDetails[user.login] = { error: true };
          }
          newLoading[user.login] = false;
        }
      }
      
      setUserDetails(prev => ({ ...prev, ...newDetails }));
      setLoadingDetails(prev => ({ ...prev, ...newLoading }));
    };

    fetchDetails();
  }, [users]);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  <a 
                    href={user.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {user.login}
                  </a>
                </h3>
                {loadingDetails[user.login] ? (
                  <p className="text-gray-500">Loading details...</p>
                ) : userDetails[user.login]?.error ? (
                  <p className="text-red-500">Error loading details</p>
                ) : (
                  <>
                    {userDetails[user.login]?.name && (
                      <p className="text-gray-700">{userDetails[user.login].name}</p>
                    )}
                    {userDetails[user.login]?.location && (
                      <p className="text-gray-600">
                        📍 {userDetails[user.login].location}
                      </p>
                    )}
                    <p className="text-gray-600">
                      🗃️ {userDetails[user.login]?.public_repos || 0} public repos
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={onLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;