import profileImg from "../assets/profile.jpeg";

const HomeImageCard = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="home-image-card">
        <img
          src={profileImg}
          alt="Nitya"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default HomeImageCard;
