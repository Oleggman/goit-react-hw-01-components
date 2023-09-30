import { Description } from "components/Description/Description";
import { Stats } from "components/Stats/Stats";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Description username={username} tag={tag} location={location} avatar={avatar} />
      <Stats stats={stats} />
    </div>
  );
}