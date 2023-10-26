import "./Header.css";

export default function Header(props) {
  const { startDate, endDate } = props;
  return (
    <header className="header">
      <h1>NASA IMAGE GALLERY</h1>
      <div className="dateContainer">
        <p>Fotoğraf galerisi oluşturmak için tarih aralığı seç: </p>
        <input id="input" type="date" onChange={startDate} />
        <input id="input" type="date" onChange={endDate} />
      </div>
    </header>
  );
}
