import tombstoneImage from "../tombstone.png";
import fenixImage from "../fenix.png";

export default function Home() {
  return (
    <div className="Home">
      <div className="Danjon_Header">
        <h1>Danjon Reborn</h1>
      </div>
      <div className="Tombstone">
        <img src={tombstoneImage} alt="Tombstone Image"/>
        <div className="Tombstone_Description">
          <h3>Tombstone Collection</h3>
          <p>
            A collection of 4,444 Tombstones to reinact the rise of the Danjon
          </p>
        </div>
      </div>
      <div className="Fenix">
        <img src={fenixImage} alt="Fenix Image" />
        <div className="Fenix_Description">
          <h3>Fenix Collection</h3>
          <p>A collection of 2,222 Fenix to bring the Danjon back to life</p>
        </div>
      </div>
      <div className="Danjon_About">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla
          pharetra diam sit amet nisl. Ultricies leo integer malesuada nunc vel
          risus commodo viverra maecenas. Turpis egestas integer eget aliquet
          nibh praesent. Nibh tellus molestie nunc non blandit massa enim nec
          dui. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Id
          cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Leo
          vel fringilla est ullamcorper. Etiam dignissim diam quis enim lobortis
          scelerisque fermentum dui. Id volutpat lacus laoreet non curabitur
          gravida. Sed adipiscing diam donec adipiscing tristique risus. Nulla
          aliquet enim tortor at auctor urna nunc. Vitae suscipit tellus mauris
          a diam maecenas sed.
        </p>
      </div>
    </div>
  );
}
