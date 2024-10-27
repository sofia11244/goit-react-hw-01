
import PropTypes from 'prop-types';
const Profile =({name,tag,location,image,status}) => {
    return (
  <div>
    <div>
      <img src={image}/>
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{status.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{status.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{status.likes}</span>
      </li>
    </ul>
</div>

    )
  };

  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

    status: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      
    }),
  };

  export default Profile;