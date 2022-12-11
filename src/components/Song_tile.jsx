const Song_tile = ({ id, title, name, type, cover }) => {
  return (
    <div class="col">
      <div class="background-card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={cover}
              class="img-fluid rounded-start w-100 h-100 cover"
            />
          </div>
          <div class="col-md-8 d-flex align-items-center">
            <h5 className="card-title  mx-1 text-truncate">{title}</h5>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Song_tile;
