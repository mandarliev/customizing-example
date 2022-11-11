function Promo() {
  return (
    <div className="promo-section">
      <div>
      <h1>{props.heading}</h1>
      </div>
      <div>
        <h2>{props.promoSubHeading}</h2>
      </div>
    </div>
  );
}

export default Promo;