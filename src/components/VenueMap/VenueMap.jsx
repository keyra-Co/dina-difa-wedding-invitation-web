import "./VenueMap.css";

export default function VenueMap() {
  return (
    <div className="venuemap-container">
      <iframe
        className="venuemap-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.9!3d-6.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b0079deec3b%3A0x997563cecf471358!2sTerrace%20Rafi%20El!5e0!3m2!1sen!2sid!4v1"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Terrace Rafi El"
      />

      <a
        href="https://www.google.com/maps?q=TERACCE+RAFI+EL,+Jl.+Raya+Kayu+Tinggi+No.13+1,+RT.1/RW.6,+Cakung+Tim.,+Kec.+Cakung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13910&ftid=0x2e698b0079deec3b:0x997563cecf471358"
        target="_blank"
        rel="noopener noreferrer"
        className="venuemap-btn"
      >
        Buka di Google Maps
      </a>
    </div>
  );
}
