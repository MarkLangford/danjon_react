import tombstoneImage from "../tombstone.png";
import fenixImage from "../fenix.png";

export default function Home() {
  return (
    <div className="Home">
      <div className="Danjon_About">
        <p>
          Danjon Reborn is a derug project of the old Fenix/Griffin Danjon. Once
          a respected project with a great community. Some of their former
          members stepped in after a 2nd rug and since then their team has been
          building a solid foundation.
        </p>
      </div>
      <div className="Tombstone">
        <img src={tombstoneImage} alt="Tombstone" />
        <div className="Tombstone_Description">
          <h3>Tombstone Collection</h3>
          <p>
            The first collection consists of 3333 unique Tombstones which
            signify the unfortunate rug of the Fenix and Griffin Danjon. This
            also marks the start of something new, something Reborn. These
            Tombstones will play a key role in the further resurrection and will
            be needed to be able to mint the next collections partly with our
            token and party with SOL.
          </p>
        </div>
      </div>
      {/*
      <div className="Fenix">
        <img src={fenixImage} alt="Fenix" />
        <div className="Fenix_Description">
          <h3>Fenix Collection</h3>
          <p>A collection of 2,222 Fenix to bring the Danjon back to life</p>
        </div>
      </div>
      */}
    </div>
  );
}
