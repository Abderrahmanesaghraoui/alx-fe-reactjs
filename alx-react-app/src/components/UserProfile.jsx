const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '20px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ color: 'blue', fontSize: '1.8rem', marginBottom: '10px' }}>Abderrahmane</h2>
        <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>Age:<span style={{ fontWeight: 'bold', color: 'green' }}>26</span></p>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>Bio: im a front-end student 
            free palestine
        </p>
      </div>
    );
  };
  export default UserProfile;
