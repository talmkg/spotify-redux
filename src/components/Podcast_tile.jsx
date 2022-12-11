const Podcast_tile = ({ id, title, name, type, cover }) => {
  return (
    <div class="col">
      <div class="card" id="darker">
        <img src={cover} className="img-fluid rounded-start p-2" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-truncate">{title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p class="card-text">Lorem ipsum...</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Podcast_tile;
