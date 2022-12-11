const Artist_tile = ({ id, title, name, type, cover }) => {
  return (
    <div class="col-xl-2 transition-play">
      <div class="card h-100" id="darker">
        <img
          src={cover}
          class="card-img-top p-2 aspect-ratio-one-to-one"
          alt="..."
        />
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="card-title text-truncate">{title}</h5>
            {/* <i class="fa-solid fa-play 2-xl"></i> */}
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
export default Artist_tile;
