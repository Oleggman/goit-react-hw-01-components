export const Description = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="description">
      <img src={avatar} alt={username} className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}