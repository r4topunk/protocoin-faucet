function ToggleTheme() {
  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button
        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
          <use href="#circle-half"></use>
        </svg>
        <span className="visually-hidden" id="bd-theme-text">
          Toggle theme
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="light"
            aria-pressed="false"
          >
            <svg className="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
          >
            <svg className="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center active"
            data-bs-theme-value="auto"
            aria-pressed="true"
          >
            <svg className="bi me-2 opacity-50" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            Auto
            <svg className="bi ms-auto d-none" width="1em" height="1em">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ToggleTheme
