const UserCard = ({ user }) => {
    return (
      <div className="user-card">
        <img 
          src={user.avatar_url}  // Displays avatar
          alt={user.login}       // Uses login as alt text
        />
        <h2>{user.login}</h2>    // Shows username
        <a href={user.html_url}>View Profile</a>
      </div>
    );
  };
  
  export default UserCard;