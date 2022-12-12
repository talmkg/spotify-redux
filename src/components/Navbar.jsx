const Navbar = () => {
  return (
    <nav class="navbar sticky-top mb-3">
      <div class="d-flex align-items-center justify-content-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-left chevrons"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20    "
          fill="currentColor"
          class="bi bi-chevron-right chevrons"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      <div class="d-flex align-items-center">
        <div>
          <button
            type="button"
            class="btn btn-outline-white text-light border-radius me-2"
          >
            Upgrade
          </button>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-dark dropdown-toggle border-radius"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://i.pinimg.com/564x/08/35/96/083596835424340eda90439fd20e5ee9.jpg"
              id="nav-image"
            />
            &nbsp;&nbsp;Gh0stxt&nbsp;&nbsp;
          </button>
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a class="dropdown-item" href="./Login/login.html">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
