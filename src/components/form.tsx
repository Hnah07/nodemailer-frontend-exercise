import { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    naam: "",
    voornaam: "",
    geboortedatum: "",
    haarkleur: "zwart",
    lengte: "",
    geslacht: "",
    opmerking: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setFormData({
      naam: "",
      voornaam: "",
      geboortedatum: "",
      haarkleur: "zwart",
      lengte: "",
      geslacht: "",
      opmerking: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Mail</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="naam">Naam:</label>
          <input
            type="text"
            id="naam"
            name="naam"
            value={formData.naam}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="voornaam">Voornaam:</label>
          <input
            type="text"
            id="voornaam"
            name="voornaam"
            value={formData.voornaam}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="geboortedatum">Geboortedatum:</label>
          <input
            type="date"
            id="geboortedatum"
            name="geboortedatum"
            value={formData.geboortedatum}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="haarkleur">Haarkleur:</label>
          <select
            id="haarkleur"
            name="haarkleur"
            value={formData.haarkleur}
            onChange={handleChange}
          >
            <option value="zwart">Zwart</option>
            <option value="bruin">Bruin</option>
            <option value="blond">Blond</option>
            <option value="rood">Rood</option>
            <option value="grijs">Grijs</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="lengte">Lengte (cm):</label>
          <input
            type="number"
            id="lengte"
            name="lengte"
            value={formData.lengte}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Geslacht:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="geslacht"
                value="man"
                checked={formData.geslacht === "man"}
                onChange={handleChange}
              />
              Man
            </label>
            <label>
              <input
                type="radio"
                name="geslacht"
                value="vrouw"
                checked={formData.geslacht === "vrouw"}
                onChange={handleChange}
              />
              Vrouw
            </label>
            <label>
              <input
                type="radio"
                name="geslacht"
                value="x"
                checked={formData.geslacht === "x"}
                onChange={handleChange}
              />
              X
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="opmerking">Opmerking:</label>
          <textarea
            id="opmerking"
            name="opmerking"
            value={formData.opmerking}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default Form;
