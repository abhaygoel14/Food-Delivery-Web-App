const Shimmer = () => {
  return (
    <>
      <div className="resturantList">
        {Array(10)
          .fill("")
          .map((e, i) => {
            return (
              <div className="shimmer-card" key={i}>
                <div className="shimmer-image"></div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
